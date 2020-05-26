//  Dom Elements
const container = document.getElementById('container');
const text = document.getElementById('text');

// Variables
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Check
console.log(breatheTime, holdTime);

// Function call
breathAnimation();

// Function breathe animation
function breathAnimation(){
    console.log('Breathe In!');

    setTimeout(() => {
        console.log('Hold');

        setTimeout(()=>{
            console.log('Breathe Out!')
        }, holdTime);
    }, breatheTime);

}
