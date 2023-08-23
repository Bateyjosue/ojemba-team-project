import './Assets/Styles/style.css';

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

qualitat .addEventListener('click', (event) => {
    expandLessMore2(event)
});
