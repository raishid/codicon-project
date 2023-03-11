"""migrateApp

Revision ID: e982c668d3f8
Revises: 
Create Date: 2023-03-11 16:03:33.916984

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e982c668d3f8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('refugios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=50), nullable=True),
    sa.Column('direccion', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('telefono', sa.String(length=50), nullable=True),
    sa.Column('foto', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    mysql_engine='InnoDB'
    )
    op.create_table('mascotas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('raza', sa.String(length=50), nullable=True),
    sa.Column('nombre', sa.String(length=50), nullable=True),
    sa.Column('edad', sa.Float(), nullable=True),
    sa.Column('sexo', sa.String(length=50), nullable=True),
    sa.Column('color', sa.String(length=50), nullable=True),
    sa.Column('alto', sa.Float(), nullable=True),
    sa.Column('ancho', sa.Float(), nullable=True),
    sa.Column('peso', sa.Float(), nullable=True),
    sa.Column('descripcion', sa.Text(), nullable=True),
    sa.Column('foto', sa.String(length=255), nullable=True),
    sa.Column('estado', sa.Integer(), nullable=True),
    sa.Column('refugio_id', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['refugio_id'], ['refugios.id'], ),
    sa.PrimaryKeyConstraint('id'),
    mysql_engine='InnoDB'
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mascotas')
    op.drop_table('refugios')
    # ### end Alembic commands ###