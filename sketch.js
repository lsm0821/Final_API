
//example from Dan Shiffman's Coding Train 10.4

//URL from http://open-notify.org/Open-Notify-API/People-In-Space/

let scr = 1;
let spaceData;
let sunvalleyData;
let koreaData;
let chinaData;
let londonData;
let prices;
let lastPrice;

let tr;
let tr1;
let tr2;
let tr3;
let tr4;

let sv;
let sv1;
let sv2;
let sv3;
let sv4;

let kr;
let kr1;
let kr2;
let kr3;
let kr4;

let cn;
let cn1;
let cn2;
let cn3;
let cn4;

let gb;
let gb1;
let gb2;
let gb3;
let gb4;

let icon1;
let icon2;
let board;
let teacher1;
let teacher2;
let teacher3;
let teacher4;
let teacher5;






function preload() {
  loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3c8c44249a34f261c4e98ff79f6172f5", dataReceived,"jsonp");
  loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=5513307&APPID=3c8c44249a34f261c4e98ff79f6172f5", dataReceive, "jsonp");
  loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=3c8c44249a34f261c4e98ff79f6172f5", korea, "jsonp");
  loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=1816670&APPID=3c8c44249a34f261c4e98ff79f6172f5", china, "jsonp");
  loadJSON("http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=3c8c44249a34f261c4e98ff79f6172f5", london, "jsonp");
  icon1 = loadImage("assets/weather.png");
  icon2 = loadImage("assets/finger.png");
  board = loadImage("assets/board.png");
  teacher1 = loadImage("assets/teacher1.png");
  teacher2 = loadImage("assets/teacher 2.png");
  teacher3 = loadImage("assets/teacher3.png");
  teacher4 = loadImage("assets/teacher4.png");
  teacher5 = loadImage("assets/teacher5.png");
}


function setup(){
  //createCanvas(500,500);

  //createCanvas(windowWidth,windowHeight);
  //createCanvas(400,400);
  createCanvas(720,1280);
  //createCanvas(displayWidth, displayHeight);
  t= spaceData.list[0].main.temp;
  t1 = spaceData.list[0].dt_txt;
  s = sunvalleyData.list[0].main.temp;
  k= koreaData.list[0].main.temp;
  n = chinaData.list[0].main.temp;
  l = londonData.list[0].main.temp;

  s1 = sunvalleyData.list[0].main.humidity;
  k1 = koreaData.list[0].main.humidity;
  n1 = chinaData.list[0].main.humidity;
  l1 = londonData.list[0].main.humidity;

  tr = int(spaceData.list[0].main.temp)-273;
  tr1 = int(spaceData.list[8].main.temp)-273;
  tr2 = int(spaceData.list[16].main.temp)-273;
  tr3 = int(spaceData.list[24].main.temp)-273;
  tr4 = int(spaceData.list[32].main.temp)-273;

  kr = int(koreaData.list[0].main.temp)-273;
  kr1 = int(koreaData.list[8].main.temp)-273;
  kr2 = int(koreaData.list[16].main.temp)-273;
  kr3 = int(koreaData.list[24].main.temp)-273;
  kr4 = int(koreaData.list[32].main.temp)-273;

  cn = int(chinaData.list[0].main.temp)-273;
  cn1 = int(chinaData.list[8].main.temp)-273;
  cn2 = int(chinaData.list[16].main.temp)-273;
  cn3 = int(chinaData.list[24].main.temp)-273;
  cn4 = int(chinaData.list[32].main.temp)-273;

  gb = int(londonData.list[0].main.temp)-273;
  gb1 = int(londonData.list[0].main.temp)-273;
  gb2 = int(londonData.list[0].main.temp)-273;
  gb3 = int(londonData.list[0].main.temp)-273;
  gb4 = int(londonData.list[0].main.temp)-273;


  sv = int(sunvalleyData.list[0].main.temp)-273;
  sv1 = int(sunvalleyData.list[8].main.temp)-273;
  sv2 = int(sunvalleyData.list[16].main.temp)-273;
  sv3 = int(sunvalleyData.list[24].main.temp)-273;
  sv4 = int(sunvalleyData.list[32].main.temp)-273;
  prices = [tr];//[int(tr-273.17)];
  lastPrice = 0;








}


