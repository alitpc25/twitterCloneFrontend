export default class Post {
    text: string;
    imageId: string;
    userId: string;
    createdDate: string;
    username: string;
    userImage: string;

    constructor(text: string, imageId: string,  userId: string, createdDate: string, username: string, userImage: string) {
        this.text = text;
        this.imageId = imageId;
        this.userId = userId;
        this.createdDate = createdDate;
        this.username = username;
        this.userImage = userImage;
    }
}