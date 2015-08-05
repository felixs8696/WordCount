// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('felixsu',[])
	.run(function() {
	});


function createFile() {
	var textFile = null,
	  makeTextFile = function (text) {
	    var data = new Blob([text], {type: 'text/plain'});

	    if (textFile !== null) {
	      window.URL.revokeObjectURL(textFile);
	    }

	    textFile = window.URL.createObjectURL(data);

	    return textFile;
	  };

	var create = document.getElementById('create'),
		textboxes = document.getElementsByName('textFields');
	var prompts = document.getElementsByName('prompts');
	var txt = "";
	var count = 1;
	for (var i = 0; i < textboxes.length; i++) {
		var p = prompts[i].value;
		var t = textboxes[i].value;
		if (p.length != 0) {
			p = p + "\n";
		}
		else if (p.length == 0 && t.length != 0) {
			p = "Prompt #" + count + ":\n";
		}
		else {
			p = "";
		}
		txt += count + ": ";
		txt += p;
		txt += textboxes[i].value;
		txt += "\n\n";
		count++;
	}
	create.addEventListener('click', function () {
	    var link = document.getElementById('downloadlink');
	    link.href = makeTextFile(txt);
	    link.style.display = 'block';
	  }, false);
}

var code =  '<div class = "col-lg-9" style="text-align:left;">' +
				'<textarea rows = "1" cols = "100" name="prompts" style="margin: 0px 0px 0px 20px;" placeholder="Prompt"></textarea>' +
			'</div>' +
			'<div class = "col-lg-9" style="text-align:left;">' +
				'<textarea rows = "10" cols = "100" name="textFields" style="margin: 20px;" placeholder="Enter Response Here..."></textarea>' +
			'</div>' +
			'<div class = "col-lg-2">' +
			'<div id= "entry">' +
				'<p style= "color: #FFFFFF">Characters Typed: <span id ="CharCount" name = "cc"></span></p>' +
				'<p style= "color: #FFFFFF">Word Count: <span id="WordCount" name = "wc"> </span></p>' +
				'<p style= "color: #FFFFFF">Paragraph Count: <span id="ParaCount" name = "pc"> </span></p>' +
			'</div>' +
			// '<button id="save" onclick="save(' + recentElemID + ')" >Save</button>' +
			// '<button id="revert" onclick="revert(' + recentElemID + ')" >Revert</button>' +
			'</div>';
function saveEntry(){
	var fields = document.getElementsByName("textFields");
	var prompts = document.getElementsByName("prompts");
	var fVal = [];
	var pVal = [];
	for (var h = 0; h < fields.length; h++) {
		fVal[fVal.length] = fields[h].value;
	}
	for (var i = 0; i < prompts.length; i++) {
		pVal[pVal.length] = prompts[i].value;
	}
	document.getElementById("temp-holder").innerHTML += code;
	for (var j = 0; j < fields.length; j++) {
		if (typeof fVal[j] != "undefined") {
			fields[j].value = fVal[j];
		}
	}
	for (var k = 0; k < prompts.length; k++) {
		if (typeof pVal[k] != "undefined") {
			prompts[k].value = pVal[k];
		}
	}
}