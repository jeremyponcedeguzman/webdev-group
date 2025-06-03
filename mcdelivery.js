function openTab(evt, tabName){
    var i, tabContent, tabItem;
    tabContent=document.getElementsByClassName("tabContent");
    for (i=0; i<tabContent.length; i++){
        tabContent[i].style.display="none";
    }
    tabItem = document.getElementsByClassName("tabItem");
    for (i=0; i<tabItem.length; i++){
        tabItem[i].className=tabItem[i].className.replace(" active","");
    }

    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" active";
}
function changeDrink(evt){
    var i, tabContent, tabItem;
    tabItem = document.getElementsByClassName("tabDrink");
    for (i=0; i<tabItem.length; i++){
        tabItem[i].className=tabItem[i].className.replace(" active","");
    }

    evt.currentTarget.className+=" active";
}
function changeSize(evt){
    var i, tabContent, tabItem;

    tabItem = document.getElementsByClassName("tabSize");
    for (i=0; i<tabItem.length; i++){
        tabItem[i].className=tabItem[i].className.replace(" active","");
    }

    evt.currentTarget.className+=" active";
}
function changeAdd(evt){
    var i, tabContent, tabItem;
    tabItem = document.getElementsByClassName("tabAdd");
    for (i=0; i<tabItem.length; i++){
        tabItem[i].className=tabItem[i].className.replace(" active","");
    }

    evt.currentTarget.className+=" active";
}
