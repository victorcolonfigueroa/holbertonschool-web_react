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

/**
 * Represents a student with a first name and last name.
 * Implements the StudentClassInterface.
 */
class StudentClass {
    /**
     * The first name of the student.
     */
    firstName: string;

    /**
     * The last name of the student.
     */
    lastName: string;

    /**
     * Creates an instance of StudentClass.
     * @param firstName - The first name of the student.
     * @param lastName - The last name of the student.
     */
    constructor(firstName: string, lastName: string) {}

    /**
     * Simulates the student working on homework.
     * @returns A string indicating the student is currently working.
     */
    workOnHomework(): string {}

    /**
     * Displays the first name of the student.
     * @returns The first name of the student.
     */
    displayName(): string {}
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