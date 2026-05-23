const products = [

{
name:"iPhone 15",
price:80000,
category:"Mobile",
image:"https://picsum.photos/200?1"
},

{
name:"Samsung S25",
price:70000,
category:"Mobile",
image:"https://picsum.photos/200?2"
},

{
name:"MacBook",
price:120000,
category:"Laptop",
image:"https://picsum.photos/200?3"
},

{
name:"Dell XPS",
price:95000,
category:"Laptop",
image:"https://picsum.photos/200?4"
},

{
name:"Apple Watch",
price:30000,
category:"Watch",
image:"https://picsum.photos/200?5"
}

];

const productDiv = document.getElementById("products");
const search = document.getElementById("searchInput");
const category = document.getElementById("category");

function displayProducts(items){

productDiv.innerHTML="";

items.forEach(product=>{

productDiv.innerHTML += `
<div class="card">

<img src="${product.image}">

<h2>${product.name}</h2>

<p class="price">₹${product.price}</p>

<p>${product.category}</p>

</div>
`;

});

}
function filterProducts(){

const searchValue =
search.value.toLowerCase();

const categoryValue =
category.value;

const filtered = products.filter(product=>{

const matchSearch =
product.name.toLowerCase()
.includes(searchValue);

const matchCategory =
categoryValue==="all" ||
product.category===categoryValue;

return matchSearch && matchCategory;

});

displayProducts(filtered);

}

search.addEventListener(
"input",
filterProducts
);

category.addEventListener(
"change",
filterProducts
);

displayProducts(products);