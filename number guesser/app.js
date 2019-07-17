
const num = document.querySelector('#number');
const btn = document.querySelector('#submit');
const reset = document.querySelector('#reset');

const list = document.querySelector('p');



let number; 
let chances;

document.addEventListener('DOMContentLoaded', resetGame);

btn.addEventListener('click', guessNumber);
reset.addEventListener('click', resetGame);


function resetGame() {
    number = Math.floor(Math.random() * 10) + 1  ;
    chances = 3;
    num.disabled = false;
    btn.disabled = false;
    btn.style.display = 'inline';
    reset.style.display = 'none';  

    list.innerHTML = '';
    
    
}



function guessNumber() {
        const guessedNumber = parseInt(num.value);

        if(isNaN(guessedNumber) || guessedNumber>10 || guessedNumber<1) {
            list.className = "bg-danger"
            list.innerHTML = `please check your numbers`;


        }
        else {
            if(guessedNumber === number){
                console.log('you win');
                list.innerHTML = `${num.value} is correct, you win`;
                list.className = "bg-success";
                num.disabled = true;
                btn.disabled = true;
                btn.style.display = 'none';
                reset.style.display = 'inline';  
                

                
    
    
            }
            else{
                chances-=1;
                //console.log('incorrect, chanceslesft = ', chances);
                if(chances>0) {
                     list.className = "bg-danger";
                    list.innerHTML = `${num.value} is incorrect, ${chances} chances left`;
                    
                }
                
    
                if(chances === 0) {
                    list.innerHTML = `game over, ${number} was the correct answer`;
                    list.className = "bg-warning";                    
                    num.disabled = true;
                    btn.disabled = true;
                    btn.style.display = 'none';
                    reset.style.display = 'inline';

    
                }
                
    
            }
    
            num.value = '';
                

        }
        
        

       
}
