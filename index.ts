interface IUser {
  id: number;
  name: string;
  email: string;
}

class User implements IUser {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  updateName(newName: string): void {
    this.name = newName;
  }

  updateEmail(newEmail: string): void {
    this.email = newEmail;
  }

  displayUserInfo(): void {
    console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
  }
}

// 使用例
const user1 = new User(1, "John Doe", "johndoe@example.com");
user1.displayUserInfo();

user1.updateName("John Smith");
user1.displayUserInfo();
