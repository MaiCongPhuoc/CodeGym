// create class
function Product(id, productName, quantity, price) {
    this.id = id;
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
}

//create each object
// let iphone6 = new Product(1, 'Iphone 6', 5, 5000000);
// let iphone6S = new Product(2, 'Iphone 6 S', 6, 6000000);
// let iphone8 = new Product(3, 'Iphone 8', 4, 8000000);
// let iphoneX = new Product(4, 'Iphone X', 10, 5000000);
// let nokia = new Product(5, 'Nokia', 1, 5000000);
// let Samsung = new Product(6, 'Samsung Glaxy', 9, 5000000);



// create array product
let arrProduct = [];

let index = 10;

let product = new Product(index, 'Iphone 6', 5, 5000000);
arrProduct.push(product);
index++;

product = new Product(index, 'Iphone 6 S', 6, 6000000);
arrProduct.push(product);
index++;

product = new Product(index, 'Iphone 8', 4, 8000000);
arrProduct.push(product);
index++;

product = new Product(index, 'Iphone X', 10, 10000000);
arrProduct.push(product);
index++;

product = new Product(index, 'Nokia', 1, 15000000);
arrProduct.push(product);
index++;

product = new Product(index, 'Samsung Glaxy', 9, 20000000);
arrProduct.push(product);
index++;

// show product
function renderProduct(data) {
    let tbProduct = document.querySelector('.table>tbody');
    let htmls = data.map(function (phone, index) {
        return `
            <tr>
                <td>${phone.id}</td>
                <td>${phone.productName}</td>
                <td id="quantity">${phone.quantity}</td>
                <td>${phone.price} VND</td>
                <td>
                <button onclick="btn_edit(${phone.id})">Edit</button>
                <button onclick="removeProduct(${index})">Remove</button>
                </td>
            </tr>
            `
    })
    tbProduct.innerHTML = htmls.join("");
}

function removeProduct(index) {
    arrProduct.splice(index, 1);
    renderProduct(arrProduct);
}
function btn_edit(id) {
    let product = arrProduct.find(function(value, index) {
        if (value.id == id) {
            return true;
        } else {
            return false;
        }
    })
    // console.log(product)
    document.querySelector('#content_third-chil').classList.remove('d_none');
    //let product = arrProduct[id - 1]
    document.querySelector('#updateName').value = product.productName;
    document.querySelector('#updateQuantity').value = product.quantity;
    document.querySelector('#updatePrice').value = product.price;
    document.querySelector('#btn_update').onclick = function () {
        let name = document.querySelector('#updateName').value;
        let quanti = document.querySelector('#updateQuantity').value;
        let pri = document.querySelector('#updatePrice').value;
        if (!name || !quanti || !pri) {
            alert('please, enter in input!!!')
        } else if(pri % 10000 == 0) {
            product.productName = name;
            product.quantity = quanti;
            product.price = pri;
        }
        renderProduct(arrProduct);
        cleanrForm();
    }
}
function btn_Create() {
    let name = document.querySelector('#textName').value;
    let quantity = document.querySelector('#textQuantity').value;
    let price = document.querySelector('#textPrice').value;
    if (price % 10000 == 0 && name && quantity) {
        if (!name && !quantity && !price) {
            alert('you have to input input?')
        } else {
            product = new Product(index, name, quantity, price);

            arrProduct.push(product)
            index++;

            renderProduct(arrProduct);
            cleanrForm()
        }
    } else {
        alert('please, enter in input!!!')
    }
}
function input_search(event) {
    let key_word = event.target.value;
    let result = arrProduct.filter(function (product, index) {
        return product.productName.toLowerCase().indexOf(key_word.toLowerCase()) != - 1;
    })
    renderProduct(result);
}

function cleanrForm() {
    document.querySelector('#textName').value = '';
    document.querySelector('#textQuantity').value = '';
    document.querySelector('#textPrice').value = '';
    document.querySelector('#updateName').value = '';
    document.querySelector('#updateQuantity').value = '';
    document.querySelector('#updatePrice').value = '';
    document.querySelector('#content_third-chil').classList.add('d_none');
}
renderProduct(arrProduct);