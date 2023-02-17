let serial = 0;
document.getElementById('cart-one').addEventListener('click', function () {

    serial += 1;
    const ProductName = document.getElementById('piano').innerText;
    const ProductPrice = document.getElementById('piano-price').innerText;
    const ProductQty = document.getElementById('piano-qty').innerText;

    const priceTotal = parseInt(ProductPrice) * parseInt(ProductQty);  

    displayData(ProductName, ProductPrice, ProductQty, priceTotal)
})

document.getElementById('cart-two').addEventListener('click', function(e){ 

    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const priceTotal = parseInt(ProductPrice) + parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)
})

document.getElementById('cart-three').addEventListener('click', function(e){ 

    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const priceTotal = parseInt(ProductPrice) - parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)
})

document.getElementById('cart-four').addEventListener('click', function(e){ 

    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const priceTotal = parseInt(ProductPrice) - parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)
})

document.getElementById('cart-five').addEventListener('click', function(e){ 

    const ProductName = e.target.parentNode.parentNode.children[0].innerText;
    const ProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const ProductQty = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const priceTotal = parseInt(ProductPrice) - parseInt(ProductQty);
    displayData(ProductName, ProductPrice, ProductQty, priceTotal)

})

function displayData(ProductName, ProductPrice, ProductQty, priceTotal){
    const container = document.getElementById('table-container')
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