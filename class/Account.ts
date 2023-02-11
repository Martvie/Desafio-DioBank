abstract class Account {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (valor: number): void => {
        if (this.validateStatus()) {
            this.appendMoney(valor);
            console.log(`Você depositou R$${valor}`);
        }
    };

    withdraw = (valor: number): void => {
        if (this.validateStatus() && valor < this.getBalance()) {
            this.takeMoney(valor);
            console.log(`Você sacou R$${valor}`);
        } else {
            console.log(
                `Você não tem saldo suficiente, para efeturar o saque requisite um valor menor ou igual a R$${this.getBalance()}`
            );
        }
    };

    getBalance = (): number => {
        return this.balance;
    };

    getName = (): string => {
        return this.name;
    };

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }
        throw new Error("Conta inválida");
    };

    appendMoney = (valor: number): void => {
        if (this.validateStatus()) {
            this.balance += valor;
        }
    };

    takeMoney = (valor: number): void => {
        if (this.validateStatus()) {
            this.balance -= valor;
        }
    };
}

export { Account };
