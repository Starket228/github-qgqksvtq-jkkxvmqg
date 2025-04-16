export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const categories = [
  "Sandwichs",
  "Pastas",
  "Salades",
  "Plats sautés",
  "Riz & variation",
  "Fritures & accompagnements",
  "Grillades & braisé",
  "Plats spéciaux",
  "Plats traditionnels"
];

export const foodItems: FoodItem[] = [
  // Sandwichs
  {
    id: "s1",
    name: "Sandwich Chevalier",
    description: "Pain complet, Filet de Poulet tranchée sautée, Légumes, Cornichon",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/MpvyCJ6k/Sandwich-Chevalier-1000f-Pain-complet-Filet-de-Poulet-tranch-e-saut-e-L-gumes-Cornichon-1.png",
    category: "Sandwichs"
  },
  {
    id: "s2",
    name: "Sandwich Croquant",
    description: "Pain complet, Œuf brouillé assaisonné, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/Xv59vKBQ/Sandwich-Croquant-1000f-Pain-complet-uf-brouill-assaisonn-L-gumes-1.png",
    category: "Sandwichs"
  },
  {
    id: "s3",
    name: "Sandwich Éclatant",
    description: "Pain complet, Tranche de bœuf grillé ou sauté, Légumes, Cornichon",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/NFNxzKt9/Sandwich.jpg",
    category: "Sandwichs"
  },
  {
    id: "s4",
    name: "Sandwich Royal",
    description: "Pain complet, Saucisse tranchée sautée, Légumes, Cornichon",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/5y4zpZ7R/Sandwich-Royal-1000f-Pain-complet-Saucisse-tranch-e-saut-e-L-gumes-Cornichon-1.png",
    category: "Sandwichs"
  },

  // Pastas
  {
    id: "p1",
    name: "Spaghetti Paysanne Rouge",
    description: "320 g de Pâte Spaghetti- sauce tomate-Oignon - Haricot vert - Piment vert-Choux -Carotte – Poivron - Ail – persil-Œuf ou viande -Mayonnaise",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/MHZD5yCJ/Spaghetti-rouge.jpg",
    category: "Pastas"
  },
  {
    id: "p2",
    name: "Spaghetti Paysanne Rouge",
    description: "320 g de Pâte Spaghetti- sauce tomate-Oignon - Haricot vert - Piment vert-Choux -Carotte – Poivron - Ail – persil-Œuf et viande -Mayonnaise",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/MHZD5yCJ/Spaghetti-rouge.jpg",
    category: "Pastas"
  },
  {
    id: "p3",
    name: "Spaghetti Paysanne Blanc ",
    description: "320 g de Pâte Spaghetti-Oignon - Haricot vert - Piment vert-Choux - Carotte – Poivron - Ail – persil-Œuf ou viande -Mayonnaise ",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/sfKKXNWj/Spaghetti-blanc.jpg",
    category: "Pastas"
  },
  {
    id: "p4",
    name: "Spaghetti Paysanne Épicée Blanc ",
    description: "320 g de Pâte Spaghetti-Oignon - Haricot vert - Piment vert-Choux - Carotte – Poivron - Ail – persil-Œuf et viande -Mayonnaise ",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/sfKKXNWj/Spaghetti-blanc.jpg",
    category: "Pastas"
  },
  {
    id: "p5",
    name: "Spaghetti Vert Campagne ",
    description: "320 g de Pâte Spaghetti-Petits pois-Oignon - Haricot vert - Piment vert-Choux -Carotte – Poivron - Ail – persil-Maïs doux-Viande de Poulet -Un (01) Œuf + viande-Mayonnaise ",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/Dw41d4nR/Spaghetti-aux-calamars-et-aux-petits-pois.jpg",
    category: "Pastas"
  },
  {
    id: "p6",
    name: "Plat Indomie Composé",
    description: "320 g de nouilles Indomie-Oignon - Haricot vert - Piment vert-Choux - Carotte – Poivron - Ail – persil-Viande de bœuf ou de Poulet- Mayonnaise",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/V6BMqYRt/plat-indomie-compos-1200f-nouilles-Indomie-Oignons-Haricot-vert-Choux-Carotte-Poivron-Ail-Pers.png",
    category: "Pastas"
  },
  {
    id: "p7",
    name: "Plat Indomie Simple",
    description: "320 g de nouilles Indomie-Assaisonnement- Mayonnaise",
    price: "700 FCFA",
    image: "https://i.postimg.cc/dQjp1r8s/Plat-Indomie-Simple-1000f-de-nouilles-Indomie-Assaisonnement-Mayonnaise-1.png",
    category: "Pastas"
  },
  {
    id: "p8",
    name: "Macaroni Tomate Gourmand",
    description: "320 g de mélange de macaroni-Oignon - Haricot vert - Piment vertChoux - Carotte – Poivron - Ail – persil-Sauce tomate-Viande de bœuf ou de PouletMayonnaise",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/PqzyYvMT/maca-2-768x512.jpg",
    category: "Pastas"
  },

  // Salades
  {
    id: "sl1",
    name: "Salade du Chef",
    description: "Laitues- Carotte – Haricot Vert – Tomates- Concombre – Betterave- Oignon – Poivron – Persil – Ail Pomme de terre- Petits pois- Spaghetti petit grain- Œuf + Viande",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/nh913VPr/Salade-du-chef.jpg",
    category: "Salades"
  },
  {
    id: "sl2",
    name: "Salade Emeraude",
    description: "Chou râpé ou finement coupé- Feuilles de laitue- Carottes râpées- ConcombreTomates- Œuf + Viande- Sauce Mayonnaise",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/0Q0CnGfc/Salade-Emeraude-1500f-Chou-r-p-ou-finement-coup-Feuilles-de-laitue-Carottes-r-p-es-Concombre.png",
    category: "Salades"
  },
  {
    id: "sl3",
    name: "Salade Macédoine",
    description: "Pommes de terre- Carottes- Macaroni coquillette- Petits pois - Haricots verts Oignon – Poivron – Persil – Ail- Cornichons et Tomate- Œuf + Viande-sauce Mayonnaise",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/VLVR9042/Salade-Mac-doine.jpg",
    category: "Salades"
  },

  // Plats sautés
  {
    id: "ps1",
    name: "Sauté Épicé aux Pommes de Terre",
    description: "Pomme de terre-Carotte – Haricot Vert – Choux-Oignon – Poivron – Persil – Ail-Viande de bœuf ou soja-Jus de tomate, piment vert",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/hvKCwF7w/Pomme-de-terre-saut-es.jpg",
    category: "Plats sautés"
  },
  {
    id: "ps2",
    name: "Sauté Verdoyant aux soja",
    description: "Haricot Vert 15 baguettes- Boules de soja 20 morceaux - Oignon – Poivron – Persil – Ail- Piment vert- Choux - Carotte – Poivron- Mayonnaise",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/xjPpmdwS/Saut-s-aux-soja.jpg",
    category: "Plats sautés"
  },
  {
    id: "ps3",
    name: "Petit pois sauté",
    description: "Nouilles Indomie, Oignons, Haricot vert, Choux, Carotte, Poivron, Ail, Persil",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/8C8m982H/Petit-pois-saut.jpg",
    category: "Plats sautés"
  },
  {
    id: "ps4",
    name: "Sauté Verdoyant aux Gésiers",
    description: "Haricot Vert 15 baguettes - Gésier 5 morceaux- Oignon – Poivron – Persil – Ail-Piment vert-Choux - Carotte – Poivron- Mayonnaise",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/kX4stvNx/Haricot-vert-aux-g-siers.jpg",
    category: "Plats sautés"
  },

  // Riz & variation
  {
    id: "r4",
    name: "Couscous Blanc",
    description: "Pâte Spaghetti, Oignon, Haricot vert, Piment vert, Choux, Carotte",
    price: "1200 FCFA",
    image: "https://i.postimg.cc/pL3sv5FK/Couscous-blanc.jpg",
    category: "Riz & variation"
  },
  {
    id: "r5",
    name: "Couscous au gras à la viande",
    description: "Pâte Spaghetti, Sauce tomate, Oignon, Haricot vert, Piment vert",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/65jHHm6j/Couscous-au-gras-la-viande.jpg",
    category: "Riz & variation"
  },
  {
    id: "r6",
    name: "Riz au gras",
    description: "Riz parfumé, légumes, épices",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/bNW1QFPq/Whats-App-Image-2025-04-15-at-07-17-11.jpg",
    category: "Riz & variation"
  },
  {
    id: "r7",
    name: "Riz aux Légumes",
    description: "Haricot vert, Avoine, Épinard, Petits pois, Choux, Oignons, Ail, Persil, Moutarde, Coq",
    price: "2000 FCFA",
    image: "https://i.postimg.cc/V6hk3pD6/Riz-au-L-gumes-2000f-Haricot-vert-Avoine-pinard-Petits-pois-Choux-Oignons-Ail-Persil-Moutarde-Coq.png",
    category: "Riz & variation"
  },

  // Fritures & accompagnements
  {
    id: "f2",
    name: "Koliko au poulet",
    description: "Koliko patate douce, Soja ou poisson ou poulet, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/vTXPwPrm/Koliko-au-poulet.jpg",
    category: "Fritures & accompagnements"
  },
  {
    id: "f3",
    name: "Tortilla aux Légumes",
    description: "3 Œufs, Pomme de terre, haricots verts, Carotte, Poivrons, Oignons, Ail, Choux",
    price: "2500 FCFA",
    image: "https://i.postimg.cc/pX0fcLtY/Tortilla-aux-L-gumes-2500f-3-ufs-Pomme-de-terre-haricots-verts-Carotte-Poivrons-Oignons-Ail-Ch.png",
    category: "Fritures & accompagnements"
  },
  {
    id: "f4",
    name: "Patate Douce Frite",
    description: "Koliko patate douce, Soja ou poisson ou poulet, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/MpndwQ6p/frites-de-patates-douces-0nzq-1200.webp",
    category: "Fritures & accompagnements"
  },
  {
    id: "f5",
    name: "Tortilla espagnole",
    description: "Œufs, pommes de terre, oignons, huile d'olive",
    price: "2000 FCFA",
    image: "https://i.postimg.cc/63X0Cbd8/Tortilla-espagnol.jpg",
    category: "Fritures & accompagnements"
  },

  // Grillades & braisé
  {
    id: "g1",
    name: "Brochette de bœuf",
    description: "Brochette de bœuf, Jus de tomate, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/YCZyV3w3/Brochette-de-b-uf-Jus-de-tomate-L-gumes-1500-F-1.png",
    category: "Grillades & braisé"
  },
  {
    id: "g2",
    name: "Brochette de Poulet",
    description: "Brochette de poulet, Jus de tomate, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/5tzkMC4M/Brochette-de-Poulet-1500f-Brochette-de-poulet-Jus-de-tomate-L-gumes-1.png",
    category: "Grillades & braisé"
  },
  {
    id: "g3",
    name: "Poisson braisé",
    description: "Poisson Tilapia, Jus de tomate, Piment vert, Légumes",
    price: "2500 FCFA",
    image: "https://i.postimg.cc/26Qc2j3h/Poisson-brais.jpg",
    category: "Grillades & braisé"
  },
  {
    id: "g4",
    name: "Poulet braisé",
    description: "Poulet, Jus de tomate, Piment vert, Légumes",
    price: "2000 FCFA",
    image: "https://i.postimg.cc/P5PR270J/Poulet-Brais-2000f-de-poulet-Jus-de-tomate-Piment-vert-L-gumes-1.png",
    category: "Grillades & braisé"
  },

  // Plats spéciaux
  {
    id: "sp1",
    name: "Akpan au Poisson",
    description: "AKPAN, Poisson Frit (Akpala ou Makanzo ou Tilapia), Jus de tomate, Piment vert, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/3RT94M9R/Akpan-au-poisson.jpg",
    category: "Plats spéciaux"
  },
  {
    id: "sp2",
    name: "Attiéké et Aloco au Poisson",
    description: "Aloco, Attiéké, Poisson ou Pilon, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/pTtz59Dx/Ati-k-et-Aloco-au-Poisson-1500f-Aloco-Ati-k-Poisson-ou-Pilon-Jus-de-tomate-Piment-vert-L-gumes-1.png",
    category: "Plats spéciaux"
  },
  {
    id: "sp3",
    name: "Djenkoumé au poulet",
    description: "Couscous simple ou au gras, Poisson frit ou Pilon, Jus de tomate, Piment",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/rwDf7NK8/Djenkoum-au-poulet.jpg",
    category: "Plats spéciaux"
  },
  {
    id: "sp4",
    name: "Pinon",
    description: "Koliko igname, Soja ou poisson ou poulet, Jus de tomate, piment vert, Légumes",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/wBJ0jxXZ/Pinon.jpg",
    category: "Plats spéciaux"
  },
  {
    id: "sp5",
    name: "Attiéké au poisson",
    description: "Attiéké, poisson, légumes, sauce tomate",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/Gm6zmmtJ/Ati-k-au-poisson-2.jpg",
    category: "Plats spéciaux"
  },

  // Plats traditionnels
  {
    id: "pt1",
    name: "Foufou (sur commande)",
    description: "Foufou traditionnel togolais",
    price: "1000 FCFA",
    image: "https://i.postimg.cc/cJYhgG8q/Plat-de-foufou-Togo-07.jpg",
    category: "Plats traditionnels"
  }
];

export const courseCategories = [
  "Tous",
  "Épicerie",
  "Fruits & Légumes",
  "Produits Laitiers",
  "Boissons",
  "Snacks"
];

export const bannerImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
];

// Add Togolese specialties data
export interface TogoleseSpecialty extends FoodItem {
  region: string;
}

export const togoleseSpecialties: TogoleseSpecialty[] = [
  {
    id: "ts1",
    name: "Attiéké et Aloco au Poisson",
    description: "Aloco, Attiéké, Poisson ou Pilon, Jus de tomate, Piment vert, Légumes",
    price: "1500 FCFA",
    image: "https://i.postimg.cc/pTtz59Dx/Ati-k-et-Aloco-au-Poisson-1500f-Aloco-Ati-k-Poisson-ou-Pilon-Jus-de-tomate-Piment-vert-L-gumes-1.png",
    category: "Plats spéciaux",
    region: "Maritime"
  }
];
