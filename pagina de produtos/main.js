
//botão de seleção das marcas
document.querySelectorAll('.btn-content').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });


        targetElement.style.display = 'block';
    });
})

document.getElementById('searchBtn').addEventListener('click', function() {
    document.getElementById('searchOverlay').classList.add('visible');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('searchOverlay').classList.remove('visible');
});



// logica input pesquisa

document.getElementById('searchBtn').addEventListener('click', function() {
    
});

document.getElementById('searchInput').addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll('.card');

    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }

        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'block';
        });
    });
});