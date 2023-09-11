console.log("Heril")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);
        
        // Get the id of the clicked button or use a default color
        const backgroundColor = e.target.id || 'defaultColor';
        body.style.backgroundColor = backgroundColor;
    });
});
