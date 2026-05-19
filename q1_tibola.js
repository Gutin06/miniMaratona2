
function primeira(){
    let bot = document.querySelector('.botao')
    .addEventListener('click', () =>{
        
let numero1 = document.querySelector('#num1').value.split(" ").map(Number);
let numero2 = Number(document.querySelector('#num2').value)

let foi = false

for (let i = 0; i < numero1.length; i++) {
    if(numero1[i] + numero1[i + 1] === numero2){
        alert(numero2)
        foi = true
        break
    }
}

if(!foi){
    alert('Deu ruim')
    }
    })
}
primeira()

