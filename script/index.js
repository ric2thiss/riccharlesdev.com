// Navigation in Mobile
let toggle = document.getElementById("toggle")
// Get modal which is the ul
const modal = document.querySelector('.modal-ul')
// Get the Exit element in HTML
const exit = document.querySelector(".close");

toggle.addEventListener('click', ()=> {
    modal.style.display = "block";
})

exit.addEventListener('click', ()=> {
    modal.style.display = "none";
})

window.onclick = (event)=>{
    event.target == modal ? modal.style.display = "none" : '';
}

// --------------------