// object annotation & interfaces

const account: {
    name: string,
    balance: number,
    status?: string  
    //we have provided the ? mark sign after the status property because it has not defined the value yet and if we will add the status property in the future so we need to use the ? mark sign
} = {
    name: "luis",
    balance: 10
}

// if you have to combine array and object
let account2: {}[]; //this means array of objecs




// interfaves
// interface can create types in simpler way for objects its an alternative syntax of anotation

// imp interface can not hold values

interface IAccount3 {   //interface interface_name
    name: string,
    balance: number,
    status?: string,  
    deposite?: () => void    //this means it will store the method
};

const account3: IAccount3 = {   //here we have pass the name of our interface
    name: "luis",
    balance: 10
}


// same you can de with the arrays
let account4: IAccount3[]; 
