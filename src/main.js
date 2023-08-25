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
    loadComponents('unsere-teams', 'src/Components/unsere.html');
    loadComponents('ruanda', 'src/Components/ruanda.html');
    loadComponents('qualitat', 'src/Components/qualitat.html');
    loadComponents('managedTeams', 'src/Components/managedTeams.html')
    loadComponents('kotakt', 'src/Components/kotakt.html');
    loadComponents('footer', 'src/Components/footer.html');
    loadComponents('founders', 'src/Components/founderss.html');
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
const expandLessMore2 = (event) => {
    if (event.target.className === 'plus2'){
        event.target.setAttribute('src', '/src/Assets/media/minus.svg')
        event.target.setAttribute('class', 'minus2')
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'block'
    }else if (event.target.className === 'minus2'){
        event.target.setAttribute('src', '/src/Assets/media/plusI.svg')
    event.target.setAttribute('class', 'plus2')
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'none'
    }
}

const kotakt = document.querySelector('main #kotakt');
const managedTeams = document.querySelector('main #managedTeams');
const qualitat = document.querySelector('main #qualitat-section');

kotakt.addEventListener('click', (event) => {
    expandLessMore(event)
});

managedTeams.addEventListener('click', (event) => {
    expandLessMore(event)
})

qualitat.addEventListener('click', (event) => {
    expandLessMore2(event)
});

managedTeams.addEventListener('click', (event) => {
    if(event.target.classList.contains('expand-more')){
        event.target.setAttribute('src','/src/Assets/media/Expand-less-icon.svg')
        event.target.setAttribute('class','expand-less')
        event.target.parentNode.nextElementSibling.style['display'] = 'block';
    }else if(event.target.classList.contains('expand-less')){
        event.target.setAttribute('src','/src/Assets/media/Expand-more-icon.svg')
        event.target.setAttribute('class','expand-more')
        event.target.parentNode.nextElementSibling.style['display'] = 'none';
    }
});
