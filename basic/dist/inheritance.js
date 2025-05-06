"use strict";
{
    //oop - inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("arjun", 20, "dhaka");
    student1.getSleep(5);
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        tackClass(numberOfClass) {
            console.log(`${this.name} will tack class for ${numberOfClass}`);
        }
    }
    const teacher = new Teacher("Tarjun", 40, "dhaka", "math");
    teacher.getSleep(5);
    teacher.tackClass(6);
}
