let inventory = [];

function Item(name, quantity, link) {
    this.name = name;
    this.quantity = quantity;
    this.link = link;
}

function addItem() {
    let name = prompt("Enter the item name:");
    let quantity = prompt("Enter the quantity:");
    let link = prompt("Enter the vendor link:");

    inventory.push(new Item(name, quantity, link));
    displayInventory();
}

function displayInventory() {
    let inventoryDiv = document.getElementById("inventory");
    inventoryDiv.innerHTML = '';

    for (let i = 0; i < inventory.length; i++) {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'inventory-item';

        let itemName = document.createElement('h2');
        itemName.textContent = inventory[i].name;
        itemDiv.appendChild(itemName);

        let itemQuantity = document.createElement('p');
        itemQuantity.textContent = 'Quantity: ' + inventory[i].quantity;
        itemDiv.appendChild(itemQuantity);

        let orderLink = document.createElement('a');
        orderLink.href = inventory[i].link;
        orderLink.textContent = 'Order More';
        itemDiv.appendChild(orderLink);

        inventoryDiv.appendChild(itemDiv);
    }
}
