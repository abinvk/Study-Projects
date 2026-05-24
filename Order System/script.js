let cart=[]
let total=0

function addToCart(name,price){
    cart.push({
        name:name,
        price:price
    })
    total+=price
    showCart()
}
function showCart(){
    let cartItems=document.getElementById("cardItems")
    cartItems.innerHTML=""
    cart.forEach((item)=>{
        cartItems.innerHTML+=`
        <div class="cart-item">
        <span>${item.name}</span>
        <span>${item.Price}</span>
        </div>
        `
    })
    document.getElementById("totalPrice").innerText=total
}
    function placeOrder(){
        if(cart.length===0){
            alert("Cart Is Empty")
            return
        }
        alert("Order Placed Successfully")
        cart=[]
        total=0
        showCart()
    }