from flask import (
    Blueprint, request, url_for, redirect, session,
    current_app, jsonify, abort)
from flask_login import login_required, logout_user, login_user, current_user
from flask_principal import Identity, AnonymousIdentity, identity_changed
from werkzeug.security import generate_password_hash, check_password_hash
from src.config.Database import db
from src.models.Auth import Usuario

url_prefix = '/v1'
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def user_signup():
    nombre = request.form.get('nombre')
    apellido = request.form.get('apellido')
    correo = request.form.get('correo')
    contrasena = request.form.get('contrasena')
    telefono = request.form.get('telefono')
    direccion = request.form.get('direccion')
    rol = request.form.get('rol')

    usuario = Usuario.query.filter_by(correo=correo).first()

    if usuario:
        return redirect(url_for('auth.user_login'))

    nuevo_usuario = Usuario(
        nombre=nombre, apellido=apellido, correo=correo,
        contrasena=generate_password_hash(contrasena, method='sha256'),
        telefono=telefono, direccion=direccion, rol=rol
    )

    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify(nuevo_usuario.serialize())

@auth_bp.route('/login', methods=['POST'])
def user_login():
    data = request.get_json()
    correo = data['correo']
    contrasena = data['contraseña']

    usuario = Usuario.query.filter_by(correo=correo).first()

    if not usuario:
        return abort(400, {'status': 404, 'message': 'El usuario no existe'}) 
    elif not check_password_hash(usuario.contrasena, contrasena):
        return abort(401, {'status': 401, 'message': 'Contraseña incorrecta'})

    login_user(usuario)

    identity_changed.send(
        current_app._get_current_object(),
        identity=Identity(usuario.id),
    )
    response = jsonify({'status': 200})
    return response


@auth_bp.route('/logout', methods=['GET'])
@login_required
def user_logout():
    logout_user()

    for key in ('identity.name', 'identity.auth_type'):
        session.pop(key, None)

    identity_changed.send(
        current_app._get_current_object(), identity=AnonymousIdentity()
    )

    return jsonify({'status': 200})

@auth_bp.route('/profile', methods=['GET'])
@login_required
def user_profile():
    usuario = Usuario.query.get(current_user.id)

    return jsonify(usuario.serialize())
