let modebtn = document.getElementById('btn');
let body = document.querySelector('body');
let curMode = 'light';

modebtn.addEventListener("click", () => {
    if (curMode === 'light') {
        curMode = 'dark';
        body.classList.add("dark");
        modebtn.innerHTML="Dark-Mode";
    } else {
        curMode = 'light';
        body.classList.remove("dark");
        modebtn.innerHTML= "Light-Mode";
    }
    console.log(curMode);
});