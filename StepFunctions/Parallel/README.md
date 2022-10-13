# Parallel

Descripción
===========
El ejercicio ejemplificador de una step function con proceso en paralelo con llamada a lambdas y escenario de dos flujos dependiendo del estado.

El caso de negocio es el sigguiente, tenemos un cliente con una lista de articulos de los cuales necesitamos consultar su precio por cada articulo, para resolver esta necesidad, usamos un elemento map para iterar cada elemento, al mismo tiempo vamos a consultar la informaciòn del cliente, ambas tareas deben de ejecutarse en paralelo; al terminar el proceso anterior vamos a saber el costo de cada articulo y proceder a realizar el pago de lista de compras, si el pago es aceptado podremos pasar a la ultima tarea a realizar que es crear una orden de compra.

Tècnicamente para ejecutar este ejercicio, descarga el proyecto, configura las credenciales de tu cuenta AWS, debes de tener instalado AWS SAM


Ejecución
=========

Sobre el proyecto Parallel ejecuta el siguiente comando
```
sam init
sam build
sam deploy --guide
```

Al final de la ejecución visualizaras un mensaje de creación satisfactoria del proyecto en AWS

Pruebas
=======

En la consola AWS identifica la Step Function creada ParallelExampleStateMachine..., ejecuta con el siguiente dato de entrada

```
{
  "checkout_request": {
    "customer_id": "C6238485",
    "cart_items": [
      {
        "item_no": "I1234",
        "shipping_date": "",
        "shipping_address": "address_1"
      },
      {
        "item_no": "I1235",
        "shipping_date": "",
        "shipping_address": "address_2"
      },
      {
        "item_no": "I1236",
        "shipping_date": "",
        "shipping_address": "address_3"
      }
    ]
  }
}
```
