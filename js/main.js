var snowmax=135

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("white")

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")

// Set the letter that creates your snowflake (recommended:*)
var snowletter="*"

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.6

// Set the maximal-size of your snowflaxes
var snowmaxsize=22

// Set the minimal-size of your snowflaxes
var snowminsize=8

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing 
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=3

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent 
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)  
var browserok=ie5||ns6||opera

function randommaker(range) {        
    rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
    if (ie5 || opera) {
        marginbottom = document.body.clientHeight
        marginright = document.body.clientWidth
    }
    else if (ns6) {
        marginbottom = window.innerHeight
        marginright = window.innerWidth
    }
    var snowsizerange=snowmaxsize-snowminsize
    for (i=0;i<=snowmax;i++) {
        crds[i] = 0;                      
        lftrght[i] = Math.random()*15;         
        x_mv[i] = 0.03 + Math.random()/10;
        snow[i]=document.getElementById("body"+i)
        snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
        snow[i].size=randommaker(snowsizerange)+snowminsize
        snow[i].style.fontSize=snow[i].size
        snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
        snow[i].sink=sinkspeed*snow[i].size/5
        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
        snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
        snow[i].style.left=snow[i].posx
        snow[i].style.top=snow[i].posy
    }
    movesnow()
}

function movesnow() {
    for (i=0;i<=snowmax;i++) {
        crds[i] += x_mv[i];
        snow[i].posy+=snow[i].sink
        snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i]);
        snow[i].style.top=snow[i].posy
        
        if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
            if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
            if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
            if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
            if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
            snow[i].posy=0
        }
    }
    var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
    document.write("<span id='body"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
if (browserok) {
    window.onload=initsnow
}

var hexChars = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9];

var messages = ["Hii..", "Nice to meet you...", "See You Later...!"];



var elementTimer;
var counter=0;
var index=0;
var messageIndex=0;
var message="";

window.onload = function() {
    Init();
    initsnow();
};

function Init(){
    counter=0;
    index=0;
    message="";
    CreateElements();
    elementTimer = setInterval(MakeVisible, 100);
    }
      

function RandomColor() {
    var hex = "#";
    while (hex.length < 7) {
    hex += hexChars[Math.floor(Math.random() * 14)];
    }
    return hex;   

}

function CreateElements(){
    
    message=messages[messageIndex];
        
    for (j=0; j<message.length; j++) {
        var span = document.createElement("span");
        span.style.opacity=0;
        span.innerHTML = message[j];
        var container = document.getElementById("container");
        container.appendChild(span);
        counter++;
    }
    
}

function MakeVisible(){
   
   var el = container.getElementsByTagName("span");
   if(index<counter){
       el[index].innerHTML = message[index];   
       el[index].style.opacity=1;
       el[index].style.color = RandomColor ();
       index++;   
   }else{
       index=counter-1;
      clearInterval(elementTimer);
      elementTimer = setInterval(WaitForATime, 1000);
   } 
   
}


function RemoveElements(){
   
   var el = container.getElementsByTagName("span");
   if(index>=0){
       container.removeChild(el[index]);
       index--;   
   }else{
      clearInterval(elementTimer);
      messageIndex=SetMessageIndex();
      Init();
   } 
   
}

function SetMessageIndex(){
    var numberOfMessages = messages.length;
    messageIndex++;
    if(messageIndex>=numberOfMessages){
       messageIndex=0; 
    }
    return messageIndex;
}

function WaitForATime(){
    clearInterval(elementTimer);
    elementTimer = setInterval(RemoveElements, 50);
}
