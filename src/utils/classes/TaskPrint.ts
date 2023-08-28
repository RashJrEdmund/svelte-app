interface TaskPrintITF {
    id: string;
    name: string;
    completed: boolean;
}

export default class Task implements TaskPrintITF {
    id: string;
    name: string;
    completed: boolean;

    constructor(_name: string) {
        this.id = crypto.randomUUID()
        this.name = _name.trim();
        this.completed = false;
    }
}
