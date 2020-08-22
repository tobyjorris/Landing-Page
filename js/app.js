const main = document.querySelector('main');
const navbar = document.querySelector('#navbar__list');

//Nav-Menu-Item Factory
const createNavLi = sectionId => {
    const navMenuListElement = document.createElement('li');
    navMenuListElement.innerHTML = `<a class="menu__link" href="section${sectionId}">Section ${sectionId}</a>`;
    return navMenuListElement;
}

//Section Factory
const createSectionEl = sectionNumber => {
    const sectionElement = document.createElement('section');
    sectionElement.setAttribute('id', `section${sectionNumber}`)
    sectionElement.setAttribute('data-nav', `Section ${sectionNumber}`)
    sectionElement.innerHTML = `
        <div class="landing__container">
        <h2>Section ${sectionNumber}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>`
    return sectionElement;
}

// dynamically append 1-4 more sections to main -- always appends 1, can append up to 4 for a max total of 7
const decideNumOfSections = () => Math.floor(Math.random() * (7 - 4 + 1)) + 4;

for (let i = 4; i <= decideNumOfSections(); i++) {
    main.appendChild(createSectionEl(i))
}

// build the nav
const mainSections = document.getElementsByClassName('landing__container');

for (let i = 1; i <= mainSections.length; i++) {
    navbar.appendChild(createNavLi(i))
}

//Retrieves coordinate of whichever nav-menu-item target is clicked, used in <a> click listener
const getTargetCoordinates = elementRef => {
    if (elementRef.nodeName === 'A') {
        return document.getElementById(elementRef.getAttribute('href')).getBoundingClientRect();
    } else if (elementRef.nodeName === 'SECTION') {
        return document.getElementById(elementRef.id).getBoundingClientRect();
    } else {
        console.log('couldn\'t select element')
    }
}

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function () {
    let inFocusSectionId;

    document.querySelectorAll('section').forEach(section => {
        const locationFromTop = getTargetCoordinates(section).top;
        if (locationFromTop > (window.innerHeight * 0.05) && locationFromTop < window.innerHeight * 0.85) {
            section.setAttribute('class', 'your-active-class');
            inFocusSectionId = section.id;
            document.querySelectorAll('a').forEach(link => {
                console.log(link.getAttribute('href'), 'href Attribute');
                if (link.getAttribute('href') === section.id) {
                    console.log('added class to link', link.href)
                    link.classList.add('menu__link__active');
                } else {
                    console.log('removed class from link');
                    link.classList.remove('menu__link__active');
                }
            })
        } else {
            section.removeAttribute('class');
        }
    })
    console.log(inFocusSectionId);
});

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({
            top: getTargetCoordinates(link).y - document.body.getBoundingClientRect().y,
            left: 0,
            behavior: "smooth"
        });
    })
})




