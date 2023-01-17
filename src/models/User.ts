export default class User {
    username: string;
    email: string;
    password: string;

    constructor(email: string, username: string,  password: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
}