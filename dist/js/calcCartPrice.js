function calcCartPrice() {
    const cartItems = document.querySelectorAll('.products__item');
    const totalPriceEl = document.querySelector('.total__price');
    const totalAmountEl = document.querySelector('[data-total-counter]');


    let totalPrice = 0;
    let totalAmount = 0;

    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentAmount = parseInt(amountEl.innerText);
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
        totalAmount += currentAmount;

    });
    totalPriceEl.innerText = totalPrice;
    totalAmountEl.innerText = totalAmount;
}

document.querySelectorAll('.products__del').forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".products__item").remove();
        calcCartPrice();
    });

})

calcCartPrice();



// function calcCartPrice() {
//     const cartItems = document.querySelectorAll('.products__item');
//     const totalPriceEl = document.querySelector('.total__price');
//     const totalAmountEl = document.querySelector('[data-total-counter]');

//     let totalPrice = 0;
//     let totalAmount = 0;
//     cartItems.forEach(function(item) {
//         const amountEl = item.querySelector('[data-counter]');
//         const priceEl = item.querySelector('.price__currency');

//         const currentAmount = parseInt(amountEl.innerText);
//         const currentPrice = currentAmount * parseInt(priceEl.innerText);

//         totalPrice += currentPrice;
//         totalAmount += currentAmount
//     });
//     totalPriceEl.innerText = totalPrice;
//     totalAmountEl.innerText = totalAmount;
// }


// document.querySelectorAll('.products__del').onclick = function(item) {
//     item.remove();
//     console.log('item remove ', item);
// }

// document.querySelectorAll('.products__del').forEach(button => {
//     button.addEventListener("click", () => {
//         console.log("click");
//         button.closest(".products__item").remove();
//         calcCartPrice();
//     });
// })

// calcCartPrice();
