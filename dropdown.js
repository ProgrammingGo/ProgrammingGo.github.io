function showDd()
{
    var x=document.getElementById("menumobiledd");
    if (x.className.indexOf("dd-show") == -1)
    {
        x.className += " dd-show";
    }
    else
    {
        x.className = x.className.replace(" dd-show", "");
    }
}