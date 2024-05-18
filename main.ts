// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any

type Employees = {
  name : string;
  department: string;
  contact? :{
    phone: number;
    email: string; 
};
role: "Manager" | "Engineer" | "Intern",
skills: string[]
}
const  employees : Employees= {
   name: "Asifa",
   department: "Human Resource",
   role:  "Manager",
   skills: ["Coder", "Problem solving", "Editing"]
}
const employees1 : Employees = {
    name : "Misbah",
    department: "Governor House",
    skills: ["Coding"],
    role: "Intern",
    contact: {
        phone: +928900654,
        email : "dummy@gmail.com",
    }
}


// Part 02: Car Details

// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower.

type Car = {
    engine: {
        horsePower : number;
    }
   getHorsePower: () => void  
    
}
const myCar : Car = {
    engine: {
        horsePower: 1000,
    },
    getHorsePower: () => {
        console.log(`My Car Speed is ${myCar.engine.horsePower} horse power`);
        
    }
}
myCar.getHorsePower()


// Part 03
// Color full T - Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue)

type Product = {
    name : string;
    price : number;
    color: string;
    inventory : {
        stock: number;
        colorOptions?: ["black" , "blue", "red" , "white", "purple"] 
        changeColor: (newColor : string) => any  
            
        }
    }
    let Tshirt : Product = {
        name: "Nike",
        price: 5499,
        color: "purple",
        inventory: {
            stock: 5,
            changeColor: (newColor : string) => {
            Tshirt.color = newColor
            if(Tshirt.color ==="black"){
                let iPercent20 = Tshirt.price / 100 * 20
                Tshirt.price += iPercent20
            }
            else if (Tshirt.color === "blue"){
                let dPercent10 = Tshirt.price / 100 * 10
                Tshirt.price -= dPercent10
            }
            else if(Tshirt.color === "white"){
                let iPercent5 = Tshirt.price / 100 * 5
                Tshirt.price += iPercent5
            }
            else 
            {
                return null;
        }
    }
        }
    }
    console.log(Tshirt);
    Tshirt.inventory.changeColor("black")
    console.log(Tshirt);
    
    
    