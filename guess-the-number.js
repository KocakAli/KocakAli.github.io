document.addEventListener("DOMContentLoaded",()=>{ 
   
    startGame();

});


const startGame = ()=>{
    const rndmNumber = Math.floor(Math.random() * 100);
    console.log(rndmNumber);
    const inp = document.querySelector('input');
    const btn = document.querySelector('button');
    let chance = 10;

    btn.addEventListener('click', ()=>{
        const data = inp.value;

        if(data == rndmNumber){
            const tb = document.querySelector('tbody');
            const row = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.textContent = data;
            td2.textContent = "Correct Answer";

            row.appendChild(td1);
            row.appendChild(td2);

            tb.appendChild(row);
        }
    
    });
 

}