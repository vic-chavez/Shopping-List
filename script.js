window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form")

    form.addEventListener("submit". (event) => {
        handleItemForm(e, form);
    });
}

function handleItemForm(event, formRef) {
    If(event.preventDefault()) {
        event.preventDefault();
    }
    let itemHtml = addItemToShoppingList();
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml)

     return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");


}

function createListItemHtml() {
    return '<li>
                Item Name - Amount
           </li>
    ';
}