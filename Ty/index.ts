let helloWorld = "Hello World";
const user = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

const usser: User = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const newUser: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
  return user;
}

function deleteUser(user: User) {
  // ...
}

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}


function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
              
  (parameter) obj: string
    }
    return obj;
  }