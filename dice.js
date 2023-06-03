
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var src_new1="/images/dice"+randomNumber1+".png";
var src_new2="/images/dice"+randomNumber2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",src_new1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",src_new2);

if (randomNumber1===randomNumber2){
    var title=document.querySelector("h1");
    title.textContent="Draw";  
}
else if (randomNumber1>randomNumber2){
    var title=document.querySelector("h1");
    title.textContent="Player 1 Wins !";
}

else{
    var title=document.querySelector("h1");
    title.textContent="Player 2 Wins !";
}
