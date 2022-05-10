export class Proprietaire {
    public id: number;
    public code: string;
    public nom: string;
    public prenom: string;
    public dateCreation: Date;
    public tel: string;
    public email: string;
    public login: string;
    public password: string;
    public role: string;
    public statut: string;
    public listeNoire: string;

    constructor(code?: string, nom?: string, prenom?: string, tel?: string, email?: string, login?: string, password?: string, role?: string) {
        this.code = code,
        this.nom = nom,
        this.prenom = prenom,
        this.tel = tel,
        this.email = email,
        this.login = login,
        this.password = password,
        this.role = role
    }
}
