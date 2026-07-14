const switchBtn = document.getElementById("switchBtn");
const person = document.getElementById("person");
const statusText = document.getElementById("status");

let isOn = false;
let switchCount = 0;
const maxSwitches = 10;

switchBtn.addEventListener("click", () => {

    // Եթե լամպը արդեն փչացած է
    if (switchCount >= maxSwitches) {
        statusText.textContent = "💡 Lamp is broken!";
        switchBtn.disabled = true;
        switchBtn.textContent = "Broken";
        return;
    }

    if (!isOn) {
        // LIGHT ON
        document.body.classList.add("on");

        person.classList.remove("sad");
        person.classList.add("happy");

        statusText.textContent = "😊 I'm happy!";
        switchBtn.textContent = "Turn OFF";

        isOn = true;
    } else {
        // LIGHT OFF
        document.body.classList.remove("on");

        person.classList.remove("happy");
        person.classList.add("sad");

        statusText.textContent = "🙍 I'm sad...";
        switchBtn.textContent = "Turn ON";

        isOn = false;
    }

    switchCount++;

    // 10-րդ փոխարկումից հետո լամպը փչանա
    if (switchCount >= maxSwitches) {
        if (isOn) {
            document.body.classList.remove("on");
            person.classList.remove("happy");
            person.classList.add("sad");
        }

        statusText.textContent = "💡The lamp is broken!";
        switchBtn.textContent = "Broken";
        switchBtn.disabled = true;
    }
});
