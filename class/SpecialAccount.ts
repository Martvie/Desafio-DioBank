import { Account } from "./Account";

export class SpecialAccont extends Account{
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (valor: number): void => {
        if (this.validateStatus()) {
            valor += 10;
            this.appendMoney(valor);
            console.log(`Você depositou R$${valor}`);
        }
    };
}