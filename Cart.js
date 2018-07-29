//Declaration of dynamic data with the help of ArrayObjects
var Fruits = [
    {
        Name: "Apple",
        MRP: 120,
        Category: "Fruits"
    },
    {
        Name: "Banana",
        MRP: 80,
        Category: "Fruits"
    },
    {
        Name: "Lemon",
        MRP: 110,
        Category: "Fruits"
    },
    {
        Name: "Mango",
        MRP: 60,
        Category: "Fruits"
    },
    {
        Name: "Pineapple",
        MRP: 150,
        Category: "Fruits"
    },
    {
        Name: "Apricot",
        MRP: 160,
        Category: "Fruits"
    },
    {
        Name: "Lychee",
        MRP: 115,
        Category: "Fruits"
    },
    {
        Name: "Blackberry",
        MRP: 65,
        Category: "Fruits"
    },
    {
        Name: "Coconut",
        MRP: 85,
        Category: "Fruits"
    },
    {
        Name: "Feijoa",
        MRP: 180,
        Category: "Fruits"
    }
];
var Vegetables = [
    {
        Name: "Broccoflower",
        MRP: 150,
        Category: "Vegetables"
    },
    {
        Name: "Brussels sprouts",
        MRP: 100,
        Category: "Vegetables"
    },
    {
        Name: "Sweetcorn",
        MRP: 125,
        Category: "Vegetables"
    },
    {
        Name: "Rhubarb",
        MRP: 80,
        Category: "Vegetables"
    },
    {
        Name: "Cabbage",
        MRP: 75,
        Category: "Vegetables"
    },
    {
        Name: "Bottleguard",
        MRP: 90,
        Category: "Vegetables"
    },
    {
        Name: "Ridgeguard",
        MRP: 65,
        Category: "Vegetables"
    },
    {
        Name: "Radish-white",
        MRP: 79,
        Category: "Vegetables"
    },
    {
        Name: "Springonion",
        MRP: 55,
        Category: "Vegetables"
    },
    {
        Name: "Cucumber",
        MRP: 50,
        Category: "Vegetables"
    }
];
var Pulses = [
    {
        Name: "Split green gram",
        MRP: 75,
        Category: "Pulses"
    },
    {
        Name: "Black eyed beans",
        MRP: 77,
        Category: "Pulses"
    },
    {
        Name: "Yellow pigeon beans",
        MRP: 68,
        Category: "Pulses"
    },
    {
        Name: "Kidney beans",
        MRP: 70,
        Category: "Pulses"
    },
    {
        Name: "Split black gram",
        MRP: 97,
        Category: "Pulses"
    },
    {
        Name: "Green gram",
        MRP: 95,
        Category: "Pulses"
    },
    {
        Name: "Red Lentils",
        MRP: 102,
        Category: "Pulses"
    },
    {
        Name: "Adzuki beans",
        MRP: 110,
        Category: "Pulses"
    },
    {
        Name: "Green peas",
        MRP: 115,
        Category: "Pulses"
    },
    {
        Name: "White peas",
        MRP: 107,
        Category: "Pulses"
    }
];
var Biscuits = [
    {
        Name: "Sunfeast",
        MRP: 60,
        Category: "Biscuits"
    },
    {
        Name: "Parle-G",
        MRP: 20,
        Category: "Biscuits"
    },
    {
        Name: "Britannia",
        MRP: 25,
        Category: "Biscuits"
    },
    {
        Name: "Nimkin",
        MRP: 18,
        Category: "Biscuits"
    },
    {
        Name: "Festo",
        MRP: 55,
        Category: "Biscuits"
    },
    {
        Name: "Magix",
        MRP: 37,
        Category: "Biscuits"
    },
    {
        Name: "20-20 Cookies",
        MRP: 35,
        Category: "Biscuits"
    },
    {
        Name: "Kreams",
        MRP: 45,
        Category: "Biscuits"
    },
    {
        Name: "Hide and Seek",
        MRP: 65,
        Category: "Biscuits"
    },
    {
        Name: "Milk shakti",
        MRP: 30,
        Category: "Biscuits"
    }

];
//Storing all Array elements together
Grocery = [Fruits, Vegetables, Pulses, Biscuits];
//function to search the data through REGEX and show in the Table form
var data = "";
function search_grocery() {
    result_set = [];
    var input_item = document.getElementById("text_area_style").value;
    var len = input_item.length;
    if (len > 0){
        grocery_reg = new RegExp(input_item, "i");
        Grocery.forEach((grocery_array) => {
            grocery_array.forEach((product) => {
                if (grocery_reg.test(product.Name)) {
                    //console.log(grocery_name.Name);
                    result_set.push(product);
                }
            });
        });
        if (result_set.length > 0) {
            data = "<table><tr><th>Name</th><th>MRP</th><th>Category</th><th>Quantity</th></tr>"
            result_set.forEach((product) => {
                data = data + "<tr><td>" + product.Name + "</td><td>" + product.MRP + "</td><td>" + product.Category +
                    '</td><td><input type="number" min="0" max="5" id="' + product.Name + '"/></td></tr>';
            });
            data = data + "</table>";
            document.getElementById("demo").innerHTML = data;
        }
    }
}
//clear the Table Data from the screen through reset button
var reset = () => {
    data = "";
    document.getElementById("demo").innerHTML = data;
    document.getElementById("text_area_style").value = "";
}
//function to add the Name and Quantity table on the cart

TotalPrice = 0;
data_store = "<tr><th>Name</th><th>MRP</th><th>Quantity</th></tr>";
var add_cart = () => 
{  
    Grocery.forEach((grocery_array) => {
        grocery_array.forEach((product) => {
            if (document.getElementById(product.Name) !== null) 
            {
                number_product = document.getElementById(product.Name).value;
                if (number_product > 0) 
                {
                    data_store = data_store + '<tr><td>' + product.Name + '</td><td>' + product.MRP + '</td><td>' + number_product + '</td></tr>';
                    TotalPrice+= number_product*product.MRP;
                }
                               
            }
        });
    });
    document.getElementById("demo1").innerHTML = data_store;
}
//function to display the total bill with the help of local storage
var order_price = () => 
{
    localStorage.setItem("item_data",data_store);
    localStorage.setItem("item_price",TotalPrice);
}