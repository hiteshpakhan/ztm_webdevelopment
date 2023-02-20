// classes
;
var InvestmentAccount = /** @class */ (function () {
    // name;
    // balance;     //we dont have to initilized this heare because we are declaring them inside the constructor
    function InvestmentAccount(name, balance //public keyword will allow our property outside of the class
    ) {
        this.name = name;
        this.balance = balance;
        // class constructor inside
    }
    InvestmentAccount.prototype.withdraw = function () {
    };
    return InvestmentAccount;
}());
