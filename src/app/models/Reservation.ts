export class Reservation {
    public id: number; 
    public dateDebut: Date; 
    public dateFin : Date; 
    public statut: string;
    public bienId: number;
    public internauteId: number;


    constructor(dateDebut?: Date, dateFin?: Date) {
        this.dateDebut = dateDebut,
        this.dateFin = dateFin
    }
}
