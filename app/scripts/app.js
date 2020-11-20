//Program Startup
function start(){
  MyToday();
  req_info();
  search_Day();
  getMemory();
  myFunction();
  document.getElementById("input_r").style.display="none";
}

function MyToday(){
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth()+1; //January is 0!
  var dd = today.getDate();

  if(mm<10) {mm='0'+mm}
  if(dd<10) {dd='0'+dd}
  today = yyyy + ' / ' + mm +' / ' + dd;

   var d = new Date();
   var weekdayCH = new Array(7);
    //var weekdayPT = new Array(7);
      weekdayCH[0] = "星期日";weekdayCH[1] = "星期一";weekdayCH[2] = "星期二";
      weekdayCH[3] = "星期三";weekdayCH[4] = "星期四";weekdayCH[5] = "星期五";
      weekdayCH[6] = "星期六";

document.getElementById("weekdayCH").innerHTML = weekdayCH[d.getDay()];
document.getElementById("day").innerHTML =  today;

document.getElementById("getCMonth").value = mm;
document.getElementById("getCYear").value = yyyy;
}

function req_info(){

  var gy = document.getElementById("getCYear").value;
  if (gy=="2020"){gy=0}
  if (gy=="2021"){gy=1}

  var gc = document.getElementById("getCMonth").value;
  // set array length
  var arrayLength = 27;

  // create array
  var multiArray = new Array(arrayLength);
  for (var i = 0; i < 27; i++) {
    multiArray[i] = new Array(arrayLength);
  }

 // 2020
 multiArray[0][0]  = "00";multiArray[0][1]  = "19";multiArray[0][2]  = "20";
 multiArray[0][3]  = "22";multiArray[0][4]  = "18";multiArray[0][5]  = "20";
 multiArray[0][6]  = "21";multiArray[0][7]  = "23";multiArray[0][8]  = "21";
 multiArray[0][9]  = "22";multiArray[0][10] = "18";multiArray[0][11] = "20";
 multiArray[0][12] = "18";
 //2021
 multiArray[1][0]  = "00";multiArray[1][1]  = "20";multiArray[1][2]  = "17";
 multiArray[1][3]  = "23";multiArray[1][4]  = "19";multiArray[1][5]  = "19";
 multiArray[1][6]  = "21";multiArray[1][7]  = "22";multiArray[1][8]  = "22";
 multiArray[1][9]  = "21";multiArray[1][10] = "18";multiArray[1][11] = "21";
 multiArray[1][12] = "18";

var WorkDay = multiArray[gy][gc];

document.getElementById("demo5").innerHTML = WorkDay;

 var Req_hours = Math.round(((WorkDay*44)/5)*100)/100;
 var Req_mins = (((WorkDay*44)/5)*60);

 document.getElementById("demo81").innerHTML = Req_hours;
 document.getElementById("demo80").innerHTML = Req_mins;

 //alert(Req_hours);
 //alert(Req_mins);

}

