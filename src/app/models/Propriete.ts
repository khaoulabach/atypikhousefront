export class Propriete {
    public id: number;
    public code: string;
    public description: string;
    public indObligatoire: string;
    public typeBienId: number;

    constructor(code?: string, description?: string, indObligatoire?: string, typeBienId?: number) {
        this.code = code,
        this.description = description,
        this.indObligatoire = indObligatoire,
        this.typeBienId = typeBienId
    }
}
