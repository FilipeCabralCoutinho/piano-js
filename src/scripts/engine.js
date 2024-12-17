const pianoKeys = document.querySelectorAll(".piano-keys .key");
let mapedKeys = [];
const volumeSlider = document.querySelector(".volume-slider input");
let volume = "0.5";
const keysCheck = document.querySelector(".keys-check input")


async function playTune(key) {
    const audio = new Audio(`src/tunes/${key}.wav`);
    audio.play();
    audio.volume = volume;

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{clickedKey.classList.remove("active")}, 150)
}

pianoKeys.forEach((key) =>{
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)){
        playTune(e.key);
    } 
});

const handleVolume = (e) => {volume = e.target.value};

const showHideKeys = () =>{
    pianoKeys.forEach(key => {
        key.classList.toggle("hide");
    });
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys)