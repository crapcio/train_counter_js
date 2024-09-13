let count = 0;
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")

let increment = () => {
    count = count + 1;
    countEl.textContent = count;
}

let save = () => {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count);
    count = 0;
    countEl.textContent = count;

}