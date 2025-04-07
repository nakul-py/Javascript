const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 10 )

const myTotal = myNums.reduce((acc, curVal) => {return acc + curVal;}, 5)

// console.log(`Total: ${myTotal}`);

const shoppingCart = [
    { item: 'Shirt', price: 203 },
    { item: 'Pants', price: 399 },
    { item: 'Shoes', price: 599 },
    { item: 'Hat', price: 199 }
];
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`Total Price: ${totalPrice}`);