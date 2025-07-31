var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

var sidemenu = document.getElementById('sidemenu');

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200";
}



  
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  const name = e.parameter.name;
  const email = e.parameter.email;
  const message = e.parameter.message;

  sheet.appendRow([new Date(), name, email, message]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
