namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
    class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC !== null) {
                return `Available Teacher: ${this.teacher.firstName}`
            } else {
                return "No available teacher";
            }
        }
    }
}