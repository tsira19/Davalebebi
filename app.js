//1)
function largerNumber(a, b){
    if (a > b) {
        return a;
    }
    else if (a < b){
        return b;
    }

    return 0;
}

//2)
function sum(a,b){
    return a+b;
}

//3)
function printName() {
    console.log("Tsira Otarashvili");
}

//4)
function createFullName(firstname, lastname){
    return firstname + " " + lastname;
}

//5)
function nNumberMultiply(n){
    let mult = 1;
    for(let i = 1; i <= n; i++){
        mult *= i;
    }
    return mult;
}

//6
const student = {
    firstName: "Tsira",
    lastName: "Otarashvili",
    age: 21,
    scores: [4, 7, 5, 3, 2],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(student.fullName());

//7
function scoreSum(scores) {
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum;
}

//8
console.log(student.firstName, + " " + student.age);