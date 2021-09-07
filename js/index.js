function addMenuEventListeners() {
    document
        .querySelectorAll('.menu__item')
        .forEach(function(item) {
            item.addEventListener('click', function() {
                menuScroll(item.textContent)
            });
        });
    
    document
        .getElementById('logo')
        .addEventListener('click', function() {
            menuScroll('Inicio');
        });
}

function menuScroll(name) {
    var position = window.scrollY + document.getElementById(name).getBoundingClientRect().top;
    window.scrollTo(0, position - 80);
}

function init() {
    window.scrollTo(0,0);
    addMenuEventListeners();
}

window.onload = init;