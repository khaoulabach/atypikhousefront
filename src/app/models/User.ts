export class User {
    public idUser: number ;
    public fullName: string;
    public login: string;
    public password: string;
    public role: string;
    public siteId: number;
    public site: string;

    constructor(fullName?: string,login ?: string,password ?: string,role ?: string){
        this.fullName = fullName;
        this.login = login;
        this.password = password;
        this.role = role;
    }
}