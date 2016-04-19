var activeSheet;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", doStuff);
});

function doStuff(e){
  e.preventDefault();
  var active = document.getElementById("active");
  var selectedSheet = document.getElementById("sheet");
  activeSheet = sheet.options[sheet.selectedIndex].text;
  active.innerHTML = activeSheet;
}
