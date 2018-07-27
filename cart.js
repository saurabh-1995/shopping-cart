var Fruits = [{
    Name: "Apple",
    MRP: "Rs. 120",
    Category: "Fruits"
},
{
    Name: "Banana",
    MRP: "Rs. 80",
    Category: "Fruits"
},
{
    Name: "Lemon",
    MRP: "Rs. 110",
    Category: "Fruits"
},
{
    Name: "Mango",
    MRP: "Rs. 60",
    Category: "Fruits"
},
{
    Name: "Pineapple",
    MRP: "Rs. 150",
    Category: "Fruits"
},
{
    Name: "Apricot",
    MRP: "Rs. 160",
    Category: "Fruits"
},
{
    Name: "Lychee",
    MRP: "Rs. 115",
    Category: "Fruits"
},
{
    Name: "Blackberry",
    MRP: "Rs. 65",
    Category: "Fruits"
},
{
    Name: "Coconut",
    MRP: "Rs. 85",
    Category: "Fruits"
},
{
    Name: "Feijoa",
    MRP: "Rs. 180",
    Category: "Fruits"
}
];
var Vegetables = [{
    Name: "Broccoflower",
    MRP: "Rs. 150",
    Category: "Vegetables"
},
{
    Name: "Brussels sprouts",
    MRP: "Rs. 100",
    Category: "Vegetables"
},
{
    Name: "Sweetcorn",
    MRP: "Rs. 125",
    Category: "Vegetables"
},
{
    Name: "Rhubarb",
    MRP: "Rs. 80",
    Category: "Vegetables"
},
{
    Name: "Cabbage",
    MRP: "Rs. 75",
    Category: "Vegetables"
},
{
    Name: "Bottleguard",
    MRP: "Rs. 90",
    Category: "Vegetables"
},
{
    Name: "Ridgeguard",
    MRP: "Rs. 65",
    Category: "Vegetables"
},
{
    Name: "Radish-white",
    MRP: "Rs. 79",
    Category: "Vegetables"
},
{
    Name: "Springonion",
    MRP: "Rs. 55",
    Category: "Vegetables"
},
{
    Name: "Cucumber",
    MRP: "Rs. 50",
    Category: "Vegetables"
}
];
var Pulses = [{
    Name: "Split green gram",
    MRP: "Rs. 75",
    Category: "Pulses"
},
{
    Name: "Black eyed beans",
    MRP: "Rs. 77",
    Category: "Pulses"
},
{
    Name: "Yellow pigeon beans",
    MRP: "Rs. 68",
    Category: "Pulses"
},
{
    Name: "Kidney beans",
    MRP: "Rs. 70",
    Category: "Pulses"
},
{
    Name: "Split black gram",
    MRP: "Rs. 97",
    Category: "Pulses"
},
{
    Name: "Green gram",
    MRP: "Rs. 95",
    Category: "Pulses"
},
{
    Name: "Red Lentils",
    MRP: "Rs. 102",
    Category: "Pulses"
},
{
    Name: "Adzuki beans",
    MRP: "Rs. 110",
    Category: "Pulses"
},
{
    Name: "Green peas",
    MRP: "Rs. 115",
    Category: "Pulses"
},
{
    Name: "White peas",
    MRP: "Rs. 107",
    Category: "Pulses"
}
];
var Biscuits = [{
    Name: "Sunfeast",
    MRP: "Rs. 60",
    Category: "Biscuits"
},
{
    Name: "Parle-G",
    MRP: "Rs. 20",
    Category: "Biscuits"
},
{
    Name: "Britannia",
    MRP: "Rs. 25",
    Category: "Biscuits"
},
{
    Name: "Nimkin",
    MRP: "Rs. 18",
    Category: "Biscuits"
},
{
    Name: "Festo",
    MRP: "Rs. 55",
    Category: "Biscuits"
},
{
    Name: "Magix",
    MRP: "Rs. 37",
    Category: "Biscuits"
},
{
    Name: "20-20 Cookies",
    MRP: "Rs. 35",
    Category: "Biscuits"
},
{
    Name: "Kreams",
    MRP: "Rs. 45",
    Category: "Biscuits"
},
{
    Name: "Hide and Seek",
    MRP: "Rs. 65",
    Category: "Biscuits"
},
{
    Name: "Milk shakti",
    MRP: "Rs. 30",
    Category: "Biscuits"
}

];
//Storing all Array elements together
var Grocery = [Fruits, Vegetables, Pulses, Biscuits];
//function to search the data through REGEX and show in the Table form
function search_grocery() {
var result_set = [];
var input_item = document.getElementById("text_area_style").value;
var len = input_item.length;
if (len > 0) {
    var grocery_reg = new RegExp(input_item, "i");
    Grocery.forEach((grocery_array) => {
        grocery_array.forEach((grocery_name) => {
            if (grocery_reg.test(grocery_name.Name)) {
                console.log(grocery_name.Name);
                result_set.push(grocery_name);
            }
        });
    });
    if (result_set.length > 0) {
        var data = "<table><tr><th>Name</th><th>MRP</th><th>Category</th><th>Quantity</th></tr>"
        result_set.forEach((product) => {
            data = data + "<tr><td>" + product.Name + "</td><td>" + product.MRP + "</td><td>" + product.Category + "</td><td>" + "<input type=number min=0 max=5 id=" + product.name + "</td></tr>";
        });
        data = data + "</table>";
        document.getElementById("demo").innerHTML = data;
    }
}
}
function reset_grocery()
{
    //data.innerHTML=" ";
}