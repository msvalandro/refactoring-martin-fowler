const statement = require('./statement');
const invoices = require('./data/invoices.json');
const plays = require('./data/plays.json');

invoices.forEach(invoice => {
  const result = statement(invoice, plays);

  console.log(result);
});
