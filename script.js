const bottle = document.getElementById("bottle");
const message = document.getElementById("message");

let spinning = false;
let currentRotation = 0;

bottle.addEventListener("click", () => {

    if (spinning) return;

    spinning = true;

    message.innerText = "Girando...";

    if (navigator.vibrate) {
        navigator.vibrate(100);
    }

    const turns =
        Math.floor(Math.random() * 10) + 10;

    const finalAngle =
        Math.floor(Math.random() * 360);

    currentRotation +=
        (turns * 360) + finalAngle;

    bottle.style.transform =
        `rotate(${currentRotation}deg)`;

    setTimeout(() => {

        message.innerText =
        "Parou! Toque para girar novamente";

        if (navigator.vibrate) {
            navigator.vibrate([100,100,100]);
        }

        spinning = false;

    },6000);

});