function search_Day(){

  var today = new Date();
  var cyyyy = today.getFullYear();
  var cmm = today.getMonth()+1;

  var yyyy=document.getElementById("getCYear").value;
  var mm=document.getElementById("getCMonth").value;
  //var mm = today.getMonth()+1; //January is 0!
  var dd = today.getDate();
  //var mm = 11; //Testing Value
  var lastday = new Date(yyyy,mm,0).getDate();

  document.getElementById("29").style.visibility = 'visible';
  document.getElementById("30").style.visibility = 'visible';
  document.getElementById("31").style.visibility = 'visible';
  document.getElementById("IF29").style.visibility = 'visible';
  document.getElementById("IF30").style.visibility = 'visible';
  document.getElementById("IF31").style.visibility = 'visible';

  switch (lastday) {
    case 28:
    document.getElementById("IF29").value = 0;
    document.getElementById("IF30").value = 0;
    document.getElementById("IF31").value = 0;

    document.getElementById("29").style.visibility = 'hidden';
    document.getElementById("30").style.visibility = 'hidden';
    document.getElementById("31").style.visibility = 'hidden';

    document.getElementById("IF29").style.visibility = 'hidden';
    document.getElementById("IF30").style.visibility = 'hidden';
    document.getElementById("IF31").style.visibility = 'hidden';
    break;

    case 29:
    document.getElementById("IF30").value = 0;
    document.getElementById("IF31").value = 0;

    document.getElementById("30").style.visibility = 'hidden';
    document.getElementById("31").style.visibility = 'hidden';

    document.getElementById("IF30").style.visibility = 'hidden';
    document.getElementById("IF31").style.visibility = 'hidden';

    break;

    case 30:
    document.getElementById("IF31").value = 0;
    document.getElementById("IF31").style.visibility = 'hidden';
    document.getElementById("31").style.visibility = 'hidden';
    break;

  }

  var weekdayCH = new Array(7);
  weekdayCH[0] = "日";weekdayCH[1] = "一";weekdayCH[2] = "二";weekdayCH[3] = "三";
  weekdayCH[4] = "四";weekdayCH[5] = "五";weekdayCH[6] = "六";


var getWeekInMonth = new Array(lastday);
var Gi;
for (Gi = 0; Gi < lastday+1; Gi++){
    getWeekInMonth[Gi]=new Date(yyyy + '/' + mm + '/' + Gi).getDay();
}


//alert(getWeekInMonth[4]);

  var Index;
    for (Index = 1; Index < lastday+1; Index++){

// add "0"
    if(Index<10) {
        var Sh ='0'+ Index;
       document.getElementById(Index).innerHTML = Sh+weekdayCH[getWeekInMonth[Index]];
    } else{
       document.getElementById(Index).innerHTML = Index+weekdayCH[getWeekInMonth[Index]];
    }
//Search Sat and Sun
    if(getWeekInMonth[Index]==0||getWeekInMonth[Index]==6||
                      yyyy==2020 && mm==1 && Index==1 ||
                      yyyy==2020 && mm==1 && Index==27 ||
                      yyyy==2020 && mm==4 && Index==10 ||
                      yyyy==2020 && mm==4 && Index==30 ||
                      yyyy==2020 && mm==5 && Index==1 ||
                      yyyy==2020 && mm==6 && Index==25 ||
                      yyyy==2020 && mm==1 && Index==28 ||
                      yyyy==2020 && mm==1 && Index==29 ||
                      yyyy==2020 && mm==10 && Index==1 ||
                      yyyy==2020 && mm==10 && Index==2 ||
                      yyyy==2020 && mm==11 && Index==2 ||
                      yyyy==2020 && mm==12 && Index==8 ||
                      yyyy==2020 && mm==12 && Index==21 ||
                      yyyy==2020 && mm==12 && Index==24 ||
                      yyyy==2020 && mm==12 && Index==25 ||
                      yyyy==2021 && mm==1 && Index==1 ||
                      yyyy==2021 && mm==2 && Index==12 ||
                      yyyy==2021 && mm==4 && Index==2 ||
                      yyyy==2021 && mm==5 && Index==19 ||
                      yyyy==2021 && mm==6 && Index==14 ||
                      yyyy==2021 && mm==9 && Index==22 ||
                      yyyy==2021 && mm==10 && Index==1 ||
                      yyyy==2021 && mm==10 && Index==14 ||
                      yyyy==2021 && mm==11 && Index==2 ||
                      yyyy==2021 && mm==12 && Index==8 ||
                      yyyy==2021 && mm==12 && Index==20 ||
                      yyyy==2021 && mm==12 && Index==21 ||
                      yyyy==2021 && mm==12 && Index==24
    ){
      document.getElementById(Index).style.color="RED";
    } else{
      if( yyyy==2020 && mm==1 && Index==28 ||
          yyyy==2020 && mm==1 && Index==29 ||
          yyyy==2020 && mm==4 && Index==6 ||
          yyyy==2020 && mm==4 && Index==13 ||
          yyyy==2020 && mm==10 && Index==26 ||
          yyyy==2021 && mm==2 && Index==15 ||
          yyyy==2021 && mm==2 && Index==16 ||
          yyyy==2021 && mm==4 && Index==5 ||
          yyyy==2021 && mm==4 && Index==6 ||
          yyyy==2021 && mm==5 && Index==3 ||
          yyyy==2021 && mm==10 && Index==4 ||
          yyyy==2020 && mm==12 && Index==22 ||
          yyyy==2021 && mm==12 && Index==27
      ){
        document.getElementById(Index).style.color="LIMEGREEN";
      } else {
        if( yyyy==2020 && mm==1 && Index==24 ||
            yyyy==2020 && mm==10 && Index==5 ||
            yyyy==2020 && mm==12 && Index==31 ||
            yyyy==2021 && mm==2 && Index==11 ||
            yyyy==2020 && mm==12 && Index==31
        ){
          document.getElementById(Index).style.color="LightPink";
        } else {
      document.getElementById(Index).style.color="WHITE";
      document.getElementById("IF"+Index).style.backgroundColor="WHITE";
    }}}

    if (yyyy==cyyyy && mm==cmm && dd==Index ){
            document.getElementById("IF"+Index).style.backgroundColor="YELLOW";}
}


}

