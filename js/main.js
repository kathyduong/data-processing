//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
  
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
 
 //set current year in span with id of this-year
 let d = new Date(); let thisYear = d.getFullYear();
 document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }


if(key == "Cart"){//cart
      //alert("Cart Item: " + value);
 
        switch(value){
          case "Widget":
            myCart += "<p>Widget: $3.99</p><br>";
            myTotal += 3.99;
          break;
 
          case "Sprocket":
            myCart += "<p>Sprocket: $5.99</p><br>";
            myTotal += 5.99;
          break;
 
          case "Thingy":
            myCart += "<p>Thingy: $1.99</p><br>";
            myTotal += 1.99;
          break;
        }
 
 
 
    }else{//shipping label
      //swaps underscores for space
      key = key.split("_").join(" ");
      if((key == "FirstName") || (key == "LastName") || (key == "City") || (key == "Address")) {
        myData += `<p>${key}: ${value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()}</p>`;
      } else {
        myData += `<p>${key}: ${value}</p>`;
      }
    }

}