# Google Translate Clon

Este es un proyecto de clonación de **Google Translate** basado en el curso de **React** de **@midudev**. El objetivo principal fue aprender a usar **TypeScript**, **React** y la **API de OpenAI** para crear una aplicación de traducción funcional con varias características.

## Características

- Traducción en **9 idiomas** distintos:  
  - Español (es)
  - Inglés (en)
  - Francés (fr)
  - Alemán (de)
  - Italiano (it)
  - Portugués (pt)
  - Ruso (ru)
  - Japonés (ja)
  - Chino (zh)

- **Lectura por voz** de las traducciones.
- **Copiar las traducciones** con un solo clic.
- (Futuro) Añadir **traducción por voz del usuario**.

## Tecnologías Usadas

- **React**: Framework principal para la construcción de la interfaz de usuario.
- **TypeScript**: Para asegurar la seguridad de tipos y mejorar la calidad del código.
- **Vite**: Herramienta de construcción rápida para el proyecto.
- **React-Bootstrap**: Librería de componentes UI basada en Bootstrap para facilitar el desarrollo de la interfaz.
- **Axios**: Cliente HTTP para manejar las solicitudes a la API de traducción.
- **OpenAI API**: Utilizado para realizar las traducciones (o la API de traducción que definas en el archivo `.env`).
- **Biome**: Linter configurado para mantener el código limpio y consistente.
- **Vitest** (futuro): Planes para agregar testing en el futuro.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/google-translate-clon.git
   cd google-translate-clon

2. Instala las dependencias

  ```bash
  npm install

3. Crea un archivo .env en la raíz del proyecto con la siguiente variable de entorno:

  ```bash
  VITE_TRANSLATE_API_URL=<url_de_tu_api_de_traduccion>

4. Ejecuta el proyecto en modo desarrollo:

  ```bash
  npm run dev

## Futuro

- Mejoras de funcionalidad: Integrar traducción por voz del usuario y mejorar la accesibilidad.
- Testing: Añadir pruebas con Vitest.
- Demo: Se agregará una demo más adelante

## Desafíos y Aprendizaje

- Este es mi primer proyecto usando TypeScript. Durante el proceso, aprendí a trabajar con tipos, interfaces y la integración de la API de OpenAI.
- Profundicé en el uso de reducers y custom hooks para manejar el estado de manera eficiente.
- La gestión de los tipos en TypeScript fue un desafío que me permitió afianzar mis conocimientos sobre este lenguaje.

## Observaciones

- Este proyecto es principalmente un ejercicio personal para aprender nuevas tecnologías y mejorar mis habilidades.
- Está basado en la clase de crear un Google Translate Clon del curso de React de **@midudev**
  
## Licencia

Este proyecto está bajo la **MIT License**. Puedes ver los detalles completos de la licencia en el archivo [LICENSE](./LICENSE).

La MIT License permite la reutilización del código de forma gratuita, siempre que se incluya una copia del aviso de la licencia y la renuncia de responsabilidad en cualquier distribución del código. Para más información sobre esta licencia, consulta el archivo LICENSE.
