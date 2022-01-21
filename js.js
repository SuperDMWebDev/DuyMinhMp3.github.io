const myArray = [
    {
        name: "Yêu Là Cưới",
        img: "./assets/img/logo1.jpg",
        audio: "./assets/video/yeulacuoi.mp3",
        sing: "Thảo Béo"
    },
    {
        name: "Hồng Nhan",
        img: "./assets/img/logo2.jpg",
        audio: "./assets/video/hongnhan.mp3",
        sing: "Ngọc Dương"
    },

    {
        name: "Em Nào Có Tội",
        img: "./assets/img/logo3.jpg",
        audio: "./assets/video/emnaocotoi.mp3",
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
const imgArray=["./assets/img/ip1.jpg","./assets/img/ip2.jpg","./assets/img/ip3.jpg"];
let m=0;
function img1(){
    m++;
    if(m > imgArray.length -1){
        m=0;
    }
    headering.src=imgArray[m];

}
setInterval(function(){
    img1();
},2000)
const icontime=document.querySelector('.icon-times')
const bar=document.querySelector('.icon-bars')
const headering= document.querySelector('.headering-img-img')
const audio = document.querySelector('audio');
const play = document.querySelector('.icon-play');
const next = document.querySelector('.next');
const back = document.querySelector('.back');
const names = document.querySelector('.song1');
const img = document.querySelector('.img-music');
const volume = document.querySelector('.icon-valume');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const seel = document.querySelector('.seel');
const hill = document.querySelector('.hill');
const input = document.querySelector('.input-music');
const one = document.querySelector('#one')
const three = document.querySelector('#three');
const two = document.querySelector('#two')
const hell = document.querySelectorAll('.hello1')
const sing = document.querySelector('.sing');
const heart = document.querySelectorAll('.icon-heart');
const one1 = document.querySelector('#one1');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const ten = document.querySelector('#ten');
const eleven = document.querySelector('#eleven');
const twety = document.querySelector('#twety');
const fourteen = document.querySelector('#fourteen');
const span11 = document.querySelector('.span11');
const background = document.querySelector('.background');
const time = document.querySelector('.time');
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
const menu = document.querySelector('.menu-list')
const div = document.querySelector('.div')
const main9 = document.querySelector('.main9')
const li = document.querySelectorAll('.li')
const ul = document.querySelector('.ul')
const list = document.querySelectorAll('.list-music2-item');
const include = document.querySelectorAll('.include1')
const include2 = document.querySelector('.include2')
const list1 = document.querySelector('.list')
const avata = document.querySelector('.img-avata')
const list2 = document.querySelector('.list2')
const include3 = document.querySelector('.include3');
const listmusic1 = document.querySelector('.list-music1');
const listmusic2 = document.querySelector('.list-music2');
const listmusic3 = document.querySelector('.list-music3');
const listmusic4 = document.querySelector('.list-music4');
const listmusic5 = document.querySelector('.list-music5');
const listmusic6 = document.querySelector('.list-music6');
const listmusic7 = document.querySelector('.list-music7');
const settting = document.querySelector('.settting');
const setting = document.querySelector('.setting')
const avata2=document.querySelector('#include4')
const menubar=document.querySelector('.menu-bar')
const musicover=document.querySelector('.music-over')
bar.addEventListener('click', function(e){
    menubar.style.cssText="transform:translateX(0%)";
    musicover.style.display="block"
})
icontime.addEventListener('click', function(e){
    menubar.style.cssText="transform:translateX(-100%)";
    musicover.style.display="none"
})
musicover.addEventListener('click', function(e){
    menubar.style.cssText="transform:translateX(-100%)";
    musicover.style.display="none"
})
// const app=document.querySelector('.app')
$(window).ready(function() {
    $('.load').delay(2000).fadeOut('fast')
})
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">arrow_back_ios_new</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">arrow_forward_ios</span></button>',
});
$('.responsive').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev"><span class="material-icons">arrow_back_ios_new</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="material-icons">arrow_forward_ios</span></button>',
});
settting.addEventListener('click', function () {
    if (x) {
        setting.style.display = "block";
        x = false;
    }
    else {
        setting.style.display = "none";
        x = true;
    }
})
function avata1(node){
    for(var i=0; i<include.length; i++){
        include[i].style.background='';
        include[0].classList.remove('include')
    }
    switch(node){
        case 'include4':
            avata2.style.background="rgb(48,48,48)"
            break;
    }
}
avata.addEventListener('click', function () {
    list1.style.display = "none";
    list2.style.display = "block"
})
include2.addEventListener('click', function (e) {
    list1.style.display = "none";
    list2.style.display = "block";
})
include3.addEventListener('click', function (e) {
    list1.style.display = "block";
    list2.style.display = "none"
})
function nexxxxt(node) {
    for (var i = 0; i < include.length; i++) {
        include[0].classList.remove("include")
        // include[1].classList.remove("include")
        include[i].style.background = '';
    }
    node.style.background = "rgb(48,48,48)"
}
function nexxxt(node) {
    for (var i = 0; i < list.length; i++) {
        list[0].classList.remove("list-music2-item2")
        list[i].style.background = "";
    }
    node.style.background = "#5c6562"
}
function nexxt(node1, element) {
    for (var i = 0; i < li.length; i++) {
        li[0].classList.remove("li-one")
        li[i].style.background = "";
    }
    node1.style.background = "rgb(110,104,117)";

    switch (element) {
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

love1.addEventListener('click', function (e) {
    background.style.background = "rgb(13,15,25)";
    span11.style.color = "rgb(13,15,25)"

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
span11.addEventListener('click', function () {
    background.style.cssText = "display:block";

})
time.addEventListener('click', function () {
    background.style.cssText = "display:none"
})


let x = true;
for (var j = 0; j < heart.length; j++) {
    heart[j].addEventListener('click', function () {
        if (x) {
            this.style.color = "pink";
            x = false;
        } else {
            this.style.color = "#fff";
            x = true;
        }
    })

}
let song_play = false;
function playSong() {
    song_play = true;
    audio.play();
    play.innerHTML = "pause";
    img.classList.add("music");
    play.style.cssText = "color:pink";
}
function pause() {
    song_play = false;
    audio.pause();
    play.innerHTML = "play_arrow";
    img.classList.remove("music")
    play.style.cssText = "color:#fff"
}
play.addEventListener('click', function () {
    if (song_play) {
        pause()
    } else {
        playSong();

    }
})

let i = 0;
function loadSong(myArray) {
    audio.src = myArray.audio,
        names.innerHTML = myArray.name,
        img.src = myArray.img;
    sing.innerHTML = myArray.sing;

}
loadSong(myArray[i]);
next.addEventListener('click', function () {
    i++;
    if (i > myArray.length - 1) {
        i = 0;
    }
    loadSong(myArray[i]);
    playSong();
})
back.addEventListener('click', function () {
    if (i < myArray.length) {
        i--;
    } if (i == 0) {
        i = myArray.length - 1;
    }
    loadSong(myArray[i]);
    playSong();
})
volume.addEventListener('click', function () {
    if (audio.volume == 1) {
        audio.volume = 0;
        volume.innerHTML = "volume_off";
    } else {
        audio.volume = 1;
        volume.innerHTML = "volume_up"
    }
})
button1.addEventListener('click', function () {
    audio.volume += 0.2;
})
button2.addEventListener('click', function () {
    audio.volume -= 0.2;
})
audio.addEventListener('timeupdate', function () {
    input.max = audio.duration;
    setTimeout(function () {
        hill.innerHTML = formatcode(audio.duration)
    }, 500)
})
setInterval(function () {
    input.value = audio.currentTime;
}, 300)
input.addEventListener('click', function () {
    audio.currentTime = input.value;
})
setInterval(function () {
    seel.innerHTML = formatcode(audio.currentTime)
}, 600)


function formatcode(list) {
    let max = Math.floor(list / 60);
    let min = Math.floor(list % 60);
    if (max < 10) {
        max = `0${max}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    return `${max}:${min}`
}

function hello(node, element) {
    for (var i = 0; i < hell.length; i++) {
        hell[i].innerHTML = "play_arrow";
    }
    node.innerHTML = "pause";
    switch (element) {
        case 'one1':
            if (x == true) {
                one1.innerHTML = "pause";
                loadSong(myArray[0]);
                playSong();
                x = false;
            }
            else {
                one1.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;
        case 'two':
            if (x == false) {
                two.innerHTML = "pause";
                loadSong(myArray[1]);
                playSong();
                x = true;
            } else {
                two.innerHTML = "play_arrow";
                pause()
                x = false;
            }
            break;
        case 'three':
            if (x == true) {
                three.innerHTML = "pause";
                loadSong(myArray[2]);
                playSong();
                x = false;
            } else {
                three.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;
        case 'four':
            if (x == false) {
                four.innerHTML = "pause";
                loadSong(myArray[3]);
                playSong();
                x = true;
            } else {
                four.innerHTML = "play_arrow";
                pause();
                x = false;
            }
            break;
        case 'five':
            if (x == true) {
                five.innerHTML = "pause";
                loadSong(myArray[4]);
                playSong();
                x = false;
            } else {
                five.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;

        case 'six':
            if (x == false) {
                six.innerHTML = "pause";
                loadSong(myArray[5]);
                playSong();
                x = true;
            } else {
                six.innerHTML = "play_arrow";
                pause();
                x = false;
            }
            break;

        case 'seven':
            if (x == true) {
                seven.innerHTML = "pause";
                loadSong(myArray[6]);
                playSong();
                x = false;
            } else {
                seven.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;

        case 'eight':
            if (x == false) {
                eight.innerHTML = "pause";
                loadSong(myArray[7]);
                playSong();
                x = true;
            } else {
                eight.innerHTML = "play_arrow";
                pause();
                x = false;
            }
            break;

        case 'nine':
            if (x == true) {
                nine.innerHTML = "pause";
                loadSong(myArray[8]);
                playSong();
                x = false;
            } else {
                nine.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;

        case 'ten':
            if (x == false) {
                ten.innerHTML = "pause";
                loadSong(myArray[9]);
                playSong();
                x = true;
            } else {
                ten.innerHTML = "play_arrow";
                pause();
                x = false;
            }
            break;

        case 'eleven':
            if (x == true) {
                eleven.innerHTML = "pause";
                loadSong(myArray[0]);
                playSong();
                x = false;
            } else {
                eleven.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;

        case 'twety':
            if (x == false) {
                twety.innerHTML = "pause";
                loadSong(myArray[2]);
                playSong();
                x = true;
            } else {
                twety.innerHTML = "play_arrow";
                pause();
                x = false;
            }
            break;
        case 'fourteen':
            if (x == true) {
                fourteen.innerHTML = "pause";
                loadSong(myArray[5]);
                playSong();
                x = false;
            } else {
                fourteen.innerHTML = "play_arrow";
                pause();
                x = true;
            }
            break;
    }
}
