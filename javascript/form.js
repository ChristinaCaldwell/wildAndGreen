
//REQUIRE NAME
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
   else{
        alert("Thank you "+x+", we will get back to you shortly");
    }
}
