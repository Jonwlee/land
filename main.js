function parser() {
	var xmlhttp=XMLHttpRequest();
	xmlhttp.open("GET","http//:sayumm.cloudapp.net/latest",true);
	xmlhttp.send();
	xmlhttp.onload=myCallback;
   
	//xmlhttp.responseXML;
}
     
     
function myCallback(e){
	xmlDoc = JSON.parse(this.responseXML);
	document.getElementById("sentiment").value = xmlDoc.sentiment; //sentiment

	for(var i=0;i < responseXML.transcript.length; i++){
	var transcript = " " + responseXML.transcript[i];
		}


document.getElementById("speechtext").value = transcript; // temp text

document.getElementById("ums_total").value = responseXML.ums_total; // ums total

document.getElementById("wpm").value = responseXML.wpm; // wrods per min

document.getElementById("upm").value = responseXML.upm; // upms per min

document.getElementById("words_total").value = responseXML.words_total; // words total


}









document.getElementById("word_times").value = responseXML.word_times;

document.getElementById("").value = responseXML.;

document.getElementById("").value = responseXML.;



 
results['transcript'] = [ (string,number,number,number), ... ]
results['word_times'] = [ (number, number), ...]



