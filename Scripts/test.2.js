/*---- Define objects ----*/

/*---- Form Box Constructors ----*/ 

function protoHero(id){
    this.firstSection   = '<div id="output',
    this.id             = id,
    this.type           = "heroimg",
    this.secondSection  = '"><img src="./Assets/Heading.png" height="100" width="100"><form id="heading">Heading image (1360x600)<br /><input type="text" name="headimg" width="800" value="Heading image URL" onKeyPress="return noEnter()"></form><br /></div>',
    this.boxifyHero     = function() {
        var idstring = this.id.toString();
        _boxbuilder += this.firstSection + idstring + this.secondSection;
    }
}

function protoNoImg(id){
    this.firstSection = '<div id="output'
    this.secondSection = '"><img src="./Assets/Noimg.png" height="100" width="100"><form id="noimg">Headline<br /><input type="text" name="noimg1" width="800" value="Headline" onKeyPress="return noEnter()"><br />Button URL<br /><input type="text" name="noimg3" width="800" value="Link URL" onKeyPress="return noEnter()"><br />Button text<br /><input type="text" name="noimg4" width="800" value="Link Text" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("noimgbody")});</script><p><textarea id="noimgbody" form="noimg" cols="40">Body text here</textarea><br /></div>',
    this.id = id,
    this.type = "noimg",
    this.boxifyNoImg = function() {
        var idstring = this.id.toString();
        _boxbuilder += this.firstSection + idstring + this.secondSection;
    }
}



/*---- End Form Box Constructors ----*/ 

/*---- HTML constructors ----*/
function buildHero(bigimagelink, /*id*/) {
    this.firstSection   = '<!DOCTYPE html>\r<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\r<head>\r<meta charset="utf-8">\r<!-- utf-8 works for most cases -->\r<meta name="viewport" content="width=device-width">\r<!-- Forcing initial-scale shouldn\'t be necessary -->\r<meta http-equiv="X-UA-Compatible" content="IE=edge">\r<!-- Use the latest (edge) version of IE rendering engine -->\r<meta name="x-apple-disable-message-reformatting">\r<!-- Disable auto-scale in iOS 10 Mail entirely -->\r<title>WPSD Tech Corner</title>\r<!-- The title tag shows in email notifications, like Android 4.4. -->\r<!-- Web Font / @font-face : BEGIN -->\r<!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->\r<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\r<!--[if mso]>\r<style>\r* {font-family: sans-serif !important;}\r</style>\r<![endif]-->\r<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\r<!--[if !mso]>\r<!-->\r<!-- insert web font reference, eg: <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css"> -->\r<!--<![endif]-->\r<!-- Web Font / @font-face : END -->\r<!-- CSS Reset : BEGIN -->\r<style>/* What it does: Remove spaces around the email design added by some email clients. */\r/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. \r*/html,\rbody {margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;}\r/* What it does: Stops email clients resizing small text. */\r* {-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}/* What it does: Centers email on Android 4.4 */\rdiv[style*="margin: 16px 0"] {margin: 0 !important;}/* What it does: Stops Outlook from adding extra spacing to tables. */\rtable,\rtd {mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;}/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\rtable {border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;}\rtable table table {table-layout: auto;}/* What it does: Uses a better rendering method when resizing images in IE. */\rimg {-ms-interpolation-mode:bicubic;}/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */\ra {text-decoration: none;}/* What it does: A work-around for email clients meddling in triggered links. */\r*[x-apple-data-detectors],  /* iOS */\r.unstyle-auto-detected-links *,.aBn {border-bottom: 0 !important;cursor: default !important;color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */\r.a6S {display: none !important;opacity: 0.01 !important;}/* If the above doesn\'t work, add a .g-img class to any image in question. */\rimg.g-img + div {display: none !important;}/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\r/* Create one of these media queries for each additional viewport size you\'d like to fix */\r/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */\r@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {.email-container {min-width: 320px !important;}}\r/* iPhone 6, 6S, 7, 8, and X */\r@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {.email-container {min-width: 375px !important;}}\r/* iPhone 6+, 7+, and 8+ */\r@media only screen and (min-device-width: 414px) {.email-container {min-width: 414px !important;}}\r</style>\r<!-- CSS Reset : END -->\r<!-- Reset list spacing because Outlook ignores much of our inline CSS. -->\r<!--[if mso]>\r<style type="text/css">\rul,ol {margin: 0 !important;}\rli {margin-left: 30px !important;}\rli.list-item-first {margin-top: 0 !important;}\rli.list-item-last {margin-bottom: 10px !important;}\r</style>\r<![endif]-->\r<!-- Progressive Enhancements : BEGIN -->\r<style>\r/* What it does: Hover styles for buttons */\r.button-td,.button-a {transition: all 100ms ease-in;}\r.button-td-primary:hover,.button-a-primary:hover {background: #661400 !important;border-color: #661400 !important;}\r/* Media Queries */\r@media screen and (max-width: 480px) {/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */\r.fluid {width: 100% !important;max-width: 100% !important;height: auto !important;margin-left: auto !important;margin-right: auto !important;}\r/* What it does: Forces table cells into full-width rows. */\r.stack-column,.stack-column-center {display: block !important;width: 100% !important;max-width: 100% !important;direction: ltr !important;}\r/* And center justify these ones. */\r.stack-column-center {text-align: center !important;}\r/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */\r.center-on-narrow {text-align: center !important;display: block !important;margin-left: auto !important;margin-right: auto !important;float: none !important;}\rtable.center-on-narrow {display: inline-block !important;}\r/* What it does: Adjust typography on small screens to improve readability */\r.email-container p {font-size: 17px !important;}}\r</style>\r<!-- Progressive Enhancements : END -->\r<!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->\r<!--[if gte mso 9]>\r<xml>\r<o:OfficeDocumentSettings>\r<o:AllowPNG/>\r<o:PixelsPerInch>96</o:PixelsPerInch>\r</o:OfficeDocumentSettings>\r</xml>\r<![endif]-->\r</head>\r<!--The email background color (#222222) is defined in three places:1. body tag: for most email clients2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr3. mso conditional: For Windows 10 Mail-->\r<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f84d00;">\r<center style="width: 100%; background-color: #f84d00;">\r<!--[if mso | IE]>\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f84d00;">\r<tr>\r<td>\r<![endif]-->\r<!-- Visually Hidden Preheader Text : BEGIN -->\r<div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">Tech Checkup - The email thing that I try to do weekly.</div>\r<!-- Visually Hidden Preheader Text : END -->\r<!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->\r<!-- Preview Text Spacing Hack : BEGIN -->\r<div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>\r<!-- Preview Text Spacing Hack : END -->\r<!--Set the email width. Defined in two places:1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.2. MSO tags for Desktop Windows Outlook enforce a 680px width.Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I\'ve found that 680px is a good width. Change with caution.-->\r<div style="max-width: 680px; margin: 0 auto;" class="email-container">\r<!--[if mso]>\r<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="680">\r<tr>\r<td>\r<![endif]-->\r<!-- Email Body : BEGIN -->\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">\r<!-- Email Header : BEGIN -->\r<tr>\r<td style="padding: 20px 0; text-align: center"><img src="http://u.cubeupload.com/XBLOssia/HeaderLogoSmall.png" width="200" height="50" alt="WPSD 1" border="0" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">\r</td>\r</tr>\r<!-- Email Header : END -->\r<!-- Hero Image, Flush : BEGIN -->\r<tr>\r<td style="background-color: #ffffff;">\r<img src="',
    this.secondSection  = '" width="680" height="" alt="alt_text" border="0" style="width: 100%; max-width: 680px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; margin: auto;" class="fluid g-img">\r</td>\r</tr>\r<!-- Hero Image, Flush : END -->',
    this.imageLink      = bigimagelink,
    //this.id             = _counter,
    this.assembleHero   = function() {
        kk += this.firstSection + this.imageLink + this.secondSection;
    }
}

