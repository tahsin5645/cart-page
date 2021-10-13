// caching the dom elements
// first book
const bookOne = document.querySelector('#cart-item1');
const alertOne = document.querySelector('#alert-message1');
const closeOne = document.querySelector('#close1');
const undoOne = document.querySelector('#alert-link1');
const qntBookOne = document.querySelector('#quantity-box-1');
const incrementBookOne = document.querySelector('#increment1');
const decrementBookOne = document.querySelector('#decrement1');
const rmvBookOne = document.querySelector('#rvm-btn1');
const priceBookOne = document.querySelector('#price1');
// second book
const bookTwo = document.querySelector('#cart-item2');
const alertTwo = document.querySelector('#alert-message2');
const closeTwo = document.querySelector('#close2');
const undoTwo = document.querySelector('#alert-link2');
const qntBookTwo = document.querySelector('#quantity-box-2');
const incrementBookTwo = document.querySelector('#increment2');
const decrementBookTwo = document.querySelector('#decrement2');
const rmvBookTwo = document.querySelector('#rvm-btn2');
const priceBookTwo = document.querySelector('#price2');
// Rest of the elements
const cartTotal = document.querySelector('#cart-total');
const subTotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const payable = document.querySelector('#payable');

// functions
function incrementDecrement(bookOne, bookTwo) {
    let sub = Number(bookOne) + Number(bookTwo);
    let totalAmt = sub + 50;
    subTotal.innerText = sub + ' Tk.';
    cartTotal.innerText = totalAmt;
    total.innerText = totalAmt + ' Tk.';
    payable.innerText = totalAmt + ' Tk.';
}

// functionality for book one

rmvBookOne.addEventListener('click', function () {
    bookOne.style.display = 'none';
    alertOne.style.display = 'block';
    alertTwo.style.display = 'none';
    let totalAmt = Number(cartTotal.innerText) - Number(priceBookOne.innerText);
    let deduct = totalAmt - 50;
    subTotal.innerText = deduct + ' Tk.';
    cartTotal.innerText = totalAmt;
    total.innerText = totalAmt + ' Tk.';
    payable.innerText = totalAmt + ' Tk.';
    // priceBookOne.innerText = 0;
});

undoOne.addEventListener('click', function () {
    bookOne.style.display = 'block';
    alertOne.style.display = 'none';
    let totalAmt = Number(cartTotal.innerText) + Number(priceBookOne.innerText);
    let deduct = totalAmt - 50;
    subTotal.innerText = deduct + ' Tk.';
    cartTotal.innerText = totalAmt;
    total.innerText = totalAmt + ' Tk.';
    payable.innerText = totalAmt + ' Tk.';
});

closeOne.addEventListener('click', function () {
    alertOne.remove();
    bookOne.remove();
});
// incrementing quantity and updating the price
incrementBookOne.addEventListener('click', function () {
    let itemPrice = 204;
    qntBookOne.value = Number(qntBookOne.value) + 1;
    priceBookOne.innerText = itemPrice * Number(qntBookOne.value);
    incrementDecrement(priceBookOne.innerText, priceBookTwo.innerText);
});
// decrementing quantity and updating the price
decrementBookOne.addEventListener('click', function () {
    if (Number(qntBookOne.value) > 1) {
        let itemPrice = 204;
        qntBookOne.value = Number(qntBookOne.value) - 1;
        priceBookOne.innerText = itemPrice * Number(qntBookOne.value);
        incrementDecrement(priceBookOne.innerText, priceBookTwo.innerText);
    } else {
        alert('You need to atleast have 1 copy of book in your cart!');
    }
});

// functionality for book two

rmvBookTwo.addEventListener('click', function () {
    bookTwo.style.display = 'none';
    alertTwo.style.display = 'block';
    alertOne.style.display = 'none';
    let totalAmt = Number(cartTotal.innerText) - Number(priceBookOne.innerText);
    let deduct = totalAmt - 50;
    subTotal.innerText = deduct + ' Tk.';
    cartTotal.innerText = totalAmt;
    total.innerText = totalAmt + ' Tk.';
    payable.innerText = totalAmt + ' Tk.';
});

undoTwo.addEventListener('click', function () {
    bookTwo.style.display = 'block';
    alertTwo.style.display = 'none';
    let totalAmt = Number(cartTotal.innerText) + Number(priceBookOne.innerText);
    let deduct = totalAmt - 50;
    subTotal.innerText = deduct + ' Tk.';
    cartTotal.innerText = totalAmt;
    total.innerText = totalAmt + ' Tk.';
    payable.innerText = totalAmt + ' Tk.';
});

closeTwo.addEventListener('click', function () {
    alertTwo.style.display = 'none';
});

// incrementing quantity and updating the price
incrementBookTwo.addEventListener('click', function () {
    let itemPrice = 128;
    qntBookTwo.value = Number(qntBookTwo.value) + 1;
    priceBookTwo.innerText = itemPrice * Number(qntBookTwo.value);
    incrementDecrement(priceBookOne.innerText, priceBookTwo.innerText);
});
// decrementing quantity and updating the price
decrementBookTwo.addEventListener('click', function () {
    if (Number(qntBookTwo.value) > 1) {
        let itemPrice = 128;
        qntBookTwo.value = Number(qntBookTwo.value) - 1;
        priceBookTwo.innerText = itemPrice * Number(qntBookTwo.value);
        incrementDecrement(priceBookOne.innerText, priceBookTwo.innerText);
    } else {
        alert('You need to atleast have 1 copy of book in your cart!');
    }
});
