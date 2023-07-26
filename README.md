# Script para borrar materiales pedidos por sistema.
Es un script simple que busca y elimina elementos de una tabla segùn un parámatro ingresado mediante un prompt.

## Problema a resolver
El sistema cuenta con 'recetas' que son un conjunto de materiales que se utilizan para fabricar un equipo estandarizado.
Todos los items de la receta se agregan al pedido de materiales con un solo click, pero en casa de necesitar eliminarlos (por ejemplo porque se cargò una receta erronea) se debe hacer item por item y esto puede tomar mucho tiempo si la receta es grande(muchos items).

Para eliminar un item de una receta cargada aun equipo a fabricar se debe hacer click sobre el mismo, accion que carga una nueva página. Una vez cargada dicha página podremos ver el boton para eliminar el item.
El proceso se repite para cada item de la receta

## Solucion:
El script recibe como entrada el nombre de la receta (nomenclatura estandariza dentro de la empresa). Dicho valor se utiliza para identificar los items de la receta de los demas items.
El script abre una nueva ventana y hace click en el boton "eliminar" para cada item que cumpla con el valor de entrada para luego cerrar dicha ventana.
