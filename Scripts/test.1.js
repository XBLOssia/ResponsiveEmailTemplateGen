var _stopdropchecker = 0; //default 0; used to prevent images laying on top of eachother
var _el; //default null; used to swap draggable images

function allowDrop(ev) { //allows dropping, prevents stacking
    if (_stopdropchecker === 0) {
    ev.preventDefault();
    }
}

function drag(ev) { //used "ondrag" - allows copying & moving, sets current target for swap
    ev.dataTransfer.effectAllowed = "copyMove";
    _el = ev.target;
    //console.log(_el)
}

function startDrag(ev){ //used "dragstart" - sets data for drag/drop, copying
    ev.dataTransfer.setData("text", ev.target.id);
}

function isBefore(ev1, ev2) { //used for swapping
    if (ev2.parentNode === ev1.parentNode){
        for (var cur = ev1.previousSibling; cur; cur = cur.previousSibling)
            if (cur === ev2){
                return true;
            }
    }
    return false;
}

function dragOver(ev){ //does the swapping
    //console.log(ev.target);
    //console.log(ev.target.parentNode);
    //console.log(_el);
    function cutItOut(){
        _stopdropchecker = 0;
    }
    _stopdropchecker = 1;
    if (isBefore(_el, ev.target)){
        if (ev.ctrlKey){
        }
        else {
            ev.target.parentNode.insertBefore(_el, ev.target);
        }
    }

    /*if (ev.ctrlKey){
        ev.addEventListener('dragleave', cutItOut, false);
        var spacer = document.createElement ("p");
        spacer.setAttribute('id', 'temp'));
        host.appendChild (spacer);
    }*/ //trying to make fanciness happen. It's not working.
    else{
        if (ev.ctrlKey){
        }
        else {
            ev.target.parentNode.insertBefore(_el, ev.target.nextSibling);
        }
    }
}

function drop(ev) { //Handles dropping elements, making copies
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); //ID assigned to "text"
    if (ev.ctrlKey) { //make a copy of this sucka when Ctrl is held
        var newId = data.replace(/(\d)+/g, function(match, number) {     //newId is result of "text" having number replaced w/ var 'number'
            return parseInt(number)+1;  //increment the appended # by 1
        });    //Use RegEx to increment the ID
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
                //var nodeCopy = document.getElementById(data).cloneNode(true);
        }
        var nodeCopy = document.getElementById(data).cloneNode(true); //creates a copy of the node
        nodeCopy.id = newId;  //Re-ID the node with the new ID
        ev.target.appendChild(nodeCopy);
    }
    else ev.target.appendChild(document.getElementById(data)); //or just move that sucka
    //_stopdropchecker = 0;
}

function dragEnd() { // DO NOT MESS WITH THIS UNLESS YOU KNOW WHY YOU'RE DOING IT, ME. - resets global vars when drag is released
    _el = null;
    _stopdropchecker = 0;
}

/*function getID(ev){
    var oldid = ev.dataTransfer.getData("text");

}*/

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
    var tags = document.getElementById("div2").querySelectorAll('img');
    console.log(tags/*[0].id*/);
    n = (tags.length);
        var kk = "";
        for(i = 0; i <= (n-1); i++){
            var list = tags[i].id;
            kk += "<li>"+list+"</li>";
        }
    document.getElementById("replacerator").innerHTML = kk;
}

