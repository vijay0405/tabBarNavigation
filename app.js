
// Get all the tabs
const tabs = document.querySelectorAll('.tab');

tabs.forEach(clickedTab => {
    // Add onClick event listener on each tab
    clickedTab.addEventListener('click', () => {
        // Remove the active class from all the tabs (this acts as a "hard" reset)
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add the active class on the clicked tab
        clickedTab.classList.add('active');
        console.log(clickedTab.classList);
        if(clickedTab.classList.contains('pink')) {
            document.getElementById('main-body').style.backgroundColor = 'pink'
        } else if(clickedTab.classList.contains('purple')) {
            document.getElementById('main-body').style.backgroundColor = 'purple'
        } else if(clickedTab.classList.contains('yellow')) {
            document.getElementById('main-body').style.backgroundColor = 'orange'
        } else if(clickedTab.classList.contains('teal')) {
            document.getElementById('main-body').style.backgroundColor = 'teal'
        }
    });
});
