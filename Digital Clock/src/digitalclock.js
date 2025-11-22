let watch = document.getElementById("watch");


function clockw(){
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    watch.textContent = `${hours}:${mins}:${sec}`;
}
clockw();
setInterval(clockw,1000);