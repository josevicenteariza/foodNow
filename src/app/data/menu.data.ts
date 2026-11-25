import { Restaurant } from '../models/restaurant.model';
import { Plat } from '../models/plat.model';

// Dades de prova de FoodNow. Més endavant podrien vindre d'una API.

export const RESTAURANTS: Restaurant[] = [
  { id: 1, nom: 'La Pizzeta de Carlet', cuina: 'Italiana', valoracio: 4.6, tempsEntrega: 30, costEnviament: 1.5, obert: true, imatge: 'img/restaurants/1.svg' },
  { id: 2, nom: 'Sushi Xúquer', cuina: 'Japonesa', valoracio: 4.4, tempsEntrega: 40, costEnviament: 2.5, obert: true, imatge: 'img/restaurants/2.svg' },
  { id: 3, nom: 'Burger Ribera', cuina: 'Americana', valoracio: 4.1, tempsEntrega: 25, costEnviament: 0, obert: true, imatge: 'img/restaurants/3.svg' },
  { id: 4, nom: 'Arrossos de la Tia Pepa', cuina: 'Valenciana', valoracio: 4.8, tempsEntrega: 50, costEnviament: 2, obert: false, imatge: 'img/restaurants/4.svg' },
  { id: 5, nom: 'Taco Loco', cuina: 'Mexicana', valoracio: 3.9, tempsEntrega: 35, costEnviament: 1, obert: true, imatge: 'img/restaurants/5.svg' },
  { id: 6, nom: 'Verd i Fresc', cuina: 'Vegetariana', valoracio: 4.3, tempsEntrega: 20, costEnviament: 1.5, obert: false, imatge: 'img/restaurants/6.svg' },
];

