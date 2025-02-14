let cartCount = 0;
const cartButton = document.querySelectorAll('.add-to-cart');
const cartCountDisplay = document.getElementById('cart-count');

// Fonction pour ajouter un produit au panier
cartButton.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartCountDisplay.textContent = cartCount;
    });
});
