class User{
    constructor(name){
        this.name = name;
    }

    logme(){
        console.log(`User: ${this.name}`);
    }
}

class Teacher extends User {
    constructor(name, subject){
        super(name);
        this.name = name;
        this.subject = subject;
    }

    addSubject(){
        console.log(`Subject ${this.subject} added by ${this.name}`);
    }
}

const teacher = new Teacher('John', 'Math');
teacher.addSubject();
teacher.logme();

const jsTeacher = new User('Jane');
jsTeacher.logme();

console.log(teacher instanceof Teacher); // true
console.log(teacher instanceof User); // true
console.log(jsTeacher instanceof Teacher); // false
console.log(jsTeacher instanceof User); // true