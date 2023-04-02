const keys = document.querySelectorAll(".key");

function playNota(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!key) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransiton(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransiton))
window.addEventListener("keydown", playNota)

























function User(name, lastName, birthday) {
    this.name = name 
    this.lastName = lastName
    this.birthday=birthday
}

const user1 = new User("Salim", "Shaptoliyev", "12324")
const user2 = new User("Jonson", "qoqiyev", "39872378")

console.log(user1);
console.log(user2);
