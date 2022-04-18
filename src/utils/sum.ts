export default function sum(a: number, b: number): number {
  return a + b;
}

/*type A = number | string;
type Person = {
  name: string;
  walk: (km: A) => void;
};

type Student = {
  study: (clas: A) => void;
} & Person;

let stud1: Student = {
  name: "akash",
  walk(km) {
    console.log(`${this.name} walks ${km} kms daily`);
  },
  study(clas) {
    console.log(`${this.name} Studies in ${clas}th class`);
  },
};

stud1.walk(10);
stud1.study(8);*/

/*interface Person {
  readonly name: string;
  walk: (km: number) => void;
  sleep?: (hrs: number) => void;
}

interface Student extends Person {
  study: (clas: number) => void;
}

let stud1: Student = {
  name: "akash",
  walk(km) {
    console.log(`${this.name} walks ${km} kms daily`);
  },
  study(clas) {
    console.log(`${this.name} Studies in ${clas}th class`);
  },
};

stud1.walk(10);
stud1.study(18);*/

/*class Student {
  FullName: string;
  private subjects: string[];
  constructor(n: string) {
    this.FullName = n;
    this.subjects = [];
  }
  getInfo(subject: string) {
    this.subjects.push(subject);
  }
  getSubjects() {
    return this.subjects;
  }
}

const obj = new Student("vedant");
console.log(obj);
obj.getInfo("english");
obj.getInfo("Math");
console.log(obj.getSubjects());
obj.getInfo("Computer");
console.log(obj.getSubjects());*/

// type Gender = "M" | "F";

// interface HumanBeing {
//   gender: Gender;
// }
// interface Person extends HumanBeing {
//   name: string;
//   age: number;
// }
// class Student implements Person {
//   public readonly id: number;
//   protected subjects: string[];
//   constructor(public name: string, public age: number, public gender: Gender) {
//     this.subjects = [];
//     this.id = Math.random();
//   }

//   allotSubject(subject: string) {
//     this.subjects.push(subject);
//   }
// }

// class collegeStudent extends Student {
//   constructor(
//     name: string,
//     age: number,
//     gender: Gender,
//     public stream: string
//   ) {
//     super(name, age, gender);
//   }
//   getAllSUbjects() {
//     return this.subjects.join(",");
//   }
// }

// const obj = new collegeStudent("pardeep", 12, "M", "Science");
// // obj.id = 101;
// obj.allotSubject("English");
// obj.allotSubject("Math");
// console.log(obj.getAllSUbjects());
// console.log(obj);
