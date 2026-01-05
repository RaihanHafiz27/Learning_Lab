// this object can have any key (string), but the value must be a number.
interface Scores {
  [subject: string]: number;
}

const studentScores: Scores = {
  math: 70,
  eng: 88,
  science: 90,
};

console.log(studentScores);

// Dynamic form data
interface FormValues {
  [field: string]: string | number;
}

const form: FormValues = {
  username: "John Doe",
  age: 27,
  email: "Exmaple@gmail.com",
};

console.log(form);

// Mapping Css Classes
type ClassMap = {
  [element: string]: string;
};

const classes: ClassMap = {
  button: "bg-blue-500 text-white",
  header: "text-2xl font-bold",
  footer: "text-sm text-gray-500",
};

console.log(classes.button);
