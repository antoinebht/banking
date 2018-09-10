export class AccountOperation {
    id: number;
    date: string;
    amount: number;
    checked: boolean;
    tags: TagAccountOperation[];
}

export class TagAccountOperation {
    id: number;
    name: string;
    color: string;
}