export class RechercheBien {
    public prixMin: number;
    public prixMax: number;
    public type : string; 

    constructor(prixMin?: number, prixMax?: number, type?: string) {
        this.prixMin = prixMin,
        this.prixMax = prixMax,
        this.type = type
    }
}
