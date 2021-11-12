//------Este archivo contiene las funciones necesarias para la Fruteria Online------//

//----------------------------------------------------------------------------------
/*Esta funcion genera el menu dinamico en base a los productos existentes
Retorna el ID del producto elegido*/ 
const showMenu = () =>{
    let menu = "Escoge un producto \n";
    products.forEach((product)=>{
        menu += product.id + ".-" + product.name + "\n"
    });
    menu += (products.length + 1) + ".-Salir";
    let opt = parseInt(prompt(menu));
    return opt;
};
//----------------------------------------------------------------------------------

/*Esta funcion determina si existe el stock suficiente para realizar la venta
Retorna:
false --> si no hay suficiente stock
true --> si hay suficente stock*/
const isStock = (quantity, stock ) => {
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el disponible es ${stock}`);
        return false;
    }
    return true;
}
//----------------------------------------------------------------------------------

/*Esta funcion se encarga de agregar al carrito un producto*/
const addToCard = ( option, qty ) => {
    const found = products.find(product => product.id === option.toString());//si option = 3 entonces found = { id='3', name='bananas', price=100, stock=10 }
    if(isStock(qty, found.stock)){
        let item = {
            quantity:qty,
            price:found.price * qty,
            name: found.name,
        }
        cart.push(item);
        products[option - 1].stock -= qty;
        alert(`${found.name} fueron agregados al carrito`)
    }
};
//----------------------------------------------------------------------------------

/*Esta funcion muestra el total a pagar y productos a llevar*/
const showTotal = () => {
    let dataToShow = "";
    let total = 0;
    cart.forEach(product => {
        dataToShow += `Producto: ${product.name} Cantidad: ${product.quantity} Precio: ${product.price} \n`;
        total += product.price
    })
    dataToShow += `Total: ${total}`;
    alert(dataToShow);
}
//----------------------------------------------------------------------------------
