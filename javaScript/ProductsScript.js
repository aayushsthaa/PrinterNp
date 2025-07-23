// Function that is called for the confirmation of purchase
function confirmation() {
  // Gives a popup message and there are twoo options that gives true or false
  if (confirm("Please confirm your order\nPress OK for confirming") == true) {
    // if true the following popup message would be displayed
    alert("Thank you for your purchase");
  } else {
    // if they will click cancel following popup message would be displayed
    alert("Your order was canceled");
  }
}

// Function that is called when we click on view details in product page, it returns a value according to the product and stores in variable a
function displayInfo(a) {
  // Changes the style of the container to none
  document.getElementById("container" ).style.display = "none";
  // Changes the style of the productDetail and the value sent by the button to flex 
  document.getElementById("productDetail" + a).style.display = "flex";
}