function getMemory(){

  reSet();

  var Index;
  var i;
  for (Index = 1; Index < 32; Index++){
    i="IF"+Index;
    j=""+Index;
    document.getElementById(i).value= localStorage.getItem(j);
  }

  document.getElementById("A1").value= localStorage.getItem("A1");
  document.getElementById("A2").value= localStorage.getItem("A2");
  document.getElementById("A3").value= localStorage.getItem("A3");
  document.getElementById("A4").value= localStorage.getItem("A4");
  document.getElementById("A5").value= localStorage.getItem("A5");
  document.getElementById("A6").value= localStorage.getItem("A6");
  document.getElementById("A7").value= localStorage.getItem("A7");
  document.getElementById("A8").value= localStorage.getItem("A8");
  document.getElementById("A9").value= localStorage.getItem("A9");
  document.getElementById("A10").value= localStorage.getItem("A10");

  document.getElementById("A1R").value= localStorage.getItem("A1R");
  document.getElementById("A2R").value= localStorage.getItem("A2R");
  document.getElementById("A3R").value= localStorage.getItem("A3R");
  document.getElementById("A4R").value= localStorage.getItem("A4R");
  document.getElementById("A5R").value= localStorage.getItem("A5R");
  document.getElementById("A6R").value= localStorage.getItem("A6R");
  document.getElementById("A7R").value= localStorage.getItem("A7R");
  document.getElementById("A8R").value= localStorage.getItem("A8R");
  document.getElementById("A9R").value= localStorage.getItem("A9R");
  document.getElementById("A10R").value= localStorage.getItem("A10R");

}

function OH() {

  var yyyy=document.getElementById("getCYear").value;
  var mm=document.getElementById("getCMonth").value;
  var lastday = new Date(yyyy,mm,0).getDate();
  //alert(lastday);


var CON_OH = document.getElementById("CON").value;

  if(CON_OH==1){
    CON_OH = prompt("請輸入分鐘數：");
      if (CON_OH == null||CON_OH=="")
        CON_OH=0;
    }
      //options start at 0
      document.getElementById('CON').options[4].value = CON_OH;

var M=CON_OH;
var Gi;

  for (Gi = 1; Gi < lastday+1; Gi++){
    var i="IF"+Gi;
    document.getElementById(i).value = M;
  }

  document.getElementById("A1").value = Z;

  //myFunction();
}

function ONChg(){
  OH();
  myFunction();
}

function change_zero(i){
  var j="IF"+i;
  document.getElementById(j).value = 0;
}

