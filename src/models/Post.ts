export default class Post {
    text: string;
    image: string;
    userId: string;

    constructor(text: string, image: string,  userId: string) {
        this.text = text;
        this.image = image;
        this.userId = userId;
    }
}