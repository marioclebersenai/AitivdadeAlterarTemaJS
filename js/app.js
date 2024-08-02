let icon = document.querySelector("#icon");
let elementos = document.querySelectorAll(".tema-escuro");

icon.addEventListener('click', () => {
    icon.classList.toggle('fa-moon');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].classList.toggle('tema-claro');
        
    }    
});