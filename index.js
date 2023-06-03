
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var src_new1="/images/dice"+randomNumber1+".png";
var src_new2="/images/dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",src_new1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",src_new2);
