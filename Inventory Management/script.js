let products = JSON.parse(localStorage.getItem('products')) || [];

let editIndex = null;

displayProducts();

function addProduct(){


    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let sold = document.getElementById('sold').value;

    if(name === "" || category === "" || price === "" || quantity === "" || sold === ""){
    
}
}