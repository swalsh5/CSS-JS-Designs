function transform()
{
    var change = document.getElementById("l");
    //change.innerHTML = "i";
    change.innerHTML = null;
    createLetterI(change)
}

function transformBack()
{
    var change = document.getElementById("l");
    change.innerHTML = "L";
}
//function for movable i character
function createLetterI(change){
    change.appendChild(createTop());
    change.appendChild(createBottom());
}
function createTop() {
    const topPart = document.createElement('span');
    topPart.setAttribute("class", "character bounce");
    topPart.innerHTML = "."
    topPart.style.color = "orange";
    return topPart;
}
function createBottom(){
    const bottomPart = document.createElement('span')
    bottomPart.setAttribute("class", "character");
    bottomPart.innerHTML = "ı";
    return bottomPart;
}