var pageSections = ['Inicio', 'Sobre Mi', 'Proyectos', 'Contact'];

function createMultiple(items, builder, container) {
    items.forEach(function(item) {
        container.appendChild(builder(item));
    });
};
