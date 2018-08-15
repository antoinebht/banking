import { BankAccount } from '../model/bank-account';

export const ACCOUNTS: BankAccount[] = [
    {
        id: 1,
        name: 'CCHQ1',
        periods: [
            {
                name: 'Jul-2018',
                operations: [
                    { date: '2018-07-26', amount: 1449.56, tags:["INITIAL_VALUE"], checked: true },
                    { date: '2018-07-26', amount: -50, tags:["SAVING", "PEL"], checked: false },
                    { date: '2018-07-26', amount: -303.7, tags:["SAVING", "LIVA"], checked: false },
                    { date: '2018-07-26', amount: -11.30, tags:["HOBBIES", "bar"], checked: true },
                    { date: '2018-07-26', amount: -57.78, tags:["CAR", "essence"], checked: true },
                    { date: '2018-07-26', amount: -39.7, tags:["CAR", "assurance"], checked: true },
                ]
            },
            {
                name: 'Aug-2018',
                operations: [
                ]
            }
        ],
        tagColors: {
            INITIAL_VALUE: "badge-info",
            SAVING: "badge-success",
            CAR: "badge-warning",
            HOBBIES: "badge-warning"
        }
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
        ],
        tagColors: [
            { tag: "", color: ""},
            { tag: "", color: ""},
            { tag: "", color: ""},
            { tag: "", color: ""},
        ]
    }
]