export default class ViewedUser {
    username: string;
    imageId: string;
    createdDate?: string;
    
    constructor(imageId: string, username: string,  createdDate?: string) {
        this.imageId = imageId;
        this.username = username;
        this.createdDate = createdDate;
    }
}