function buildNoImg(noimgheadline, noimgbodytext, noimglink, noimglinktext){
    this.noimgline1 = '<!-- 1 Column Text + Button : BEGIN -->\r<tr>\r<td style="background-color: #ffffff;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;">\r<h1 style="margin: 0 0 10px; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">',
    this.noimgline2 = '</h1>\r<p style="margin: 0 0 10px;">',
    this.noimgline3 = '</p>\r</td>\r</tr>\r<tr>\r<td style="padding: 0 20px 20px;">\r<!-- Button : BEGIN -->\r<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">\r<tr>\r<td class="button-td button-td-primary" style="border-radius: 4px; background: #ff0033;">\r<a class="button-a button-a-primary" href="',
    this.noimgline4 = '" style="background: #ff0033; border: 1px solid #ff0033; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">',
    this.noimgline5 = '</a>\r</td>\r</tr>\r</table>\r<!-- Button : END -->\r</td>\r</tr>\r</table>\r</td>\r</tr> \r<!-- 1 Column Text + Button : END -->\r',

    this.noimgheadline = noimgheadline,
    this.noimgbodytext = noimgbodytext,
    this.noimglink = noimglink,
    this.noimglinktext = noimglinktext,

    this.assembleNoImg = function() {
        kk += this.noimgline1 + this.noimgheadline + this.noimgline2 + this.noimgbodytext + this.noimgline3 + this.noimglink + this.noimgline4 + this.noimglinktext + this.noimgline5;
    }
}

/*---- End HTML constructors ----*/

/*---- End objects ----*/

/*---- Global Vars ----*/
let _stopdropchecker = 0; //default 0; used to prevent images from laying on top of each other
let _el; //default null; used to swap droppable images
let _counter = 0; //begins at 0, increments for each item to create IDs
let _boxbuilder = ""; //default null; used to construct the long-ass HTML string for replacerator
let _buildlist = []; //default empty list; used to build a list of types from the box constructors. Probably overthinking this immensely.
/*---- End global vars ----*/

/*---- First copy/paste from v1 ----*/

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
        for (let cur = ev1.previousSibling; cur; cur = cur.previousSibling)
            if (cur === ev2){
                return true;
            }
    }
    return false;
}

function dragOver(ev){ //does the swapping
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
    let data = ev.dataTransfer.getData("text"); //ID assigned to "text"
    if (ev.ctrlKey) { //make a copy of this sucka when Ctrl is held
        let newId = data.replace(/(\d)+/g, function(match, number) {     //newId is result of "text" having number replaced w/ var 'number'
            return parseInt(number)+1;  //increment the appended # by 1
        });    //Use RegEx to increment the ID
        let copycheck = document.getElementById(newId);
        if (copycheck == null){
        }
        while (copycheck != null){
            let newId = newId.replace(/(\d)+/g, function(match, number) {
                return parseInt(number)+1;
            });
            let copycheck = document.getElementById(newId);
                //Use RegEx to increment the ID
                //var nodeCopy = document.getElementById(data).cloneNode(true);
        }
        let nodeCopy = document.getElementById(data).cloneNode(true); //creates a copy of the node
        nodeCopy.id = newId;  //Re-ID the node with the new ID
        ev.target.appendChild(nodeCopy);
    }
    else ev.target.appendChild(document.getElementById(data)); //or just move that sucka
}

