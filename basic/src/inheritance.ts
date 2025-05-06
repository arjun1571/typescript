{
  //oop - inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("arjun", 20, "dhaka");
  student1.getSleep(5);

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    tackClass(numberOfClass: number) {
      console.log(`${this.name} will tack class for ${numberOfClass}`);
    }
  }

  const teacher = new Teacher("Tarjun", 40, "dhaka", "math");
  teacher.getSleep(5);
  teacher.tackClass(6);
}
