export interface Restaurant {
  id: number;
  nom: string;
  cuina: string; // tipus de cuina: «Italiana», «Japonesa»...
  valoracio: number; // de 0 a 5
  tempsEntrega: number; // minuts
  costEnviament: number; // euros
  obert: boolean;
  imatge: string; // ruta dins de /public
}
