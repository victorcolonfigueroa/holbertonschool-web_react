interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]:  any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher (firstName: string, lastName: string): string {
    const firstInitial = firstName.charAt(0).toUpperCase();
    console.log(`${firstInitial}. ${lastName}`);
    return `${firstInitial}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}