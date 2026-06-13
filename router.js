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

window.onload = loadPage;
