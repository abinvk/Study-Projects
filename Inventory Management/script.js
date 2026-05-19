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

function displayProducts(filteredProducts = products){

    let productList = document.getElementById('productList');
    productList.innerHTML = "";

    filteredProducts.forEach((product, index) => {
         
        let status = "";

        let statusClass = "";

        if(product.quantity === 0){
            status = "Out of Stock";
            statusClass = "out-of-stock";

        }else if(product.quantity < 5){
            status = "Low Stock";
            statusClass = "low-stock";
        }else{
            status = "In Stock";
            statusClass = "in-stock";
        }

        productList.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>${product.sold}</td>

            <td>
             
            <span class="status ${statusClass}">
            ${status}
            </span>
            </td>

                <td>

                <button 
                class="action-btn delete"
                onclick="deleteProduct(${index})"
                >
                Delete
                </button>

                </td>
           
            
           
        </tr>
        `;
    });

    updateDashboard();
}

function deleteProduct(index){

    products.splice(index, 1);

    saveDate();

    displayProducts();

}

function editProduct(index){

    let product = products[index];

    document.getElementById('name').value = product.name;
    document.getElementById('category').value = product.category;
    document.getElementById('price').value = product.price;
    document.getElementById('quantity').value = product.quantity;
    document.getElementById('sold').value = product.sold;

    editIndex = index;
}

document.getElementById("search").addEventListener("keyup",function(){

    let value = this.value.toLowerCase();

    let filtered = products.filter(product =>
        
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});

function updateDashboard(){

    document.getElementById("totalProducts").innerText = products.length;

    let totalQty = products.reduce((total,product)=>
    total + product.quantity,0
);
    document.getElementById("totalQuantity").innerText = totalQty;

    let lowStock = products.filter(product =>
        product.quantity < 5
    ).length;

    document.getElementById("lowStock").innerText = lowStock;
    if(products.length > 0){
        let mostSelling = [...products].sort((a,b)=>
        b.sold - a.sold)[0];
        document.getElementById("mostSelling").innerText = mostSelling.name;

    }else{
        document.getElementById("mostSelling").innerText = "-";
    }

}

function clearInputs(){
    document.getElementById('name').value = "";
    document.getElementById('category').value = "";
    document.getElementById('price').value = "";
    document.getElementById('quantity').value = "";
    document.getElementById('sold').value = "";
}

function saveDate(){

    localStorage.setItem(
        'products',
         JSON.stringify(products)
);
}