import './assets/styles/style.css';
const loadComponents = (id, url) =>  {
    fetch(url)
    .then((response) => response.text())
    .then((html) => {
        document.getElementById(id).innerHTML = html;
    });
}

window.onload = () => {
    loadComponents('header', 'src/components/header.html');
    loadComponents('hero', 'src/components/hero.html');
    loadComponents('icon-section', 'src/components/sectionWithIcons.html');
    loadComponents('maibornWolf', 'src/components/maibornWolf.html');
    loadComponents('footer', 'src/components/footer.html');
    loadComponents('unsere-teams', 'src/components/unsere.html');
    loadComponents('ruanda', 'src/components/ruanda.html');
    loadComponents('qualitat', 'src/components/qualitat.html');
    loadComponents('managedTeams', 'src/components/managedTeams.html')
    loadComponents('kotakt', 'src/components/kotakt.html');
    loadComponents('footer', 'src/components/footer.html');
    loadComponents('founders', 'src/components/founders.html');
}
const expandLessMore = (event) => {
    if (event.target.textContent === 'add'){
        event.target.textContent = 'remove'
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'block'
    }else if (event.target.textContent === 'remove'){
        event.target.textContent = 'add'
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'none'
    }
    if(event.target.textContent === 'expand_more'){
        event.target.textContent  = 'expand_less'
        event.target.parentNode.nextElementSibling.style['display'] = 'block';
    }else if(event.target.textContent === 'expand_less'){
        event.target.textContent  = 'expand_more'
        event.target.parentNode.nextElementSibling.style['display'] = 'none';
    }
    else{
        console.log('Managed Africa team clicked');
    }
}
const skillBTN = (content) => `<button type="button">${content}</button>`;
const expandLessMore2 = (event) => {
    if (event.target.textContent === 'add'){
        event.target.textContent = 'remove'
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'block'
    }else if (event.target.textContent === 'remove'){
        event.target.textContent = 'add'
        event.target.parentNode.nextSibling.nextElementSibling.style['display'] = 'none'
    }
}

const kotakt = document.querySelector('main #kotakt');
const managedTeams = document.querySelector('main #managedTeams');
const qualitat = document.querySelector('main #qualitat');
const skillContainer = document.querySelector('main #skillset-section #skills-btn');
const btns = document.querySelector('main #skillset-section #skillset > #skills-btn');
const skills = ['JWT','CSS','frontend archite','Figma', 'Next.JS', 'ORM', 'Prisma','GraphQL', 'CI/CD', 'Scrum Framework', 'Typescript','Javascript','React','REST APIs','Redux','test driven development', 'Data modeling'];

kotakt.addEventListener('click', (event) => {
    expandLessMore(event)
});

managedTeams.addEventListener('click', (event) => {
    expandLessMore(event)
})

skills.map((skill) => skillContainer.innerHTML += `<button class="button">${skill}</button>`)

qualitat.addEventListener('click', (event) => {
    expandLessMore2(event)
});