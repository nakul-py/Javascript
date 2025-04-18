class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logUser(){
        console.log(`User: ${this.username}, Email: ${this.email}`);
    }

    static userId(){
        return `123`;
    }
}

const nakul = new User("nakul", "email@n.com")

class Teacher extends User {
    constructor(username, email, subject){
        super(username, email);
        this.subject = subject;
    }
    logStudent(){
        console.log(`User: ${this.username}, Email: ${this.email}, Subject: ${this.subject}`);
    }
}

const student = new Teacher("Nakul","abc@gmail", "Math");
student.logStudent();
student.logUser();
// console.log(student.userId());