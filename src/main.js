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
    loadComponents('footer', 'src/Components/footer.html');
    loadComponents('button__skillset', 'src/Components/button.html');
    loadComponents('expand', 'src/Components/expand.html');
    loadComponents('textWithLine', 'src/Components/textWithLine.html');
    loadComponents('kotakt', 'src/Components/kotakt.html');
    
}