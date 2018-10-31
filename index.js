const menu = document.getElementById('start-menu');
let displayed = false;

getTime = () => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm;

    if (hours > 12) {
        hours %= 12;
        ampm = 'PM';
    }
    else {
        if (hours === 0) {
            hours = 12;
        }
        ampm = 'AM';
    }

    minutes < 10 ? minutes = '0' + minutes : minutes;

    let time = document.getElementById("time");

    time.innerHTML = `${hours}:${minutes} ${ampm}`;

    setTimeout(getTime, 1000 * 30);
}

getTime();

openFolder = (content) => {
    if (content === 'internet') {
        $('#error-box').css({ 'display': 'block' });
        $('#error-box').draggable();
    }
    else {
        $('#folder-window').css({ 'display': 'block' });
        $('#folder-window').draggable();
    }
}

closeFolder = (element) => {
    element.parentElement.parentElement.style.display = 'none';
}

viewImage = (img) => {
    document.getElementById("preview-img").src = img;
    document.getElementById("full-screen").style.display = 'grid';
    document.getElementById("full-screen").style.placeItems = 'center';
}

hideImage = () => {
    $('#full-screen').css({ 'display': 'none' });
}

displayMenu = () => {
    if (!displayed) {
        $('#start-menu').css({ 'display': 'block' });
        $('#start-menu-btn').css({ 'border-color': 'rgba(0, 0, 0, 0.3) lightgray lightgray rgba(0, 0, 0, 0.3)' });
    }
    else {
        $('#start-menu').css({ 'display': 'none' });
        $('#start-menu-btn').css({ 'borderColor': 'lightgray rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3) lightgray' });
    }

    displayed = !displayed;
}

closeTab = () => {
    if (confirm('Are you sure you want to close this window?')) {
        close();
    }
}