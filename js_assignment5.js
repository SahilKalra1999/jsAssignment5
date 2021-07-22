function fnAnime1(){
    document.getElementById('head1').innerHTML='“Do what you can, with what you have, where you are.” ';
    document.getElementById('btn1').innerHTML="Changed";
}
//image changes here
function onMouseOver(){
    document.getElementById('img1').src="pic2.png";
}
function onMouseOut(){
    document.getElementById('img1').src="pic1.png";
}

//image fade out
var intervalID=0;
        var opacity=0;
         function fadeOut() {
           intervalID=setInterval(hide,20);
         }
         function fadeIn() {
            intervalID=setInterval(show,20);
         }
         function show() {
             var img=document.getElementById("img2");
             opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
             if(opacity<1) {
                 opacity=opacity+0.1;
                 img.style.opacity=opacity;
             }
             else {
                 clearInterval(intervalID);
             }
         }
         function hide() {
             var img=document.getElementById("img2");
             opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"));
              if(opacity>0) {
                  opacity=opacity-0.1;
                  img.style.opacity=opacity;
              }
              else {
                  clearInterval(intervalID);
              }
         }

         //for column 2
         function fn1()
         {
             let para=document.getElementsByClassName("para");
             for(let x=0;x<para.length;x++)
             {
              para[x].style.color="red";
              
             }
         }
         function  fn2() {
             let para=document.getElementsByClassName("para");
             for(let y=0;y<para.length;y++){
                 para[y].style.color="black";
             }
         }

       