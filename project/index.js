let products = [
    {},
    {},
    {},
    {},
    {},
];

function displayProducts(listProducts) {
    let domProducts = document.getElementById('list-products');
    domProducts.innerHTML = '';
    let totalHtml = '<div class="row mb-3">';
    for (let i = 0; i < listProducts.length; i++) {
        const product = listProducts[i];
        let html = `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        totalHtml += html;
        if (i % 3 === 2) {
            totalHtml += `</div><div class="row mb-3">`
        }
    }
    totalHtml += '</div>';
    domProducts.innerHTML = totalHtml;
}

displayProducts(products);

let result = products.filter(function(product){
    return product.name.includes('giay');
});
displayProducts(result);

// sap xep products => mang moi
// displayProducts(mangmoi);