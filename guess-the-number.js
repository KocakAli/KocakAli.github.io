document.addEventListener("DOMContentLoaded",()=>{ 
   
    startGame();

});


const startGame = ()=>{
    const rndmNumber = Math.floor(Math.random() * 100);
    console.log(rndmNumber);
    const inp = document.querySelector('input');
    const btn = document.querySelector('button');
    let chance = 1;

    checkAnswer(inp,btn,chance,rndmNumber);

}




const checkAnswer = (inp,btn,chance,rndmNumber)=>{
   btn.addEventListener('click', ()=>{
        const data = inp.value;
        const tb = document.querySelector('tbody');
       
        if(data > 100 || data < 1){
            alert('number must be between 1 and 100');
            inp.textContent = "";
            focus(inp);
        }else if(data == rndmNumber){
            
            const row = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            

            td1.textContent = data;
            td1.style.fontWeight = "bold";
            td2.textContent = "Correct Answer";
            td2.style.color = "green";
            td2.style.fontWeight = "bold"
            const td3 = document.createElement('td');
            td3.textContent = `${chance}.`;
            td3.style.color = "orange";
            td3.style.fontWeight = "bold";


            row.appendChild(td3);
            row.appendChild(td1);
            row.appendChild(td2);
            tb.appendChild(row);

        }else{
            const row = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');

           ;
            td1.textContent = data;
            td1.style.fontWeight = "bold";

            td2.style.color = "red";
            td2.style.fontWeight = "bold";

            
            if(data > rndmNumber){    
                td2.textContent = "Your guess is higher than the number"; 
            }else if(data < rndmNumber){
                td2.textContent = "Your guess is lower than the number"; 
            }
            

            const td3 = document.createElement('td');
            td3.textContent = `${chance}.`;
            td3.style.color = "orange";
            td3.style.fontWeight = "bold";

            row.appendChild(td3);
            row.appendChild(td1);
            row.appendChild(td2);
            tb.appendChild(row);
            
            inp.value = "";
            inp.focus();
            chance++;
        }
        if(chance == 11){
            gameOver(inp,btn);
        }
       
    });
 
}

const gameOver = (inp,btn) =>{
    const e = document.querySelector('tbody')
    var child = e.lastElementChild; 
    inp.disabled = true;
    btn.disabled = true;
}
    
        

 

