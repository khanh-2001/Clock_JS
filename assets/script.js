const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

 setInterval( ()=> {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`
    mn.style.transform = `rotateZ(${(mm)}deg)`
    sc.style.transform = `rotateZ(${(ss)}deg)`
 })
 let mysong = document.getElementById("mysong")
 let icon = document.getElementById("icon")
 icon.onclick = () => {
    if(mysong.paused) {
      mysong.play();
      icon.src = "assets/pause.png";
    }
    else 
    {
      mysong.pause();
      icon.src = "assets/play-button.png";
   }
 }