function myFunction(){

    req_info();

      var CON_x = parseInt(document.getElementById("CON").value);
      //var CON_x = CON_OH;
//alert(CON_x);
      var IF1_x = parseInt(document.getElementById("IF1").value);
      var IF2_x = parseInt(document.getElementById("IF2").value);
      var IF3_x = parseInt(document.getElementById("IF3").value);
      var IF4_x = parseInt(document.getElementById("IF4").value);
      var IF5_x = parseInt(document.getElementById("IF5").value);
      var IF6_x = parseInt(document.getElementById("IF6").value);
      var IF7_x = parseInt(document.getElementById("IF7").value);
      var IF8_x = parseInt(document.getElementById("IF8").value);
      var IF9_x = parseInt(document.getElementById("IF9").value);
      var IF10_x = parseInt(document.getElementById("IF10").value);
      var IF11_x = parseInt(document.getElementById("IF11").value);
      var IF12_x = parseInt(document.getElementById("IF12").value);
      var IF13_x = parseInt(document.getElementById("IF13").value);
      var IF14_x = parseInt(document.getElementById("IF14").value);
      var IF15_x = parseInt(document.getElementById("IF15").value);
      var IF16_x = parseInt(document.getElementById("IF16").value);
      var IF17_x = parseInt(document.getElementById("IF17").value);
      var IF18_x = parseInt(document.getElementById("IF18").value);
      var IF19_x = parseInt(document.getElementById("IF19").value);
      var IF20_x = parseInt(document.getElementById("IF20").value);
      var IF21_x = parseInt(document.getElementById("IF21").value);
      var IF22_x = parseInt(document.getElementById("IF22").value);
      var IF23_x = parseInt(document.getElementById("IF23").value);
      var IF24_x = parseInt(document.getElementById("IF24").value);
      var IF25_x = parseInt(document.getElementById("IF25").value);
      var IF26_x = parseInt(document.getElementById("IF26").value);
      var IF27_x = parseInt(document.getElementById("IF27").value);
      var IF28_x = parseInt(document.getElementById("IF28").value);
      var IF29_x = parseInt(document.getElementById("IF29").value);
      var IF30_x = parseInt(document.getElementById("IF30").value);
      var IF31_x = parseInt(document.getElementById("IF31").value);

      var A1_x = parseInt(document.getElementById("A1").value);
      var A2_x = parseInt(document.getElementById("A2").value);
      var A3_x = parseInt(document.getElementById("A3").value);
      var A4_x = parseInt(document.getElementById("A4").value);
      var A5_x = parseInt(document.getElementById("A5").value);
      var A6_x = parseInt(document.getElementById("A6").value);
      var A7_x = parseInt(document.getElementById("A7").value);
      var A8_x = parseInt(document.getElementById("A8").value);
      var A9_x = parseInt(document.getElementById("A9").value);
      var A10_x = parseInt(document.getElementById("A10").value);

      var Sum_A_x = A1_x+A2_x+A3_x+A4_x+A5_x+A6_x+A7_x+A8_x+A9_x+A10_x;

      var Sumtotal =[IF1_x,IF2_x,IF3_x,IF4_x,IF5_x,IF6_x,IF7_x,IF8_x,IF9_x,IF10_x,
                     IF11_x,IF12_x,IF13_x,IF14_x,IF15_x,IF16_x,IF17_x,IF18_x,IF19_x,IF20_x,
                     IF21_x,IF22_x,IF23_x,IF24_x,IF25_x,IF26_x,IF27_x,IF28_x,IF29_x,IF30_x,
                     IF31_x];

          var IF=0,Zero=0,Index=0;

          for (Index = 0; Index < 31; Index++) {
              IF += Sumtotal[Index];
              if(Sumtotal[Index]==parseInt("0")){
                Zero +=1;
              }
    }

               var gy = document.getElementById("getCYear").value;

                if (gy=="2020"){gy=0}
                if (gy=="2021"){gy=1}

                var gc = document.getElementById("getCMonth").value;
                // set array length
                var arrayLength = 27;

                // create array
                var multiArray = new Array(arrayLength);
                for (var i = 0; i < arrayLength; i++) {
                  multiArray[i] = new Array(arrayLength);
                }

               // 2020
               multiArray[0][0]  = "00";multiArray[0][1]  = "19";
               multiArray[0][2]  = "20";multiArray[0][3]  = "22";
               multiArray[0][4]  = "18";multiArray[0][5]  = "20";
               multiArray[0][6]  = "21";multiArray[0][7]  = "23";
               multiArray[0][8]  = "21";multiArray[0][9]  = "22";
               multiArray[0][10] = "18";multiArray[0][11] = "20";
               multiArray[0][12] = "18";
               //2021
               multiArray[1][0]  = "00";multiArray[1][1]  = "20";
               multiArray[1][2]  = "17";multiArray[1][3]  = "23";
               multiArray[1][4]  = "19";multiArray[1][5]  = "19";
               multiArray[1][6]  = "21";multiArray[1][7]  = "22";
               multiArray[1][8]  = "22";multiArray[1][9]  = "21";
               multiArray[1][10] = "18";multiArray[1][11] = "21";
               multiArray[1][12] = "18";

               var WorkDay = multiArray[gy][gc];//alert(WorkDay);
//var D81 = parseInt(document.getElementById("demo81").value);

//var Req_hours = Math.round(((multiArray[gy][gc]*44)/5)*100)/100;
var Req_hours = Math.round(((WorkDay*44)/5)*100)/100;
var Req_mins = (((WorkDay)*44)/5)*60;//alert(Req_mins);
var Sum_hour = Math.round(((IF+Sum_A_x)/60)*100)/100;//alert(Sum_hour);

var RHH =  parseInt((93*(31-Zero)) / 60);
var RHS = (93*(31-Zero)) % 60;
var RHM = RHH*60+RHS;

//該月所需工作總時數(小時/分鐘)


//document.getElementById("demo80").innerHTML = D8


document.getElementById("min").innerHTML = CON_x;

//辦公室需補充時數
document.getElementById("RHour").innerHTML = RHH+"小時"+RHS+"分 / "+RHM+" 分鐘";
//alert(Req_mins);

document.getElementById("Sum_A").innerHTML = Sum_A_x;

//尚需工作時數(小時/分鐘)
//alert(D81,Sum_hour);
document.getElementById("RHours").innerHTML = Math.round((Req_hours-Sum_hour)*100)/100;
document.getElementById("RMins").innerHTML = Req_mins-(IF+parseInt(Sum_A_x));

//工作總時數(小時/分鐘)
document.getElementById("demo67").innerHTML = Math.round(((IF+Sum_A_x)/60)*100)/100;
document.getElementById("demo07").innerHTML = parseInt(IF)+parseInt(Sum_A_x);

document.getElementById("OHtotal").innerHTML = (31-Zero)*435+RHM;
document.getElementById("Lmin").innerHTML = RHM - parseInt(Sum_A_x);
//該月工作個數(個)
document.getElementById("demo98").innerHTML = 31-Zero;
document.getElementById("dr").innerHTML = 31-Zero;

//該月工作日日數(日)
//document.getElementById("demo5").innerHTML = multiArray[gy][gc];


      //尚需工作個數約
      document.getElementById("demo10").innerHTML = Math.round((Req_mins-IF-parseInt(Sum_A_x))/CON_x);


      //Math.round(((Req_mins-IF-parseInt(Sum_A_x))/60)*100)/100;


      //Req_mins-IF-parseInt(Sum_A_x);

}

