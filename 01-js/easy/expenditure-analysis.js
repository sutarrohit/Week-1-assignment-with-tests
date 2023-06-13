/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const priceCalculated = {};

  transactions.map((item) => {
    const { category, price } = item;

    if (priceCalculated.hasOwnProperty(category)) {
      priceCalculated[category] += price;
    } else {
      priceCalculated[category] = price;
    }
  });

  const data = Object.keys(priceCalculated).map((item) => {
    return { category: item, totalSpent: priceCalculated[item] };
  });

  return data;
}

const transactions = [
  { itemName: "Item 1", category: "Iphone", price: 10, timestamp: 169 },
  { itemName: "Item 2", category: "Samsung", price: 15, timestamp: 160 },
  { itemName: "Item 3", category: "Sony", price: 50, timestamp: 193 },
  { itemName: "Item 4", category: "Iphone", price: 100, timestamp: 152 },
  { itemName: "Item 5", category: "Samsung", price: 20, timestamp: 182 },
  { itemName: "Item 6", category: "Iphone", price: 30, timestamp: 162 },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
