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
    If(event.preventDefault()); {
        event.preventDefault();
    }

    addItemToShoppingList();

     return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");

    Let itemHtml = createListItemHtml(itemName.value itemAmount.value);
    console.log("Item HTML: ",itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml)
}

function createListItemHtml(itemName, itemAmount) {
    return '<li>
                ${itemName} - ${itemAmount}
           </li>';
}