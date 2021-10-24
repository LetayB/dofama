export interface Item {
    _id: number;
    ankamaId: number;
    name: string;
    level: number;
    type: string;
    imgUrl: string;
    url: string;
    description: string;
    statistics?: Statistic[];
    characteristics?: Characteristic[];
    recipe?: Recipe[];
  }
  
  interface Recipe {
    'Bois de Frêne'?: Ressource;
    'Plume Chimérique'?: Ressource;
  }
  
  interface Ressource extends Item{
  }
  
  interface Characteristic {
    PA?: string;
    Portée?: string;
    CC?: string;
  }
  
  interface Statistic {
    '(dommages Neutre)'?: Stat;
    Force?: Stat;
    'Dommages Terre'?: Stat;
  }
  
  interface Stat {
    min: number;
    max?: any;
  }
  
  
  