window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  /* Declare the XML node variables globally,
declare the player, xmlDoc and the xmlhttp globally */

var comp0="";
var player=GetPlayer();
var xmlDoc="";
var xmlhttp="";

/* Request the xml doc from the server using the get method, file name and set asychronous to false.
Send the request and assign the resonse to the xmlDoc */

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","SAG.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;


    /* select the first package node and scan it for &#60; and replace it with < scan for &#62; and replace it with > and scan for &#47 and replace it with /
This is done for each node retrieved. The final value is assigned to a variable pre-defined in the player.
The find and replace is done so that some formatting can be retrieved from the xml document since XSL/XSLT and CSS can't be used for formatting. */


 //   const urlParams = new URLSearchParams(window.location.search);
 //   const ssn = urlParams.get("ssn");
//    const getProgress = async (ssn) => {
 //     let progress = await fetch(
 //       `https://poli.edunest.co/api/get-progress?ssn=${ssn}`
  //    );
 //     const num = await progress.json();
 //     player.SetVar("Competency1", num.progress);
 //   };
//    getProgress(ssn);


const urlParams = new URLSearchParams(window.location.search);
const ssn = urlParams.get("ssn");

const fetchData = async () => {
  try {
    const progress = await fetch(
      `https://poli.edunest.co/api/get-progress?ssn=${ssn}`
    );
    const num = await progress.json();
    player.SetVar("Competency1", num.progress);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
}

window.Script2 = function()
{
  window.location.href = "/"
}

window.Script3 = function()
{
  window.location.href = "/"
}

window.Script4 = function()
{
  window.location.href = "/"
}

window.Script5 = function()
{
  window.location.href = "/"
}

window.Script6 = function()
{
  window.location.href = "/"
}

window.Script7 = function()
{
  var loadedCount = 0;
var amountOfLibs = 1;
var player = GetPlayer();

function loadJSfile(filename, filetype){
if (filetype=="js"){ //if filename is a external JavaScript file
var fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", filename);
fileref.setAttribute("defer", "defer");
fileref.onload = function() {
loadedCount++;
console.log(loadedCount+" JS / "+filename+' loaded.');
if(loadedCount >= amountOfLibs){
player.SetVar("javascriptsLoaded", true);
}
};
}
else if (filetype=="css"){ //if filename is an external CSS file
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
fileref.setAttribute("href", filename);
fileref.onload = function() {
loadedCount++;
console.log(loadedCount+" CSS / "+filename+' loaded.');
if(loadedCount >= amountOfLibs){
player.SetVar("javascriptsLoaded", true);
}
};
}
if (typeof fileref!="undefined")
document.getElementsByTagName("body")[0].appendChild(fileref)
}

/*
When we change anything in the scriptFolder this needs to change
*/
var scriptFolder ="story_content/";
/*
And lastly we call the functions we want to run
*/


loadJSfile(scriptFolder+"objects.js", "js");
loadJSfile(scriptFolder+"functional-code.js", "js");


}

window.Script8 = function()
{
  checkselect();

}

window.Script9 = function()
{
  
btn01Back();
btn02Back();
btn03Back();
btn04Back();
}

window.Script10 = function()
{
  btn04();
}

window.Script11 = function()
{
  btn04();
}

window.Script12 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
  fetch(
      `https://poli.edunest.co/api/update-section?progress=20&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
      //  window.alert(err);
      });
  } else {
    // window.alert("User Not Logged In!");
  }
}

window.Script13 = function()
{
  
btn01();
}

window.Script14 = function()
{
  
btn01();
}

window.Script15 = function()
{
  btn02();
}

window.Script16 = function()
{
  btn02();
}

window.Script17 = function()
{
  btn03();
}

window.Script18 = function()
{
  btn03();
}

window.Script19 = function()
{
  window.location.href = "/"
}

window.Script20 = function()
{
  window.location.href = "/"
}

window.Script21 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=36&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script22 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=32&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script23 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=28&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script24 = function()
{
  window.location.href = "/"
}

window.Script25 = function()
{
  window.location.href = "/"
}

window.Script26 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=45&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script27 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=55&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script28 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=50&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script29 = function()
{
  window.location.href = "/"
}

window.Script30 = function()
{
  window.location.href = "/"
}

window.Script31 = function()
{
  window.location.href = "/"
}

window.Script32 = function()
{
  window.location.href = "/"
}

window.Script33 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=65&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script34 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=75&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script35 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=70&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script36 = function()
{
  window.location.href = "/"
}

window.Script37 = function()
{
  window.location.href = "/"
}

window.Script38 = function()
{
  window.location.href = "/"
}

window.Script39 = function()
{
  $("iframe.shown").attr('scrolling','no');

//load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}
}

window.Script40 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"Dean%20Martin%20-%20Let%20it%20Snow.mp3";
audio.load();
audio.play();
}

window.Script41 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P1");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script42 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P2");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script43 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P3");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script44 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P4");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script45 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P5");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script46 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P6");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script47 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P7");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script48 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P8");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script49 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P9");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script50 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P10");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script51 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P11");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script52 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P12");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script53 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P14");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script54 = function()
{
  var player=GetPlayer();

var position = player.GetVar("P15");
var empty = player.GetVar("Empty");
var control = position-empty;

player.SetVar("Control",control);


}

window.Script55 = function()
{
  window.location.href = "/"
}

window.Script56 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=23&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script57 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=22&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script58 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=21&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script59 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=25&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script60 = function()
{
  window.location.href = "/"
}

window.Script61 = function()
{
  window.location.href = "/"
}

window.Script62 = function()
{
  window.location.href = "/"
}

window.Script63 = function()
{
  window.location.href = "/"
}

window.Script64 = function()
{
  window.location.href = "/"
}

window.Script65 = function()
{
  window.location.href = "/"
}

window.Script66 = function()
{
  window.location.href = "/"
}

window.Script67 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=30&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script68 = function()
{
  window.location.href = "/"
}

window.Script69 = function()
{
  window.location.href = "/"
}

window.Script70 = function()
{
  window.location.href = "/"
}

window.Script71 = function()
{
  window.location.href = "/"
}

window.Script72 = function()
{
  window.location.href = "/"
}

window.Script73 = function()
{
  window.location.href = "/"
}

window.Script74 = function()
{
  window.location.href = "/"
}

window.Script75 = function()
{
  window.location.href = "/"
}

window.Script76 = function()
{
  window.location.href = "/"
}

window.Script77 = function()
{
  window.location.href = "/"
}

window.Script78 = function()
{
  window.location.href = "/"
}

window.Script79 = function()
{
  window.location.href = "/"
}

window.Script80 = function()
{
  window.location.href = "/"
}

window.Script81 = function()
{
  window.location.href = "/"
}

window.Script82 = function()
{
  window.location.href = "/"
}

window.Script83 = function()
{
  window.location.href = "/"
}

window.Script84 = function()
{
  window.location.href = "/"
}

window.Script85 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=35&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } 
}

window.Script86 = function()
{
  window.location.href = "/"
}

window.Script87 = function()
{
  window.location.href = "/"
}

window.Script88 = function()
{
  window.location.href = "/"
}

window.Script89 = function()
{
  window.location.href = "/"
}

window.Script90 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
  await fetch(
      `https://poli.edunest.co/api/update-section?progress=40&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
      //  window.alert(err);
      });
  } else {
   /* window.alert("User Not Logged In!");*/
  }
}

