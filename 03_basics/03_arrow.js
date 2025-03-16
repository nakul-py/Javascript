const user = {
    username: 'batman',
    price: 10,
    newMessage: function () {
        console.log(`Hello, I'm ${this.username}`);
        console.log(this.price) // 10
        console.log(this); 
    }
}

//  user.newMessage();
// console.log(this); // {}

function goblin() {
    let fruit = 'apple';
    // console.log(this.fruit);  // undefined
}

goblin(); // global object
// --------------------------------------------

// Arrow function does not have its own this
const goblinArrow = () => {
    let cake = 'chocolate';
    console.log(this.cake); // undefined
    console.log(this); // {}
}

// goblinArrow();

// const userArrow = (num2, num3) => {
//     return num2 + num3;
// }

const userArroww = (num2, num3) =>  num2 + num3;  // implicit return : no need to use return keyword

const userArrow = (num2, num3) => ( 
    num2 + num3  
)
// console.log(userArrow(2, 3));

const name = (name) => ({name:"space"});
console.log(name('Batman'));