function dataReceived(stuff){
  spaceData = stuff;
  //californiaData = stuff1;
  //koreaData = stuff2;

}
function dataReceive(stuff1){
  sunvalleyData=stuff1;
}
function korea (stuff2){
  koreaData = stuff2;
}

function china (stuff3){
  chinaData = stuff3;
}
function london (stuff4){
  londonData = stuff4;
}




function draw() {
  background(255);

  if (scr == 1) {
    drawScreen1();
  } else if (scr == 2){
    drawScreen2();
  } else if (scr == 3){
    drawScreen3();
  } else if (scr == 4){
    drawScreen4();
  } else if (scr == 5) {
    drawScreen5();
  } else if (scr == 6){
    drawScreen6();
  } else if (scr == 7) {
    drawScreen7();
  } else if (scr == 8){
    drawScreen8();
  } else if (scr == 9){
    drawScreen9();
  } else if (scr == 10){
    drawScreen10();
  } else if (scr == 11){
    drawScreen11();
  } else if (scr == 12){
    drawScreen12();
  }
}

    function drawScreen1(){
      background(203, 206, 211);
      text('Touch Weather',205,80);


      //rect(110,1215,120,45);

      //720,1280
      image(icon1,580,15,90,90);
      image(icon2, 75,33, 95,95);

      fill(181,220,255);
      rect(0,128,360,532);
      fill(193,255,255);
      rect(360,128,360,532);
      fill(174, 222, 249);
      rect(360,660,360,540);

      fill(188,255,237);
      rect(0,660,360,540);

      strokeWeight(4);
      stroke(102, 159, 255);
      line(0,128,720,128);
      line(0,1200, 720,1200);

      //text(t1,20,20);
      fill(0);
      textSize(50);
      fill(200,30,120);
      rect(54,350,250,70);





      if (mouseX >= 54 && mouseX <= 304 && mouseY >= 350 && mouseY <= 420){
        strokeWeight(4);
        stroke(255);
        fill(132,195,249);
        rect(54,350,250,70);
      } else {

        stroke(83,190,252);
        strokeWeight(4);
        fill(183,228,255);
        rect(54,350,250,70);
      }

      if (mouseX >= 418 && mouseX <= 668 && mouseY >+ 350 && mouseY <= 420){
        strokeWeight(4);
        stroke(255);
        fill(255);
        rect(418,350,250,70);
      } else {
        stroke(82,190,252);
        strokeWeight(2);
        fill(161,217,252);
        rect(418,350,250,70);
      }
      if (mouseX >= 28 && mouseX <= 333 && mouseY >+ 870 && mouseY <= 940){
        fill(255);
        rect(28,870, 305,70);
      }else {
        fill(168,255,231);
        rect(28, 870, 305, 70);
      }


      strokeWeight(1);
      rect(28,870, 305,70);

      stroke(0);
      fill(0);
      text('Bar Graph',65,400);
      text('Line Graph', 420, 400);
      text('Digital Caster', 30, 920);
      text('More..', 480, 920);

      strokeWeight(3);
      stroke(102, 159, 255);
      line(360,128,360,1200);
      line(0,660,720,660);









    }
    function drawScreen2(){
      background(154,191,249);

      //back button
      if(mouseX >= 110 && mouseX <= 230 && mouseY >= 1215 && mouseY <= 1260){
        fill(252,237,121);
        rect(110,1215,120,50);
      }else {
        fill(255,246,173);
        rect(110,1215,120,45);
      }

      line(0,1200, 720,1200);
      let dat = [spaceData.list[0].main.humidity, s1,k1,n1,l1];
      var width = 400,
          height = 550,
          margin = 30,
          w = width - 2 * margin,
          h = height - 2 * margin;

      var barWidth = (h/dat.length)*0.95;
      var barMargin = (h/dat.length)*0.3;

      //createCanvas (width, height);

      textSize(18);
      push()
      translate(margin+400,margin+150);

      for(var i=0; i<dat.length; i++) {
        push();
        fill(255,169,119);
        noStroke();
        translate(0,i*(barWidth + barMargin));
        rect(0,0,dat[i], barWidth);

        fill('#FFF');
        text(dat[i] + '%', 5, barWidth/2 + 5);

        pop();
      }
      pop();

      let data = [spaceData.list[0].main.temp, s,k,n,l];
      var width = 400,
          height = 550,
          margin =30,
          w = width - 2 * margin,
          h = height - 2 * margin;

      var barWidth = (h/data.length)*0.95;
      var barMargin = (h/data.length)*0.3;

      //createCanvas (width, height);

      textSize(24);
      push()
      translate(margin+50,margin+150);

      for(var i=0; i<data.length; i++) {
        push();
        fill(138,231,252);
        noStroke();
        translate(0,i*(barWidth + barMargin));
        rect(0,0,data[i], barWidth);

        fill('#FFF');
        text(int(data[i] -274.15)+'°C ', 5, barWidth/2 + 5);

        pop();
      }
      pop();
      if(mouseX >= 0 && mouseX <= 720 && mouseY >= 1130 && mouseY <= 1200){
        noStroke();
        fill(192,206,229);
        rect(0,870,720,330);

        fill(0);
        textSize(30);
        stroke(0);
        text('1. Moscow',30,920);
        text('2. Sunny Valley', 30,980);
        text('3. Seoul', 30, 1043);
        text('4. Beijing', 30, 1102);
        text('5. London', 30, 1160);
        textSize(25);
        text('Main Temperature', 300,1160);
        text('Humidity', 570,1160);

        fill(138,231,252);
        rect(350,899,100,200);
        fill(255,169,119);
        rect(570,959,100,140);
      }else {
        fill(109,124,127);
        stroke(2);
        rect(0,1130,720,70);
      }

      fill(0);
      strokeWeight(1);
      textSize(30);
      text('1',40,240);
      text('2', 40,360);
      text('3', 40, 480);
      text('4', 40, 600);
      text('5', 40, 720);
      text('Back', 140,1248);

      fill(117, 216, 249);
      textSize(33);
      strokeWeight(2);
      text('Main Temperature',75,100);
      textSize(33);
      fill(252, 185, 133);
      text('Humidity Percentage', 410, 100);

    }

    function drawScreen3(){
      background(173,241,255);
      strokeWeight(1);
      stroke(2);
      fill(252,233,207);
      rect(20,120,650,500);

      strokeWeight(1);
      stroke(2);

      line(50,(tr+350), 250, (tr1+350));
      line(250,(tr1+350), 290, (tr2+350));
      line(290,tr2+350, 350,tr3+350);
      line(350,tr3+350, 590, tr4+350);

      line(0,1200, 720,1200);


      noStroke();
      fill(119,209,255);
      ellipse(50,(tr+350),27,27);


      noStroke();
      fill(119,255,248);
      ellipse(250, (tr1+350), 27,27);

      noStroke();
      fill(155,255,157);
      ellipse(290, (tr2+350),27,27);

      noStroke();
      fill(116,193,117);
      ellipse(350, (tr3+350),27,27);

      noStroke();
      fill(255);
      ellipse(590, (tr4+350),27,27);

      strokeWeight(1);
      stroke(1);
      fill(119,209,255);
      ellipse(80,480,50,50);
      fill(119,255,248);
      ellipse(80, 565, 50,50);
      fill(155,255,157);
      ellipse(290, 480,50,50);
      fill(116,193,117);
      ellipse(290,565,50,50);
      fill(255);
      ellipse(500,480,50,50);

      textSize(45);
      strokeWeight(1);
      stroke(1);
      fill(0);
      text(':'+ tr +'°C ',120,495);
      text(':'+ tr1 +'°C ',120,580);
      text(': '+ tr2 +'°C ',320,495);
      text(': '+ tr3 +'°C ',320,580);
      text(':'+ tr4 +'°C ',530,495);

      stroke(255);
      fill(255, 213, 155);
      rect(20,680,270,80);
      rect(20,790,270,80);
      rect(400,680,270,80);
      rect(400,790,270,80);
      rect(210,915,270,80);
      textSize(25);

      fill(133, 196, 209);
      //strokeSize(2);
      stroke(0);

      text('Press A - Sunney Valley',20,730);
      text('Press B - Seoul', 60,835);
      text('Press C - Beijing', 440,730);
      text('Press D - London', 440, 835);
      text('Press E - Moscow', 250,960);


      if(mouseX >= 110 && mouseX <= 230 && mouseY >= 1215 && mouseY <= 1260){
        fill(255, 231, 145);
        rect(110,1215,120,45);
      }else {
        fill(255, 236, 168);
        rect(110,1215,120,45);
      }
      textSize(30);
      stroke(0);
      fill(0);
      text('Back', 140,1248);

      //for (var i = 0; i<prices.length; i++){
        //var adjustedPrice = map(prices[i], 0,0.9,0,40);
        //line(i*100,lastPrice, (i+1)*100, height - adjustedPrice);
        //lastPrice = height - adjustedPrice;
      }
      function drawScreen4(){
        background(148,233,252);
        image(board,33,160,650,450);
        image(teacher1,440,260,500,540);

        strokeWeight(3);
        stroke(255);
        fill(153,216,255);
        rect(0,800,720,400);

        if(mouseX >= 110 && mouseX <= 230 && mouseY >= 1215 && mouseY <= 1260){

          fill(255);
          rect(110,1215,120,45);
        }else {
          fill(255,234,153);
          rect(110,1215,120,45);
        }
        fill(0);
        line(0,1200, 720,1200);

        textSize(50);
        strokeWeight(1);
        text('Press..', 50,870);
        textSize(39);
        text('#4 for Moscow', 190, 940);
        text('#5 for China', 50,1033);
        text('#6 for Seoul', 50,1130);
        text('#7 for Sun Valley', 350, 1033);
        text('#8 for London', 350, 1123);

        textSize(30);

        fill(0);
        text('Back', 140,1248);

        textSize(30);
        text('Date/Time: '+ spaceData.list[0].dt_txt, 60,130);
        textSize(40);
        fill(255);
        stroke(0);
        strokeWeight(2);
        textFont('Helvetica');
        text('Main Temperature: '+ (int(spaceData.list[0].main.temp)-273)+ '°C ',70,250);
        text('Humidity:' + spaceData.list[0].main.humidity  + '%', 70,320);
        text('Status: ' + spaceData.list[0].weather[0].main, 70, 390);
        text('Description: '+ spaceData.list[0].weather[0].description, 70,460);
        textSize(40);
        fill(0);
        noStroke();
        text('Moscow', 60,80);


      }
      function drawScreen5(){
        background(148,233,252);
        image(board,33,160,650,450);
        image(teacher2,370,353,430,450);
        fill(153,216,255);
        rect(0,800,720,400);
        fill(0);
        strokeWeight(1);
        textSize(50);
        text('Press..', 50,870);
        textSize(39);
        text('#4 for Moscow', 190, 940);
        text('#5 for China', 50,1033);
        text('#6 for Seoul', 50,1130);
        text('#7 for Sun Valley', 350, 1033);
        text('#8 for London', 350, 1123);

        textSize(30);
        strokeWeight(1);
        text('Date/Time: '+ chinaData.list[0].dt_txt, 60,130);
        textSize(40);
        fill(255);
        stroke(0);
        strokeWeight(3);
        textFont('Helvetica');
        text('Main Temperature: '+ (int(chinaData.list[0].main.temp)-273) +'°C ',70,250);
        text('Humidity:' + chinaData.list[0].main.humidity  + '%', 70,320);
        text('Status: ' + chinaData.list[0].weather[0].main, 70, 390);
        text('Description: '+ chinaData.list[0].weather[0].description, 70,460);

        fill(0);
        noStroke();
        text('Beijing', 60,80);


      }

      function drawScreen6(){
        background(148,233,252);
        image(board,33,160,650,450);
        image(teacher3,420,370,350,440);
        fill(153,216,255);
        rect(0,800,720,400);
        fill(0);
        textSize(50);
        text('Press..', 50,870);
        strokeWeight(1);
        textSize(39);
        text('#4 for Moscow', 190, 940);
        text('#5 for China', 50,1033);
        text('#6 for Seoul', 50,1130);
        text('#7 for Sun Valley', 350, 1033);
        text('#8 for London', 350, 1123);

        textSize(30);
        strokeWeight(1);
        text('Date/Time: '+ koreaData.list[0].dt_txt, 60,130);
        textSize(40);
        fill(255);
        stroke(0);
        strokeWeight(3);
        textFont('Helvetica');
        text('Main Temperature: '+ (int(koreaData.list[0].main.temp)-273) +'°C ' ,70,250);
        text('Humidity:' + koreaData.list[0].main.humidity  + '%', 70,320);
        text('Status: ' + koreaData.list[0].weather[0].main, 70, 390);
        text('Description: '+ koreaData.list[0].weather[0].description, 70,460);

        fill(0);
        noStroke();
        text('Seoul', 60,80);

      }

      function drawScreen7(){
        background(148,233,252);
        image(board,33,160,650,450);
        image(teacher4,480,390,360,440);
        fill(153,216,255);
        rect(0,800,720,400);
        fill(0);
        textSize(50);
        strokeWeight(1);
        text('Press..', 50,870);
        textSize(39);
        text('#4 for Moscow', 190, 940);
        text('#5 for China', 50,1033);
        text('#6 for Seoul', 50,1130);
        text('#7 for Sun Valley', 350, 1033);
        text('#8 for London', 350, 1123);

        textSize(30);
        strokeWeight(1);
        text('Date/Time: '+ sunvalleyData.list[0].dt_txt, 60,130);
        textSize(40);
        fill(255);
        stroke(0);
        strokeWeight(3);
        textFont('Helvetica');
        text('Main Temperature: '+ (int(sunvalleyData.list[0].main.temp)-273) +'°C ' ,70,250);
        text('Humidity:' + sunvalleyData.list[0].main.humidity + '%' , 70,320);
        text('Status: ' + sunvalleyData.list[0].weather[0].main, 70, 390);
        text('Description: '+ sunvalleyData.list[0].weather[0].description, 70,460);

        fill(0);
        noStroke();
        text('Sun Valley', 60,80);

      }

      function drawScreen8(){
        background(148,233,252);
        image(board,33,160,650,450);
        image(teacher5,440,379,370,420);
        fill(153,216,255);
        rect(0,800,720,400);
        strokeWeight(1);
        fill(0);
        textSize(50);
        text('Press..', 50,870);
        textSize(39);
        text('#4 for Moscow', 190, 940);
        text('#5 for China', 50,1033);
        text('#6 for Seoul', 50,1130);
        text('#7 for Sun Valley', 350, 1033);
        text('#8 for London', 350, 1123);

        textSize(30);
        strokeWeight(1);
        text('Date/Time: '+ londonData.list[0].dt_txt, 60,130);
        textSize(40);
        fill(255);
        stroke(0);
        strokeWeight(3);
        textFont('Helvetica');
        text('Main Temperature: '+ (int(londonData.list[0].main.temp)-273) +'°C ' ,70,250);
        text('Humidity:' + londonData.list[0].main.humidity  + '%', 70,320);
        text('Status: ' + londonData.list[0].weather[0].main, 70, 390);
        text('Description: '+ londonData.list[0].weather[0].description, 70,460);

        fill(0);
        noStroke();
        text('London', 60,80);


      }
      function drawScreen9(){
        background(173,241,255);
        strokeWeight(1);
        stroke(2);
        fill(252,233,207);
        rect(20,120,650,500);

        strokeWeight(1);
        stroke(2);

        line(50,(sv+350), 250, (sv1+350));
        line(250,(sv1+350), 290, (sv2+350));
        line(290,sv2+350, 350,sv3+350);
        line(350,sv3+350, 590, sv4+350);

        line(0,1200, 720,1200);


        noStroke();
        fill(119,209,255);
        ellipse(50,(sv+350),27,27);


        noStroke();
        fill(119,255,248);
        ellipse(250, (sv1+350), 27,27);

        noStroke();
        fill(155,255,157);
        ellipse(290, (sv2+350),27,27);

        noStroke();
        fill(116,193,117);
        ellipse(350, (sv3+350),27,27);

        noStroke();
        fill(255);
        ellipse(590, (sv4+350),27,27);

        strokeWeight(1);
        stroke(1);
        fill(119,209,255);
        ellipse(80,480,50,50);
        fill(119,255,248);
        ellipse(80, 565, 50,50);
        fill(155,255,157);
        ellipse(290, 480,50,50);
        fill(116,193,117);
        ellipse(290,565,50,50);
        fill(255);
        ellipse(500,480,50,50);

        textSize(45);
        strokeWeight(1);
        stroke(1);
        fill(0);
        text(':'+ sv +'°C ',120,495);
        text(':'+ sv1 +'°C ',120,580);
        text(': '+ sv2 +'°C ',320,495);
        text(': '+ sv3 +'°C ',320,580);
        text(':'+ sv4 +'°C ',530,495);

        stroke(255);
        fill(255);
        rect(20,680,270,80);
        rect(20,790,270,80);
        rect(400,680,270,80);
        rect(400,790,270,80);
        rect(210,915,270,80);





        }

      function drawScreen10(){
        background(173,241,255);
        strokeWeight(1);
        stroke(2);
        fill(252,233,207);
        rect(20,120,650,500);

        strokeWeight(1);
        stroke(2);

        line(50,(kr+350), 250, (kr1+350));
        line(250,(kr1+350), 290, (kr2+350));
        line(290,kr2+350, 350,kr3+350);
        line(350,kr3+350, 590, kr4+350);

        line(0,1200, 720,1200);


        noStroke();
        fill(119,209,255);
        ellipse(50,(kr+350),27,27);


        noStroke();
        fill(119,255,248);
        ellipse(250, (kr1+350), 27,27);

        noStroke();
        fill(155,255,157);
        ellipse(290, (kr2+350),27,27);

        noStroke();
        fill(116,193,117);
        ellipse(350, (kr3+350),27,27);

        noStroke();
        fill(255);
        ellipse(590, (kr4+350),27,27);

        strokeWeight(1);
        stroke(1);
        fill(119,209,255);
        ellipse(80,480,50,50);
        fill(119,255,248);
        ellipse(80, 565, 50,50);
        fill(155,255,157);
        ellipse(290, 480,50,50);
        fill(116,193,117);
        ellipse(290,565,50,50);
        fill(255);
        ellipse(500,480,50,50);

        textSize(45);
        strokeWeight(1);
        stroke(1);
        fill(0);
        text(':'+ kr +'°C ',120,495);
        text(':'+ kr1 +'°C ',120,580);
        text(': '+ kr2 +'°C ',320,495);
        text(': '+ kr3 +'°C ',320,580);
        text(':'+ kr4 +'°C ',530,495);

        stroke(255);
        fill(255);
        rect(20,680,270,80);
        rect(20,790,270,80);
        rect(400,680,270,80);
        rect(400,790,270,80);
        rect(210,915,270,80);



        }


      function drawScreen11(){
        background(173,241,255);
        strokeWeight(1);
        stroke(2);
        fill(252,233,207);
        rect(20,120,650,500);

        strokeWeight(1);
        stroke(2);

        line(50,(cn+350), 250, (cn1+350));
        line(250,(cn1+350), 290, (cn2+350));
        line(290,cn2+350, 350,cn3+350);
        line(350,cn3+350, 590, cn4+350);

        line(0,1200, 720,1200);


        noStroke();
        fill(119,209,255);
        ellipse(50,(cn+350),27,27);


        noStroke();
        fill(119,255,248);
        ellipse(250, (cn1+350), 27,27);

        noStroke();
        fill(155,255,157);
        ellipse(290, (cn2+350),27,27);

        noStroke();
        fill(116,193,117);
        ellipse(350, (cn3+350),27,27);

        noStroke();
        fill(255);
        ellipse(590, (cn4+350),27,27);

        strokeWeight(1);
        stroke(1);
        fill(119,209,255);
        ellipse(80,480,50,50);
        fill(119,255,248);
        ellipse(80, 565, 50,50);
        fill(155,255,157);
        ellipse(290, 480,50,50);
        fill(116,193,117);
        ellipse(290,565,50,50);
        fill(255);
        ellipse(500,480,50,50);

        textSize(45);
        strokeWeight(1);
        stroke(1);
        fill(0);
        text(':'+ cn +'°C ',120,495);
        text(':'+ cn1 +'°C ',120,580);
        text(': '+ cn2 +'°C ',320,495);
        text(': '+ cn3 +'°C ',320,580);
        text(':'+ cn4 +'°C ',530,495);

        stroke(255);
        fill(255);
        rect(20,680,270,80);
        rect(20,790,270,80);
        rect(400,680,270,80);
        rect(400,790,270,80);
        rect(210,915,270,80);






      }
      function drawScreen12(){
        background(173,241,255);
        strokeWeight(1);
        stroke(2);
        fill(252,233,207);
        rect(20,120,650,500);

        strokeWeight(1);
        stroke(2);

        line(50,(gb+350), 250, (gb1+350));
        line(250,(gb1+350), 290, (gb2+350));
        line(290,gb2+350, 350,gb3+350);
        line(350,gb3+350, 590, gb4+350);

        line(0,1200, 720,1200);


        noStroke();
        fill(119,209,255);
        ellipse(50,(gb+350),27,27);


        noStroke();
        fill(119,255,248);
        ellipse(250, (gb1+350), 27,27);

        noStroke();
        fill(155,255,157);
        ellipse(290, (gb2+350),27,27);

        noStroke();
        fill(116,193,117);
        ellipse(350, (gb3+350),27,27);

        noStroke();
        fill(255);
        ellipse(590, (gb4+350),27,27);

        strokeWeight(1);
        stroke(1);
        fill(119,209,255);
        ellipse(80,480,50,50);
        fill(119,255,248);
        ellipse(80, 565, 50,50);
        fill(155,255,157);
        ellipse(290, 480,50,50);
        fill(116,193,117);
        ellipse(290,565,50,50);
        fill(255);
        ellipse(500,480,50,50);

        textSize(45);
        strokeWeight(1);
        stroke(1);
        fill(0);
        text(':'+ gb +'°C ',120,495);
        text(':'+ gb1 +'°C ',120,580);
        text(': '+ gb2 +'°C ',320,495);
        text(': '+ gb3 +'°C ',320,580);
        text(':'+ gb4 +'°C ',530,495);

        stroke(255);
        fill(255);
        rect(20,680,270,80);
        rect(20,790,270,80);
        rect(400,680,270,80);
        rect(400,790,270,80);
        rect(210,915,270,80);



      }




    function mousePressed(){
      if(scr == 1){
        if (mouseX >= 54 && mouseX <= 304 && mouseY >= 350 && mouseY <= 420){
          scr = 2;
          }
        } else if (scr == 2){
          if(mouseX >= 110 && mouseX <= 230 && mouseY >= 1215 && mouseY <= 1260){
            scr = 1;
          }
        }
        if (scr == 1){
          if (mouseX >= 418 && mouseX <= 668 && mouseY >= 350 && mouseY <= 420){
            scr = 3;
            }
        } else if (scr == 3){
          if(mouseX >= 110 && mouseX <= 230 && mouseY >= 1215 && mouseY <= 1260){
            scr = 1;
          }
        }
      if (scr == 1){
        if (mouseX >= 28 && mouseX <= 333 && mouseY >= 870 && mouseY <= 940){
          scr = 4;
          }
        } else if (scr == 4){
          if(mouseX >= 110 && mouseX <= 230 && mouseY >= 1215 && mouseY <= 1260){
            scr = 1;
          }
        }
      }
function keyPressed(){

  if (key == '4'){
    scr = 4;
  }
  if (key =='5'){
    scr =5;
  }
  if (key == '6'){
    scr = 6;
  }
  if(key == '7'){
    scr = 7;
  }
  if (key == '8'){
    scr = 8;
  }
  if (key == 'A'){
    scr = 9;
  }
  if (key == 'B'){
    scr = 10;
  }
  if (key == 'C'){
    scr = 11;
  }
  if (key =='D'){
    scr = 12;
  }
  if (key =='E'){
    scr = 3;
  }
}












        //scr = 4;
    //  } else if (scr == 4){
    //    scr = 5;
    //  } else if (scr == 5){
      //  scr = 6;
  //    } else if (scr == 6){
  //      scr = 7;
      //}
