console.log("Welcome to Spotify");
let songindex=1;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBAr');
let gif = document.getElementById('gif');
masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
{songname:"Take olpo kache dakchi",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songname:"Tum hi ho",filePath:"song/2.mp3",coverPath:"covers/2.jpeg"},
{songname:"zihal-e-miskin", filePath:"song/3.mp3",coverPath:"covers/3.jpeg"},
{songname:"phir bhi tumko chahunga",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
{songname:"Laere Choote",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
{songname:"Ami j k tomar",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
{songname:"Bojhe na se ",filePath:"song/7.mp3",coverPath:"covers/7.webp"},
]
songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value= progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
       element.classList.add('fa-play-circle');
    
})
}
const makeAllPause=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-play-circle');
       element.classList.add('fa-pause-circle');
    
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songindex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`song/${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songname;
    gif.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    
   

})

})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       // makeAllPause();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songindex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songname;
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
        
       
    
    })
    
    })


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6){
    songindex=0
}
else{
    songindex+=1;
}
audioElement.src=`song/${songindex+1}.mp3`;
masterSongName.innerText=songs[songindex].songname;
audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
    songindex=0
}
else{
    songindex-=1;
}
    audioElement.src=`song/${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})