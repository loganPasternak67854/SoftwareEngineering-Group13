console.log("common.js loaded");
function searchProducts() {
    console.log("searchProducts() called")
    // Replace 'apiEndpoint' with your actual API endpoint
    // read the value of the search input
      const searchInput = document.getElementById('search-input');
      console.log(searchInput.value);
    fetch('/product_search',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: searchInput.value }),
    })
        .then(response => response.json())
        .then(products => {
        //   window.location.href = "/search.html";
            console.log('Products found:', products);
            const ProductList = document.getElementById('product-list');
            // if (productList){
            //     ProductList.innerHTML = '';
            // }
            ProductList.innerHTML = '';
            if (products.length === 0) {
                ProductList.innerHTML = '<li>No products found</li>';
                return;
            }
            else{
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div class="product-box">
                    <h2>Product name: ${product.productName}</h2>
                    <p>Description: ${product.productDescription}</p>
                    <div class="product-price">
                    <p>Price: $${product.productPrice}</p>
                    </div>
                    <button id="add-to-cart">Add to Cart</button>
                    </div>
                    <!-- Add more order details here -->
                `;
                ProductList.appendChild(listItem);
            });}
        })
        .catch(error => console.error('Error fetching orders:', error));
}