function dragEnd() { // DO NOT MESS WITH THIS UNLESS YOU KNOW WHY YOU'RE DOING IT, ME. - resets global vars when drag is released
    _el = null;
    _stopdropchecker = 0;
}

function trash(ev) {  //removes items dropped into a trash div
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let zap = document.getElementById(data);
    //console.log(zap);
    zap.parentNode.removeChild(zap);
    checkEmpty(); //call the function that fixes your divots
}

function replaceMe(ev){  //the part what lets me update the text area
    document.getElementById("replacerator").innerHTML = htmltext;
}
const htmltext = 'This is what' + " I'll " + 'put here for debugging porpoises';

function findTags(){  //Finds tags, puts 'em in a list
    let tags = document.getElementById("div1", "div2").querySelectorAll('img');
    console.log(tags/*[0].id*/);
    n = (tags.length);
        let kk = "";
        for(i = 0; i <= (n-1); i++){
            let list = tags[i].id;
            kk += "<li>"+list+"</li>";
        }
    document.getElementById("replacerator").innerHTML = kk;
}
//the function below can still probably be optimised, but it's MUCH better now.

function checkEmpty(){ //Checks for presence of all draggables, replaces missing ones
    let divots = [];
    if (document.getElementsByClassName('heading').length == 0) {
        divots.push('heading');
    }
    if (document.getElementsByClassName('twocols').length == 0) {
        divots.push('twocols');
    }
    if (document.getElementsByClassName('threecols').length == 0) {
        divots.push('threecols');
    }
    if (document.getElementsByClassName('leftimg').length == 0) {
        divots.push('leftimg');
    }
    if (document.getElementsByClassName('rightimg').length == 0) {
        divots.push('rightimg');
    }
    if (document.getElementsByClassName('bgimg').length == 0) {
        divots.push('bgimg');
    }
    if (document.getElementsByClassName('noimg').length == 0) {
        divots.push('noimg');
    }
    if (document.getElementsByClassName('closing').length == 0) {
        divots.push('closing');
    }
    let i;
    let attributename;
    for (i = 0; i < divots.length; i++) {
        attributename = divots.pop();
        var faceplace = document.getElementById("div1");
            var facemake = document.createElement("img");
            facemake.setAttribute('src', './Assets/' + attributename + '.png');
            facemake.setAttribute('align', 'center');
            facemake.setAttribute('width', '200');
            facemake.setAttribute('height', '85');
            facemake.setAttribute('draggable', 'true');
            facemake.setAttribute('ondragstart', 'startDrag(event)');
            facemake.setAttribute('ondrag', 'drag(event)');
            facemake.setAttribute('ondragover', 'dragOver(event)');
            facemake.setAttribute('ondragleave', 'dragEnd(event)');
            facemake.setAttribute('dragend', 'staticDragger(event)');
            facemake.setAttribute('class', attributename);
            facemake.setAttribute('id', attributename);
            faceplace.appendChild(facemake);
    }
}
/*---- end first copy/paste from v1 ----*/

