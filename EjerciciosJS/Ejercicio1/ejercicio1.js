
let productos= [
{nombre:"Televisor",precio:570000},
{nombre:"Nevera",precio:1000000},
{nombre:"Lavadora",precio:680000}
]

let productoSeleccionado= ''
function seleccionarProducto (producto){
   productoSeleccionado = producto.options[producto.selectedIndex]

console.log(productoSeleccionado)

}

 function agregarColumna(valor,fila){
    let nueva=document.createElement('td')
    nueva.textContent=valor
    fila.appendChild(nueva)
}


function agregarProducto(){
   if(productoSeleccionado=== '' || productoSeleccionado.value===1){
    alert('Debe seleccionar un producto')
    return
   }
    
    const nombreProducto = productoSeleccionado.text
        const precioProducto = productoSeleccionado.value
        const descuento =document.getElementById('Descuento').value
    
    const subTotal = precioProducto - (precioProducto * descuento / 100) 

    
console.log(nombreProducto,precioProducto,descuento);

let tablaDeProductos = document.getElementById('tablaProductosTec')
let nuevaFila=document.createElement('tr')
agregarColumna(nombreProducto,nuevaFila)

agregarColumna(precioProducto,nuevaFila)

agregarColumna(descuento,nuevaFila)

agregarColumna(subTotal,nuevaFila)


tablaDeProductos.appendChild(nuevaFila)


    alert(`total selec ${subTotal}`);
    
    }

document.addEventListener('DOMContentLoaded', function() {

productos.forEach(element => {
    const option= document.createElement('option')
    option.value= element.precio
    option.text=element.nombre
    selecProductos.appendChild(option)
});

})






/*const descuentoTele = precioProducto * 0.10
const descuentoNevera = precioProducto * 0.20
const descuentoLavadora = precioProducto *0.50

const pagarTel = selecProductos - descuentoTele 
const pagarNev = selecProductos - descuentoNevera
const pagarLav = selecProductos - descuentoLavadora
*/