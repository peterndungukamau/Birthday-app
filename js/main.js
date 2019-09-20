function getuserInfo(){
var day = document.getElementById("day").value;

var month = document.getElementById("month").value;

var year = document.getElementById("year").value;

var gender = radioInfo();

}

function radioInfo (){
var radio = document.getElementsByName('gender');

for (var i = 0;  i<radio.length; i++)
{
 if (radio[i].checked)
 {
  // do whatever you want with the checked radio
  gender = radio[i].value;

  // only one radio can be logically checked, don't check the rest
  return gender;
 }
}

}