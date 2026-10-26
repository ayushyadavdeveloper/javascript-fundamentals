const user = {
    name : "rohan",
    age : 12,
    isAdmin : true,

    greet: function(){
        console.log(`hello, my name is ${this.name}`);
    }
}

user.greet()