// function parser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://crossorigin.me/http://sayumm.cloudapp.net:5000/latest", true);
    xmlhttp.send();
    xmlhttp.onload = myCallback;



function myCallback(e) {

    xmlDoc = JSON.parse(xmlhttp.responseText);
   	xmlDoc = xmlDoc.result[0];
   	xmlDoc = JSON.parse(xmlDoc.id);
   	console.log(xmlDoc)
   	var transcript = ''
    for (var i = 0; i < xmlDoc.transcript.length; i++) {	
        transcript += ' ' + xmlDoc.transcript[i][0];
    }

	document.getElementById("sentiment").innerHTML = " " + xmlDoc.sentiment.docSentiment.type; // temp text

    //document.getElementById("speechtext").innerHTML = transcript; // temp text

    document.getElementById("ums_total").innerHTML = xmlDoc.ums_total; // ums total

    document.getElementById("wpm").innerHTML = Math.round(xmlDoc.wpm) + ' words'; // wrods per min

    document.getElementById("upm").innerHTML = Math.round(xmlDoc.upm) + ' "umms"'; // upms per min

    document.getElementById("words_total").innerHTML = transcript.length; // words total

    var array =  ["including","indeed","further", "either","neither","also","moreover","furthermore","actually",	
		"additionally","alternatively"];
	var trans_total=0;
	for (var j = 0; j <xmlDoc.transcript.length; j++){
		if(array.indexOf(xmlDoc.transcript[j]) > -1){
			trans_total = trans_total +1;
		}
	}

var intensity=9;
var data1=getDataPoints([[50,35,intensity]],Math.round(xmlDoc.panel_data.panel1*10))
var data2=getDataPoints([[150,35,intensity]],Math.round(xmlDoc.panel_data.panel2*10))
var data3=getDataPoints([[250,35,intensity]],Math.round(xmlDoc.panel_data.panel3*10))
var data4=getDataPoints([[50,105,intensity]],Math.round(xmlDoc.panel_data.panel4*10))
var data5=getDataPoints([[150,105,intensity]],Math.round(xmlDoc.panel_data.panel5*10))
var data6=getDataPoints([[250,105,intensity]],Math.round(xmlDoc.panel_data.panel6*10))
var data7=getDataPoints([[175,175,intensity]],Math.round(xmlDoc.panel_data.panel7*10))
var data8=getDataPoints([[150,175,intensity]],Math.round(xmlDoc.panel_data.panel8*10))
var data9=getDataPoints([[250,175,intensity]],Math.round(xmlDoc.panel_data.panel9*10))



var allData=data1.concat(data2,data3,data4,data5,data6,data7,data8,data9)

//window.alert(data4)

  var heat = simpleheat('canvas').data(allData),
    frame;

  draw(heat);

	document.getElementById("trans_total").innerHTML = trans_total;
	colorByConfidence(xmlDoc.transcript);
	return 0;
}

function draw(heat) {
    console.time('draw');
    heat.draw();
    console.timeEnd('draw');
    frame = null;
}

function getDataPoints(data,numberOfTimes)
{
  val=data[0]
  if(numberOfTimes==0)
    return [];
  for(var i=0;i<numberOfTimes;i++)
      val.push(data[0])
  return val;
}




function colorByConfidence(results){
	console.log('colorbyconi')
   var myDiv = document.getElementById('speechtext');
   var i = 0;
   var color = 0;
   var htmlToInsert = '';
   for(i=0; i<results.length; i++){
       color = Math.round((results[i][1])*255.0);
       htmlToInsert+='<span style="background-color:rgba('+color+','+color+',255,0.5)">'+ results[i][0] + ' </span>';
   }
   myDiv.innerHTML = htmlToInsert;
}

function getRandom() {
  return(String(Math.random() * 10));
		}
   document.getElementById("random").innerHTML = getRandom().substring(0,5);

 
/*

document.getElementById("word_times").value = xmlDoc.word_times;

document.getElementById("").value = xmlDoc.;

document.getElementById("").value = xmlDoc.;




results['transcript'] = [(string, number, number, number), ...]
results['word_times'] = [(number, number), ...] */