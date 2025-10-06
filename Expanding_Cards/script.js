// Select all elements with the class 'panel'
const panels = document.querySelectorAll('.panel')

// Add click event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// Function to remove 'active' class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}