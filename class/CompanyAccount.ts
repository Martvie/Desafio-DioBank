import { Account } from "./Account";

export class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (valor: number) => {
        if(this.validateStatus()){
            this.appendMoney(valor);
            console.log(`A empresa realizou um empréstimo de R$${valor} \nO saldo atual é de R$${this.getBalance()}`);
        }
    };

    deposit = (valor: number): void => {
        if(this.validateStatus()){
            this.appendMoney(valor);
            console.log(`A empresa depositou R$${valor}`);
        }
    };
}