function reSet() {
    var Index;
    var i;
    for (Index = 1; Index < 32; Index++){
      i="IF"+Index;
      document.getElementById(i).value = 0;
    }
      document.getElementById("A1").value = 0;
      document.getElementById("A2").value = 0;
      document.getElementById("A3").value = 0;
      document.getElementById("A4").value = 0;
      document.getElementById("A5").value = 0;
      document.getElementById("A6").value = 0;
      document.getElementById("A7").value = 0;
      document.getElementById("A8").value = 0;
      document.getElementById("A9").value = 0;
      document.getElementById("A10").value = 0;

      document.getElementById("A1R").value = "";
      document.getElementById("A2R").value = "";
      document.getElementById("A3R").value = "";
      document.getElementById("A4R").value = "";
      document.getElementById("A5R").value = "";
      document.getElementById("A6R").value = "";
      document.getElementById("A7R").value = "";
      document.getElementById("A8R").value = "";
      document.getElementById("A9R").value = "";
      document.getElementById("A10R").value = "";
}

function setMemory(){

  if (typeof(Storage)!== "undefined"){

    var Index;
    var i;
    for (Index = 1; Index < 32; Index++){
      i="IF"+Index;
      j=""+Index;
      localStorage.setItem(j,document.getElementById(i).value);
    }
      localStorage.setItem("A1",document.getElementById("A1").value);
      localStorage.setItem("A2",document.getElementById("A2").value);
      localStorage.setItem("A3",document.getElementById("A3").value);
      localStorage.setItem("A4",document.getElementById("A4").value);
      localStorage.setItem("A5",document.getElementById("A5").value);
      localStorage.setItem("A6",document.getElementById("A6").value);
      localStorage.setItem("A7",document.getElementById("A7").value);
      localStorage.setItem("A8",document.getElementById("A8").value);
      localStorage.setItem("A9",document.getElementById("A9").value);
      localStorage.setItem("A10",document.getElementById("A10").value);

      localStorage.setItem("A1R",document.getElementById("A1R").value);
      localStorage.setItem("A2R",document.getElementById("A2R").value);
      localStorage.setItem("A3R",document.getElementById("A3R").value);
      localStorage.setItem("A4R",document.getElementById("A4R").value);
      localStorage.setItem("A5R",document.getElementById("A5R").value);
      localStorage.setItem("A6R",document.getElementById("A6R").value);
      localStorage.setItem("A7R",document.getElementById("A7R").value);
      localStorage.setItem("A8R",document.getElementById("A8R").value);
      localStorage.setItem("A9R",document.getElementById("A9R").value);
      localStorage.setItem("A10R",document.getElementById("A10R").value);

}else{}
  alert("已儲存完成\n返回時將自動載入資料");
}

function showhide(){
  var x = document.getElementById("input_r");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

myFunction();
}
