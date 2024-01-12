let school = {
    name: "West Coast School",
    address: "West Coast Road 11",
    zipCode: 12498,
    city: "Gothenburg",
    students: [],
    teachers: []
}

let math = {
    name: 'Math',
    students: [],
    teachers: {}
}

/* students */

let ben = {
    name: "Ben",
    age: 19,
    gender: "male",
    subjects: []
}

let joe = {
    name: "Joe",
    age: 19,
    gender: "male",
    subjects: []
}

let linda = {
    name: "Linda",
    age: 18,
    gender: "female",
    subjects: []
}

let susannah = {
    name: "Susannah",
    age: 19,
    gender: "female",
    subjects: []
}

let maya = {
    name: "Maya",
    age: 18,
    gender: "female",
    subjects: []
}

/* teachers */

let smith = {
    name: "Mr Smith",
    subjects: []
}

let gray = {
    name: "Mr Gray",
    subjects: []
}

smith.subjects.push("math")
console.log("name: " + smith.name)
console.log( "subject: " + smith.subjects[0])

math.students.push(maya)
console.log(math.students)