function checkEmpty(){ //Checks for presence of all draggables, replaces missing ones
    var checkempty = document.getElementsByClassName("twocols"); //Find first draggable, enumerate
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){  //if it ain't there, make it
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/2cols.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '200');
            facemake.setAttribute('height', '85');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'startDrag(event)');
            facemake.setAttribute('ondrag', 'drag(event)');
            facemake.setAttribute('ondragover', 'dragOver(event)');
            facemake.setAttribute('ondragleave', 'dragEnd(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'twocols');
            facemake.setAttribute('id', 'twocols_1');
            faceplace.appendChild(facemake);
        }
    var checkempty = document.getElementsByClassName("leftimg"); //Second verse, same as the first
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/Leftimg.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '200');
            facemake.setAttribute('height', '85');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'startDrag(event)');
            facemake.setAttribute('ondrag', 'drag(event)');
            facemake.setAttribute('ondragover', 'dragOver(event)');
            facemake.setAttribute('ondragleave', 'dragEnd(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'leftimg');
            facemake.setAttribute('id', 'leftimg_1');
            faceplace.appendChild(facemake);
        }
    var checkempty = document.getElementsByClassName("rightimg"); //Second verse, same as the first
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/Rightimg.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '200');
            facemake.setAttribute('height', '85');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'startDrag(event)');
            facemake.setAttribute('ondrag', 'drag(event)');
            facemake.setAttribute('ondragover', 'dragOver(event)');
            facemake.setAttribute('ondragleave', 'dragEnd(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'rightimg');
            facemake.setAttribute('id', 'rightimg_1');
            faceplace.appendChild(facemake);
        }
    var checkempty = document.getElementsByClassName("bgimg"); //Second verse, same as the first
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/BGimg.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '200');
            facemake.setAttribute('height', '85');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'startDrag(event)');
            facemake.setAttribute('ondrag', 'drag(event)');
            facemake.setAttribute('ondragover', 'dragOver(event)');
            facemake.setAttribute('ondragleave', 'dragEnd(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'bgimg');
            facemake.setAttribute('id', 'bgimg_1');
            faceplace.appendChild(facemake);
        }
    var checkempty = document.getElementsByClassName("noimg"); //Second verse, same as the first
    n = (checkempty.length);
    //console.log(n);
        if(n == 0){
            var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/Noimg.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '200');
            facemake.setAttribute('height', '85');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'startDrag(event)');
            facemake.setAttribute('ondrag', 'drag(event)');
            facemake.setAttribute('ondragover', 'dragOver(event)');
            facemake.setAttribute('ondragleave', 'dragEnd(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', 'noimg');
            facemake.setAttribute('id', 'noimg_1');
            faceplace.appendChild(facemake);
        }
}

function makeItHtml(){
    var gettags = document.getElementById('div2').querySelectorAll('img');
    var linebreak = document.createElement("p");
    //console.log(gettags);
    n = (gettags.length);
        var kk ="";
        for (i=0; i <= (n-1); i++){
            var list = gettags[i].id;
            var list1 = list.replace(/_(\d)+/g, "");

            kk = "";
                if (list1 === "twocols") {
                    kk += '<img src=./Assets/2cols.png height="100" width="100">';
                }
                if (list1 === "leftimg"){
                    kk += '<img src=./Assets/Leftimg.png height="100" width="100">';
                }
                if (list1 === "rightimg"){
                    kk += '<img src=./Assets/Rightimg.png height="100" width="100">';
                }
                if (list1 === "bgimg"){
                    kk += '<img src=./Assets/BGimg.png height="100" width="100">';
                }
                if (list1 === "noimg"){
                    kk += '<img src=./Assets/Noimg.png height="100" width="100">';
                }

        }
        //var text = document.createTextNode(kk);
        document.getElementById("replacerator").innerHTML = kk;
        //document.getElementById("replacerator").appendChild(text);
        //document.getElementById("replacerator").appendChild(linebreak);
}
function makeItADoc(text, name, type){
    var gettags = document.getElementById('div2').querySelectorAll('img');
    var linebreak = document.createElement("p");
    //console.log(gettags);
    n = (gettags.length);
        var kk ="";
        for (i=0; i <= (n-1); i++){
            var list = gettags[i].id;
            var list1 = list.replace(/_(\d)+/g, "");
            //console.log(list);
            //console.log(list1);
            if (list1 === "twocols") {
                kk += '<img src=./Assets/2cols.png height="100" width="100"> \r';
            }
            if (list1 === "leftimg"){
                kk += '<img src=./Assets/Leftimg.png height="100" width="100"> \r';
            }
            if (list1 === "rightimg"){
                kk += '<img src=./Assets/Rightimg.png height="100" width="100"> \r';
            }
            if (list1 === "bgimg"){
                kk += '<img src=./Assets/BGimg.png height="100" width="100"> \r';
            }
            if (list1 === "noimg"){
                kk += '<img src=./Assets/Noimg.png height="100" width="100"> \r';
            } 
        }
        var text = document.createTextNode(kk);


        var file = new Blob([kk], {type: type});
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = 'output.txt';
        document.body.appendChild(a);
        a.click();
        setTimeout(function(){
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
}
