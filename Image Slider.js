let images = Array.from(document.querySelectorAll('.container img'));
let imagesNumber = images.length;
let currentSlider = 1;
let sliderElement = document.getElementById('slider-number');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
//======================================================

//INDICATORS 
let indicatorElement = document.createElement('ul');
indicatorElement.setAttribute('id','indi-ul');
for(let i = 1 ; i<= imagesNumber ; i++){
    let indicatorItems = document.createElement('li');
    indicatorItems.setAttribute('index', i);
    indicatorItems.appendChild(document.createTextNode(i));
    indicatorElement.appendChild(indicatorItems);
}
document.getElementById('indicators').appendChild(indicatorElement);

//=======================================================

//CHECK FUNCTION
let createdUl = document.getElementById('indi-ul');
let indiBulets = Array.from(document.querySelectorAll('#indi-ul li'))
function check(){
    sliderElement.innerHTML = 'Slide ' + (currentSlider)+ ' of ' + (imagesNumber);
    removeActive();
    images[currentSlider-1].classList.add('active');
    createdUl.children[currentSlider-1].classList.add('active');

    if(currentSlider == 1){
        prevBtn.classList.add('disable');
    }else{
        prevBtn.classList.remove('disable')
    }

    if(currentSlider ==imagesNumber){
        nextBtn.classList.add('disable')
    }else{
        nextBtn.classList.remove('disable')
    }
}
check()
// =================================================

//REMOVE FUNCTION
function removeActive(){
    images.forEach((img)=>{
        img.classList.remove('active')
    });

    indiBulets.forEach((bulets)=>{
        bulets.classList.remove('active')
    })
}
// =====================================================

//BUTTONS
nextBtn.onclick = nextImage;
prevBtn.onclick = prevImage;

function nextImage(){
    if(nextBtn.classList.contains('disable')){
        return false
    }else{
        currentSlider++;
        check()
    }
}

function prevImage(){
    if(prevBtn.classList.contains('disable')){
        return false
    }else{
        currentSlider--;
        check();
    }
}
// ========================================================

//LOOP THROUGH THE BULETS
for(let i = 0 ; i< indiBulets.length ; i++){
    indiBulets[i].onclick = function(){
        currentSlider = parseInt(this.getAttribute('index'));
        check()
    }
}








