let products = []
        
function addProduct() {
    const nome = document.getElementById('productName').value;
    const preco = document.getElementById('productPrice').value;
    const imagem = document.getElementById('productImage').value;
    const frase = document.getElementById('productPhrase').value;

    if (nome && preco) {

        const produto = {
            name: nome,
            price: parseFloat(preco),
            phrase: frase,
            image: imagem
        };

        products.push(produto);
        renderProducts();

        document.getElementById('productForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function renderProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    products.map(produto => {
        const productCard = `
            <div class="product-card">
                <img id="product-image" src="${produto.image}">
                <div id="product-info">
                    <h3>${produto.name}</h3>
                    <p id="phrase">${produto.phrase}</p>
                    <p id="price" style="color:rgb(75, 255, 75)">A partir de ${(produto.price/12).toFixed(2)}/mês ou <br> R$ ${produto.price.toFixed(2)} a vista.</p>
                    <button id="buttonMore">Saiba mais</button>
                    <a href="#">Comprar ></a>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}
