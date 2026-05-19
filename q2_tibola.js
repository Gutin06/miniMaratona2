function testee(){
    document.querySelector('.botao')
    .addEventListener('click', () =>{
        let frase = document.querySelector('.impu').value;
        let contador = 0

        for(let i = 0; i < frase.length; i++){
            if(frase[i] !== '(' && frase[i] !== ')'){
                alert('Somente parênteses, tanso')
                return
            }

            if(frase[i] === "("){
                contador += 1
            }else if (frase[i] === ")"){
                contador -= 1
            }

            if(contador < 0){
                alert('PODE NÃO MAN')
                return
            }
        }

        if(contador === 0){
                alert('Funcinou')
            }else{
                alert('Nah')
            }

        
    })
}testee();

/* */