interface Stundent {
    firstName: string
    lastName: string
    age: number
    location: string
}

let student1: Stundent = {
    firstName: "Peter",
    lastName: "Parker",
    age: 24,
    location: "New York"
}

let student2: Stundent = {
    firstName: "Mary",
    lastName: "Jane",
    age: 23,
    location: "New York"
}

let studentsList: Stundent[] = [student1, student2];