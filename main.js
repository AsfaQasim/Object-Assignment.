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
var employees = {
    name: "Asifa",
    department: "Human Resource",
    role: "Manager",
    skills: ["Coder", "Problem solving", "Editing"]
};
var employees1 = {
    name: "Misbah",
    department: "Governor House",
    skills: ["Coding"],
    role: "Intern",
    contact: {
        phone: +928900654,
        email: "dummy@gmail.com",
    }
};
var myCar = {
    engine: {
        horsePower: 1000,
    },
    getHorsePower: function () {
        console.log("My Car Speed is ".concat(myCar.engine.horsePower, " horse power"));
    }
};
myCar.getHorsePower();
var Tshirt = {
    name: "Nike",
    price: 5499,
    color: "purple",
    inventory: {
        stock: 5,
        changeColor: function (newColor) {
            Tshirt.color = newColor;
            if (Tshirt.color === "black") {
                var iPercent20 = Tshirt.price / 100 * 20;
                Tshirt.price += iPercent20;
            }
            else if (Tshirt.color === "blue") {
                var dPercent10 = Tshirt.price / 100 * 10;
                Tshirt.price -= dPercent10;
            }
            else if (Tshirt.color === "white") {
                var iPercent5 = Tshirt.price / 100 * 5;
                Tshirt.price += iPercent5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(Tshirt);
Tshirt.inventory.changeColor("black");
console.log(Tshirt);
