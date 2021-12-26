// const currentPrice = {bitcoin: 55000};

const handleBuyNow = (balance, holding, currentPrice, order) => {
  // 1. Reduce balance
  let newBalance = balance - order.amount;

  // 2. Increase holding

  // orderAmt / priceOfEachCoin
  let newBoughtHolding = order.amount / currentPrice[order.coinSelectedName];

  if (!holding[order.coinSelectedName]) {
    // first time buying that coin/stocks
    holding[order.coinSelectedName] = newBoughtHolding;
  } else {
    holding[order.coinSelectedName] += newBoughtHolding;
  }

  return {
    newBalance: newBalance,
    newHolding: holding,
  };
};

const handleSortNow = (balance, sortedHolding, order) => {

}

const handleSellNow = (balance ,holding, sortedHolding, order) => {

}

const handleBuyAt = (balance ,holding, order) => {

}

const handleSortAt = (balance, sortedHolding, order) => {

}

const handleSellAt = (balance ,holding, sortedHolding, order) => {

}


module.exports = {
    handleBuyNow,
    handleSortNow, 
    handleSellNow,
    handleBuyAt, 
    handleSortAt, 
    handleSellAt
}