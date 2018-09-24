export class post {

    Date: string;
    Alcance: number;
    link: string;
    description: string;
    Id:number;
    picture: string;

    constructor(date: string, description: string, link: string, alcance: number, picture: string) {
        this.Date = date;
        this.description = description;
        this.link = link;
        this.Alcance = alcance;
        this.picture = picture
    }

    setId(id:number){
        this.Id = id;
    }

}
