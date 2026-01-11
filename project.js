const music=new Audio('.mp3');
//music.play();
const songs = [
    {
        id:"1",
        songName:`yeh tune kya kiya <br>
                        <div class="subtitle">javed bashir</div>`,
                        poster:"1.jpg"
    },
     {
        id:"2",
        songName:`Zaalima <br>
                        <div class="subtitle">Arijit Singh</div>`,
                        poster:"2.jpg"
    },
     {
        id:"3",
        songName:`Tumhare hi rahenge hum <br>
                        <div class="subtitle">Varun Jain,Shilpa Rao</div>`,
                        poster:"3.jpg"
    },
     {
        id:"4",
        songName:`Teri ore <br>
                        <div class="subtitle">Shreya Ghoshal,Rahet Fateh Ali Khan</div>`,
                        poster:"4.jpg"
    },
     {
        id:"5",
        songName:`Tere mast mast do nain <br>
                        <div class="subtitle">Rahet Fateh Ali Khan</div>`,
                        poster:"5.jpg"
    },
       {
        id:"6",
        songName:`Surili ankhiyon wale <br>
                        <div class="subtitle">Sunidhi Chauhan,Rahet Fateh Ali Khan</div>`,
                        poster:"6.jpg"
    },
       {
        id:"7",
        songName:`Sawaar loon <br>
                        <div class="subtitle">Monali Thakur ,Amitabh Bhattacharya</div>`,
                        poster:"7.jpg"
    },
       {
        id:"8",
        songName:`Dagabaaz re <br>
                        <div class="subtitle">Shreya Ghoshal,Rahet Fateh Ali Khan</div>`,
                        poster:"8.jpg"
    },
     {
        id:"9",
        songName:`Afreen Afreen <br>
                        <div class="subtitle">Rahet Fateh Ali Khan</div>`,
                        poster:"9.jpg"
    },
     {
        id:"10",
        songName:`Dil diya gallan <br>
                        <div class="subtitle">Atif Aslam</div>`,
                        poster:"10.jpg"
    },
     {
        id:"11",
        songName:`Dooron Dooron<br>
                        <div class="subtitle">Paresh Pahuja</div>`,
                        poster:"11.jpg"
    },
     {
        id:"12",
        songName:`Sanu ek pal chain<br>
                        <div class="subtitle">Rahet Fateh Ali Khan</div>`,
                        poster:"12.jpg"
    },
     {
        id:"13",
        songName:`Hawayein <br>
                        <div class="subtitle">Arijit Singh</div>`,
                        poster:"13.jpg"
    },
     {
        id:"14",
        songName:`Ishq hai <br>
                        <div class="subtitle">Varun Jain</div>`,
                        poster:"14.jpg"
    },
     {
        id:"15",
        songName:`Jag ghoomeya<br>
                        <div class="subtitle">Rahet Fateh Ali Khan</div>`,
                        poster:"15.jpg"
    },
     {
        id:"16",
        songName:`Tum jo aaye<br>
                        <div class="subtitle">Tulsi Kumar,Rahet Fateh Ali Khan</div>`,
                        poster:"16.jpg"
    },
     {
        id:"17",
        songName:`Rang lageya <br>
                        <div class="subtitle">Mohit Chauhan,Rochak Kohli</div>`,
                        poster:"17.jpg"
    },
     {
        id:"18",
        songName:`Sajda <br>
                        <div class="subtitle">Shankar Mahadevan,Rahet Fateh Ali Khan</div>`,
                        poster:"18.jpg"
    },
     {
        id:"19",
        songName:`Tujh me rab dikhta hai <br>
                        <div class="subtitle">Roopkumar Rathod</div>`,
                        poster:"19.jpg"
    },
     {
        id:"20",
        songName:`Ve kamleya <br>
                        <div class="subtitle">Shreya Ghoshal,Arijit Singh</div>`,
                        poster:"20.jpg"
    },
]
 
