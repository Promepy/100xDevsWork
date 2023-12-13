/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let catergoryList = [];
  let priceList = [];

  for(var t in transactions){
      var currentTransaction = transactions[t];
      let currentCategory = currentTransaction.category;
      let pos = catergoryList.indexOf(currentCategory)
      if(pos == -1){
          catergoryList.push(currentCategory);
          priceList.push(currentTransaction.price);
      }
      else{
          priceList[pos] += currentTransaction.price;
      }
  }

  let res = [];
  for(i=0; i<catergoryList.length; i++){
      res.push({ category: catergoryList[i], totalSpent: priceList[i]})
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
