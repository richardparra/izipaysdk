# Aceptar un pago

Cree un formulario de pago simple para recopilar detalles de pago. 
Se incluyen algunos datos básicos para inicializar una transacción.

## Ejecutando el ejemplo

1. Build the application

~~~
npm install
~~~

2. Run the application

~~~
npm run server
open index.html with live-server
~~~

3. Go to [http://127.0.0.1:5500/public/index.html](http://127.0.0.1:5500/public/index.html)

#### En caso de error en el archivo server.js verificar que los puertos configurados sean los mismos que proporciona el live-server

## Pasos en el archivo "/src/pay.js":
1. Generación de Token de Sesión(GetTokenSession)
2. Llamar a LoadForm del SDK de izipay checkout