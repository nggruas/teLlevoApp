# TeLlevoAPP

## Descripción
**TeLlevoAPP** es una aplicación móvil diseñada para ofrecer una solución de transporte colaborativo entre estudiantes. Los conductores pueden programar sus viajes y los pasajeros verificar disponibilidad, asegurando un transporte eficiente y seguro.

---

## Requisitos Previos
Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:
- Tener instalado **Node.js** (v14.0 o superior) [Descargar aquí](https://nodejs.org/).
- Instalar el CLI de Ionic y Angular de manera global:
  ```bash
  npm install -g @ionic/cli @angular/cli

* Contar con Git para clonar el repositorio Descargar aquí.


Instalación
Sigue los pasos a continuación para instalar y ejecutar la aplicación localmente:

1. Clonar el repositorio:
git clone https://github.com/nggruas/teLlevoAPP.git

2. Entrar en el directorio del proyecto:
cd teLlevoAPP

3. Instalar las dependencias necesarias:
npm install


Ejecución
Para ejecutar y probar la aplicación en tu entorno local:

1.Iniciar el servidor en modo desarrollo:
ionic serve

2. Compilar para Android: Si deseas probar la aplicación en Android, asegúrate de tener configurado Android Studio. Luego ejecuta:
ionic capacitor build android


3. Compilar para iOS (opcional): Si trabajas en macOS, asegúrate de tener configurado Xcode. Luego ejecuta:
ionic capacitor build ios

----------------------------
Funcionalidades Principales
La aplicación incluye las siguientes funcionalidades:

1.Registro de usuarios:
Los usuarios pueden registrarse como conductores o pasajeros.

2.Programación de viajes:
Los conductores pueden programar rutas, definir la capacidad de sus vehículos y establecer costos por pasajero.

3.Verificación de transporte:
Los pasajeros pueden verificar la disponibilidad de vehículos y unirse a viajes programados.

4.Control de capacidad:
La aplicación controla automáticamente la capacidad máxima del vehículo.

5.Cancelación de viajes:
Conductores y pasajeros pueden cancelar viajes con al menos 30 minutos de anticipación.

--------------------------------------
Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
* src/app/auth: Manejo de autenticación de usuarios.
* src/app/componentes: Componentes reutilizables para la interfaz de usuario.
* src/app/servicios: Servicios para la lógica de negocio y manejo de datos.
* src/app/models: Definición de modelos de datos.
* src/app/tabs: Organización de las pestañas de navegación de la aplicación.

-------------------------
Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tus cambios:
git checkout -b feature-nueva-funcionalidad

3. Realiza un pull request con una descripción clara de tus modificaciones.


Contacto
Para dudas o consultas, contacta al equipo en ne.garate@duocuc.cl


### **Pasos a seguir**:
1. Crea un archivo llamado `README.md` en la raíz del proyecto.
2. Copia y pega este contenido.
3. Guarda el archivo.

Este archivo está listo para que lo subas a tu repositorio. Si necesitas alguna modificación adicional, ¡avísame! 😊

