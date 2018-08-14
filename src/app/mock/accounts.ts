import { BankAccount } from '../model/bank-account';

export const ACCOUNTS: BankAccount[] = [
    {
        id: 1,
        name: 'CCHQ1',
        periods: [
            {
                name: 'Jul-2018',
                operations: [
                    { date: '2018-07-26', amount: 1449.56, tags:["initial_value"], checked: true },
                    { date: '2018-07-26', amount: -50, tags:["epargne", "PEL"], checked: false },
                    { date: '2018-07-26', amount: -303.7, tags:["epargne", "LIVA"], checked: false },
                    { date: '2018-07-26', amount: -11.30, tags:["loisir", "bar"], checked: true },
                    { date: '2018-07-26', amount: -57.78, tags:["voiture", "essence"], checked: true },
                    { date: '2018-07-26', amount: -39.7, tags:["voiture", "assurance"], checked: true },
                ]
            },
            {
                name: 'Aug-2018',
                operations: [
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'LIVA',
        periods: [
            {
                name: 'period1',
                operations: [
                ]
            }
        ]
    }
]