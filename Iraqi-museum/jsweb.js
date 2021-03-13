

//the price calculate for Tiket
function sum() {
   var txtFirstNumberValue = document.getElementById('txt1').value;
   var txtSecondNumberValue = document.getElementById('txt2').value;
 
   var result = 10000*( parseInt(txtFirstNumberValue)) +(10000 *0.6)* parseInt(txtSecondNumberValue);
   var result2 =   parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue) 
   
   if (!isNaN(result)) {
    

      document.getElementById('ruslt2').innerHTML = result + " IQD";
      document.getElementById('ruslt1').innerHTML = result2;
      if(parseInt(txtSecondNumberValue)>0)
      document.getElementById('ruslt3').innerHTML = "60% for Children";
      else
      document.getElementById('ruslt3').innerHTML = "You dont have discount";

      document.getElementById("dd").innerHTML=  month +"/"+  day +  "/"+year;
      document.getElementById("dd1").innerHTML= exp;
   }
}
 
//date 
 var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();
//date exp +3
var today = new Date();
var newdate = new Date();
newdate.setDate(today.getDate()+3);
var exp = newdate.toLocaleDateString();
 //map contact
jQuery(function ($) {
   function init_map1() {
       var myLocation = new google.maps.LatLng(33.328533,44.385904);
       var mapOptions = {
           center: myLocation,
           zoom: 16
       };
       var marker = new google.maps.Marker({
           position: myLocation,
           title: "Property Location"
       });
       var map = new google.maps.Map(document.getElementById("map1"),
           mapOptions);
       marker.setMap(map);
   }
   init_map1();
});



//light and dark change  
 function getValue() {
    var isChecked = document.getElementById("myCheckBox").checked;
     
    if(isChecked){
     
       document.getElementById("bg1").style.background="white";
       document.getElementById("logoCh").src="eee.png";
       document.getElementById("textbar").style.color="black";
       document.getElementById("ss").style.color="black";
       document.getElementById("time1").style.color="black";
       document.getElementById("hr1").style.backgroundColor="black";
       document.getElementById("hr2").style.backgroundColor="black";
       document.getElementById("ph1").style.color="black";
       document.getElementById("title1").style.color="black"; 
       document.getElementById("rr").style.color="black"; 
       document.getElementById("dds").style.color="black";
       document.getElementById("rr1").style.color="black"; 
       document.getElementById("tx1").style.color="black";
       document.getElementById("e").style.color="black";
  
       
    } else {
      
        document.getElementById("bg1").style.background="black";
        document.getElementById("logoCh").src="logo-dark.png";  
        document.getElementById("textbar").style.color="white";
        document.getElementById("ss").style.color="white";
        document.getElementById("time1").style.color="white";
        document.getElementById("hr1").style.backgroundColor="white";
       document.getElementById("hr2").style.backgroundColor="white";
       document.getElementById("ph1").style.color="white";
       document.getElementById("rr").style.color="white"; 
       document.getElementById("dds").style.color="white";
       document.getElementById("rr1").style.color="white"; 
       document.getElementById("title1").style.color="white"; 
       document.getElementById("tx1").style.color="white";
       document.getElementById("e").style.color="white";
      
    

    }
 } 

 function getValue2() {
   var isChecked = document.getElementById("myCheckBox").checked;
    
   if(isChecked){
    
    
      document.getElementById("bg1").style.background="white";
      document.getElementById("logoCh").src="eee.png";
      document.getElementById("textbar").style.color="black";
      document.getElementById("rre").style.color="black"; 
      document.getElementById("rre1").style.color="black";
      document.getElementById("ss").style.color="black";
      document.getElementById("e").style.color="black";
      document.getElementById("dds").style.color="black";
      document.getElementById("tx1").style.color="black";
      document.getElementById("textphiraq").style.color="black";
      document.getElementById("textphiraqtitle").style.color="black"; 
      
   } else {
     
     
      document.getElementById("bg1").style.background="black";
      document.getElementById("logoCh").src="logo-dark.png";  
      document.getElementById("textbar").style.color="white";
      document.getElementById("ss").style.color="white";
      document.getElementById("e").style.color="white";
      document.getElementById("rre").style.color="white"; 
      document.getElementById("dds").style.color="white";
      document.getElementById("rre1").style.color="white"; 
     document.getElementById("tx1").style.color="white";
 
     document.getElementById("textphiraq").style.color="white";
     document.getElementById("textphiraqtitle").style.color="white"; 
    
   

   }
} 
 //light and dark change  for page contact and vist
 function getValue1() {
   var isChecked = document.getElementById("myCheckBox").checked;
    
   if(isChecked){
    
      document.getElementById("bg1").style.background="white";
      document.getElementById("logoCh").src="eee.png";
      document.getElementById("textbar").style.color="black";
      document.getElementById("rre").style.color="black"; 
      document.getElementById("rre1").style.color="black";
      document.getElementById("ss").style.color="black";
      document.getElementById("e").style.color="black";
      document.getElementById("dds").style.color="black";
      document.getElementById("tx1").style.color="black";
      document.getElementById("tp1").style.color="black";
      document.getElementById("textphiraq").style.color="black";
      document.getElementById("textphiraqtitle").style.color="black"; 
   } else {
     
       document.getElementById("bg1").style.background="black";
       document.getElementById("logoCh").src="logo-dark.png";  
       document.getElementById("textbar").style.color="white";
       document.getElementById("ss").style.color="white";
       document.getElementById("e").style.color="white";
       document.getElementById("rre").style.color="white"; 
       document.getElementById("dds").style.color="white";
       document.getElementById("rre1").style.color="white"; 
      document.getElementById("tx1").style.color="white";
      document.getElementById("tp1").style.color="white";
      document.getElementById("textphiraq").style.color="white";
      document.getElementById("textphiraqtitle").style.color="white"; 
   }
} 
 //this code to close menubar after close out side
 $(document).click(function(event) {
    $(event.target).closest(".navbar").length || $(".navbar-collapse.show").length && $(".navbar-collapse.show").collapse("hide")
  });




