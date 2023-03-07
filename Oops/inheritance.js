class Car {

   kalai() {
      
      console.log("kalai")
   }
}
class Model extends Car {
   kalai2() {

      console.log("kalai2")
   }
}

let myCar = new Model();

console.log(myCar.kalai)
console.log(myCar.kalai2)