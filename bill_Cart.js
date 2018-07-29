//fetch the data from Cart with the help of local storage
var data_name = localStorage.getItem("item_data");
var TotalPrice = localStorage.getItem("item_price");
var data_total = '<th>Total</th><td>'+ TotalPrice+'</td>';
data_name+=data_total;
//console.log(TotalPrice);
document.getElementById("store").innerHTML=data_name;
localStorage.removeItem("item_data");
localStorage.removeItem("item_price");
