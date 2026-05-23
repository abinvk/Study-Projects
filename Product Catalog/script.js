const products =[
    {
        name:"iPhone 15",
        price: 999,
        category: "Mobiles",
        image:"https://picsum.photos/200?1"
    },

    {
        name:"Samsung Galaxy S21",
        price: 899,
        category: "Mobiles",
        image:"https://picsum.photos/200?2"
    },

    {
        name:"MacBook Pro",
        price: 1999,
        category: "Laptops",
        image:"https://picsum.photos/200?3"
    },

    {
        name:"Dell XPS 13",
        price: 1499,
        category: "Laptops",
        image:"https://picsum.photos/200?4"
    },

    {
        mname:"Sony WH-1000XM4",
        price: 349,
        category: "Headphones",
        image:"https://picsum.photos/200?5"
    }
];

const productContainer = document.getElementById("product");
const search = document.getElementById("searchInput");
const category = document.getElementById("category");

function displayProducts(products){
    productContainer.innerHTML = "";

    items.forEach(product => {

        productDiv.innerHTML += `
        <div class="cart">
        <img src = ${product.image}">
        <h2>${product.name}</h2>
        <p class="price">${product.price}</p>
        <p>${product.category}</p>
        </div>
        `;
    });
}