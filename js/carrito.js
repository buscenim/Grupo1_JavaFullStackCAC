//VAriable que mantiene visible al carrito*/
var carrito visible = false;

  if(document.readyState=='loading'){
    document.addEventListner('DOMContentLoaded,ready')
  }else{
    ready{};
  }

  function ready(){
    //Agregamos funcionalidad a los botones eliminar del carrito*/
    var botonesEliminarItem = Document.getElementsByClassName('btn-eliminar');
    for(var i=0;i <botonesEliminarItem.lenght,i++){
        var button = botonesEliminarItem[i];
        button.addEventListner('click', eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad*/
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i <botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListner('click', sumarCantidad);

    }

    //Agrego funcionalidad al boton restar cantidad*/
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i <botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListner('click', restarCantidad);
    }

    //Agrego funcionalidad a los botones Agregar al carrito*/
     var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
     for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListner('click', agregarAlCarritoClicked);
    }

    //Agregar funcionalidad al boton pagar*/
    document.getElementsByClassName('btn-pagar')[0]addEventListener('click', pagarClicked)
    
  }

  //elimino el item seleccionado del carrituo*/
  function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove{};

      //Actualizamos el total del carrito una vez que hewmos eliminado un item*/
  actualizarTotalCarrito();

  //La siguiente función controla si hay elementos en el carrito una vez que se eliminó*/
  //si no hay debo ocultar el carrito*/
  ocultarCarrito();

  //Actualiza el total del carrito*/
  function actualizarTotalCarrito(){}
  //Seleccionamos el contenedor carrito*/
  var carritoContenedor = document.getElementsByClassName('carrito')[0];
  var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
  var total = 0;

  //recorremos cada elemento del carrito para actualizar el total*/
  for(var i=0; i < carritoItems.length;i++){
       var item = carritoItems[i];
       var precioelemento = item.getElementsByClassName('carrito-item-precio')[0];
       console.log(precioElemento);
       //Quitamos el simbolo peso y el punto de milesimo*/
       var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
       console.log(precio);
       var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
       var cantidad = cantidadItem.value;
       console.log(cantidad);
       total = total + (precio * cantidad);
    }
    total = Math.Round (total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ',00';

    function ocultarCarrito(){
        var carritoItems = document.getElementsByClassName('carrito-items')[0];
        if(carritoItems.childElementCount==0){
            var carrito = document.getElementsByClassName('carrito')[0];
            carrito.style.marginRight = '-100%';
            carrito.style.opacity ='0';
            carritoVisible = false;

            //maximizo el contenedor de los elementos*/
            var items = document.getElementsByClassName('contenedor-items')[0];
            items.style.width = '100%';
        }
    }

    //Aumento en uno la cntidad del elemento seleccionado*/
    function sumarCantidad(event){
        var buttonCliked = event.target;
        var selector = buttonClicked.parentElement;
        var cantidadActual = selector.getElementsByClassName('carrito-iem-cantidad')[0].value;
        console.log(cantidadActual);
        cantidadActual++;
        selector.getElementsByClassName('carrito-item-camtidad')[0].value = cantidadActual;
        //Actualizamos el total*/
        actualizarTotalCarrito();
    }

    function restarCantidad(event){
        var buttonCliked = event.target;
        var selector = buttonClicked.parentElement;
        var cantidadActual = selector.getElementsByClassName('carrito-iem-cantidad')[0].value;
        console.log(cantidadActual);
        cantidadActual--;

        //controlamos que no sea menor que 1*/
        if(cantidadActual>=1){}
        selector.getElementsByClassName('carrito-item-camtidad')[0].value = cantidadActual;
        //Actualizamos el total*/
        actualizarTotalCarrito();
    }
}

function agregarAlCarritoCliked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].inerText;
    console.log(titulo);
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);
    
    //La siguiente función agrega el elemento al carrito. Le mando por parametros los valores
agregarAlCarrito(titulo, precio, imagenSrc);

//Hacemos visible el carrito cuando agrego por primera vez*/
hacerVisibleCarrito();
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //Vamos a controlar que el item que está ingresado nose encuentra ya en el carrito*/
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0; i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert(El item ya se encuentra en el carrito);
            return;
        }
    }

     var itemCarritoContenido = ` 
     <div class="carrito-item"> 
        <img src="${imagenSrc}" alt="" width="80px">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="carrito-item-cantidad" disabled>  
                <i class="fa-solid fa-plus sumar-cantidad"></i> 
            </div>
            <span class="carrito-item-precio">${precio}</span>
        </div>
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `

    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //Agregamos la funcionalidad eliminar del nuevo item*/
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click',eliminarItemCarrito);

    //Agregamos la funcionalidad de sumar en el nuevo item*/
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click', sumarCantidad);

      //Agregamos la funcionalidad de restar en el nuevo item*/
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click', restarCantidad); 
}

funcion pagarClicked(Event){
   alert('Gracias por su compra');

   //Elimino todos los elementos del carrito
   var carritoItems = document.gerElementsByClassName('carrito-items')[0];
   while(carritoItems.hasChildNodes()){
      carritoItems.removeChild(carritoItems.firstChild);
   }
   actualizarTotalCarrito();

   //Funcion que oculta el carrito*/
   ocultarCarrito()
}

function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity ='1';

    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}
 
