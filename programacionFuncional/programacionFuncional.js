
const coches = [
    {'marca' : 'seat', 'modelo': 'panda', 'año': 1983, 'color': 'blanco', 'motor': 'gasolina'},
    {'marca' : 'ford', 'modelo': 'mondeo', 'año': 2019, 'color': 'rojo', 'motor': 'diesel'},
    {'marca'  : 'toyota', 'modelo': 'avensis', 'año': 2019, 'color': 'negro', 'motor': 'híbrido'},
    {'marca'  : 'ford', 'modelo': 'fiesta', 'año': 1996, 'color': 'blanco', 'motor': 'diesel'},
    {'marca'  : 'opel', 'modelo': 'astra', 'año': 2006, 'color': 'rojo', 'motor': 'diesel'},
    {'marca'  : 'skoda', 'modelo': 'fabia', 'año': 1999, 'color': 'azul', 'motor': 'diesel'},
    {'marca' : 'seat', 'modelo': 'leon', 'año': 2020, 'color': 'gris', 'motor': 'diesel'},
    {'marca' : 'seat', 'modelo': 'ibiza', 'año': 2019, 'color': 'negro', 'motor': 'gasolina'}
  ];

// Ordenamos los coches por marca y modelo
// puedo hacer una copia previamente para que no ordene "coches"

const cochesOrdenados = [...coches]; // copio las referencias

const ordenaPorMarcaYModelo = (a,b) => {
    if (a.marca > b.marca)
        return 1;
    else if (a.marca < b.marca)
        return -1;
    else if (a.modelo > b.modelo)
        return 1;
    else if (a.modelo < b.modelo)
        return -1;
    else
        return 0;
};
cochesOrdenados.sort(ordenaPorMarcaYModelo);



console.log(coches);
console.log(cochesOrdenados);

// Coches antiguos (anteriores a 2000)

const esAntiguo = coche => coche['año'] < 2000;

const cochesAntiguos = coches.filter(esAntiguo);

const esBlanco = coche => coche.color === 'blanco';

console.log(cochesAntiguos);

const cochesAntiguosYBlancos = coches
                                    .filter(esAntiguo)
                                    .filter(esBlanco);
console.log(cochesAntiguosYBlancos);

// Array con los años de venta de los coches

const aniosVenta = coches.map(coche => coche['año']);
console.log(aniosVenta);

// Media (o promedio) de los años de venta de los coches

const mediaVentaCoches = coches.reduce((ac,coche, posicion, coches)=>{
    if (posicion === coches.length - 1) {
        return (ac+coche['año']) / coches.length; 
    }
    return ac+coche['año'];
}, 0);

console.log (mediaVentaCoches);

/*
Usando programación funcional (filter, map, reduce) y 
así como otras funciones de arrays resuelve las siguientes 
cuestiones y prueba su funcionamiento. 
Como se trata de programación funcional, 
no debes usar ningún tipo de bucle:

- Dado un array como el siguiente:
*/
const pedidos = [
  { id: 1, cliente: 'Pablito', items: ['Producto 1', 'Producto 2'] },
  { id: 2, cliente: 'Miguelón', items: ['Producto 3', 'Producto 4'] },
  { id: 3, cliente: 'Ricardín', items: ['Producto 5'] },
  { id: 4, cliente: 'Pablito', items: ['Producto 2', 'Producto 4'] },
  { id: 5, cliente: 'Ruperta', items: ['Producto 3'] }
];
// a) Obtener un array con los pedidos que contienen 
// el ítem 'Producto 3' y ordena los pedidos por el nombre de cliente.

const pedidosProducto3 = pedidos.filter(pedido => pedido.items.includes('Producto 3'));

const pedidosOrdenados = pedidosProducto3.sort((a, b) => {
  if(a.cliente < b.cliente){
    return -1;
  }

  if(a.cliente > b.cliente){
    return 1;
  } 
  
  return 0;
});

console.log("Pedidos con Producto3: ", pedidosOrdenados);

// b) Obtener un array con los ítems de los pedidos del cliente 'Pablito'. (Pista puedes usar filter, luego map y luego flat para aplanar el resultado)
const cosasDePablito= pedidos.filter(cli => cli.cliente===('Pablito')).map(it=>it.items).flat();

console.log("Los pedidos de Pablito son: ", cosasDePablito);


//- Dado un array como el siguiente:

const ventas = [
  { fecha: '2021-12-29', cantidad: 100 },
  { fecha: '2022-01-02', cantidad: 200 },
  { fecha: '2022-01-03', cantidad: 350 },
  { fecha: '2022-01-04', cantidad: 240 },
  { fecha: '2022-02-05', cantidad: 500 }
];
//c) Obtén un array con las ventas de enero y febrero, ordenado por cantidad.
const ventasEneroFebrero = ventas.filter(venta => {
                                                    const fecha= new Date(venta.fecha);
                                                    const mes= fecha.getMonth();  //Obtenemos el mes (0-11)
                                                    return mes < 2;  //Filtramos enero (0) y febrero (1)
                                                  })
                                                  .sort((a, b) => a.cantidad - b.cantidad);  //Ordenamos por cantidad


console.log(ventasEneroFebrero);

//d) Calcula el promedio de ventas del mes de enero. (Pista haz un filter y luego reduce)
const ventasEnero = ventas.filter(venta => {
                                            const fecha = new Date(venta.fecha);
                                            return fecha.getMonth() === 0;  //Enero es 0
                                          });

const totalVentasEnero = ventasEnero.reduce((total, venta) => total + venta.cantidad, 0);

const promedioVentasEnero = totalVentasEnero / ventasEnero.length;

console.log('El promedio de ventas del mes de enero es:', promedioVentasEnero);


//- Dado un array como el siguiente:

const productos = [
  { nombre: 'Producto 1', precio: 10, categoria: 'Categoria 1' },
  { nombre: 'Producto 2', precio: 20, categoria: 'Categoria 1' },
  { nombre: 'Producto 3', precio: 30, categoria: 'Categoria 2' },
  { nombre: 'Producto 4', precio: 40, categoria: 'Categoria 2' },
  { nombre: 'Producto 5', precio: 50, categoria: 'Categoria 3' }
];
//e) Obtén un array de productos sin precio, es decir, con solo las propiedades nombre y categoria.
const productosSinPrecio= productos.map(producto => {
                                                      return {
                                                              nombre: producto.nombre,
                                                              categoria: producto.categoria
                                                            };
                                                    });

console.log(productosSinPrecio);

//f) crear un objeto con el nombre de cada categoría y la cantidad de productos que pertenecen a esa categoría. Por ejemplo, para este caso el objeto debe tener la siguiente forma:
/* {
  'Category 1': 2,
  'Category 2': 2,
  'Category 3': 1
} */
//Pista: usa map para obtener los nombres de la categoria y luego reduce para contar cada categoria.
const categorias= productos.map(producto => producto.categoria);

/* const conteoCategorias= categorias.reduce((contador, categoria) => {
                                                                    contador[categoria]= (contador[categoria] || 0) + 1;
                                                                    return contador;
                                                                  }, {}); */

const conteoCategorias = {};

for(let categoria of categorias){

  if(conteoCategorias[categoria]){

    conteoCategorias[categoria]++;
    
  }else{

    conteoCategorias[categoria] = 1;

  }
}

console.log(conteoCategorias);