Array.from(document.getElementsByClassName(`songItem`)).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});
//search data Start
    let search_results = document.getElementsByClassName('search_results')[0];
    songs.forEach(element =>{
        const {id,songName,poster} = element;
        //console.log(poster);
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = "#"+id;
        card.innerHTML = `<img src="${poster}" alt=""> 
                            <div class="content">
                                 ${songName}
                                <div class="subtitle">Tulsi Kumar,Rahet Fateh Ali Khan</div>
                             </div>`;
                             search_results.appendChild(card);
                                });
                                let input = document.getElementsByTagName('input')[0];
                                input.addEventListener('keyup',()=>{
                                    let input_value = input.value.toUpperCase();
                                    let items = search_results.getElementsByTagName('a');
                                    for (let index = 0; index < items.length; index++) {
                                        let as = items[index].getElementsByClassName('content')[0];
                                        let text_value = as.textContent || as.innerHTML;
                                        if (text_value.toUpperCase().indexOf(input_value)>-1) {
                                            items[index].style.display = "flex";
                                        } else {
                                            items[index].style.display = "none";
                                        }
                                        if (input.value ==0) {
                                            search_results.style.display = "none";
                                            
                                        } else {
                                            search_results.style.display = "";
                                        }   
                                    }
                                });
let masterPlay = document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');
       
    });
}
const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105, .0)';
    });
}
let index=0;
let poster_master_play =document.getElementById('poster_master_play');
let download_music =document.getElementById('download_music');
let title =document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>
{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `${index}.mp3`;
       poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `${index}.mp3`;
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName,poster}=elss;
            title.innerHTML=songName;
            download_music.setAttribute('download',songName);
            poster_master_play.src=poster;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, .0)";
        makeAllplays();
         el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
         wave.classList.add('active1');    
    });
});
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    // console.log(min1);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText =`${min1}:${sec1}`;
    let min2 = Math.floor(music_curr /60);
    let sec2 = Math.floor(music_curr %60);
     if(sec2<10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText =`${min2}:${sec2}`;
    let progressBar = parseInt((music_curr /music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =  `${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime = seek.value*music.duration /100;
});
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
vol.addEventListener('change',()=>{
    if(vol.value ==0){
        vol_icon.classList.remove('bi-volume-up-fill');
          vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
         vol_icon.classList.remove('bi-volume-up-fill');
          vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
         vol_icon.classList.add('bi-volume-up-fill');
          vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click',()=>{
    index -=1;
    if(index<1){
        index= Array.from(document.getElementsByClassName('songItem')).length;
    }
     music.src = `${index}.mp3`;
       poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName,poster}=elss;
            title.innerHTML=songName;
            poster_master_play.src=poster;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, .0)";
        makeAllplays();
         el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
         wave.classList.add('active1');
});
next.addEventListener('click',()=>{
    index++;
    if(index> Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src = `${index}.mp3`;
       poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName,poster}=elss;
            title.innerHTML=songName;
            poster_master_play.src=poster;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, .0)";
        makeAllplays();
         el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
         wave.classList.add('active1');
});
let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right= document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});
let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right= document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];
pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML ='repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML ='random';
            break;
             case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML ='next';
            break;
    }
});
const next_music = () =>{
if(index==songs.length){
index=1;
}else{
index++;
}
    music.src = `${index}.mp3`;
       poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName,poster}=elss;
            title.innerHTML=songName;
            poster_master_play.src=poster;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, .0)";
        makeAllplays();
         el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
         wave.classList.add('active1');
}
const repeat_music = () =>{
index;
    music.src = `${index}.mp3`;
       poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName,poster}=elss;
            title.innerHTML=songName;
            poster_master_play.src=poster;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, .0)";
        makeAllplays();
         el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
         wave.classList.add('active1');
}
const random_music = () =>{
if(index==songs.length){
index=1;
}else{
index = Math.floor((Math.random()* songs.length)+1);
}
music.src = `${index}.mp3`;
       poster_master_play.src = `${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName,poster}=elss;
            title.innerHTML=songName;
            poster_master_play.src=poster;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105, .0)";
        makeAllplays();
         el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
         wave.classList.add('active1');
         }
         music.addEventListener('ended',()=>{
         let b = shuffle.innerHTML;
         switch (b) {
            case 'repeat':
            repeat_music();
            break;
             case 'next':
            next_music();
            break;
             case 'random':
            random_music();
            break;
         }
         });
