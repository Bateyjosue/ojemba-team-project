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
    loadComponents('icon-section', 'src/Components/sectionWithIcons.html');    // // loadComponents('textWithLine', 'src/Components/textWithLine.html');
    loadComponents('managedTeams', 'src/Components/managedTeams.html')
    loadComponents('kotakt', 'src/Components/kotakt.html');
    loadComponents('footer', 'src/Components/footer.html');
}

const kotakt = document.querySelector('main #kotakt');

kotakt.addEventListener('click', (event) => {
    if (event.target.className === 'plus'){
        event.target.setAttribute('src', '/src/Assets/media/Minus-icon.svg')
        event.target.setAttribute('class', 'minus')
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'block'
        console.log(event.target.parentNode.nextSibling.nextElementSibling.innerHTML)
    }else if (event.target.className === 'minus'){
        event.target.setAttribute('src', '/src/Assets/media/Plus-icon.svg')
        event.target.setAttribute('class', 'plus')
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'none'
        console.log(event.target.parentNode.nextSibling.nextElementSibling.innerHTML)
    }
});