export class Typebien {
    public id: number ; 
    public description: string;  
    public descriptionAbrege: string;  

    constructor( description ?: string, descriptionAbrege ?: string){
        this.description = description,
        this.descriptionAbrege = descriptionAbrege
     }
}
