// cart 1. 
let serial = 0;
document.getElementById('cart-one').addEventListener('click', function () {

    // get data from html using ID 
    serial += 1;
    const ProductName = document.getElementById('piano').innerText;
    const ProductPrice = document.getElementById('piano-price').innerText;
    const ProductQty = document.getElementById('piano-qty').innerText;

    // multiply
    const priceTotal = parseInt(ProductPrice) * parseInt(ProductQty);

    // display data to the cart section 
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)
})

// cart 2. 
document.getElementById('cart-two').addEventListener('click', function (e) {

    // get data from html using ID
    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // doing sum 
    const priceTotal = parseInt(ProductPrice) + parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)

})

document.getElementById('cart-three').addEventListener('click', function (e) {

    // get data from html using ID
    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // doing sum 
    const priceTotal = parseInt(ProductPrice) - parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)

})

document.getElementById('cart-four').addEventListener('click', function (e) {

    // get data from html using ID
    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // doing sum 
    const priceTotal = parseInt(ProductPrice) - parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)

})

document.getElementById('cart-five').addEventListener('click', function (e) {

    // get data from html using ID
    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    // doing sum 
    const priceTotal = parseInt(ProductPrice) - parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal);

})

// last cart devide operation
document.getElementById('cart-six').addEventListener('click', function () {
    const ProductName = document.getElementById('nike-shoe').innerText;
    const ProductPrice = document.getElementById('input-one').value;
    const ProductQty = document.getElementById('input-two').value;

    // const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    // const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    // const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const total = parseInt(ProductPrice) / parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, total);

})

// common funciton to display data 
function displayData(ProductName, ProductPrice, ProductQty, priceTotal) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${ProductName}</td>
    <td>${ProductPrice}</td>
    <td>${ProductQty}</td>
    <td>${priceTotal}</td>
    
    `;
    container.appendChild(tr);
}