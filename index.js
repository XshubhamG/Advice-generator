const btnEl = document.getElementById('btn');
const adviceTextEl = document.getElementById('advice-text');
const adviceIdEl = document.getElementById('advice-id');


let advice = async function() {

    try {

        adviceTextEl.textContent = `Loading...`;
        btnEl.disabled = true;
        btnEl.style = 'background:gray';

        let slip_id = Math.floor(Math.random()*200);
        const response = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
        const data = await response.json();
        
        adviceTextEl.textContent = data.slip.advice;
        adviceIdEl.textContent = data.slip.id;
        btnEl.disabled = false;
        btnEl.style = 'background:hsl(150, 100%, 66%)';
        
    } catch (error) {
        console.error('!something went wrong');
    }

}

btnEl.addEventListener('click', advice);