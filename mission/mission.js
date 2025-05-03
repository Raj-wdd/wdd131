let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.className = 'dark'; // add dark class to body
        logo.src = 'byui-logo_white.png'; // switch to white logo
    } else if (current === 'light') {
        document.body.className = ''; // remove dark class
        logo.src = 'byui-logo_blue.webp'; // switch back to blue logo
    }
}