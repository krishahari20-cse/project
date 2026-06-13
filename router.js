window.addEventListener("hashchange", loadPage);

function loadPage() {
    const page = location.hash || "#home";

    if (page === "#home") {
        document.getElementById("app").innerHTML = `
        <h1 style="padding:20px;">Welcome to ShopHub</h1>
        `;
    }

    else if (page === "#products") {
        loadProducts();
    }

    else if (page === "#about") {
        document.getElementById("app").innerHTML = `
        <h1 style="padding:20px;">About Us</h1>
        <p style="padding:20px;">
        Modern E-commerce Product Catalog.
        </p>
        `;
    }
}

window.onload = loadPage;async function loadProducts() {

    const response = await fetch("data/products.json");
    const products = await response.json();

    let html = `
    <div class="products">
    `;

    products.forEach(product => {

        html += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p>${product.description}</p>
            <button onclick="addToCart('${product.name}')">
                Add To Cart
            </button>
        </div>
        `;
    });

    html += "</div>";

    document.getElementById("app").innerHTML = html;
}

function addToCart(product){
    alert(`${product} added to cart`);
}
