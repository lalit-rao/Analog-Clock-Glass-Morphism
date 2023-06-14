const degree = 6;
const hour = document.querySelector('#hr');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');
setInterval(() => {
    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * degree;
    const ss = date.getSeconds() * degree;

    hour.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
});
