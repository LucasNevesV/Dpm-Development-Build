export class pages {

    public id: number;
    public name: string;
    public token: string;
    public fansF: number;
    public fansI: number;
    public alcanceF: number;
    public alcanceI: number;
    public likesF: number;
    public likesI: number; 
    public sac: number;
    access_token: any;//Teste para sumir erro 
    
    constructor(id: number, name: string, token: string) {
        this.id = id;
        this.name = name;
        this.token = token;
     }

}
