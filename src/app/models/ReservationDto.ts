export class ReservationDto {
    public dateDebut: Date; 
    public dateFin : Date; 
    public bienId: number;
    public internauteId: number;


    constructor(dateDebut?: Date, dateFin?: Date, bienId?: number, internauteId?: number) {
        this.dateDebut = dateDebut,
        this.dateFin = dateFin,
        this.bienId = bienId,
        this.internauteId = internauteId
    }
}
