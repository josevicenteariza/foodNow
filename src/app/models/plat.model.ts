export interface Plat {
  id: number;
  restaurantId: number;
  nom: string;
  descripcio: string;
  preu: number; // euros
  categoria: 'Entrants' | 'Principals' | 'Postres' | 'Begudes';
  vegetaria: boolean;
  disponible: boolean;
}