export const PLATS: Plat[] = [
  // 1 · La Pizzeta de Carlet
  { id: 101, restaurantId: 1, nom: 'Pizza margarita', descripcio: 'Tomaca, mozzarella i alfàbega fresca.', preu: 9.5, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 102, restaurantId: 1, nom: 'Pizza quatre formatges', descripcio: 'Mozzarella, gorgonzola, parmesà i formatge de cabra.', preu: 11.9, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 103, restaurantId: 1, nom: 'Pizza diavola', descripcio: 'Tomaca, mozzarella i salami picant.', preu: 11.5, categoria: 'Principals', vegetaria: false, disponible: true },
  { id: 104, restaurantId: 1, nom: 'Bruschetta', descripcio: 'Pa torrat amb tomaca, all i oli d\'oliva.', preu: 5.5, categoria: 'Entrants', vegetaria: true, disponible: true },
  { id: 105, restaurantId: 1, nom: 'Tiramisú', descripcio: 'Mascarpone, cafè i cacau.', preu: 4.9, categoria: 'Postres', vegetaria: true, disponible: false },
  // 2 · Sushi Xúquer
  { id: 201, restaurantId: 2, nom: 'Assortiment de nigiri (8 u.)', descripcio: 'Salmó, tonyina, llobarro i gamba.', preu: 14.5, categoria: 'Principals', vegetaria: false, disponible: true },
  { id: 202, restaurantId: 2, nom: 'Uramaki d\'alvocat (8 u.)', descripcio: 'Arròs, alvocat, cogombre i sèsam.', preu: 8.9, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 203, restaurantId: 2, nom: 'Gyozes de pollastre (6 u.)', descripcio: 'Farcides de pollastre i verdures.', preu: 6.5, categoria: 'Entrants', vegetaria: false, disponible: true },
  { id: 204, restaurantId: 2, nom: 'Edamame', descripcio: 'Faves de soja amb sal en escates.', preu: 4.5, categoria: 'Entrants', vegetaria: true, disponible: true },
  { id: 205, restaurantId: 2, nom: 'Mochi de te verd (2 u.)', descripcio: 'Pasta d\'arròs farcida de gelat.', preu: 4.9, categoria: 'Postres', vegetaria: true, disponible: true },
  // 3 · Burger Ribera
  { id: 301, restaurantId: 3, nom: 'Hamburguesa clàssica', descripcio: 'Vedella, formatge, enciam i tomaca.', preu: 10.5, categoria: 'Principals', vegetaria: false, disponible: true },
  { id: 302, restaurantId: 3, nom: 'Hamburguesa vegetal', descripcio: 'Hamburguesa de cigrons, alvocat i ceba roja.', preu: 10.9, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 303, restaurantId: 3, nom: 'Creïlles fregides', descripcio: 'Amb salsa de la casa.', preu: 3.9, categoria: 'Entrants', vegetaria: true, disponible: true },
  { id: 304, restaurantId: 3, nom: 'Aros de ceba', descripcio: 'Arrebossats i cruixents.', preu: 4.5, categoria: 'Entrants', vegetaria: true, disponible: false },
  { id: 305, restaurantId: 3, nom: 'Refresc de cola', descripcio: 'Llauna de 33 cl.', preu: 2.2, categoria: 'Begudes', vegetaria: true, disponible: true },
  // 4 · Arrossos de la Tia Pepa
  { id: 401, restaurantId: 4, nom: 'Paella valenciana (2 pers.)', descripcio: 'Pollastre, conill, bajoqueta i garrofó.', preu: 26, categoria: 'Principals', vegetaria: false, disponible: true },
  { id: 402, restaurantId: 4, nom: 'Arròs a banda (2 pers.)', descripcio: 'Amb allioli de la casa.', preu: 24, categoria: 'Principals', vegetaria: false, disponible: true },
  { id: 403, restaurantId: 4, nom: 'Arròs de verdures (2 pers.)', descripcio: 'Carxofa, pebrot, bajoqueta i coliflor.', preu: 22, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 404, restaurantId: 4, nom: 'Esgarrat', descripcio: 'Pebrot roig torrat i bacallà.', preu: 7.5, categoria: 'Entrants', vegetaria: false, disponible: true },
  { id: 405, restaurantId: 4, nom: 'Flam de la casa', descripcio: 'Amb caramel.', preu: 4, categoria: 'Postres', vegetaria: true, disponible: true },
  // 5 · Taco Loco
  { id: 501, restaurantId: 5, nom: 'Tacos al pastor (3 u.)', descripcio: 'Porc adobat, pinya i coriandre.', preu: 9.5, categoria: 'Principals', vegetaria: false, disponible: true },
  { id: 502, restaurantId: 5, nom: 'Burrito de fesols', descripcio: 'Fesols, arròs, formatge i pico de gallo.', preu: 9, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 503, restaurantId: 5, nom: 'Nachos amb guacamole', descripcio: 'Totopos de dacsa i guacamole casolà.', preu: 6.9, categoria: 'Entrants', vegetaria: true, disponible: true },
  { id: 504, restaurantId: 5, nom: 'Quesadilla de pollastre', descripcio: 'Truita de dacsa, pollastre i formatge.', preu: 7.5, categoria: 'Principals', vegetaria: false, disponible: false },
  { id: 505, restaurantId: 5, nom: 'Orxata', descripcio: 'Orxata de xufa, 50 cl.', preu: 3, categoria: 'Begudes', vegetaria: true, disponible: true },
  // 6 · Verd i Fresc
  { id: 601, restaurantId: 6, nom: 'Bol de quinoa', descripcio: 'Quinoa, cigrons, alvocat i verdures de temporada.', preu: 10.5, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 602, restaurantId: 6, nom: 'Amanida de taronja', descripcio: 'Taronja, ceba tendra, olives i bacallà vegetal.', preu: 8.5, categoria: 'Entrants', vegetaria: true, disponible: true },
  { id: 603, restaurantId: 6, nom: 'Crema de carabassa', descripcio: 'Amb llavors torrades.', preu: 6.5, categoria: 'Entrants', vegetaria: true, disponible: true },
  { id: 604, restaurantId: 6, nom: 'Wrap de falàfel', descripcio: 'Falàfel, hummus i enciam.', preu: 8.9, categoria: 'Principals', vegetaria: true, disponible: true },
  { id: 605, restaurantId: 6, nom: 'Smoothie verd', descripcio: 'Espinacs, poma i gingebre.', preu: 4.5, categoria: 'Begudes', vegetaria: true, disponible: true },
];
