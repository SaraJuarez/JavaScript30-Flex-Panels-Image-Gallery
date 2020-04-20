'user strict';

const panels = document.querySelectorAll('.panel');
console.log(panels);

for (let index = 0; index < panels.length; index++) {
    panels[index].addEventListener('click', handleClickOpen)
    panels[index].addEventListener('transitionend', toggleActive)
}

function handleClickOpen(ev) {
    let panelClicked = ev.currentTarget;
    panelClicked.classList.toggle('open');
}

function toggleActive(ev) {
    let panelClicked = ev.currentTarget;
    console.log(ev.propertyName)
    if (ev.propertyName.includes('flex')) {
        panelClicked.classList.toggle('open-active');
    }
}