function makeItHtml() { //This should generate form boxes AND IDs. Hopefully.
    _boxbuilder = "";
    _counter = 0;
    var gettags = document.getElementById('div2').querySelectorAll('img');
    var linebreak = document.createElement("p");
    //console.log(gettags);
    n = (gettags.length);
        //let kk ="";
        for (i=0; i <= (n-1); i++){
            var list = gettags[i].id;
            var list1 = list.replace(/_(\d)+/g, "");
                if (list1 === "heading") {
                    var hero = new protoHero(_counter);
                    hero.boxifyHero();
                }
                if (list1 === "twocols") {
                    _boxbuilder += '<img src="./Assets/twocols.png" height="100" width="100"><form id="twocols">Left image (310x310)<br /><input type="text" name="twocolsimg1" width="800" value="Left img URL" onKeyPress="return noEnter()"><br />Right image (310x310)<br /><input type="text" name="rightcolimg" width="800" value="Right column img URL" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("twocollefttxt")});</script><p>Left side text<textarea id="twocollefttxt" form="twocols" cols="40">Left side text</textarea><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("twocolrighttxt")});</script><p>Right side text<textarea id="twocolrighttxt" form="twocols" cols="40">Right side text</textarea><br />';
                }
                if (list1 === "threecols"){
                    _boxbuilder += '<img src="./Assets/threecols.png" height="100" width="100"><form id="threecols">Left image (200x200)<br /><input type="text" name="columnoneimg" width="800" value="1st column img" onKeyPress="return noEnter()"><br />Center image (200x200)<br /><input type="text" name="secondcolumnimg" width="800" value="2nd column image" onKeyPress="return noEnter()"><br />Right image (200x200)<br /><input type="text" name="thirdcolumnimg" width="800" value="3rd column img" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("threecolleft")});</script><p>Left side text<textarea id="threecolleft" form="threecols" cols="40">Left side text</textarea><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("threecolmid")});</script><p>Middle text<textarea id="threecolmid" form="threecols" cols="40">Center text</textarea><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("threecolright")});</script><p>Right side text<textarea id="threecolright" form="threecols" cols="40">Right side text</textarea><br />';
                }
                if (list1 === "leftimg"){
                    _boxbuilder += '<img src="./Assets/Leftimg.png" height="100" width="100"><form id="leftimg">Thumbnail URL (100x100)<br /><input type="text" name="imgurl" width="800" value="Img URL" onKeyPress="return noEnter()"><br />Headline<br /><input type="text" name="headline" width="800" value="Headline" onKeyPress="return noEnter()"><br />URL for button<br /><input type="text" name="buttonurl" width="800" value="Button URL" onKeyPress="return noEnter()"><br />Link text<br /><input type="text" name="buttontext" width="800" value="Link text" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("leftimgtxt")});</script><p>Left Thumbnail Text<textarea id="leftimgtxt" form="leftimg" cols="40">Left Thumbnail Text</textarea><br />';
                }
                if (list1 === "rightimg"){
                    _boxbuilder += '<img src="./Assets/Rightimg.png" height="100" width="100"><form id="rightimg">Thumbnail URL (100x100)<br /><input type="text" name="imgurl" width="800" value="Img URL" onKeyPress="return noEnter()"><br />Headline<br /><input type="text" name="headline" width="800" value="Headline" onKeyPress="return noEnter()"><br />URL for button<br /><input type="text" name="buttonurl" width="800" value="Button URL" onKeyPress="return noEnter()"><br />Text for button<br /><input type="text" name="buttontext" width="800" value="Text goes here" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("rightimgtxt")});</script><p>Right Thumbnail Text<textarea id="rightimgtxt" form="rightimg" cols="40">Right Thumbnail Text</textarea><br />';
                }
                if (list1 === "bgimg"){
                    _boxbuilder += '<img src="./Assets/BGimg.png" height="100" width="100"><form id="bgimg">BG image URL (scales, best @ 680px wide, over 180px tall) <br /><input type="text" name="bgimgurl" width="800" value="BG img URL" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("bgimgtxt")});</script><p><textarea id="bgimgtxt" form="bgimg" cols="40">Body text here</textarea><br />';
                }
                if (list1 === "noimg"){
                    _boxbuilder += '<img src="./Assets/Noimg.png" height="100" width="100"><form id="noimg">Headline<br /><input type="text" name="noimg1" width="800" value="Headline" onKeyPress="return noEnter()"><br />Button URL<br /><input type="text" name="noimg3" width="800" value="Link URL" onKeyPress="return noEnter()"><br />Button text<br /><input type="text" name="noimg4" width="800" value="Link Text" onKeyPress="return noEnter()"></form><br /><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("noimgbody")});</script><p><textarea id="noimgbody" form="noimg" cols="40">Body text here</textarea><br />';
                }
                if (list1 === "closing"){
                    _boxbuilder += '<img src="./Assets/Closing.png" height="100" width="100"><br /><form id="closing">Signature URL<br /><input type="text" name="signatureurl" width="800" value="Signature URL" onKeyPress="return noEnter()"></form><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("closing1")});</script><p>Closing text 1 (above fold)<textarea id="closing1" form="closing" cols="40">Body text here</textarea><script type="text/javascript"> bkLib.onDomLoaded(function() {var myEditor = new nicEditor().panelInstance("closing2")});</script><p>Closing text 2 (behind fold)<textarea id="closing2" form="closing" cols="40">Body text here</textarea><br />';
                }
            _counter = _counter += 1; 
            //console.log(_counter);
        }
        document.getElementById("replacerator").innerHTML = _boxbuilder;
        nicEditors.allTextAreas();
}

/*---- Big stupid ahead ----*/

