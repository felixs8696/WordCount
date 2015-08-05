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

// function saveSnap() {
// 	textboxes = document.getElementsByName('textFields');
// 	var txt = "";
// 	var count = 1;
// 	for (var i = 0; i < textboxes.length; i++) {
// 		txt += count + "\n";
// 		txt += textboxes[i].value;
// 		txt += "\n\n";
// 		count++;
// 	}
// }

// var text = {};
// var testingText = "hi";
// var tfCount = 0;
// var recentElemID = "textbox" + tfCount;

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
// function addToSave() {
// 	var elements = document.getElementsByName('textFields');
// 	var element = elements[tfCount];
// 	element.id = "textbox" + tfCount;
// 	recentElemID = "textbox" + tfCount;
// 	// testingText += "||||";
// 	text[element.id] = element.value;
// 	tfCount++;
// }

// function printText() {
// 	var test = document.getElementById("testing");
// 	var testText;
// 	for (var key in text) {
// 		if (text.hasOwnProperty(key)) {
// 			testText += key;
// 		}
// 	}
// 	test.innerHTML = testText + ": " + text[testText] + "\n";
// }

// function save(elementID) {
// 	var element = document.getElementById(elementID);
// 	var t = element.value;
// 	if (typeof t != "undefined") {
// 		text[elementID] = t;
// 	}
// 	else {
// 		text[elementID] = "";
// 	}
// 	// text[text.length] = element.value;
// }
// function revert(elementID) {
// 	var element = document.getElementById(elementID);
// 	element.value = text[elementID];
// }
