let time = document.getElementById('time');
let date = document.getElementById('date');

setInterval(() => {
    let newTime = new Date();
    time.innerHTML = newTime.toLocaleTimeString();
}, 1000)

setInterval(() => {
    let newDate = new Date();
    date.innerHTML = newDate.toLocaleDateString();
}, 1000)
