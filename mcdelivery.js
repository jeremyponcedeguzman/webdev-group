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