function makeItADoc(text, name, type){ // This one makes the HTML document! Also needs to be able to handle multiples
    var gettags = document.getElementById('replacerator').querySelectorAll('form');
    //var linebreak = document.createElement("p");
    n = (gettags.length);
    console.log(gettags);
        var kk = "";
        var headerswitch = 0;
        //var countdown = 
        for (i=0; i <= (n-1); i++){
            var list = gettags[i].id; //!!!Here's your problem - this section right here should be exploded
            var list1 = list.replace(/_(\d)+/g, "");
            console.log(list);
            //console.log(list1);
            if (list1 === "heading") {
                const header1 = '<!DOCTYPE html>\r<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\r<head>\r<meta charset="utf-8">\r<!-- utf-8 works for most cases -->\r<meta name="viewport" content="width=device-width">\r<!-- Forcing initial-scale shouldn\'t be necessary -->\r<meta http-equiv="X-UA-Compatible" content="IE=edge">\r<!-- Use the latest (edge) version of IE rendering engine -->\r<meta name="x-apple-disable-message-reformatting">\r<!-- Disable auto-scale in iOS 10 Mail entirely -->\r<title>WPSD Tech Corner</title>\r<!-- The title tag shows in email notifications, like Android 4.4. -->\r<!-- Web Font / @font-face : BEGIN -->\r<!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. -->\r<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\r<!--[if mso]>\r<style>\r* {font-family: sans-serif !important;}\r</style>\r<![endif]-->\r<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\r<!--[if !mso]>\r<!-->\r<!-- insert web font reference, eg: <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css"> -->\r<!--<![endif]-->\r<!-- Web Font / @font-face : END -->\r<!-- CSS Reset : BEGIN -->\r<style>/* What it does: Remove spaces around the email design added by some email clients. */\r/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. \r*/html,\rbody {margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;}\r/* What it does: Stops email clients resizing small text. */\r* {-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}/* What it does: Centers email on Android 4.4 */\rdiv[style*="margin: 16px 0"] {margin: 0 !important;}/* What it does: Stops Outlook from adding extra spacing to tables. */\rtable,\rtd {mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;}/* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\rtable {border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;}\rtable table table {table-layout: auto;}/* What it does: Uses a better rendering method when resizing images in IE. */\rimg {-ms-interpolation-mode:bicubic;}/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */\ra {text-decoration: none;}/* What it does: A work-around for email clients meddling in triggered links. */\r*[x-apple-data-detectors],  /* iOS */\r.unstyle-auto-detected-links *,.aBn {border-bottom: 0 !important;cursor: default !important;color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */\r.a6S {display: none !important;opacity: 0.01 !important;}/* If the above doesn\'t work, add a .g-img class to any image in question. */\rimg.g-img + div {display: none !important;}/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\r/* Create one of these media queries for each additional viewport size you\'d like to fix */\r/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */\r@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {.email-container {min-width: 320px !important;}}\r/* iPhone 6, 6S, 7, 8, and X */\r@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {.email-container {min-width: 375px !important;}}\r/* iPhone 6+, 7+, and 8+ */\r@media only screen and (min-device-width: 414px) {.email-container {min-width: 414px !important;}}\r</style>\r<!-- CSS Reset : END -->\r<!-- Reset list spacing because Outlook ignores much of our inline CSS. -->\r<!--[if mso]>\r<style type="text/css">\rul,ol {margin: 0 !important;}\rli {margin-left: 30px !important;}\rli.list-item-first {margin-top: 0 !important;}\rli.list-item-last {margin-bottom: 10px !important;}\r</style>\r<![endif]-->\r<!-- Progressive Enhancements : BEGIN -->\r<style>\r/* What it does: Hover styles for buttons */\r.button-td,.button-a {transition: all 100ms ease-in;}\r.button-td-primary:hover,.button-a-primary:hover {background: #661400 !important;border-color: #661400 !important;}\r/* Media Queries */\r@media screen and (max-width: 480px) {/* What it does: Forces elements to resize to the full width of their container. Useful for resizing images beyond their max-width. */\r.fluid {width: 100% !important;max-width: 100% !important;height: auto !important;margin-left: auto !important;margin-right: auto !important;}\r/* What it does: Forces table cells into full-width rows. */\r.stack-column,.stack-column-center {display: block !important;width: 100% !important;max-width: 100% !important;direction: ltr !important;}\r/* And center justify these ones. */\r.stack-column-center {text-align: center !important;}\r/* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */\r.center-on-narrow {text-align: center !important;display: block !important;margin-left: auto !important;margin-right: auto !important;float: none !important;}\rtable.center-on-narrow {display: inline-block !important;}\r/* What it does: Adjust typography on small screens to improve readability */\r.email-container p {font-size: 17px !important;}}\r</style>\r<!-- Progressive Enhancements : END -->\r<!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->\r<!--[if gte mso 9]>\r<xml>\r<o:OfficeDocumentSettings>\r<o:AllowPNG/>\r<o:PixelsPerInch>96</o:PixelsPerInch>\r</o:OfficeDocumentSettings>\r</xml>\r<![endif]-->\r</head>\r<!--The email background color (#222222) is defined in three places:1. body tag: for most email clients2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr3. mso conditional: For Windows 10 Mail-->\r<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f84d00;">\r<center style="width: 100%; background-color: #f84d00;">\r<!--[if mso | IE]>\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f84d00;">\r<tr>\r<td>\r<![endif]-->\r<!-- Visually Hidden Preheader Text : BEGIN -->\r<div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">Tech Checkup - The email thing that I try to do weekly.</div>\r<!-- Visually Hidden Preheader Text : END -->\r<!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->\r<!-- Preview Text Spacing Hack : BEGIN -->\r<div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>\r<!-- Preview Text Spacing Hack : END -->\r<!--Set the email width. Defined in two places:1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.2. MSO tags for Desktop Windows Outlook enforce a 680px width.Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I\'ve found that 680px is a good width. Change with caution.-->\r<div style="max-width: 680px; margin: 0 auto;" class="email-container">\r<!--[if mso]>\r<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="680">\r<tr>\r<td>\r<![endif]-->\r<!-- Email Body : BEGIN -->\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">\r<!-- Email Header : BEGIN -->\r<tr>\r<td style="padding: 20px 0; text-align: center"><img src="http://u.cubeupload.com/XBLOssia/HeaderLogoSmall.png" width="200" height="50" alt="WPSD 1" border="0" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">\r</td>\r</tr>\r<!-- Email Header : END -->\r';
                const header2 = '<!-- Hero Image, Flush : BEGIN -->\r<tr>\r<td style="background-color: #ffffff;">\r<img src="';
                const header3 = '" width="680" height="" alt="alt_text" border="0" style="width: 100%; max-width: 680px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; margin: auto;" class="fluid g-img">\r</td>\r</tr>\r<!-- Hero Image, Flush : END -->';
                    //look upon my works ye mighty, and despair!
                var x = document.getElementById('heading');
                var bigimagelink = x.elements[0].value;
                bigimagelink.replace(/,/g, '.');
                console.log('i : ' + i);
                if (headerswitch == 0) {
                    console.log('headerswitch : '+headerswitch);
                    kk += header1 + header2 + bigimagelink + header3;
                    headerswitch = 1;
                } else {
                    kk += header2 + bigimagelink + header3; 
                }
            console.log('headerswitch : '+headerswitch);
            }
            if (list1 === "twocols"){
                const twocolumnhtml1 = '<!-- 2 Even Columns : BEGIN -->\r<tr>\r<td height="100%" valign="top" width="100%" style="background-color: #ffffff;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660">\r<tr>\r<td valign="top" width="660">\r<![endif]-->\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">\r<tr>\r<td align="center" valign="top" style="font-size:0; padding: 10px 0;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660">\r<tr>\r<td valign="top" width="330">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; width:100%; min-width:200px; max-width:330px; vertical-align:top;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 10px 10px;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size: 14px;text-align: left;">\r<tr>\r<td>\r<img src="';
                const twocolumnhtml2 = '" width="310" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 310px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r</td>\r</tr>\r<tr>\r<td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-top: 10px;" class="stack-column-center">\r<p style="margin: 0;">';
                const twocolumnhtml3 = '</p>\r</td>\r</tr>\r</table>\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r<td valign="top" width="330">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; width:100%; min-width:200px; max-width:330px; vertical-align:top;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 10px 10px;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size: 14px;text-align: left;">\r<tr>\r<td>\r<img src="';
                const twocolumnhtml4 = '" width="310" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 310px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r</td>\r</tr>\r<tr>\r<td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-top: 10px;" class="stack-column-center">\r<p style="margin: 0;">';
                const twocolumnhtml5 = '</p>\r</td>\r</tr>\r</table>\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r<!-- 2 Even Columns : END -->\r';

                var x = document.getElementById('twocols');
                var twocolimg1 = x.elements[0].value;
                let twocoltextbox1 = nicEditors.findEditor('twocollefttxt');
                var twocoltxt1 = twocoltextbox1.getContent();
                var twocolimg2 = x.elements[1].value;
                let twocoltextbox2 = nicEditors.findEditor('twocolrighttxt');
                var twocoltxt2 = twocoltextbox2.getContent();
                kk += twocolumnhtml1 + twocolimg1 + twocolumnhtml2 + twocoltxt1 + twocolumnhtml3 + twocolimg2 + twocolumnhtml4 + twocoltxt2 + twocolumnhtml5;
            }
            if (list1 === "threecols"){
                const threecolumnhtml1 = '<!-- 3 Even Columns : BEGIN -->\r<tr>\r<td height="100%" valign="top" width="100%" style="padding: 10px 0; background-color: #ffffff;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660">\r<tr>\r<td valign="top" width="660">\r<![endif]-->\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">\r<tr>\r<td align="center" valign="top" style="font-size:0;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660">\r<tr>\r<td valign="top" width="220">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width:33.33%; min-width:220px; vertical-align:top; width:100%;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 10px 10px;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size: 14px;text-align: left;">\r<tr>\r<td>\r<img src="';
                const threecolumnhtml2 = '" width="200" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 200px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r</td>\r</tr>\r<tr>\r<td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-top: 10px;" class="stack-column-center">\r<p style="margin: 0;">';
                const threecolumnhtml3 = '</p>\r</td>\r</tr>\r</table>\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r<td valign="top" width="220">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width:33.33%; min-width:220px; vertical-align:top; width:100%;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 10px 10px;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size: 14px;text-align: left;">\r<tr>\r<td>\r<img src="';
                const threecolumnhtml4 = '" width="200" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 200px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r</td>\r</tr>\r<tr>\r<td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-top: 10px;" class="stack-column-center">\r<p style="margin: 0;">';
                const threecolumnhtml5 = '</p>\r</td>\r</tr>\r</table>\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r<td valign="top" width="220">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width:33.33%; min-width:220px; vertical-align:top; width:100%;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 10px 10px;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="font-size: 14px;text-align: left;">\r<tr>\r<td>\r<img src="';
                const threecolumnhtml6 = '" width="200" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 200px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r</td>\r</tr>\r<tr>\r<td style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-top: 10px;" class="stack-column-center">\r<p style="margin: 0;">';
                const threecolumnhtml7 = '</p>\r</td>\r</tr>\r</table>\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r<!-- 3 Even Columns : END -->\r';

                var x = document.getElementById('threecols');
                var threecolsimg1 = x.elements[0].value;
                let threecolstextbox1 = nicEditors.findEditor('threecolleft');
                var threecolstxt1 = threecolstextbox1.getContent();
                var threecolsimg2 = x.elements[1].value;
                let threecolstextbox2 = nicEditors.findEditor('threecolmid');
                var threecolstxt2 = threecolstextbox2.getContent();
                var threecolsimg3 = x.elements[2].value;
                let threecolstextbox3 = nicEditors.findEditor('threecolright');
                var threecolstxt3 = threecolstextbox3.getContent();
                kk += threecolumnhtml1 + threecolsimg1 + threecolumnhtml2 + threecolstxt1 + threecolumnhtml3 + threecolsimg2 + threecolumnhtml4 + threecolstxt2 + threecolumnhtml5 + threecolsimg3 + threecolumnhtml6 + threecolstxt3 + threecolumnhtml7;
            }
            if (list1 === "leftimg"){
                const leftimghtml1 = '<!-- Thumbnail Left, Text Right : BEGIN -->\r<tr>\r<!-- dir=ltr is where the magic happens. This can be changed to dir=rtl to swap the alignment on wide while maintaining stack order on narrow. -->\r<td dir="ltr" height="100%" valign="top" width="100%" style="padding: 10px 0; background-color: #ffffff;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660" style="width: 660px;">\r<tr>\r<td valign="top" width="660" style="width: 660px;">\r<![endif]-->\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">\r<tr>\r<td align="center" valign="top" style="font-size:0; padding: 10px 0;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660" style="width: 660px;">\r<tr>\r<td valign="top" width="220" style="width: 220px;">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:top; width:100%;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td dir="ltr" style="padding: 0 10px 10px 10px;">\r<img src="';
                const leftimghtml2 = '" width="200" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 200px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r<td valign="top" width="440" style="width: 440px;">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width:66.66%; min-width:320px; vertical-align:top;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td dir="ltr" style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px 10px 0; text-align: left;" class="center-on-narrow">\r<h2 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">';
                const leftimghtml3 = '</h2>\r<p style="margin: 0 0 10px 0;">';
                const leftimghtml4 = '</p>\r<!-- Button : BEGIN -->\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow" style="float:left;">\r<tr>\r<td class="button-td button-td-primary" style="border-radius: 4px; background: #FF0033;">\r<a class="button-a button-a-primary" href="';
                const leftimghtml5 = '" style="background: #FF0033; border: 1px solid #FF0033; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">';
                const leftimghtml6 = '</a>\r</td>\r</tr>\r</table>\r<!-- Button : END -->\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r<!-- Thumbnail Left, Text Right : END -->\r';

                var x = document.getElementById('leftimg');
                var leftimgurl1 = x.elements[0].value;
                var leftimgheadline = x.elements[1].value;
                let leftimgtextbox = nicEditors.findEditor('leftimgtxt');
                var leftimgtxt = leftimgtextbox.getContent();
                var leftimgurl2 = x.elements[2].value;
                var leftimglink = x.elements[3].value;
                kk += leftimghtml1 + leftimgurl1 + leftimghtml2 + leftimgheadline + leftimghtml3 + leftimgtxt + leftimghtml4 + leftimgurl2 + leftimghtml5 + leftimglink + leftimghtml6;
            }
            if (list1 === "rightimg"){
                const rightimghtml1 = '<!-- Thumbnail Right, Text Left : BEGIN -->\r<tr>\r<!-- dir=rtl is where the magic happens. This can be changed to dir=ltr to swap the alignment on wide while maintaining stack order on narrow. -->\r<td dir="rtl" height="100%" valign="top" width="100%" style="padding: 10px 0; background-color: #ffffff;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660" style="width: 660px;">\r<tr>\r<td valign="top" width="660">\r<![endif]-->\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px;">\r<tr>\r<td align="center" valign="top" style="font-size:0; padding: 10px 0;">\r<!--[if mso]>\r<table role="presentation" border="0" cellspacing="0" cellpadding="0" width="660" style="width: 660px;">\r<tr>\r<td valign="top" width="220" style="width: 220px;">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width: 200px; min-width:160px; vertical-align:top; width:100%;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td dir="ltr" style="padding: 0 10px 10px 10px;">\r<img src="';
                const rightimghtml2 = '" width="200" height="" border="0" alt="alt_text" class="center-on-narrow" style="width: 100%; max-width: 200px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;">\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r<td valign="top" width="440" style="width: 440px;">\r<![endif]-->\r<div style="display:inline-block; margin: 0 -2px; max-width:66.66%; min-width:320px; vertical-align:top;" class="stack-column">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td dir="ltr" style="font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px 10px 0; text-align: left;" class="center-on-narrow">\r<h2 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">';
                const rightimghtml3 = '</h2>\r<p style="margin: 0 0 10px 0;">';
                const rightimghtml4 = '</p>\r<!-- Button : BEGIN -->\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" class="center-on-narrow" style="float:left;">\r<tr>\r<td class="button-td button-td-primary" style="border-radius: 4px; background: #FF0033;">\r<a class="button-a button-a-primary" href="';
                const rightimghtml5 = '" style="background: #FF0033; border: 1px solid #FF0033; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">';
                const rightimghtml6 = '</a>\r</td>\r</tr>\r</table>\r<!-- Button : END -->\r</td>\r</tr>\r</table>\r</div>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</td>\r</tr>\r<!-- Thumbnail Right, Text Left : END -->\r';

                var x = document.getElementById('rightimg');
                var rightimgurl1 = x.elements[0].value;
                var rightimgheadline = x.elements[1].value;
                let rightimgtextbox = nicEditors.findEditor('rightimgtxt');
                var rightimgtxt = rightimgtextbox.getContent();
                var rightimgurl2 = x.elements[2].value;
                var rightimglink = x.elements[3].value;
                kk += rightimghtml1 + rightimgurl1 + rightimghtml2 + rightimgheadline + rightimghtml3 + rightimgtxt + rightimghtml4 + rightimgurl2 + rightimghtml5 + rightimglink + rightimghtml6;
            }
            if (list1 === "bgimg"){
                const bgimghtml1 = '<!-- Background Image with Text : BEGIN -->\r<tr>\r<!-- Bulletproof Background Images c/o https://backgrounds.cm -->\r<td valign="middle" style="text-align: center; background-image: url(\'';
                const bgimghtml2 = '\'); background-color: #222222; background-position: center center !important; background-size: cover !important;">\r<!--[if gte mso 9]>\r<v:image xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="border: 0; display: inline-block; width: 680px; height: 180px;" src="';
                const bgimghtml3 = '" />\r<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="border: 0; display: inline-block; position: absolute; width: 680px; height: 180px;">\r<v:fill opacity="0%" color="#222222" />\r<![endif]-->\r<div>\r<!--[if mso]>\r<table align="center" role="presentation" border="0" cellspacing="0" cellpadding="0" width="500">\r<tr>\r<td valign="top" width="500">\r<![endif]-->\r<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px; margin: auto;">\r<tr>\r<td valign="middle" style="text-align: center; padding: 40px 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #ffffff;">\r<p style="margin: 0;">';
                const bgimghtml4 = '</p>\r</td>\r</tr>\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</div>\r<!--[if gte mso 9]>\r</v:fill>\r</v:rect>\r</v:image>\r<![endif]-->\r</td>\r</tr>\r<!-- Background Image with Text : END -->\r';

                var x = document.getElementById('bgimg');
                var bgimgurl = x.elements[0].value;
                bgimgurl.replace(/,/g, '.');
                let bgimgtextbox = nicEditors.findEditor('bgimgtxt');
                var bgimgtxt = bgimgtextbox.getContent();
                kk += bgimghtml1 + bgimgurl + bgimghtml2 + bgimgurl + bgimghtml3 + bgimgtxt + bgimghtml4;
            }
            if (list1 === "noimg"){
                const noimghtml1 = '<!-- 1 Column Text + Button : BEGIN -->\r<tr>\r<td style="background-color: #ffffff;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center;">\r<h1 style="margin: 0 0 10px; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">';
                const noimghtml2 = '</h1>\r<p style="margin: 0 0 10px;">';
                const noimghtml3 = '</p>\r</td>\r</tr>\r<tr>\r<td style="padding: 0 20px 20px;">\r<!-- Button : BEGIN -->\r<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">\r<tr>\r<td class="button-td button-td-primary" style="border-radius: 4px; background: #ff0033;">\r<a class="button-a button-a-primary" href="';
                const noimghtml4 = '" style="background: #ff0033; border: 1px solid #ff0033; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">';
                const noimghtml5 = '</a>\r</td>\r</tr>\r</table>\r<!-- Button : END -->\r</td>\r</tr>\r</table>\r</td>\r</tr> \r<!-- 1 Column Text + Button : END -->\r';

                var x = document.getElementById('noimg');
                var noimgheadline = x.elements[0].value;
                let textbox = nicEditors.findEditor('noimgbody');
                var noimgbodytext = textbox.getContent();
                var noimglink = x.elements[1].value;
                noimglink.replace(/,/g, '.');
                var noimglinktext = x.elements[2].value;
                kk += noimghtml1 + noimgheadline + noimghtml2 + noimgbodytext + noimghtml3 + noimglink + noimghtml4 + noimglinktext + noimghtml5;
            }
            if (list1 ==="closing"){
                const closinghtml1 = '<!-- Clear Spacer : BEGIN -->\r<tr>\r<td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">\r&nbsp;\r</td>\r</tr>\r<!-- Clear Spacer : END -->\r<!-- 1 Column Text : BEGIN -->\r<tr>\r<td style="background-color: #ffffff;">\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r<p style="margin: 0 0 10px 0;">';
                const closinghtml2 = '</p>\r</td>\r</tr>\r</table>\r</td>\r</tr>\r<!-- 1 Column Text : END -->\r<!-- Clear Spacer : BEGIN -->\r<tr>\r<td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">\r&nbsp;\r</td>\r</tr>\r<!-- Clear Spacer : END -->\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</div>\r<!-- Full Bleed Background Section : BEGIN -->\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #CB00FF;">\r<tr>\r<td valign="top">\r<div style="max-width: 680px; margin: 0 auto;" class="email-container">\r<!--[if mso]>\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">\r<tr>\r<td>\r<![endif]-->\r<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r<tr>\r<td style="padding: 0px; text-align: center;\rfont-family: sans-serif; font-size: 15px;\rline-height: 140%; color: #ffffff;">\r<p>\r';
                const closinghtml3 = '</p>\r</td>\r</tr>\r<tr>\r<td style="padding: 20px; text-align: left; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #ffffff;">\r<img alt="Signature" style="width: 100%;\rmax-width: 600px; height: auto;\rbackground: #dddddd; font-family:\rsans-serif; font-size: 15px;\rline-height: 140%; color: #555555;\rmargin: auto;" class="g-img" moz-do-not-send="true" align="middle" height="" width="600" border="0" src="'

                const closinghtml4 = '">\r</td>\r</tr>\r</table>\r<!--[if mso]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</div>\r</td>\r</tr>\r</table>\r<!-- Full Bleed Background Section : END -->\r<!--[if mso | IE]>\r</td>\r</tr>\r</table>\r<![endif]-->\r</center>\r</body>\r</html>\r';

                var x = document.getElementById('closing');
                var closingtextbox1 = nicEditors.findEditor('closing1');
                var closingtext1 = closingtextbox1.getContent();
                var closingtextbox2 = nicEditors.findEditor('closing2');
                var closingtext2 = closingtextbox2.getContent();
                var signatureurl = x.elements[0].value;
                kk += closinghtml1 + closingtext1 + closinghtml2 + closingtext2 + closinghtml3 + signatureurl + closinghtml4;
            }
            else {}

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