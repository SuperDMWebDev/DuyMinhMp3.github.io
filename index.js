const myArray=[
    {
        name:"Sorry",
        img: "./assets/img/sorry.jpg",
        audio: "./assets/video/sorry.mp4",
        sing:"Justin bieber"
    },
    {
        name: "Hồng Nhan",
        img: "./assets/img/logo2.jpg",
        audio: "./assets/video/hongnhan.mp3",
        sing: "Ngọc Dương"
    },

    {
        name: "Koruku-mizumi",
        img: "./assets/img/starlingedm.jpg",
        audio: "./assets/video/koruku-mizumi.mp4",
        sing: "Akilaphan"
    },
    {
        name: "Bạc Phận",
        img: "./assets/img/logo4.jpg",
        audio: "./assets/video/bacphan.mp3",
        sing: "Hoàng Đức"
    },
    {
        name: "Sóng Gió",
        img: "./assets/img/logo5.jpg",
        audio: "./assets/video/songgio.mp3",
        sing: "Văn Thanh"
    },
    {
        name: "Trước Khi Gặp Em",
        img: "./assets/img/logo5.jpg",
        audio: "./assets/video/truockhigapem.mp3",
        sing: "Công Phượng"
    },
    {
        name: "Người Ơi",
        img: "./assets/img/logo4.jpg",
        audio: "./assets/video/nguoidentuchieuchau.mp3",
        sing: "Jonh Đặng"
    },
    {
        name: "Lời Tỏ Tình Ngọt Ngào",
        img: "./assets/img/logo2.jpg",
        audio: "./assets/video/loitotinhngotngao.mp3",
        sing: "Hồng Duy"
    },
    {
        name: "Hào Khí Việt Nam",
        img: "./assets/img/logo5.jpg",
        audio: "./assets/video/haokhivietnam.mp3",
        sing: "Ngô Thư"
    }
]
const avata=document.querySelector('.img-avata');
const list1=document.querySelector('.list');
const list2=document.querySelector('.list2');
const include=document.querySelectorAll('.include1');
const include2 = document.querySelector('.include2');
const include3=document.querySelector('.include3');
const categoryLi=document.querySelectorAll('.li');
const background = document.querySelector('.background');
const span13 = document.querySelector('.setting-image');

const love1 = document.querySelector('.color-love1')
const love2 = document.querySelector('.color-love2')
const love3 = document.querySelector('.color-love3')
const love4 = document.querySelector('.color-love4')
const love5 = document.querySelector('.color-love5')
const like1 = document.querySelector('.color-like1')
const like2 = document.querySelector('.color-like2')
const like3 = document.querySelector('.color-like3')
const like4 = document.querySelector('.color-like4')
const like5 = document.querySelector('.color-like5')
const span11 = document.querySelector('.span11');
const time = document.querySelector('.time');
const app = document.querySelector('.app');
const menu = document.querySelector('.menu-list')
const div = document.querySelector('.div')
const main9 = document.querySelector('.main9')
const ul = document.querySelector('.ul')
const setting = document.querySelector('.setting')
const heart = document.querySelectorAll('.icon-heart');
const play = document.querySelector('.icon-play');
const audio = document.querySelector('audio');
const img = document.querySelector('.img-music');
const names = document.querySelector('.song1');
const sing = document.querySelector('.sing');
//2 nut di len di xuong 
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const volume = document.querySelector('.icon-valume');
//nut chinh dung luong
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
//thoi gian cuoi
const hill = document.querySelector('.hill');
const input = document.querySelector('.input-music');
const seel = document.querySelector('.seel');
// ngau nhien bai hat
const shuffle = document.querySelector('.shuffle')


