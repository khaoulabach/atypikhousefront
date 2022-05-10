export class Bien {
    public id: number;
    public code: string;
    public dateCreation: Date;
    public capacite: number;
    public prix: number;
    public titre: string;
    public adresse: string;
    public localisation: string;
    public couchage: string;
    public superficie: string;
    public equipements: string;
    public image: string;
    public statut: string;
    public listeNoire: Boolean;

    constructor(code?: string, capacite?: number, prix?: number, titre?: string, adresse?: string,
        localisation?: string, couchage?: string, superficie?: string, equipements?: string, image?: string) {
        this.code = code,
        this.capacite = capacite,
        this.prix = capacite,
        this.titre = titre,
        this.adresse = adresse,
        this.localisation = localisation,
        this.couchage = couchage,
        this.superficie = superficie,
        this.equipements = equipements,
        this.image = image
    }
}
