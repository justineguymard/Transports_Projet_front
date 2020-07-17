import { Cargaisonaerienne } from './cargaisonaerienne';
import { Cargaisonroutiere } from './cargaisonroutiere';

export class Marchandise {

    id:number;
    numero:number;
    poids:number;
    volume:number;
    nom:string;

    cargaisonAerienne:Cargaisonaerienne;
    cargaisonRoutiere:Cargaisonroutiere;

}
