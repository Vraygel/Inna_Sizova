let shadow = document.querySelectorAll('.shadow')
let shadow_next = document.querySelector('.shadow_next')
let ideas_item = document.querySelectorAll('.ideas_item')
let ideas_item_img = document.querySelectorAll('.ideas_item_img')
let help = document.querySelector('.help')
let services = document.querySelector('.services')
let anim = document.querySelector('.anim')
let services_item_wrap = document.querySelectorAll('.services_item_wrap')


let pServices = services.querySelectorAll('p')
let hServices = services.querySelectorAll('h1')

for (const iterator of services_item_wrap) {
    iterator.addEventListener('mouseover', () =>{
        for (const item of services_item_wrap) {
            item.style.animationPlayState = 'paused'
        }
    })
}

for (const iterator of services_item_wrap) {
    iterator.addEventListener('mouseout', () =>{
        for (const item of services_item_wrap) {
            item.style.animationPlayState = 'running'
        }
    })
}

help.addEventListener('mouseover', () => {
    help.classList.remove('help_right') 
    })
    
    help.addEventListener('mouseout', () => {           
        help.classList.add('help_right')   
    })



for (const iterator of ideas_item_img) {
    iterator.addEventListener('mouseover', (event) => {
console.log(event.target);
        event.target.previousElementSibling.style.display = 'block';
        event.target.nextElementSibling.style.display = 'block';
        
    })
    
}


shadow_next.addEventListener('mouseout', (event) => {
    console.log(event.target);
    event.target.parentElement.firstElementChild.style.display = 'none';
          
            event.target.style.display = 'none';
            
        })
        

for (const iterator of shadow) {
    iterator.addEventListener('mouseout', (event) => {
console.log(event.target);
event.target.parentElement.firstElementChild.style.display = 'none';
          
event.target.style.display = 'none';
        
    })
    
}

