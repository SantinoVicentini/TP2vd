# 1) Tipologia de los datos que usamos:
### CATEGORICOS/NOMINALES:  nombre genero nacionalidad
### ORDINALES:  anio_nacimiento anio_mision mision_hs eva_mision_hs
### CUANTITATIVOS-INTERVALO: anio_mision edad_mision 
### CUANTITATIVOS-RELACION:  mision_hs eva_mision_hs

# 2) Marcas y canales:
### GRAFICO 1: Barras horizontales de color gris. 1 atributo categorico/nominal, 1 atributo cuantitativo.
### GRAFICO 2: Area gris con un punto azul en el maximo. 2 atributos cuantitativo.
### GRAFICO 3: Barras verticales de color gris. 1 atributo categorico/nominal, 1 atributo cuantitativo.
### GRAFICO 4: Lineas de color naranja y azul. 1 atributo categorico/nominal, 2 atributo cuantitativo. 

# 3) Graficos:
- Grafico 1: Buscamos las horas de evacuacion de cada astronauta, filtramos los datos para aquellos astronautas que tenian menos de 15 horas en mision y nos quedamos con el resto para poder visualizar el grafico de manera mas sencilla y sin tantos datos.
- Grafico 2: En este grafico buscamos representar la tendencia bajista de la ultima decada segun las horas en mision. Por lo que recopilamos las horas totales en mision segun el anio. Para simplificar el grafico, en el eje y, abreviamos miles de horas. Tambien agregamos un punto al maximo de horas alcanzadas ya que es un movimiento inorganico comparado con la esencia del grafico "outlier".
- Grafico 3: Al igual que en el grafico 1, decidimos que la mejor manera de representar las horas en mision acumuladas por nacionalidad es con un grafico de barras. En esta ocasion son barras verticales de color gris. Se puede ver con claridad la dominancia de los primeros dos paises gracias al tamanio de las barras.
- Grafico 4: 
