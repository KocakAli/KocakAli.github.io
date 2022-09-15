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

            gameOver(inp,btn,chance);

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
          
            gameOver(inp,btn,chance);
           
        }
       
    });
 
}

const gameOver = (inp,btn,chance) =>{
    inp.disabled = true;
    btn.disabled = true;

    h3 = document.createElement("h3");
    h3.style.fontWeight ="bold";
    if(chance < 11){
        h3.textContent = "!!!You found the correct answer!!!";
        h3.style.color = "green";     
    }else{
        h3.textContent = "!!!GAME OVER!!!";
        h3.style.color = "red";
    }

    body = document.querySelector("body");

    con = document.createElement("div");
    con.setAttribute("class", "d-flex align-items-center flex-column mt-3");

    
    
    btnn = document.createElement('button');
    btnn.textContent = "Play Again";
    btnn.setAttribute("class", "mt-2 btn btn-primary btn-sm");
    con.appendChild(h3);
    con.appendChild(btnn);
    body.appendChild(con);

    btnn.addEventListener("click", resetGame);

}

const resetGame = () =>{
    
   console.log("sa")
}
        

 

