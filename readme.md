## EJECUTAR SIN DOCKER
- Se debe dar `npm install` antes de iniciar
- La aplicación se inicia con `npm run dev`
- El puerto establecido por defecto es el `PORT: 3001`

## EJECUTAR CON DOCKER
- Posicionarse dentro del directorio RetoTecnicoQDSNODE y ejecutar ` docker build . -t retotecnico`
- Luego, ejecutar el comando `docker run -p 3001:3001 retotecnico`


En ambos casos la url completa del servicio es POST`http://localhost:3001/api/`