window.Script91 = function()
{
  window.location.href = "/"
}

window.Script92 = function()
{
  window.location.href = "/"
}

window.Script93 = function()
{
  window.location.href = "/"
}

window.Script94 = function()
{
  window.location.href = "/"
}

window.Script95 = function()
{
  window.location.href = "/"
}

window.Script96 = function()
{
  window.location.href = "/"
}

window.Script97 = function()
{
  window.location.href = "/"
}

window.Script98 = function()
{
  window.location.href = "/"
}

window.Script99 = function()
{
  window.location.href = "/"
}

window.Script100 = function()
{
  window.location.href = "/"
}

window.Script101 = function()
{
  window.location.href = "/"
}

window.Script102 = function()
{
  window.location.href = "/"
}

window.Script103 = function()
{
  window.location.href = "/"
}

window.Script104 = function()
{
  window.location.href = "/"
}

window.Script105 = function()
{
  window.location.href = "/"
}

window.Script106 = function()
{
  window.location.href = "/"
}

window.Script107 = function()
{
  window.location.href = "/"
}

window.Script108 = function()
{
  window.location.href = "/"
}

window.Script109 = function()
{
  window.location.href = "/"
}

window.Script110 = function()
{
  window.location.href = "/"
}

window.Script111 = function()
{
  window.location.href = "/"
}

