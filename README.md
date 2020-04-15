# Marketplace_DB

This is an app that runs in node.js. It is a mock marketplace that utilizes a SQL database. It takes in shell commands for "purchases" from available stock, queries a database, and either gives the "customer" a completed sale and total of their "purchase," or notifies them that there is not enough inventory if they try to purchase more of an item than there is stock.

**You will need to creat the database that this app interacts with. The `bamazon_seeds.sql` file has the schema commands for MySQL Workbench to create and populate the database used for this app. If you copy and paste the entire text into MySQL Workbench and run it, it will create the database.**

**You will also need to install the necessary node modules to run this app. They are all in the package.json file, so all you have to do is run the terminal command `npm install` to install all the required node packages.**

**Once you have created the database and installed the necessary node packages, you are ready to run the app.**

- Simply type `node bamazonCustomer.js` in terminal and run it.
- The app will then query the database and give you a table listing all the items available for sale.
- It will prompt you to make a selection of what item you want to purchase. _You can arrow up and down through a list of the item's IDs to select one._
- Then it will give you a prompt asking the quantity you would like to purchase. _Enter a number and hit enter._
- The app will check the database inventory and make sure there is enough to complete the order.

* If there is enough inventory to complete the order, you will get a message saying "Your order is complete" and it will give you your order total.
* If ther is insufficient inventory to complete the order, you will get a message saying "Sorry, we don't have enough available stock to complete your order. This transaction has been canceled" and "Please make a new purchase."

Here is a link to a video of the app in use:

[bamazonCustomer.js in action](https://github.com/aaron-G18/Marketplace_DB/blob/master/vid/bamazonCustomer%20CLI%20working.mov)
_click on "View raw" to get the video._
