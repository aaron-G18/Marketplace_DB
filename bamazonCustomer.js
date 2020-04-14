var mysql = require("mysql");
var inquirer = require("inquirer");

// Create the connection information for the SQL database.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon",
});

// Connect to the database
connection.connect(function (err) {
  if (err) throw err;

  //// function(s) to do stufff
  purchasePrompt();
});

function purchasePrompt() {
  // query the database for all items.
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    //Show the user the items available for purchase.
    console.table(results);

    // Prompt user to find out which item they want to buy and how many.
    inquirer
      .prompt([
        {
          name: "prodID",
          type: "rawlist",
          choices: function () {
            var prodArray = [];
            for (var i = 0; i < results.length; i++) {
              prodArray.push(results[i].item_id);
            }
            return prodArray;
          },
          message:
            "What item would you like to purchase? (please select the item_id)",
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?",
        },
      ])
      .then(function (answer) {
        // get the information of the selected product they want to buy.
        var selectedProduct;
        var i;
        for (i = 0; i < results.length; i++) {
          if (results[i].item_id === answer.prodID) {
            selectedProduct = results[i];
          }
        }
        // Check if there is enough stock available for the quantity they want to buy.
        if (selectedProduct.stock_quantity > parseInt(answer.quantity)) {
          var newQnty =
            selectedProduct.stock_quantity - parseInt(answer.quantity);
          // if above is true, then update the DB and message the customer with their total.
          var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQnty,
              },
              {
                item_id: selectedProduct.item_id,
              },
            ],
            function (error) {
              if (error) throw err;
              var custTotal = parseInt(answer.quantity) * selectedProduct.price;
              console.log("**");
              console.log("****");
              console.log(
                "Your order is complete. Your total was: $",
                custTotal
              );
              console.log("****");
              console.log("**");

              //purchasePrompt();
            }
          );
          // console.log(query.sql);

          purchasePrompt();
        } else {
          // if there is not enough quantity to complete the order.
          console.log("**");
          console.log("****");
          console.log(
            "Sorry, we don't have enough available stock to complete your order. This transaction has been canceled."
          );
          console.log("****");
          console.log("Please make a new purchase.");
          console.log("****");
          console.log("**");
          purchasePrompt();
        }
      });
  });
}
