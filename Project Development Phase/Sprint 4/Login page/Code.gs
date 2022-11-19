function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('co1');
}
function AddRecord(reg,pass) {
  var url = 'https://docs.google.com/spreadsheets/d/1UMay_e9oj-S5d5E_XMyihXJOrq1zFsBIJ89m065wTFg/edit#gid=0';
  //Paste URL of GOOGLE SHEET
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("CO2");
  webAppSheet.appendRow([reg,pass, new Date()]);

}

function checkLogin(reg,pass) {
   var url = 'https://docs.google.com/spreadsheets/d/1UMay_e9oj-S5d5E_XMyihXJOrq1zFsBIJ89m065wTFg/edit#gid=0';
  //Paste URL of GOOGLE SHEET
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("CO2");
  var getLastRow =  webAppSheet.getLastRow();
  //var getFirstRow =  webAppSheet.getFirstRow();
  var dd = '';


     for(var i = getLastRow; i >= 1; i--)
     {
   if(webAppSheet.getRange(i,1).getValue()==reg && webAppSheet.getRange(i, 2).getValue() == pass)
      {
             dd="TRUE";
      } // webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())



 }

  return dd;

}