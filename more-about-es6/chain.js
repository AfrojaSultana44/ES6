// data access

const data = [{ id: 1, name: "abul", address: "gulshan" }];

// console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "'lenovo laptop", price: 65000 },
    { id: 2, name: "'macbook laptop", price: 155000 },
  ],
};

// second product price
// console.log(products.data[1].price)

const user = {
    id: 5001,
    name: "Rafiq",
    address:{
        street:{
            first: "54/1 uttor side",
            second:"poribag er goli",
            third: "gulshan"
        }

    },
    country: "Bangladesh"
}

const user2 = {
    id: 5002,
    name: "poribibir majar",
    address: {
        city:"Chittagong",
        country: "Bangladesh"
    } 
}
// optional chain
console.log(user.address.street?.second)
console.log(user2.address.street?.second)

