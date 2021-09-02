let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let logo_icon = document.getElementsByClassName("logo-icon");
let logo_text = document.querySelector(".logo-text");



var toolbarOptions = [
  [ 'bold', 'italic', 'underline', 'strike'],
  [ 'blockquote', 'code-block' ],
  [{ 'header' : 1 }, { 'header' : 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  
  [{'script' : 'sub'}, { 'script': 'super' }]
];
var options = {
  debug: 'info',
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: 'Write here...',
  theme: 'snow'
};
var editor = new Quill('#editor', options);



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



function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right")
   logo_icon[0].style.visibility="collapse"
   
   
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
   logo_icon[0].style.visibility="visible"
   
 }

}
