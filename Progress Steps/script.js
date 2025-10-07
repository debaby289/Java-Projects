// Progress Steps
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Current active step
let currentActive = 1;

// Event listeners for next and previous buttons
next.addEventListener('click',() => {
    currentActive++

    // Ensure currentActive does not exceed number of circles
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})

// Event listener for previous button
prev.addEventListener('click',() => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }  

    update()
})

// Update the progress bar and circles based on current active step
function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else { 
            circle.classList.remove('active')
        }
    })

    // Update the progress bar width
    const actives = document.querySelectorAll('.active')

    // Calculate the width percentage based on active circles
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'

    // Enable/disable buttons based on current active step
    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}