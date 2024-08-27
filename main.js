let products = []

function addProduct() {
    const nome = document.getElementById('productName').value;
    const preco = document.getElementById('productPrice').value;
    const imagem = document.getElementById('productImage').value;
    const frase = document.getElementById('productPhrase').value;

    const editingIndex = document.getElementById('productForm').getAttribute('data-editing');


    if (nome && preco) {

        const produto = {
            name: nome,
            price: parseFloat(preco),
            phrase: frase,
            image: imagem
        };

        if (editingIndex !== null) {
            products[editingIndex] = produto;
            document.getElementById('productForm').removeAttribute('data-editing');
            document.getElementById('addProductButton').textContent = 'Adicionar Produto';
       } else {
            products.push(produto);
        }
        
        renderProducts();
        document.getElementById('productForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function renderProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.map((produto, index) => {
        const productCard = `
            <div class="product-card" data-index="${index}">
                <img id="product-image" src="${produto.image}">
                <div id="product-info">
                    <h3 class="product-name">${produto.name}</h3>
                    <p id="phrase">${produto.phrase}</p>
                    <p id="price" style="color:rgb(75, 255, 75)">A partir de ${(produto.price/12).toFixed(2)}/mês <br> ou ${produto.price.toFixed(2)} a vista.</p>
                    <button class="buttonMore">Saiba mais</button>
                    <a href="#">Comprar ></a>
                </div>
                <div class="product-del">
                    <button class="delThisProduct" onclick="delThis(${index})">DELETAR</button>
                </div>
                <div class="product-edit">
                    <button class="editThisProduct" onclick="editThis(${index})">EDITAR</button>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

function searchProduct() {
    const searchValue = document.querySelector('.search').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function delThis(index) {
    products.splice(index, 1);
    renderProducts();
}

function editThis(index) {
    const produto = products[index]

    document.getElementById('add-product-continer').style.display = 'flex';
    document.getElementById('addtitle').textContent = 'Editar Produto';
    document.getElementById('addProductButton').textContent = 'Atualizar';
    

    document.getElementById('productName').value = produto.name;
    document.getElementById('productPrice').value = produto.price;
    document.getElementById('productImage').value = produto.image;
    document.getElementById('productPhrase').value = produto.phrase;

    document.getElementById('productForm').setAttribute('data-editing', index);
}
