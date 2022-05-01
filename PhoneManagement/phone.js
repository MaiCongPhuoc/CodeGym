let products = [
    'Iphone 6 S',
    'SamSung',
    'Opple',
    'Apple',
    'Nokia',
]
function renderProduct(data) {
    let tbProduct = document.querySelector('.table>tbody');
    let htmls = data.map(function (name, index) {
        return `<tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>
                    <button  class="btn" onclick="editProduct(${index})">edit</button>
                    <button  class="btn" onclick="removeProduct(${index})">remove</button>
                </td>
            </tr>`
    })
    tbProduct.innerHTML = htmls.join('');
}
function createProduct() {
    let nameProduct = document.querySelector('#productName').value;
    if (nameProduct && nameProduct.trim() != '') {
        products.push(nameProduct)
        reset();
        renderProduct(products);
    } else {
        alert('you have not entered input!! ')
        document.querySelector('#productName').focus();
        reset();
    }
}

function removeProduct(index) {
    products.splice(index, 1);
    renderProduct(products)
}

function editProduct(index) {
    document.querySelector('#modify').classList.remove('d_none');
    document.querySelector('#new_productName').value = products[index];
    document.querySelector('#bntUpdate').onclick = function () {
        let newProduct = document.querySelector('#new_productName').value;
        if (newProduct && newProduct.trim() != '') {
            products[index] = newProduct;
            renderProduct(products);
            reset();
            document.querySelector('#modify').classList.add('d_none')
        } else {
            alert('bạn hãy nhập vào update');
        }
    }
}
function sortToA_z() {
    products.sort()
    renderProduct(products);
}
function sortToZ_a() {
    products.sort();
    products.reverse();
    renderProduct(products);
}
function search_ketword(event) {
    let key_word = event.target.value;
    let result = products.filter(function(product) {
        return product.toLowerCase().indexOf(key_word.toLowerCase()) != - 1;
    })
    console.log(result)
    renderProduct(result);
}
function reset() {
    document.querySelector('#productName').value = '';
    document.querySelector('#modify').classList.add('d_none')
}
function init() {
    renderProduct(products);
}
init();