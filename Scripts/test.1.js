var _stopdropchecker = 0; //default 0; used to prevent images laying on top of eachother
var _el; //default null; used to swap draggable images

var bigimagelink = ""; //1360x600 img file, may need to be global var?
var header = '<!DOCTYPE html> <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="utf-8"> <!-- utf-8 works for most cases --><meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn\'t be necessary --><meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine --><meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely --><title>WPSD Tech Corner</title> <!-- The title tag shows in email notifications, like Android 4.4. --><!-- Web Font / @font-face : BEGIN --><!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. --><!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. --><!--[if mso]><style>* {font-family: sans-serif !important;}</style><![endif]--><!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ --><!--[if !mso]><!--><!-- insert web font reference, eg: <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css"> --><!--<![endif]--><!-- Web Font / @font-face : END --><!-- CSS Reset : BEGIN --><style>/* What it does: Remove spaces around the email design added by some email clients. *//* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */html,body {margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;}/* What it does: Stops email clients resizing small text. */* {-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}/* What it does: Centers email on Android 4.4 */div[style*="margin: 16px 0"] {margin: 0 !important;}/* What it does: Stops Outlook from adding extra spacing to tables. */table,td {mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;}/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */table {border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;}table table table {table-layout: auto;}/* What it does: Uses a better rendering method when resizing images in IE. */img {-ms-interpolation-mode:bicubic;}/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */a {text-decoration: none;}/* What it does: A work-around for email clients meddling in triggered links. */*[x-apple-data-detectors],  /* iOS */.unstyle-auto-detected-links *,.aBn {border-bottom: 0 !important;cursor: default !important;color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */.a6S {display: none !important;opacity: 0.01 !important;}/* If the above doesn\'t work, add a .g-img class to any image in question. */img.g-img + div {display: none !important;}/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  *//* Create one of these media queries for each additional viewport size you\'d like to fix *//* iPhone 4, 4S, 5, 5S, 5C, and 5SE */@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {.email-container {min-width: 320px !important;}}/* iPhone 6, 6S, 7, 8, and X */@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {.email-container {        min-width: 375px !important;}}/* iPhone 6+, 7+, and 8+ */@media only screen and (min-device-width: 414px) {.email-container {min-width: 414px !important;}}</style><!-- CSS Reset : END --><!-- Reset list spacing because Outlook ignores much of our inline CSS. --><!--[if mso]><style type="text/css">ul,ol {margin: 0 !important;}li {margin-left: 30px !important;}li.list-item-first {margin-top: 0 !important;}li.list-item-last {margin-bottom: 10px !important;}</style><![endif]--><!-- Progressive Enhancements : BEGIN --><style>/* What it does: Hover styles for buttons */.button-td,.button-a {transition: all 100ms ease-in;}.button-td-primary:hover,.button-a-primary:hover {background: #661400 !important;border-color: #661400 !important;}/* Media Queries */@media screen and (max-width: 480px) {/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */.fluid {width: 100% !important;max-width: 100% !important;height: auto !important;margin-left: auto !important;margin-right: auto !important;}/* What it does: Forces table cells into full-width rows. */.stack-column,.stack-column-center {display: block !important;width: 100% !important;max-width: 100% !important;direction: ltr !important;}/* And center justify these ones. */.stack-column-center {text-align: center !important;}/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */.center-on-narrow {text-align: center !important;display: block !important;margin-left: auto !important;margin-right: auto !important;float: none !important;}table.center-on-narrow {display: inline-block !important;}/* What it does: Adjust typography on small screens to improve readability */.email-container p {font-size: 17px !important;}}</style><!-- Progressive Enhancements : END --><!-- What it does: Makes background images in 72ppi Outlook render at correct size. --><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><!--The email background color (#222222) is defined in three places:1. body tag: for most email clients2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr3. mso conditional: For Windows 10 Mail--><body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f84d00;">    <center style="width: 100%; background-color: #f84d00;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f84d00;"><tr><td><![endif]--><!-- Visually Hidden Preheader Text : BEGIN --><div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">Tech Checkup - The email thing that I try to do weekly.</div><!-- Visually Hidden Preheader Text : END --><!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. --><!-- Preview Text Spacing Hack : BEGIN --><div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div><!-- Preview Text Spacing Hack : END --><!--Set the email width. Defined in two places:1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.2. MSO tags for Desktop Windows Outlook enforce a 680px width.Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I\'ve found that 680px is a good width. Change with caution.--><div style="max-width: 680px; margin: 0 auto;" class="email-container"><!--[if mso]><table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="680"><tr><td><![endif]--><!-- Email Body : BEGIN --><table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;"><!-- Email Header : BEGIN --><tr><td style="padding: 20px 0; text-align: center"><img src="http://u.cubeupload.com/XBLOssia/HeaderLogoSmall.png" width="200" height="50" alt="alt_text" border="0" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;"></td></tr><!-- Email Header : END --><!-- Hero Image, Flush : BEGIN --><tr><td style="background-color: #ffffff;"><img src="' +bigimagelink+ '" width="680" height="" alt="alt_text" border="0" style="width: 100%; max-width: 680px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; margin: auto;" class="fluid g-img"></td></tr><!-- Hero Image, Flush : END -->';
//look upon ye mortals and despair


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

                if (list1 === "twocols") {
                    kk += '<img src="./Assets/2cols.png" height="100" width="100"><form id="whatamidoing"><input type="text" name="whatamidoing" width="800" value="insert text here"></form>';
                }
                if (list1 === "leftimg"){
                    kk += '<img src="./Assets/Leftimg.png" height="100" width="100">';
                }
                if (list1 === "rightimg"){
                    kk += '<img src="./Assets/Rightimg.png" height="100" width="100">';
                }
                if (list1 === "bgimg"){
                    kk += '<img src="./Assets/BGimg.png" height="100" width="100">';
                }
                if (list1 === "noimg"){
                    kk += '<img src="./Assets/Noimg.png" height="100" width="100">';
                }
                console.log(kk);
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
        var kk = header;
        for (i=0; i <= (n-1); i++){
            var list = gettags[i].id;
            var list1 = list.replace(/_(\d)+/g, "");
            //console.log(list);
            //console.log(list1);
            if (list1 === "twocols") {
                var x = document.getElementById('whatamidoing');
                bigimagelink = x.elements[0].value;
                bigimagelink.replace(/,/g, '.');
                console.log(bigimagelink);
                kk = header;
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
        //var text = document.createTextNode(kk);

        

        var file = new Blob([kk], {type: type});
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = 'output.html';
        document.body.appendChild(a);
        a.click();
        setTimeout(function(){
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
}

