from flask import Blueprint, request, url_for, redirect, render_template
from flask_login import login_required, logout_user, login_user
from werkzeug.security import generate_password_hash, check_password_hash
from src.config.Database import db
from src.models.Auth import Usuario

url_prefix = '/'
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['GET', 'POST'])
def user_signup():
    if request.method == 'GET':
        return 'implement'
    else:
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')
        correo = request.form.get('correo')
        contrasena = request.form.get('contrasena')
        telefono = request.form.get('telefono')
        direccion = request.form.get('direccion')

        usuario = Usuario.query.filter_by(correo=correo).first()

        if usuario:
            return 'You are already registered'

        nuevo_usuario = Usuario(
            nombre=nombre, apellido=apellido, correo=correo,
            contrasena=generate_password_hash(contrasena, method='sha256'),
            telefono=telefono, direccion=direccion
        )

        db.session.add(nuevo_usuario)
        db.session.commit()

        return redirect(url_for('mascotas.index'))

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
        return 'You are now logged in'

@auth_bp.route('/logout', methods=['POST'])
@login_required
def user_logout():
    logout_user()
    return 'You are now logged out'

@auth_bp.route('/profile', methods=['GET'])
@login_required
def user_profile():
    return render_template('profile.html')
