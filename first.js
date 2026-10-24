let img1=document.querySelector('#img1');
let img2=document.querySelector('#img2');
let img3=document.querySelector('#img3');
let box1=document.querySelector('.box1');
let box2=document.querySelector('.box2');
let box3=document.querySelector('.box3');
let count=0,count1=0,count2=0;
function myname(){
    if(count==0){
        alert('paper beats rock');
        let s2=box2.innerText;
        s2=Number(s2);
        box2.innerText=s2+1;
        count++;
    }
    else if(count==1){
        alert('rock beats scissor');
        let s1=box1.innerText;
         s1=Number(s1);
        box1.innerText=s1+1;
        count++;
    }
    else if(count==2){
        alert('its a draw');
        let s=box3.innerText;
         s=Number(s);
        box3.innerText=s+1;
        count=0;
    }
}
function myname1(){
    if(count1==0){
        alert('scissor beats paper');
        let s2=box2.innerText;
        s2=Number(s2);
        box2.innerText=s2+1;
        count1++;
    }
    else if(count1==1){
        alert('paper beats rock');
        let s1=box1.innerText;
         s1=Number(s1);
        box1.innerText=s1+1;
        count1++;
    }
    else if(count1==2){
        alert('its a draw');
        count1=0;
        let s=box3.innerText;
         s=Number(s);
        box3.innerText=s+1;
    }
}
function myname2(){
       if(count2==0){
        alert('rock beats scissor');
        let s2=box2.innerText;
         s2=Number(s2);
        box2.innerText=s2+1;
        count2++;
    }
    else if(count2==1){
        alert('scissor beats paper');
        let s1=box1.innerText;
         s1=Number(s1);
        box1.innerText=s1+1;
        count2++;
    }
    else if(count2==2){
        alert('its a draw');
        count2=0;
        let s=box3.innerText;
         s=Number(s);
        box3.innerText=s+1;
    }
}
img1.addEventListener('click',myname);
img2.addEventListener('click',myname1);
img3.addEventListener('click',myname2);
function change(){
    box1.innerText='0';
    box2.innerText='0';
    box3.innerText='0';
    img1.addEventListener('click',myname);
   img2.addEventListener('click',myname1);
   img3.addEventListener('click',myname2);
}
let reset=document.querySelector('.reset');
reset.addEventListener('click',change);