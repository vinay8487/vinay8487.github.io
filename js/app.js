var i = 0;
var txt = 'Wishing a very Happy Birthday to Varenya ki Mumma'; /* The text dear XXX! */
var speed = 100; /* The speed/duration of the effect in milliseconds */
var newline='<br/>';
var emoji='&#128522;'; //128591
var count=0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
      if(count==0){
        document.getElementById("demo").innerHTML +=newline;
        document.getElementById("demo").innerHTML += emoji;
        count++;
      }
  }
}
