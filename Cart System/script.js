let cart = [];

function addToCart(name,price) {

    let item=cart.find(product=>product.name===name);

    if(item){
        item.quantity++;
    }else{
        cart.push({name:name,price:price,quantity:1});
    }

    displayCart();

}

function displayCart() {

    let cartDiv=document.getElementById('cart');

    let  total=0;

    cartDiv.innerHTML='';

    cart.forEach((item,index)=>{
        total+=item.price*item.quantity;
        cartDiv.innerHTML+=`
            <div>

            ${item.name}
            ${item.price}

            Quantity: ${item.quantity}

            <button onclick=increase(${index})>+</button>
            <button onclick=decrease(${index})>-</button>
            <button onclick=remove(${index})>Remove</button>

            </div>
        `;
    });

    document.getElementById("total").innerText=`Total: $${total}`;
}

function increase(index) {
    cart[index].quantity++;
    displayCart();
}

function decrease(index) {
    if(cart[index].quantity>1){
        cart[index].quantity--;
    }else{
        cart.splice(index,1);
    }
    displayCart();
}

function remove(index) {
    cart.splice(index,1);
    displayCart();
}
