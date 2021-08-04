const statement = require('./statement');
const plays = require('./data/plays.json');

describe('statement', () => {
  it('should generate text statement', () => {
    let result = '';
    const expectedResult = `Statement for BigCo\n Hamlet: $650.00 (55 seats) \n As You Like It: $580.00 (35 seats) \n Othello: $500.00 (40 seats) \nAmount owed is $1,730.00\nYou earned 47 credits`;

    const invoices = mockInvoices();

    invoices.forEach(invoice => {
      result += statement(invoice, plays);
    });

    result = result.trim();

    expect(result).toEqual(expectedResult);
  });

  it('should generate text statement with 2 invoices', () => {
    let result = '';
    const expectedResult = `Statement for BigCo\n Hamlet: $650.00 (55 seats) \n Othello: $500.00 (40 seats) \nAmount owed is $1,150.00\nYou earned 35 credits`;

    const invoices = mockInvoicesHamletAndOthello();

    invoices.forEach(invoice => {
      result += statement(invoice, plays);
    });

    result = result.trim();

    expect(result).toEqual(expectedResult);
  });

  it('should generate text statement with 1 invoice', () => {
    let result = '';
    const expectedResult = `Statement for BigCo\n Othello: $500.00 (40 seats) \nAmount owed is $500.00\nYou earned 10 credits`;

    const invoices = mockInvoiceOthello();

    invoices.forEach(invoice => {
      result += statement(invoice, plays);
    });

    result = result.trim();

    expect(result).toEqual(expectedResult);
  });

  it('should generate text statement with no invoices', () => {
    let result = '';
    const expectedResult = `Statement for BigCo\nAmount owed is $0.00\nYou earned 0 credits`;

    const invoices = mockEmptyInvoices();

    invoices.forEach(invoice => {
      result += statement(invoice, plays);
    });

    result = result.trim();

    expect(result).toEqual(expectedResult);
  });

  const mockInvoices = () => {
    return [
      {
        customer: 'BigCo',
        performances: [
          {
            playID: 'hamlet',
            audience: 55,
          },
          {
            playID: 'as-like',
            audience: 35,
          },
          {
            playID: 'othello',
            audience: 40,
          },
        ],
      },
    ];
  };

  const mockInvoicesHamletAndOthello = () => {
    return [
      {
        customer: 'BigCo',
        performances: [
          {
            playID: 'hamlet',
            audience: 55,
          },
          {
            playID: 'othello',
            audience: 40,
          },
        ],
      },
    ];
  };

  const mockInvoiceOthello = () => {
    return [
      {
        customer: 'BigCo',
        performances: [
          {
            playID: 'othello',
            audience: 40,
          },
        ],
      },
    ];
  };

  const mockEmptyInvoices = () => {
    return [
      {
        customer: 'BigCo',
        performances: [],
      },
    ];
  };
});
