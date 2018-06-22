var _stopdropchecker = 0;
var _el;

function allowDrop(ev) {
    if (_stopdropchecker === 0) {
    ev.preventDefault();
    }
    //console.log(_stopdropchecker);
}

function drag(ev) {
    ev.dataTransfer.effectAllowed = "copyMove";
    _el = ev.target;
    //console.log(_el);
}

function startDrag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function isBefore(ev1, ev2) {
    if (ev2.parentNode === ev1.parentNode){
        for (var cur = ev1.previousSibling; cur; cur = cur.previousSibling)
            if (cur === ev2){
                return true;
            }
    }
    return false;
}
//sets var to text based on id field 

function dragOver(ev){
    console.log(ev.target);
    console.log(ev.target.parentNode);
    console.log(_el);
    if (isBefore(_el, ev.target)){
        ev.target.parentNode.insertBefore(_el, ev.target);
    }
    else{
        ev.target.parentNode.insertBefore(_el, ev.target.nextSibling);
    }
}

function dragEnd() {
    _el = null;
}



function dropDeny(ev) {
    _stopdropchecker = 1;
    
    //event.dataTransfer.effectAllowed = "none";
}

function dropDenyClean(ev){
    _stopdropchecker = 0;
    //console.log(_stopdropchecker);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); //ID assigned to "text"
    if (ev.ctrlKey) {
      /* existing ID = var "data" (looks like "dragface_[num]")*/
        var newId = data.replace(/(\d)+/g, function(match, number) {     //newId is result of "text" having number replaced
            return parseInt(number)+1;  //increment the # by 1
        });
          //Use RegEx to increment the ID
          //console.log(newId); //for debugging
          var copycheck = document.getElementById(newId);
          //console.log(copycheck);
            if (copycheck == null){
            
            }
            while (copycheck != null){
                var newId = newId.replace(/(\d)+/g, function(match, number) {
                    return parseInt(number)+1;
                    });
                    var copycheck = document.getElementById(newId);
                //Use RegEx to increment the ID
                //console.log(newId); //for debugging
                //var nodeCopy = document.getElementById(data).cloneNode(true);
                }
        //}
        var nodeCopy = document.getElementById(data).cloneNode(true); //creates a copy of the node
        nodeCopy.id = newId;  //Re-ID the node with the new ID
        ev.target.appendChild(nodeCopy);
        //make a copy of this sucka when Ctrl is held
    } ////
    else ev.target.appendChild(document.getElementById(data));
    //_stopdropchecker = 0;
    //or just move that sucka
}
//Handles dropping elements, making copies

function getID(ev){
    var oldid = ev.dataTransfer.getData("text");
    
}

function trash(ev) {  //removes items dropped into a trash div
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var zap = document.getElementById(data);
    //console.log(zap);
    zap.parentNode.removeChild(zap);
    checkEmpty(); //call the function that fixes your divots
}	

function replaceMe(ev){  //the part what lets me update the text area
    document.getElementById("replacerator").innerHTML = htmltext;
}
    
var htmltext = 'This is what' + " I'll " + 'put here for debugging porpoises';    

function findTags(){  //Finds tags, puts 'em in a list
    var tags = document.querySelectorAll('img.face, img.wildcat');
    console.log(tags/*[0].id*/)
    n = (tags.length);
        var kk = "";
        for(i = 0; i <= (n-1); i++){
            var list = tags[i].id;
            kk += "<li>"+list+"</li>";
        }
    document.getElementById("replacerator").innerHTML = kk;
}

function checkEmpty(){ //Checks for presence of all draggables, replaces missing ones
    var checkempty = document.getElementsByClassName("face"); //Find first draggable, enumerate
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){  //if it ain't there, make it
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/face.jpg');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '300');
            facemake.setAttribute('height', '30');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'drag(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'face');
            facemake.setAttribute('id', 'dragface_1');
            faceplace.appendChild(facemake);
        }
    var checkempty = document.getElementsByClassName("wildcat"); //Second verse, same as the first
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/wildcat.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '300');
            facemake.setAttribute('height', '30');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'drag(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'wildcat');
            facemake.setAttribute('id', 'wildcat_1');
            faceplace.appendChild(facemake);
        }
}