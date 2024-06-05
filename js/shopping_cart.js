// Shopping cart object
const ShoppingCart = {
    // Total amount in the cart
    total: 0,

    // Array to store items in the cart
    item: ["Ciel X Sebastian","Ash Lynx","Subaru Sakamaki", "Who Am I?...","Cat Guy","Sky Dancers","The Road","Fairy", "Rose","The Nebula","BTS: Kim Taehyung","Lionel Messi","BTS: Park Jimin"] ,
    // Method to add item to the cart
    addItem: function(item) {
        this.total += item.price;
        this.items.push(item);
        this.onItemAdded(item);
    },

    // Method to remove item from the cart
    removeItem: function(itemIndex) {
        const removedItem = this.items.splice(itemIndex, 1)[0];
        this.total -= removedItem.price;
        console.log("Item removed:", removedItem.name, "Price: $" + removedItem.price.toFixed(2), "New total: $" + this.total.toFixed(2));
    },

    // Event handler for when an item is added to the cart
    onItemAdded: function(item) {
        console.log("Item added:", item.name, "Price: $" + item.price.toFixed(2), "New total: $" + this.total.toFixed(2));
    }
};

// Predefined items with names and prices
const predefinedItems = [
    { name: "Ciel X Sebastian", price: 30 },
    { name: "Ash Lynx", price: 20 },
    { name: "Subaru Sakamaki", price: 15 },
    { name: "Who Am I?...", price: 15 },
    { name: "Cat Guy", price: 20 },
    { name: "Sky Dancers", price: 15 },
    { name: "The Road", price: 25 },
    { name: "Fairy", price: 15 },
    { name: "Rose", price: 35 },
    { name: "The Nebula", price: 35 },
    { name: "BTS: Kim Taehyung", price: 40 },
    { name: "Lionel Messi", price: 25 },
    { name: "BTS: Park Jimin", price: 20 }
];

// Add predefined items to the shopping cart
predefinedItems.forEach(function(item) {
    ShoppingCart.addItem(item);
});

// Example usage
document.addEventListener("DOMContentLoaded", function() {
    const itemButtonsContainer = document.getElementById("item-buttons-container");
    const totalDisplay = document.getElementById("total-display");

    // Create buttons for each predefined item
    predefinedItems.forEach(function(item) {
        const button = document.createElement("button");
        button.textContent = item.name + " - $" + item.price.toFixed(2);
        button.addEventListener("click", function() {
            ShoppingCart.addItem(item);
            totalDisplay.textContent = "Total: $" + ShoppingCart.total.toFixed(2);
        });
        itemButtonsContainer.appendChild(button);
    });

    // Event listener for "Cancel" button click
    const cancelButton = document.getElementById("cancel-button");
    cancelButton.addEventListener("click", function() {
        const itemIndex = ShoppingCart.items.length - 1; // Remove the last item added
        ShoppingCart.removeItem(itemIndex);
        totalDisplay.textContent = "Total: $" + ShoppingCart.total.toFixed(2);
    });
    itemButtonsContainer.appendChild(button);
});
