console.log("common.js loaded");
function searchProducts() {
    console.log("searchProducts() called")
    // Replace 'apiEndpoint' with your actual API endpoint
    // read the value of the search input
      const searchInput = document.getElementById('search-input');
      const searchText = searchInput.value.trim();
      console.log("search: ",searchText);
      if (searchText === '') {
        alert('Please enter a search term');
        return;
      }
    fetch('/product_search',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({ search: searchText }),
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
                ProductList.innerHTML = '<li>No products found with similar name</li>';
                return;
            }
            else{
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                <div class="product-box">
                <h2>Product name: ${product.productName}</h2>
                <img src="${product.imageURL}" alt="Product Image" width="150" height="100">
                <p>Description: ${product.productDescription}</p>
                <div class="product-price">
                    <p>Price: $${product.productPrice}</p>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.productID},'${product.productName}',${product.productPrice},'${product.imageURL}')">Add to Cart</button>
            </div>
                    <!-- Add more order details here -->
                `;
                ProductList.appendChild(listItem);
            });}
        })
        .catch(error => console.error('Error fetching orders:', error));
}

function addToCart(productID, productName, price, imageURL) {
    const userID = 1; // Replace with the actual user ID if needed
    const numProducts = 1; // You can modify this if you want to add more than one
    const totalPrice = price * numProducts;

    fetch('/addtocart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({
            userID: 1,
            productID: productID,
            productName: productName,
            numProducts: 1,
            totalPrice: totalPrice,
            imageURL: imageURL
        }),
    })
        .then(response => {
            if (response.status === 201) {
                alert(`Added ${productName} to the cart successfully`);
            } else {
                alert(response.error);
            }
        })
        .catch(error => console.error('Error adding to cart:', error));
}