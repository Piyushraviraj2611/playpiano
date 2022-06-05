
var tag=document.querySelector("h1");
tag.style.color="#00e7ff";
tag.style.fontSize="60px";
tag.style.border="1px solid black";
tag.style.background="rgb(66 76 92)";
tag.style.borderRadius="8px";
tag.style.fontFamily="Rockwell";


document.querySelector("body").style.backgroundImage="URL('sound/w3.jpg')" ;
//document.querySelector(".container").style.background="#edc1ec";


document.getElementsByTagName("label")[0].addEventListener("click",function(){
    var audio=new Audio('sound/key01.mp3');
    audio.play();
});
document.getElementsByTagName("label")[0].addEventListener("keyup",e=>{
    e.preventDefault();
    if(e.keycode===105){
        document.getElementsByTagName("label")[0].click();
    }
});

document.getElementsByTagName("label")[1].addEventListener("click",function(){
    var audio=new Audio('sound/key02.mp3');
    audio.play();
});
document.getElementsByTagName("label")[2].addEventListener("click",function(){
    var audio=new Audio('sound/key03.mp3');
    audio.play();
});
document.getElementsByTagName("label")[3].addEventListener("click",function(){
    var audio=new Audio('sound/key04.mp3');
    audio.play();
});
document.getElementsByTagName("label")[4].addEventListener("click",function(){
    var audio=new Audio('sound/key05.mp3');
    audio.play();
});
document.getElementsByTagName("label")[5].addEventListener("click",function(){
    var audio=new Audio('sound/key06.mp3');
    audio.play();
});
document.getElementsByTagName("label")[6].addEventListener("click",function(){
    var audio=new Audio('sound/key07.mp3');
    audio.play();
});
document.getElementsByTagName("label")[7].addEventListener("click",function(){
    var audio=new Audio('sound/key08.mp3');
    audio.play();
});
document.getElementsByTagName("label")[8].addEventListener("click",function(){
    var audio=new Audio('sound/key09.mp3');
    audio.play();
});
document.getElementsByTagName("label")[9].addEventListener("click",function(){
    var audio=new Audio('sound/key10.mp3');
    audio.play();
});
document.getElementsByTagName("label")[10].addEventListener("click",function(){
    var audio=new Audio('sound/key11.mp3');
    audio.play();
});
document.getElementsByTagName("label")[11].addEventListener("click",function(){
    var audio=new Audio('sound/key12.mp3');
    audio.play();
});
document.getElementsByTagName("label")[12].addEventListener("click",function(){
    var audio=new Audio('sound/key13.mp3');
    audio.play();
});
document.getElementsByTagName("label")[13].addEventListener("click",function(){
    var audio=new Audio('sound/key14.mp3');
    audio.play();
});
document.getElementsByTagName("label")[14].addEventListener("click",function(){
    var audio=new Audio('sound/key15.mp3');
    audio.play();
});
document.getElementsByTagName("label")[15].addEventListener("click",function(){
    var audio=new Audio('sound/key16.mp3');
    audio.play();
});
document.getElementsByTagName("label")[16].addEventListener("click",function(){
    var audio=new Audio('sound/key17.mp3');
    audio.play();
});
document.getElementsByTagName("label")[17].addEventListener("click",function(){
    var audio=new Audio('sound/key18.mp3');
    audio.play();
});
document.getElementsByTagName("label")[18].addEventListener("click",function(){
    var audio=new Audio('sound/key19.mp3');
    audio.play();
});
document.getElementsByTagName("label")[19].addEventListener("click",function(){
    var audio=new Audio('sound/key20 .mp3');
    audio.play();
});document.getElementsByTagName("label")[20].addEventListener("click",function(){
    var audio=new Audio('sound/key21.mp3');
    audio.play();
});document.getElementsByTagName("label")[21].addEventListener("click",function(){
    var audio=new Audio('sound/key22.mp3');
    audio.play();
});document.getElementsByTagName("label")[22].addEventListener("click",function(){
    var audio=new Audio('sound/key23.mp3');
    audio.play();
});document.getElementsByTagName("label")[23].addEventListener("click",function(){
    var audio=new Audio('sound/key24.mp3');
    audio.play();
});
