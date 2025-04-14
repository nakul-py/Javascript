// generate a random color

const randomColor = function () {
    const hexx = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexx[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalID 

const StartChangingColor = function () {
    if(!intervalID) {
        intervalID = setInterval(ChangeBGColor, 1000);
    }

    function ChangeBGColor() {document.body.style.backgroundColor = randomColor();}
};

const StopChangingColor = function () {
    clearInterval(intervalID);
    intervalID = null;
};

document.querySelector("#start").addEventListener("click", StartChangingColor);
document.querySelector("#stop").addEventListener("click", StopChangingColor);