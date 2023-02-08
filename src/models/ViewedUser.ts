export default class ViewedUser {
    username: string;
    image: string;
    createdDate: string;
    

    constructor(image: string, username: string,  createdDate: string) {
        this.image = image;
        this.username = username;
        this.createdDate = createdDate;
    }
}