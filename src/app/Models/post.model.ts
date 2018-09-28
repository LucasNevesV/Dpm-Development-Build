export class post {

    Date: string;
    Alcance: number;
    link: string;
    description: string;
    Id:number;
    picture: string;
    Likes:number;

    constructor(date: string, description: string, link: string, alcance: number, picture: string,likes: number) {
        this.Date = date;
        this.description = description;
        this.link = link;
        this.Alcance = alcance;
        this.picture = picture
        this.Likes = likes;
    }

    setId(id:number){
        this.Id = id;
    }

}
