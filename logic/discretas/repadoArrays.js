const obj = [
    {name:"marlon",age:27},
    {name:"oddy",age:14},
    {name:"silvia",age:53}
]

const ar = ["manzana","pera","mango"]


const producto = obj.findIndex((item,index,array) => item.name == "marlon")

console.log(producto)



