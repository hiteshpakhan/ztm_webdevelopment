// classes

interface IAccount3 {   //interface interface_name
    name: string,
    balance: number,
    status?: string,  
    deposite?: () => void    //this means it will store the method
};

class InvestmentAccount implements IAccount3{    //after the class name we need to add the implements keyword to tell the typescript that we are going to add teh interface and after teh keyword we need to give the interface name
    // name;
    // balance;     //we dont have to initilized this heare because we are declaring them inside the constructor

    constructor (
        public name, public balance //public keyword will allow our property outside of the class
    ) {
        // class constructor inside
    }

    private withdraw(){     //private method method that can not called outside the object

    }
}