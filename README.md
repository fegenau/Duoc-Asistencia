# Sistema de Registro de Asistencia Duoc UC

![Ionic Logo](https://ionicframework.com/img/framework/logo-ionic-angular.svg)
![Angular Logo](https://angular.io/assets/images/logos/angular/angular.svg)
![PostgreSQL Logo](https://www.postgresql.org/media/img/about/press/elephant.png)
![Flask Logo](https://flask.palletsprojects.com/en/2.1.x/_images/flask-logo.png)

## Descripción

Esta aplicación desarrollada con Ionic y Angular tiene como objetivo gestionar el registro de asistencia de los alumnos de Duoc UC. La aplicación se conecta a una base de datos PostgreSQL para almacenar y recuperar la información necesaria y utiliza una API REST construida con Flask para la comunicación entre el frontend y el backend.

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos antes de ejecutar la aplicación:

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/intro/cli)
- [Angular CLI](https://angular.io/cli)
- [PostgreSQL](https://www.postgresql.org/)
- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/en/2.1.x/installation/)

## Configuración

1. Clona este repositorio:

```bash
git clone https://github.com/fegenau/Duoc-Asistencia.git
cd Duoc-asistencia

2-.Instala las dependencias del frontend:
bash
Copy code
cd frontend
npm install

3-.Configura la base de datos PostgreSQL:

4-. Crea una base de datos llamada duocuc_asistencia.
5-. Configura las credenciales de acceso en el archivo backend/config.py.
6-. Instala las dependencias del backend:

bash
Copy code
cd ../backend
pip install -r requirements.txt
Ejecución
Inicia el backend (API Flask):
bash
Copy code
cd backend
python app.py
En una nueva ventana de terminal, inicia el frontend (Ionic):
bash
Copy code
cd frontend
ionic serve
Visita http://localhost:8100 en tu navegador para ver la aplicación en acción.

Contribuciones
¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias, por favor crea un issue o envía un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

javascript
Copy code

Asegúrate de reemplazar `tuusuario` y `turepositorio` con tus datos reales. Además, ajusta la información según la estructura y tecnologías reales de tu proyecto. ¡Espero que esto te sea útil!






