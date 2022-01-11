function switchTab(evt , tab_id){
    // สร้างตัวแปร
    let i, tabContent, tabMenu;
    // หา class tabs_content-items แล้วทำการ loop
    tabContent =document.getElementsByClassName("tabs_content-items");
    for(i = 0; i< tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // หา class tab-item แล้วทำการ loop
    tabMenu= document.getElementsByClassName("tab-item");
    for (i = 0; i <tabMenu.length; i++){
        tabMenu[i].className = tabMenu[i].className.replace(" active", "");
    }
    
    document.getElementById(tab_id).style.display = "block";
    evt.currentTarget.className +=" active";
}