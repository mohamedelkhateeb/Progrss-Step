let progress = document.getElementById('progress')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if(currentActive>circles.length){
        currentActive = circles.length
    }
    add()
    clear()
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive<1){
        currentActive =1;
    }
    add()
    clear()
})

//Add Classes

function add(){
    if(currentActive == 1){
        progress.style.width = '0%'
        prev.classList.add('disabled')
    }else if(currentActive == 2){
        progress.style.width = '33.3%'
        circles[1].classList.add('active')
    }else if(currentActive == 3){
        progress.style.width = '66.9%'
        circles[2].classList.add('active')
    }else if(currentActive == 4) {
        progress.style.width = '99.9%'
        circles[3].classList.add('active')
        next.classList.add('disabled')
    }
    
}

//Clear Classes

function clear(){
    if(currentActive == 3){
        circles[3].classList.remove('active')
        next.classList.remove('disabled')
        prev.classList.remove('disabled')
    }else if(currentActive == 2){
        circles[2].classList.remove('active')
        prev.classList.remove('disabled')
    }else if(currentActive == 1){
        circles[1].classList.remove('active')
    }
}
