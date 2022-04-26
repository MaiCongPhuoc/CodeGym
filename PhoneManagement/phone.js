let products = [
    'Iphone 6 S',
    'SamSung',
    'Opple',
    'Apple',
    'Nokia',
]
function renderProduct() {
    let tbProduct = document.querySelector('.table>tbody');
    let htmls = products.map(function (name, index) {
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
        renderProduct();
    } else {
        alert('you have not entered input!! ')
        document.querySelector('#productName').focus();
        reset();
    }
}

function removeProduct(index) {
    products.splice(index, 1);
    renderProduct()
}

function editProduct(index) {
    document.querySelector('#modify').classList.remove('d_none');
    document.querySelector('#new_productName').value = products[index];
    document.querySelector('#bntUpdate').onclick = function () {
        let newProduct = document.querySelector('#new_productName').value;
        if (newProduct && newProduct.trim() != '') {
            products[index] = newProduct;
            renderProduct();
            reset();
            document.querySelector('#modify').classList.add('d_none')
        } else {
            alert('bạn hãy nhập vào update');
        }
    }
}
function sortToA_z() {
    products.sort()
    renderProduct();
}
function sortToZ_a() {
    products.sort();
    products.reverse();
    renderProduct();
}
function reset() {
    document.querySelector('#productName').value = '';
    document.querySelector('#modify').classList.add('d_none')
}
function init() {
    renderProduct();
}
init();