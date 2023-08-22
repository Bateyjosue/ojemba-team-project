import './Assets/Styles/style.css';

const loadComponents = (id, url) =>  {
    fetch(url)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById(id).innerHTML = html;
    });
}

window.onload = () => {
    loadComponents('header', 'src/Components/header.html');
    loadComponents('hero', 'src/Components/hero.html');
    loadComponents('icon-section', 'src/Components/sectionWithIcons.html');
    loadComponents('maibornWolf', 'src/Components/maibornWolf.html');
    loadComponents('footer', 'src/Components/footer.html');
    loadComponents('button__skillset', 'src/Components/button.html');
    loadComponents('ruanda', 'src/Components/ruanda.html');
    loadComponents('managedTeams', 'src/Components/managedTeams.html')
    loadComponents('kotakt', 'src/Components/kotakt.html');
    loadComponents('footer', 'src/Components/footer.html');
}

const expandLessMore = (event) => {
    if (event.target.className === 'plus'){
        event.target.setAttribute('src', '/src/Assets/media/Minus-icon.svg')
        event.target.setAttribute('class', 'minus')
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'block'
    }else if (event.target.className === 'minus'){
        event.target.setAttribute('src', '/src/Assets/media/Plus-icon.svg')
        event.target.setAttribute('class', 'plus')
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'none'
    }
}

const kotakt = document.querySelector('main #kotakt');

kotakt.addEventListener('click', (event) => {
    expandLessMore(event)
});