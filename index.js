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
    teachers: {},
    addTeacher(teacher) {
        this.teachers = teacher
    },
    addStudent(student) {
        this.students.push(student.name)
    }
}

let science = {
    name: 'Science',
    students: [],
    teachers: {},
    addTeacher(teacher) {
        this.teachers = teacher
    },
    addStudent(student) {
        this.students.push(student.name)
    }
}

let english = {
    name: 'English',
    students: [],
    teachers: {},
    addTeacher(teacher) {
        this.teachers = teacher
    },
    addStudent(student) {
        this.students.push(student.name)
    }
}

/* students */

let ben = {
    name: "Ben",
    age: 19,
    gender: "male",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

let joe = {
    name: "Joe",
    age: 19,
    gender: "male",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

let linda = {
    name: "Linda",
    age: 18,
    gender: "female",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

let susannah = {
    name: "Susannah",
    age: 19,
    gender: "female",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

let maya = {
    name: "Maya",
    age: 18,
    gender: "female",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

/* teachers */

let smith = {
    name: "Mr Smith",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

let gray = {
    name: "Mr Gray",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    }
}

smith.subjects.push("math")
console.log("name: " + smith.name)
console.log( "subject: " + smith.subjects[0])

math.students.push(maya.name)
console.log(math.students)


/* function */

function addSubjectToTeacher(subject, teacher) {
    teacher.subjects.push(subject.name)
    return teacher
}

console.log(addSubjectToTeacher(english, gray))

/* provar lärarens funktion: */

smith.addSubject(science)
console.log(smith.subjects)

/* provar de olika funktionerna: */

math.addTeacher(smith)
console.log(math.teachers)

english.addTeacher(gray)
console.log(english.teachers)

math.addStudent(ben)
math.addStudent(joe)
console.log("Math students: " + math.students)

science.addStudent(maya)
science.addStudent(joe)
science.addStudent(ben)
science.addStudent(susannah)
console.log("science students: " + science.students)


english.addStudent(maya)
english.addStudent(joe)
english.addStudent(ben)
english.addStudent(susannah)
english.addStudent(linda)
console.log("english students: " + english.students)

ben.addSubject(math)
ben.addSubject(science)
ben.addSubject(english)
console.log("Ben's subjects: " + ben.subjects)

joe.addSubject(math)
joe.addSubject(science)
joe.addSubject(english)
console.log("Joe's subjects: " + joe.subjects)

linda.addSubject(english)
console.log("Linda's subjects: " + linda.subjects)

susannah.addSubject(english)
susannah.addSubject(science)
console.log("Susannah's subjects: " + susannah.subjects)

maya.addSubject(science)
maya.addSubject(english)
console.log("Maya's subjects: " + maya.subjects)

console.log("Mr. Gray's subjects: " + gray.subjects)
console.log("Mr. Smith's subjects: " + smith.subjects)