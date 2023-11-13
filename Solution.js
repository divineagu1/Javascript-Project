
 function createCashCounter() {
  const cashBox = [
    { '50 Euro': 10 },
    { '20 Euro': 10 },
    { '10 Euro': 10 },
    { '5 Euro': 25 },
    { '2 Euro': 25 },
    { '1 Euro': 25 },
    { '0.5 Euro': 25 },
    { '0.2 Euro': 25 },
    { '0.1 Euro': 25 },
    { '0.05 Euro': 25 },
    { '0.02 Euro': 25 },
    { '0.01 Euro': 25 },
  ];

   return function cashCounter(price, paid) {
    
    let change = paid - price;

    
     if (change < 0) {
       return 'Customer should pay ' + ' more Euro';
     }

     if (change === 0) {
       return 'No change available';
     }

     const changeBreakdown = [];

     for (let note of cashBox) {
       const noteValue = parseFloat(Object.keys(note)[0]);
       const noteCount = Math.floor(change / noteValue);

       if (noteCount > 0) {
       changeBreakdown.push({ [Object.keys(note)[0]]: noteCount });
         change -= noteValue * noteCount;
       }
     }

    return changeBreakdown;
  };
 }

const cashCounter = createCashCounter();

 console.log(cashCounter(3.75, 50));
 console.log(cashCounter(4.50, 20));
 console.log(cashCounter(4, 3));
 console.log(cashCounter(20, 20));
 console.log(cashCounter(18, 20));