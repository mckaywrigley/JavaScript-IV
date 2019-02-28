// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak() {
        console.log(`Hello! My name is ${this.name}. I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }

    demo(subj) {
        return (`Today we are learning about ${subj}.`);
    }

    grade(student, subj) {
        return (`${student} receives a perfect score on ${subj}.`);
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }

    listsSubjects() {
        return (this.favSubjects);
    }

    PRAssignment(subj) {
        return (`${this.name} has submitted a PR for ${subj}.`);
    }

    sprintChallenge(subj) {
        return (`${this.name} has begun sprint challenge on ${subj}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        return (`${this.name} announces to ${channel} - stand-up time!`);
    }

    debugsCode(student, subj) {
        return (`${this.name} debugs ${student.name}'s code on ${subj}`);
    }
}




// Test Objects
const gabe = new Instructor({
    name: 'Josh',
    location: 'California',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const jill = new ProjectManager({
    name: 'Jill',
    age: 27,
    location: 'Oklahoma',
    gender: 'female',
    gradClassName: 'Web15',
    favInstructor: 'Gabe'
});

const mckay = new Student({
    name: 'Mckay',
    age: 21,
    location: 'Arizona',
    gender: 'male',
    previousBackground: 'College',
    className: 'Web18',
    favSubjects: ['HTML', 'CSS', 'JS']
});

// Tests
console.log(gabe.specialty);
console.log(gabe.grade('Mckay', 'CSS'));
console.log(jill.gradClassName);
console.log(jill.standUp('web18'));
console.log(mckay.location);
console.log(mckay.sprintChallenge('JS'));