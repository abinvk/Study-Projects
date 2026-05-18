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

        alert("Please Fill In All Fields");
        return;
}

    let product = {
        id: Date.now(),
        name,
        category,
        price: Number(price),
        quantity: Number(quantity),
        sold: Number(sold)
    }

    if(editIndex === null){
        products.push(product);
    } else {
        products[editIndex] = product;
        editIndex = null;
    }

    saveDate();
    clearInputs();
    displayProducts();
}