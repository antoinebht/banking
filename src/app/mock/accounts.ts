import { BankAccount } from '../model/bank-account';

export const ACCOUNTS: BankAccount[] = [
    {
        id: 1,
        name: 'CCHQ1',
        periods: [
            {
                name: 'period1',
                operations: [
                    { date: '2018-06-26', amount: 26.0, type: 'INITIAL_VALUE', comment:'', checked: false },
                    { date: '2018-06-27', amount: 6.6, type: 'EPARGNE', comment:'', checked: true },
                    { date: '2018-06-28', amount: 6.0, type: 'LOISIR', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                ]
            },
            {
                name: 'period2',
                operations: [
                    { date: '2018-06-26', amount: 5467.89, type: 'INITIAL_VALUE', comment:'', checked: false },
                    { date: '2018-06-27', amount: -346.86, type: 'EPARGNE', comment:'', checked: true },
                    { date: '2018-06-28', amount: -45.89, type: 'LOISIR', comment:'', checked: false },
                    { date: '2018-06-29', amount: -345.87, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: true },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
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
                    { date: '2018-06-26', amount: 26.0, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-27', amount: 6.6, type: 'EPARGNE', comment:'', checked: false },
                    { date: '2018-06-28', amount: 6.0, type: 'LOISIR', comment:'', checked: false },
                    { date: '2018-06-29', amount: 26.6, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-30', amount: -6.6, type: 'COURSES', comment:'', checked: false },
                    { date: '2018-06-31', amount: -6.0, type: 'COURSES', comment:'', checked: false },
                ]
            }
        ]
    }
]