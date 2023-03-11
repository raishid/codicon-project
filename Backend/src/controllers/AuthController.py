from flask import (
    Blueprint, request, url_for, redirect, render_template, session,
    current_app)
from flask_login import login_required, logout_user, login_user, current_user
from flask_principal import Identity, AnonymousIdentity, identity_changed
from werkzeug.security import generate_password_hash, check_password_hash
from src.config.Database import db
from src.config.Auth import shelter_permission
from src.models.Auth import Usuario

url_prefix = '/'
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['GET', 'POST'])
def user_signup():
    if request.method == 'GET':
        return render_template('signup.html')
    else:
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

        return redirect(url_for('auth.user_profile'))

@auth_bp.route('/login', methods=['GET', 'POST'])
def user_login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
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
        return redirect(url_for('auth.user_profile'))

@auth_bp.route('/logout')
@login_required
def user_logout():
    logout_user()

    for key in ('identity.name', 'identity.auth_type'):
        session.pop(key, None)

    identity_changed.send(
        current_app._get_current_object(), identity=AnonymousIdentity()
    )

    return 'You are now logged out'

@auth_bp.route('/profile', methods=['GET'])
@login_required
def user_profile():
    return render_template('profile.html', usuario=current_user)

@auth_bp.route('/mascots', methods=['GET'])
@login_required
@shelter_permission.require(http_exception=403)
def mascot_list():
    return f'Has accedido a la lista de mascotas como: {current_user.nombre}'
