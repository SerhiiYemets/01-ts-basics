type PrintUserInfo = (name: string, age: number, email?: string) => void;

const printUserInfo: PrintUserInfo = (name, age, email) => {
    console.log("Name:", name);
    console.log("Age:", age);
    if (email) {
        console.log("Email:", email);
    }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
