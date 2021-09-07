function createSection(name) {
    var section = document.createElement('section');
    section.id = name;
    section.classList.add('section');
    section.textContent = 'Sección ' + name;
    return section;
};

function createSections() {
    var main = document.createElement('main');
    main.classList.add('main');
    
    createMultiple(pageSections, createSection, main);

    document.body.appendChild(main);
}

function createNavbarLogo() {
    var logo = document.createElement('div');
    logo.id = "logo";
    logo.textContent = 'LOGO';
    return logo;
};

function createHeader() {
    var header = document.createElement('header');
    header.classList.add('header');

    document.body.appendChild(header);
}

function createNavbarItem(name) {
    var item = document.createElement('li');
    item.classList.add('menu__item', 'item');
    item.textContent = name;
    return item;
};

function createNavbarList() {
    var list = document.createElement('ul');
    list.classList.add('menu');

    createMultiple(pageSections, createNavbarItem, list);
    
    return list;
}

function createNavbar() {
    var nav = document.createElement('nav');
    nav.classList.add('nav');
    document.body.prepend(nav);
    
    nav.appendChild(createNavbarLogo());

    nav.appendChild(createNavbarList());
}

// 1. Crear navbar
createNavbar();

// 2. Crear un Header
createHeader();

// 3. Crear secciones
createSections();