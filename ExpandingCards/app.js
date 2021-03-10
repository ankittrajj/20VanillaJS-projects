const panels = document.querySelectorAll('.panel');



// adding active class to event listeners 
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClass();
        panel.classList.add('active');
    });

});
function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}