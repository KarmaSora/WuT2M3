let asideArticle = document.getElementById('asideArticle');
function init() {

    asideArticle.onmouseenter = expandText;
    asideArticle.onmouseleave = collapseText;
    console.log("function init has been called");
}
    //javaScript for aside.html 


function expandText() {
    if (asideArticle.style.height != 'auto') {
        asideArticle.style.height = 'auto';
    } else {
        asideArticle.style.height = '100px';
        console.log("this is at test called from else in expandText function");
    }
    console.log("text has been expandeed");
}

function collapseText() {
    asideArticle.style.height = '100px';
    console.log("text has been collapsed");
}

window.onload = init;