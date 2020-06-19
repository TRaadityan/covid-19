 var covid;
var input;    
var cc;
var c;
var r;
var rr;
var d;
var dd;

var api = 'http://covid19-india-adhikansh.herokuapp.com/state/';

function preload(){
    myfont=loadFont('3Dumb.ttf');
}

function setup()
{
createCanvas(innerWidth,innerHeight);
var button= select('#btn');
button.mousePressed(ask);
input = select('#put');
 background(54, 54, 54);
}

function ask(){
var url =api+input.value();
loadJSON(url,gotData);

}

function gotData(dt)
{
covid=dt;

c=covid.data[0].total;
 cc=map(c,0,50000,0,innerWidth);

r=covid.data[0].cured;
 rr=map(r,0,50000,0,innerWidth);

d=covid.data[0].death;
 dd=map(d,0,50000,0,innerWidth);
}


function draw(){

    background(54, 54, 54);
   
    if(covid){
     
    noStroke();
    fill(204,82,122);
    rect(4,20,cc,100,0,10,10,0);
  
    noStroke();
    fill(232, 23, 93);
    rect(4,140,rr,100,0,10,10,0);

    noStroke();
    fill(71, 71, 71);
    rect(4,260,dd,100,0,10,10,0);

    fill(255,255,255);
    textSize(32);
    textFont(myfont);
    text("CASES "+c,8,80);

    fill(255,255,255);
    textSize(32);
    textFont(myfont);
    text("RECOVERED "+r,8,200);

    fill(255,255,255);
    textSize(32);
    textFont(myfont);
    text("DEATH "+d,8,320);

    }
}