const stratingMinutes = 10;
let time = stratingMinutes * 60;

const countDownEl = document.getElementById('countDown')

setInterval(updateCountDown,1000)

function updateCountDown(){
    const minutes =  Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}: ${seconds}`
    time--;
}