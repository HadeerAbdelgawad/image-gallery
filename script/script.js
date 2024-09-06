const sliderModal = document.getElementById('slider-modal');
const sliderContainer = document.getElementById('slider-container');
const images= document.querySelectorAll(".gallery img")
const prev=document.getElementById("prev-btn")
const next=document.getElementById("next-btn")
const closeBtn=document.getElementById('close-btn')
const bgBody=document.getElementById("bg-body")


let currentIndex=0

images.forEach((img,index ,e)=>{
    // e.preventDefault()
    img.addEventListener("click", ()=>{
        currentIndex=index
        openSlider();
        prev.style.display="block"
        next.style.display="block"
        closeBtn.style.display="block"
        sliderModal.style.display="block"
        bgBody.style.display="block"
        sliderContainer.style.width="100%"
    })
})

function openSlider(){
    sliderContainer.innerHTML=''
    images.forEach((img,index)=>{
        const imgElement= document.createElement('img')
        imgElement.src=img.src
        imgElement.alt= img.alt
        imgElement.style.display=index===currentIndex? 'block':'none'
        sliderContainer.appendChild(imgElement)
    })
    sliderModal.style.display='flex'
    
}

function updateSlide(){
    const slides=sliderContainer.querySelectorAll('img')
    slides.forEach((slide,index)=>{
        slide.style.display=index===currentIndex?'block':'none'
    })
}

prev.addEventListener('click',()=>{
    currentIndex= (currentIndex -1 +images.length) % images.length
    updateSlide()
})

next.addEventListener('click',()=>{
    currentIndex=(currentIndex + 1)%images.length
    updateSlide()
})

closeBtn.addEventListener('click',()=>{
    sliderModal.style.display='none'
    bgBody.style.display="none"
})

