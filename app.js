const favourite = {
    tasks: [
        'Reading Books',
        'Operate Computer',
        'Study Programming',
        'Solve Issues',
        'Chatting with Wife'
    ],
    heroes: [
        'Shahrukh Khan',
        'Salman Khan',
        'Amir Khan',
        'Sakib Khan',
        'Imran Khan'
    ]
};

const favouriteFunc1 = () => {
    const ol = document.getElementById('ol');
    ol.innerHTML = '';
    favourite.heroes.forEach(e => {
        ol.innerHTML += `<li>${e}</li>`;
    });
};

const favouriteFunc2 = () => {
    const ol = document.getElementById('ol');
    ol.innerHTML = "";
};

const favouriteFunc3 = () => {
    const ul = document.getElementById('ul');
    ul.innerHTML = '';
    favourite.heroes.forEach(e => {
        ul.innerHTML += `<li>${e}</li>`;
    });
};

const favouriteFunc4 = () => {
    const ul = document.getElementById('ul');
    ul.innerHTML = "";
};

document.getElementById('btn-1').addEventListener('mouseover', () => {
    const body = document.getElementById('body');
    if(body.className == 'color-1') {
        body.className = 'color-2';
    } else if(body.className == 'color-2') {
        body.className = 'color-3';
    } else if(body.className == 'color-3') {
        body.className = 'color-4';
    } else if(body.className == 'color-4') {
        body.className = 'color-5';
    } else if(body.className == 'color-5') {
        body.className = 'color-1';
    }
});