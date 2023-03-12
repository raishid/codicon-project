from flask import (
    Blueprint, request, url_for, redirect, render_template, session,
    current_app, jsonify)
from flask_login import login_required, logout_user, login_user, current_user
from flask_principal import Identity, AnonymousIdentity, identity_changed
from werkzeug.security import generate_password_hash, check_password_hash
from src.config.Database import db
from src.config.Auth import shelter_permission
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
    correo = request.form.get('correo')
    contrasena = request.form.get('contrasena')

    usuario = Usuario.query.filter_by(correo=correo).first()

    if not usuario:
        return f'El correo {correo} no está asociado a ninguna cuenta'
    elif not check_password_hash(usuario.contrasena, contrasena):
        return 'La contraseña introducida no es correcta'

    login_user(usuario)

    identity_changed.send(
        current_app._get_current_object(),
        identity=Identity(usuario.id)
    )
    return jsonify({'status': 200})

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
