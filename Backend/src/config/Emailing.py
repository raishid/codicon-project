from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from string import Template
from smtplib import SMTP
from src.config.Env import env

template = Template('''<h1>Estimado ${nombre}</h1>

<p>Muchas gracias por presentar una solicitud para adoptar a ${nombrePerrito}. Estamos muy emocionados de saber que hay alguien interesado en ofrecerle a nuestro amigo peludo un hogar amoroso y permanente.</p>

<p>Queríamos tomar un momento para expresar nuestra gratitud por su solicitud y para hacerle saber que estamos revisando cuidadosamente su solicitud y revisando sus antecedentes para asegurarnos de que podamos encontrar el hogar perfecto para nuestro perrito. Nos tomamos muy en serio la responsabilidad de encontrar el hogar adecuado para cada uno de nuestros animales, y estamos comprometidos a hacer todo lo posible para asegurarnos de que nuestro perrito reciba el amor y el cuidado que merece.</p>

<p>Es evidente que usted es una persona amante de los animales y que tiene mucho amor y afecto para dar. Queremos asegurarnos de que este perro sea feliz y esté seguro en su hogar, y nos esforzaremos al máximo para asegurarnos de que esto suceda.</p>

<p>Gracias de nuevo por su solicitud y por su interés en adoptar a nuestro perrito. Esperamos poder comunicarnos con usted muy pronto para discutir los próximos pasos en el proceso de adopción.</p>

<p>Atentamente, el equipo de onbox.</p>
''')

def send_hero_email(email: str, message: str) -> None:
    correo_onbox = env('CORREO_ONBOX')
    smtp = SMTP('smtp.gmail.com', 587)

    smtp.ehlo()
    smtp.starttls()

    mensaje = MIMEMultipart('alternative')
    mensaje['Subject'] = 'Eres un héroe'
    mensaje['From'] = correo_onbox
    mensaje['To'] = email

    html_message = MIMEText(message, 'html')
    mensaje.attach(html_message)

    smtp.login(correo_onbox, env('CONTRASENA_ONBOX'))
    smtp.sendmail(correo_onbox, email, mensaje.as_string())

    smtp.quit()
