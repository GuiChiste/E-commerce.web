function addButton() {
const addClose = document.getElementById('add-close');
const addContainer = document.getElementById('add-product-continer');
document.getElementById('addtitle').textContent = 'Adicionar Produto';


addClose.addEventListener('click', () => {
    addContainer.style.display = 'none';
})
    addContainer.style.display = 'flex';
}

function viewAside() {
    const aside = document.querySelector('.sidebar');
    const openAsideBar = document.getElementById('openAsideBar');
    const sideblur = document.querySelector('.asideblur');
    
    openAsideBar.addEventListener('click', () => {
        aside.style.display = 'flex'
        openAsideBar.style.display = 'none'
        sideblur.style.display = 'unset'

    })
    sideblur.addEventListener('click', () => {
        aside.style.display = 'none'
        openAsideBar.style.display = 'unset'
        sideblur.style.display = 'none'
    })
}
viewAside()

function excluir() {
    const container = document.querySelectorAll('.product-del');
    
    container.forEach(element => {
        element.style.display != 'flex'
        ? element.style.display = 'flex'
        : element.style.display = 'none'
    })
}

function editar() {
    const container = document.querySelectorAll('.product-edit');
    
    container.forEach(element => {
        element.style.display != 'flex'
        ? element.style.display = 'flex'
        : element.style.display = 'none'
    })
}