let i=0;
$( document ).ready(function() {
    loadSong(myArray[2]);
    audio.controlsList="nodownload";
    hill.innerHTML="00:00";
   

});
$('.multiple-items').slick({
    infinite:false,
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:'<button type="button" class="slick-prev"><span class="material-icons">arrow_back_ios_new</span></button>',
    nextArrow:'<button type="button" class="slick-next"><span class="material-icons">arrow_forward_ios</span></button>'
});
avata.addEventListener('click',()=>{

    if(list1.style.display=='block')
    {
    list1.style.display='none';
    list2.style.display='block';
    }
    else{
        list1.style.display='block';
        list2.style.display='none';
    }
})
include2.addEventListener('click', function (e) {
    list1.style.display = "none";
    list2.style.display = "block";
})
include3.addEventListener('click', function (e) {
    list1.style.display = "block";
    list2.style.display = "none"
})
// dung de hien mau xanh khi nhan vao
function nexxxxt(element){
    for(var i=0;i<include.length;i++)
    {
        include[i].classList.remove("include");
    }
    element.classList.add("include");

}
function nexxt(element,selector){
    for(var i=0;i<categoryLi.length;i++){
        categoryLi[i].classList.remove("li-one");
    }
    element.classList.add("li-one");
    switch (selector) {
        case 'hi1':

            listmusic1.style.display = "block";
            listmusic2.style.display = "none";
            listmusic3.style.display = "none";
            listmusic4.style.display = "none";
            listmusic5.style.display = "none";
            listmusic6.style.display = "none";
            listmusic7.style.display = "none";
            break;
        case 'hi2':
            listmusic1.style.display = "none";
            listmusic2.style.display = "block";
            listmusic3.style.display = "none";
            listmusic4.style.display = "none";
            listmusic5.style.display = "none";
            listmusic6.style.display = "none";
            listmusic7.style.display = "none";
            break;
        case 'hi3':
            listmusic1.style.display = "none";
            listmusic2.style.display = "none";
            listmusic3.style.display = "block";
            listmusic4.style.display = "none";
            listmusic5.style.display = "none";
            listmusic6.style.display = "none";
            listmusic7.style.display = "none";
            break;
        case 'hi4':
            listmusic1.style.display = "none";
            listmusic2.style.display = "none";
            listmusic3.style.display = "none";
            listmusic4.style.display = "block";
            listmusic5.style.display = "none";
            listmusic6.style.display = "none";
            listmusic7.style.display = "none";
            break;

        case 'hi5':
            listmusic1.style.display = "none";
            listmusic2.style.display = "none";
            listmusic3.style.display = "none";
            listmusic4.style.display = "none";
            listmusic5.style.display = "block";
            listmusic6.style.display = "none";
            listmusic7.style.display = "none";
            break;
        case 'hi6':
            listmusic1.style.display = "none";
            listmusic2.style.display = "none";
            listmusic3.style.display = "none";
            listmusic4.style.display = "none";
            listmusic5.style.display = "none";
            listmusic6.style.display = "block";
            listmusic7.style.display = "none";
            break;
        case 'hi7':
            listmusic1.style.display = "none";
            listmusic2.style.display = "none";
            listmusic3.style.display = "none";
            listmusic4.style.display = "none";
            listmusic5.style.display = "none";
            listmusic6.style.display = "none";
            listmusic7.style.display = "block";
            break;
    }
}
// mo dong hop thoai chinh mau sac
span11.addEventListener('click', function () {
    // background.style.cssText = "display:block";
    background.style.display="block";

})
time.addEventListener('click', function () {
    background.style.cssText = "display:none"
})

love1.addEventListener('click',function(e){
    background.style.background="rgb(13,15,25)";
    span11.style.color="rgb(13,15,25)";
})
love2.addEventListener('click', function (e) {
    background.style.background = "rgb(49,49,49)"
    span11.style.color = "rgb(49,49,49)"
})
love3.addEventListener('click', function (e) {
    background.style.background = "rgb(5,26,79)"
    span11.style.color = "rgb(5,26,79)"
})
love4.addEventListener('click', function (e) {
    background.style.background = "rgb(43,99,83";
    span11.style.color = "rgb(43,99,83)"
})
love5.addEventListener('click', function (e) {
    background.style.background = "rgb(144,48,52)"
    span11.style.color = "rgb(144,48,52)"
})
like1.addEventListener('click', function (e) {
    document.querySelector('.app').style.background = "rgb(13,15,25)";
    span11.style.color = "rgb(13,15,25)"
    background.style.cssText = "display:none"
    menu.style.background = "rgb(35,27,46)"
    div.style.background = "rgb(13,15,25)"
    main9.style.background = "rgb(23,15,35)"
    ul.style.background = "rgb(23,15,35)"
    setting.style.background = "rgb(23,15,35)"
})
like2.addEventListener('click', function (e) {
    document.querySelector('.app').style.background = "rgb(49,49,49)";
    span11.style.color = "rgb(49,49,49)"
    menu.style.background = "rgb(41,41,41)"
    background.style.cssText = "display:none"
    div.style.background = "rgb(49,49,49)"
    main9.style.background = "rgb(24,24,24)"
    ul.style.background = "rgb(24,24,24)"
    setting.style.background = "rgb(24,24,24)"
    listmusic4.style.background = "rgb(24,24,24)"
    listmusic6.style.background = "rgb(24,24,24)"
    listmusic7.style.background = "rgb(24,24,24)"
})
like3.addEventListener('click', function (e) {
    document.querySelector('.app').style.background = "rgb(5,28,80)";
    span11.style.color = "rgb(5,28,80)"
    menu.style.background = "rgb(19,41,88)"
    background.style.cssText = "display:none"
    div.style.background = "rgb(5,28,80)"
    main9.style.background = "rgb(5,23,64)"
    ul.style.background = "rgb(5,23,64)"
    setting.style.background = "rgb(5,23,64)"
})
like4.addEventListener('click', function (e) {
    document.querySelector('.app').style.background = "rgb(43,99,83)";
    span11.style.color = "rgb(43,99,83)";
    background.style.cssText = "display:none";
    menu.style.background = "rgb(30,78,62)";
    div.style.background = "rgb(43,99,83)";
    main9.style.background = "rgb(14,55,42)";
    ul.style.background = "rgb(14,55,42)";
    setting.style.background = "rgb(14,55,42)";
    listmusic4.style.background = "rgb(14,55,42)";
    listmusic6.style.background = "rgb(14,55,42)";
    listmusic7.style.background = "rgb(14,55,42)";

})
like5.addEventListener('click', function (e) {
    document.querySelector('.app').style.background = "rgb(144,48,52)";
    span11.style.color = "rgb(144,48,52)"
    background.style.cssText = "display:none"
    div.style.background = "rgb(144,48,52)"
    menu.style.background = "rgb(122,35,35)"
    main9.style.background = "rgb(92,18,18)"
    ul.style.background = "rgb(92,18,18)"
    setting.style.background = "rgb(92,18,18)";
    listmusic4.style.background = "rgb(92,18,18)";
    listmusic6.style.background = "rgb(92,18,18)";
    listmusic7.style.background = "rgb(92,18,18)"
})
//function format time 
function formatTime(time)
{
    // thoi gian theo phut
    let max=Math.floor(time/60);
    //thoi gian theo giay nghia la max.min
    let min=Math.floor(time%60);
    if(max<10)
    {
        max=`0${max}`;
    }
    if(min<10)
    {
        min=`0${min}`;
    }
    return `${max}:${min}`;
}


