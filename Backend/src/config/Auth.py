from flask_login import current_user
from flask_principal import identity_loaded, RoleNeed, UserNeed, Permission
from src import app

shelter_permission = Permission(RoleNeed('2'))

@identity_loaded.connect_via(app)
def on_identity_loaded(sender, identity):
    identity.user = current_user

    if hasattr(current_user, 'id'):
        identity.provides.add(UserNeed(current_user.id))

    if hasattr(current_user, 'rol'):
        identity.provides.add(RoleNeed(str(current_user.rol)))
