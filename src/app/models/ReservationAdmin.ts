export class ReservationAdmin {
    public id: number; 
    public dateDebut: Date; 
    public dateFin : Date; 
    public statut: string;
    public bienId: number;
    public internauteId: number;
    public bien: string;
    public internaute: string;


    constructor(dateDebut?: Date, dateFin?: Date) {
        this.dateDebut = dateDebut,
        this.dateFin = dateFin
    }
}

