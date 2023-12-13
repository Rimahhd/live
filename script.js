function addToCart(itemName, itemPrice) {
    // Add logic to add items to the cart
    // For simplicity, we'll just display the item in the cart section
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('total-price');

    const itemElement = document.createElement('div');
    itemElement.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    cartItems.appendChild(itemElement);

    // Update total price
    const currentTotal = parseFloat(cartTotal.textContent);
    cartTotal.textContent = (currentTotal + itemPrice).toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
    // Show the home page by default
    document.getElementById('home').style.display = 'block';

    // Add event listeners for navigation
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const pages = document.querySelectorAll('.page');
            
            // Hide all pages
            pages.forEach(page => page.style.display = 'none');
            
            // Show the selected page
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
