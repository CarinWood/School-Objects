let school = {
    name: "West Coast School",
    address: "West Coast Road 11",
    zipCode: 12498,
    city: "Gothenburg",
    students: [],
    teachers: [],
}

let math = {
    name: 'Math',
    students: [],
    teacher: {},
    addTeacher(teacher) {
        this.teacher = teacher
    },
    addStudent(student) {
        this.students.push(student.name)
    },
    removeTeacher(teacher) {
       teacher = {}
    }
}

let science = {
    name: 'Science',
    students: [],
    teacher: {},
    addTeacher(teacher) {
        this.teacher = teacher
    },
    addStudent(student) {
        this.students.push(student.name)
    },
    removeTeacher(teacher) {
        teacher = {}
     }
}

let english = {
    name: 'English',
    students: [],
    teacher: {},
    addTeacher(teacher) {
        this.teacher = teacher
    },
    addStudent(student) {
        this.students.push(student.name)
    },
    removeTeacher(teacher) {
        teacher = {}
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
    },
    quitSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
        let nameIndex = english.students.indexOf(this.name)
        english.students.splice(nameIndex, 1)
    }
}

let joe = {
    name: "Joe",
    age: 19,
    gender: "male",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    },
    quitSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
        let nameIndex = english.students.indexOf(this.name)
        english.students.splice(nameIndex, 1)
    }
}

let linda = {
    name: "Linda",
    age: 18,
    gender: "female",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    },
    quitSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
        let nameIndex = english.students.indexOf(this.name)
        english.students.splice(nameIndex, 1)
    }
}

let susannah = {
    name: "Susannah",
    age: 19,
    gender: "female",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    },
    quitSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
        let nameIndex = english.students.indexOf(this.name)
        english.students.splice(nameIndex, 1)
    }
}

let maya = {
    name: "Maya",
    age: 18,
    gender: "female",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    },
    quitSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
        let nameIndex = english.students.indexOf(this.name)
        english.students.splice(nameIndex, 1)
    }
}

/* teachers */

let smith = {
    name: "Mr Smith",
    subjects: [],
    addSubject(subject) {
        this.subjects.push(subject.name)
    },
    removeSubject(subject) {
        let index = this.subjects.indexOf(subject)
        this.subjects.splice(index, 1)
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
console.log(math.teacher)

english.addTeacher(gray)
console.log(english.teacher)

science.addTeacher(smith)
console.log(science.teacher)

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


/* quitSubject, removeTeacher, relegateStudent, fireTeacher */

ben.quitSubject(math)
console.log(ben.subjects)
console.log(english.students)

math.removeTeacher(smith)
console.log(math.teacher)
console.log(smith.subjects)
smith.removeSubject("math")
console.log(smith.subjects)


school.students.push(maya)
school.students.push(ben)
school.students.push(susannah)
school.students.push(joe)
school.students.push(linda)
for(student in school.students) {
    console.log(school.students[student].name)
}

function relegateStudent(student) {
    let index = school.students.indexOf(student)
    school.students.splice(index, 1)
 }


relegateStudent(maya)
console.log('******************')
 for (student in school.students) {
     console.log(school.students[student].name)
 }

 school.teachers.push(smith)
 school.teachers.push(gray)



 function fireTeacher(teacher) {
    let index = school.teachers.indexOf(teacher)
    school.teachers.splice(index, 1)
 }

 fireTeacher(smith)

 for (teacher in school.teachers) {
   console.log(school.teachers[teacher].name)
 }


 function displayAllStudents() {
    console.log("**** ALL STUDENTS ****")
    for (student in school.students) {
       console.log("name: ", school.students[student].name)
       console.log("age: ", school.students[student].age)
       console.log("subjects: ", school.students[student].subjects)
       console.log("*****")
    }
 }

 displayAllStudents()