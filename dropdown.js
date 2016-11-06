function showDd()
{
    var x=document.getElementById("menudd");
    if(x.className.indexOf("dd-show")==-1)
        x.className+=" dd-show";
    else
        x.className=x.className.replace(" dd-show", "");
    var y=document.getElementById("overlay");
    if(y.className.indexOf("ovl-show")==-1)
        y.className+=" ovl-show";
    else
        y.className=y.className.replace(" ovl-show", "");
}