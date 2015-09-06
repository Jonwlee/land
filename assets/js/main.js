function parser() {
    var xmlhttp = XMLHttpRequest();
    xmlhttp.open("GET", "http//:sayumm.cloudapp.net/latest", true);
    xmlhttp.send();
    xmlhttp.onload = myCallback;
}


function myCallback(e) {
    xmlDoc = JSON.parse(this.responseXML);
    document.getElementById("sentiment").value = xmlDoc.sentiment; //sentiment

    for (var i = 0; i < responseXML.transcript.length; i++) {
        var transcript = " " + responseXML.transcript[i];
    }


    document.getElementById("speechtext").value = transcript; // temp text

    document.getElementById("ums_total").value = responseXML.ums_total; // ums total

    document.getElementById("wpm").value = responseXML.wpm; // wrods per min

    document.getElementById("upm").value = responseXML.upm; // upms per min

    document.getElementById("words_total").value = responseXML.words_total; // words total


 //      var opa1 = 1- responseXML.panel1 ;
 //    var opa2 =  1-responseXML.panel2 ;

	// var opa3 = 1- responseXML.panel3 ;

	// var opa4 =  1-responseXML.panel4 ;

	// var opa5 =  1-responseXML.panel5 ;
	// var opa6 =  1-responseXML.panel6 ;

	// var opa7 =  1-responseXML.panel7 ;
	// var opa8=  1-responseXML.panel8 ;

	// var opa9 =  1- responseXML.panel9 ;


 // 	document.getElementById("panel1").style.color= rgba(0,0,255,opa1);
 //    document.getElementById("panel2").style.color = rgba(0,0,255,opa2);
 //    document.getElementById("panel3").style.color = rgba(0,0,255,opa3);
 //    document.getElementById("panel4").style.color= rgba(0,0,255,opa4);
 //    document.getElementById("panel5").style.color = rgba(0,0,255,opa5);
 //    document.getElementById("panel6").style.color = rgba(0,0,255,opa6);
 //    document.getElementById("panel7").style.color = rgba(0,0,255,opa7);
 //    document.getElementById("panel8").style.color = rgba(0,0,255,opa8);
 //    document.getElementById("panel9").style.color= rgba(0,0,255,opa9);

}  


/*

document.getElementById("word_times").value = responseXML.word_times;

document.getElementById("").value = responseXML.;

document.getElementById("").value = responseXML.;




results['transcript'] = [(string, number, number, number), ...]
results['word_times'] = [(number, number), ...] */