window.Script112 = function()
{
  window.location.href = "/"
}

window.Script113 = function()
{
  window.location.href = "/"
}

window.Script114 = function()
{
  window.location.href = "/"
}

window.Script115 = function()
{
  window.location.href = "/"
}

window.Script116 = function()
{
  window.location.href = "/"
}

window.Script117 = function()
{
  window.location.href = "/"
}

window.Script118 = function()
{
  window.location.href = "/"
}

window.Script119 = function()
{
  window.location.href = "/"
}

window.Script120 = function()
{
  window.location.href = "/"
}

window.Script121 = function()
{
  window.location.href = "/"
}

window.Script122 = function()
{
  window.location.href = "/"
}

window.Script123 = function()
{
  window.location.href = "/"
}

window.Script124 = function()
{
  window.location.href = "/"
}

window.Script125 = function()
{
  window.location.href = "/"
}

window.Script126 = function()
{
  window.location.href = "/"
}

window.Script127 = function()
{
  window.location.href = "/"
}

window.Script128 = function()
{
  window.location.href = "/"
}

window.Script129 = function()
{
  window.location.href = "/"
}

window.Script130 = function()
{
  window.location.href = "/"
}

window.Script131 = function()
{
  window.location.href = "/"
}

window.Script132 = function()
{
  window.location.href = "/"
}

window.Script133 = function()
{
  window.location.href = "/"
}

window.Script134 = function()
{
  window.location.href = "/"
}

window.Script135 = function()
{
  window.location.href = "/"
}

window.Script136 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
    fetch(
      `https://poli.edunest.co/api/update-section?progress=60&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        // window.alert(err);
      });
  } else {
    // window.alert("User Not Logged In!");
  }
}

window.Script137 = function()
{
  window.location.href = "/"
}

window.Script138 = function()
{
  window.location.href = "/"
}

window.Script139 = function()
{
  let player = GetPlayer();
player.GetVar('ambiente40', ambiente40);


}

window.Script140 = function()
{
  window.location.href = "/"
}

window.Script141 = function()
{
  window.location.href = "/"
}

window.Script142 = function()
{
  window.location.href = "/"
}

window.Script143 = function()
{
  window.location.href = "/"
}

window.Script144 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=100&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } else {
    // window.alert("User Not Logged In!");
  }
}

window.Script145 = function()
{
  window.location.href = "/"
}

window.Script146 = function()
{
  window.location.href = "/"
}

window.Script147 = function()
{
  window.location.href = "/"
}

window.Script148 = function()
{
  window.location.href = "/"
}

window.Script149 = function()
{
  window.location.href = "/"
}

window.Script150 = function()
{
  window.location.href = "/"
}

window.Script151 = function()
{
  window.location.href = "/"
}

window.Script152 = function()
{
  window.location.href = "/"
}

window.Script153 = function()
{
  window.location.href = "/"
}

window.Script154 = function()
{
  window.location.href = "/"
}

window.Script155 = function()
{
  window.location.href = "/"
}

window.Script156 = function()
{
  window.location.href = "/"
}

window.Script157 = function()
{
  window.location.href = "/"
}

window.Script158 = function()
{
  const urlParams = new URLSearchParams(window.location.search);
  
const ssn = urlParams.get("ssn");
  
if (ssn) {
   fetch(
      `https://poli.edunest.co/api/update-section?progress=80&ssn=${ssn}`
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
       // window.alert(err);
      });
  } else {
    // window.alert("User Not Logged In!");
  }
}

window.Script159 = function()
{
  window.location.href = "/"
}

window.Script160 = function()
{
  window.location.href = "/"
}

window.Script161 = function()
{
  window.location.href = "/"
}

window.Script162 = function()
{
  window.location.href = "/"
}

window.Script163 = function()
{
  window.location.href = "/"
}

window.Script164 = function()
{
  window.location.href = "/"
}

};
