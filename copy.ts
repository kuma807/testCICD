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
const user2 = new User(1, "bob Doe", "bob@example.com");
user2.displayUserInfo();

user2.updateName("bob Smith");
user2.displayUserInfo();
