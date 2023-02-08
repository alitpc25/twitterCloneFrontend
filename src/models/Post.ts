export default class Post {
    text: string;
    image: string;
    userId: string;
    createdDate: string;

    constructor(text: string, image: string,  userId: string, createdDate: string) {
        this.text = text;
        this.image = image;
        this.userId = userId;
        this.createdDate = createdDate;
    }
}