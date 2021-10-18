# Descripción
## Tienda virtual de productos de fotografía
[GITHUB](https://github.com/desarrollosMja/photoEcommerce---Avecilla.git)

Se trata de un e-commerce a traves del cual poder comercializar productos y/o servicios, incluyendo una funcionalidad de carrito para finalizar la compra.

# Uso / Instalación
Se inicializa la aplicación a través del comando `npm start`.
La app consta de distintos componentes:
1. App: controla las funciones del Router y permite acceder, a partir del componente NavBar, al resto de los componentes.
2. NavBar: posibilita la navegación entre los distintos componentes.
3. CartWidget: da acceso al carrito de compras y muestra, por medio de un badge, la cantidad de productos agregados al carrito. Si no figura un número, significa que aún no han sido agregados productos.
4. ItemListContainer: trae los productos desde Firebase y los guarda en el estado, hace la lógica de filtrado en caso de que se busquen solo los de determinada categoría, y le pasa esos datos por prop al componente ItemList.
5. ItemList: realiza el renderizado del listado de items, dividiendolos en dos contenedores según que sean destacados o no. Los destacados se listan primeros. Desde este componente se llama a ITEM y se le pasan los datos de los productos por prop.
6. Item: renderiza los items y crea la función de agregar al carrito en caso de que el cliente lo desee. Llama al método addItem que lo recoje del contexto para realizar esa funcionalidad.
7. ItemDetailContainer: hace la búsqueda de los productos en la base de datos filtrando por ID. Guarda el producto en el estado y le pasa el dato por prop al componente ItemDetail.
8. ItemDetail: renderiza el detalle del item. Crea la función de agregar al carrito en caso de que el cliente lo desee, llamando para ello al método addItem que lo recoje del contexto para realizar esa funcionalidad.
9. ItemCount: crea la funcionalidad de agregar al carrito un producto, pudiendo modificar la cantidad elegida.
10. Cart: renderiza el carrito con todos los productos agregados a él. Utiliza el componente ItemCountCart para darle al usuario la posibilidad de cambiar la cantidad de cada producto que desee adquirir. También cuenta con las funcionalidades de quitar productos individualmente, vaciar el carrito o finalizar la compra, lo que activa el formulario de carga de datos para luego enviarlos a la base de datos y devolverle al usuario el número de comprobante de su operación.
11. ItemCountCart: controla la reducción o aumento de items dentro del carrito.
12. CartContext: crea el array de productos que luego contendrá toda la información de ellos, junto con las funciones para operar el mismo (agregar item, remover item y vaciar carrito). Además en un estado crea un contador para manejar la totalidad de productos agregados al carrito, que servirá para que el componente CartWidget pueda mostrar dicho valor mediante un badge de bootstrap. El CartContext, al ser un contexto, distribuye sus variables y métodos al resto de los componentes.

## Link para observar funcionamiento de la aplicación
[Video](https://github.com/desarrollosMja/photoEcommerce---Avecilla/blob/main/grabacion-funcionamiento-app.mp4)

# Librerías utilizadas en el proyecto
* React
* React-Router-Dom

Se utilizó la librería para poder crear una SPA (Single Page Application) y así lograr que el sitio no se recargue por completo cuando el usuario quiere ingresar a los distintos componentes

* React-Bootstrap

La finalidad del uso de Bootstrap es agregar elementos visuales más atractivos, que al mismo tiempo faciliten la implementación de la app.

* Firebase

Firebase se usó para proporcionar un espacio de base de datos donde poder realizar la carga de la información de los productos y las ordenes de compra emitidas por los clientes. Al mismo tiempo se usaron dos funcionalidades claves de Firebase: la generación aleatoria de ID para los productos, a fin de generar una key individual y única para ellos, y la generación aleatoria de ID para las ordenes de compra, de manera de otorgar al usuario un comprobante único cuando efectiviza una compra.