// set css cho nhan vao trai tim
for(var j=0;j<heart.length;j++)
{
    heart[j].addEventListener('click',function(){
        if(this.style.color=="pink")
        {
            this.style.color="white";
            
        }
        else
        {
            this.style.color="pink";
        }
    })
}
function playSong(){
    // doi ki tu chay thanh dung
    play.innerHTML="pause";
    img.classList.add("music");
    play.style.color="pink";
    audio.play();
}
function pause(){
    play.innerHTML="play_arrow";
    img.classList.remove("music");
    play.style.cssText="color:#fff";
    audio.pause();
}
play.addEventListener('click',function(e){
  
    if(audio.duration>0&&!audio.paused)
    {
        pause();
    }
    else
    {
        playSong();
    }
})

function loadSong(song){
    audio.src=song.audio,
    names.innerHTML=song.name,
    img.src=song.img,
    sing.innerHTML=song.sing;

}
// nut bam tien len
next.addEventListener('click',function(){
    if(i<myArray.length-1)
    {
        i++;
    }
    else{
        i=0;
    }
    loadSong(myArray[i]);
    playSong();
    
})
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
shuffle.addEventListener('click',function(){
    let i=getRandomNumberBetween(0,myArray.length-1);
    loadSong(myArray[i]);
    playSong();
})
back.addEventListener('click', function () {
    if (i >=1) {
        i--;
    } else{
        i = myArray.length - 1;
    }
    loadSong(myArray[i]);
    playSong();
})
//mo tieng hoac tat tieng
volume.addEventListener('click',function(){
    if(audio.volume!=0)
    {
        audio.volume=0;
        volume.innerHTML="volume_off";
    }
    else {
        audio.volume = 1;
        volume.innerHTML = "volume_up"
    }
})
button1.addEventListener('click', function () {
    if(audio.volume<=0.8)
    {
        audio.volume += 0.2;
    }
})
button2.addEventListener('click', function () {
    if(audio.volume>=0.2)
    {
    audio.volume -= 0.2;
    }
})
//cap nhat lai thoi gian 
audio.onloadeddata= function()
{
    hill.innerHTML=formatTime(audio.duration);
    input.max=audio.duration;
    input.min="0";
}

audio.addEventListener('timeupdate',function(){

    setTimeout(function(){
        hill.innerHTML=formatTime(audio.duration);
    },1)
})
// cap nhat gia tri thanh moi khi audio chay
setInterval(function(){
    input.value=audio.currentTime;
},100)
//su dụng khi click vao input
input.addEventListener('input',function(e){
    audio.currentTime=input.value;
})
setInterval(function () {
    seel.innerHTML = formatTime(audio.currentTime)
}, 300)
span13.addEventListener('click',function(e){
    if(setting.style.display=="none")
    {
        setting.style.display="block";
    }
    else
    {
        setting.style.display="none";
    }
})


