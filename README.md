# Descripción
## Tienda virtual de productos de fotografía
[GITHUB](https://github.com/desarrollosMja/photoEcommerce---Avecilla.git)

Se trata de un e-commerce a traves del cual poder comercializar productos y/o servicios, incluyendo una funcionalidad de carrito para finalizar la compra.

# Uso / Instalación
Se inicializa la aplicación a través del comando `npm start`.
La app consta de distintos componentes:
1. App
2. NavBar
3. CartWidget
4. ItemListContainer
5. ItemList
6. Item
7. ItemDetailContainer
8. ItemDetail
9. ItemCount
10. Cart
11. ItemCountCart
12. CartContext


# Librerías utilizadas en el proyecto
* React
* React-Router-Dom

Se utilizó la librería para poder crear una SPA (Single Page Application) y así lograr que el sitio no se recargue por completo cuando el usuario quiere ingresar a los distintos componentes

* React-Bootstrap

La finalidad del uso de Bootstrap es agregar elementos visuales más atractivos, que al mismo tiempo faciliten la implementación de la app.

* Firebase

Firebase se usó para proporcionar un espacio de base de datos donde poder realizar la carga de la información de los productos y las ordenes de compra emitidas por los clientes. Al mismo tiempo se usaron dos funcionalidades claves de Firebase: la generación aleatoria de ID para los productos, a fin de generar una key individual y única para ellos, y la generación aleatoria de ID para las ordenes de compra, de manera de otorgar al usuario un comprobante único cuando efectiviza una compra.