let name = {
    firstName: "Danny",
    lastName: "Woodford",
    // printFullName: function() {
    //     console.log(this.firstName + " " + this.lastName)
    // }
}

let printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + "," + state)
}

printFullName.call(name, "Colts Neck", "NJ")

let name2 = {
    firstName: "Arnold",
    lastName: "schwarzenegger",
}

printFullName.call(name2, "Jumble", "Austria")
// function borrowing

// name.printFullName.call(name2)

printFullName.apply(name2, ["Jumble", "Austria"])

let printMyName = printFullName.bind(name2, "Jumble", "Austria")

console.log(printMyName)

printMyName()