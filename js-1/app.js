let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
//arrays
//1.
console.log(shoppingList[0])
//2.
shoppingList.push('Carrrots')
console.log(shoppingList)
//3.
shoppingList.pop()
console.log(shoppingList)
//4.
shoppingList[4].splice(1,2,'Cucumbers','Bell Peppers')
console.log(shoppingList)
let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
//objects
// 1.
console.log(student.name)
// 2.
student.phone="123-456-7890"
console.log(student)
// 3.
delete student.grade
console.log(student)
// 4.
student.age=21
console.log(student)
//conditionals
//1.
let num=76
if(num>0){
    console.log('positive')
}
if(num<0){
    console.log('negative')
}
if(num==0){
    console.log('Zero')
}
//2.
let Grade=67
if(Grade>=90 && Grade<=100)
{
    console.log("A")
}
else if(Grade>=80 && Grade<=89){
    console.log("B")
}
else if(Grade>=70 && Grade<=79){
    console.log("C")
}
else if(Grade>=60 && Grade<=69){
    console.log("D")
}
else if(Grade<60){
    console.log("F")
}
//3.
let str=""
if(str){
    console.log('truthy')
}
else{
    console.log('falsy')
}