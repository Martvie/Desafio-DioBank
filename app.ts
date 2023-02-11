import { CompanyAccount } from "./class/CompanyAccount";
import { SpecialAccont } from "./class/SpecialAccount";
import { UserAccount } from "./class/UserAccount";

function printLine () : void {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=--=-=-=")
    console.log("")
}


const userAccount: UserAccount = new UserAccount(1, "Carla", 15);
userAccount.deposit(150);
userAccount.withdraw(200);
userAccount.withdraw(140);
printLine()

const companyAccount : CompanyAccount = new CompanyAccount("Geovanna", 7);
companyAccount.getLoan(450);
companyAccount.getLoan(700);
printLine()

const specialAccont : SpecialAccont = new SpecialAccont("Fabricio", 32);
specialAccont.deposit(10);
specialAccont.deposit(120);
