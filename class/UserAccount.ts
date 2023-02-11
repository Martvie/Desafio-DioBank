import { Account } from "./Account";


export class UserAccount extends Account {
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}