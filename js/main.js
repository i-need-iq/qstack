let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let logo_icon = document.getElementsByClassName("logo-icon");
let logo_text = document.querySelector(".logo-text");


function voteUp(id)
{
  var stru = "triangle-up"+id
  var strd = "triangle-down"+id
  
  let up = document.getElementById(stru)
  let down = document.getElementById(strd)
  
  up.classList.toggle("clicked");
  
  if(down.classList.contains("clicked"))
    down.classList.toggle("clicked");
  
}
function voteDown(id)
{
  var stru = "triangle-up"+id
  var strd = "triangle-down"+id
  
  let up = document.getElementById(stru)
  let down = document.getElementById(strd)

  down.classList.toggle("clicked");

  if(up.classList.contains("clicked"))
    up.classList.toggle("clicked");
  
}

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  logo_text.classList.toggle("hide")
  menuBtnChange();
});

function changeClick(id){
  var strbox="change-box"+id
  var strbtn="submit"+id
  var strclick="click-to-change-btn"+id
  let box = document.getElementById(strbox)
  let btn = document.getElementById(strbtn)
  let click = document.getElementById(strclick)
  if(click.classList.contains("clicked"))
  {
    click.classList.toggle("clicked")
    click.value="Click to change"
    box.classList.toggle("clicked")
    btn.classList.toggle("clicked")
  }
  else
  {
    click.classList.toggle("clicked")
    click.value="Cancel"
    box.classList.toggle("clicked")
    btn.classList.toggle("clicked")
  }
}


function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
   logo_icon[0].style.visibility="collapse"
   
   
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
   logo_icon[0].style.visibility="visible"
   
 }

}
