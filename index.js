const menuTag = document.querySelector(".menu") 
const asideTag = document.querySelector(".menuA")
const containerTag = document.querySelector(".container")


menuTag.addEventListener("click", function(){

    asideTag.classList.toggle("open");
    containerTag.classList.toggle("open");

    if(asideTag.classList.contains("open")){
    menuTag.innerHTML = '<img src="https://i.postimg.cc/jjSmrF4V/back.png">';}
    else{
    menuTag.innerHTML = '<img src="https://i.postimg.cc/DzgTFGXD/menu.png">';
    }
})

const posterWrap = document.querySelector(".poster_wrap");
const photos = posterWrap.querySelectorAll("img");


posterWrap.addEventListener("click", function(){

    photos.forEach(photo =>{
        let randomX = Math.round(Math.random()*3)*20 - 20; 
        let randomY = Math.round(Math.random()*2)*20 - 20; 
        photo.style.transform = `translate(${randomX}px, ${randomY}px)`;

    })

})

//클릭시 이미지 z-index 변화
let clickNum = 0;
posterWrap.addEventListener("click", function(){
    clickNum++;
    console.log(clickNum); //1,2
    console.log(clickNum%5); //1,2,1,2

    photos[clickNum%photos.length].style.zIndex = clickNum;
})

// 포스터에 마우스 over시 사이즈 변환
posterWrap.addEventListener("mouseover", function(){
    photos.forEach(photo =>{
        photo.style.transform = "scale(1.05)";
        photo.style.transition = "transform 0.3s ease-in-out"; 
    })
})

posterWrap.addEventListener("mouseout", function(){
    photos.forEach(photo =>{
        photo.style.transform = "translate(0, 0)";
        photo.style.transition = "transform 0.3s ease-in-out"; 
    })
})
