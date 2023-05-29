export const categories = [
  {
    id: 1,
    name: 'combos',
    image:
      'https://poppys.com.br/wp-content/uploads/2022/09/combo-bigpoppys-1.png',
  },
  {
    id: 2,
    name: 'Acompanhamentos',
    image:
      'https://www.jerseyshorefry.com/wp-content/uploads/2018/06/Jersey-Shore_inside_Fries3.png',
  },
  {
    id: 3,
    name: 'Bebidas',
    image:
      'https://static.wixstatic.com/media/2961fb_d1aa3acc88bb48cb90933122462e75bc~mv2.png/v1/crop/x_0,y_58,w_4238,h_5664/fill/w_300,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MELANCIA_LIMAO%20E%20HORTELA_TACA_DRINK_BRANCO_IMAGEM%20REAL_RGB.png',
  },
  {
    id: 4,
    name: 'Sobremesas',
    image:
      'https://i.pinimg.com/originals/b3/02/3d/b3023d9b9a1a1feb2ceabe658449f2a8.png',
  },
];

export const extraItems = [
  {
    id: 1,
    name: 'Queijo',
    description: '100g',
    price: 5.5,
    imageUrl:
      'https://broaster.com.pk/wp-content/uploads/2021/11/Cheese-Slice.png',
  },
  {
    id: 2,
    name: 'Presunto',
    description: '100g',
    price: 6.5,
    imageUrl:
      'https://res.cloudinary.com/mrancho/cardapio/2015/09/presunto-fatiado-alt@2x.png',
  },
  {
    id: 3,
    name: 'palmito',
    description: '200g',
    price: 5,
    imageUrl:
      'https://ideianutri.files.wordpress.com/2013/08/sal-palmito-597x355-1a.gif',
  },
  {
    id: 4,
    name: 'Limão',
    description: '2 unidades',
    price: 1,
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/008/848/358/original/fresh-lemon-fruit-free-png.png',
  },
  {
    id: 5,
    name: 'Gelo',
    description: '3 cubos',
    price: 0,
    imageUrl:
      'https://cdn.pixabay.com/photo/2021/10/11/13/14/ice-6700617_960_720.png',
  },
];

export const products = [
  {
    id: 1,
    name: 'Combo do dia 1',
    code: 1,
    imageUrl:
      'https://static.wixstatic.com/media/3e6e5b_c7f83b4a43944549b83462bb6823bfe3~mv2.png/v1/fill/w_680,h_424,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/CHARGER.png',
    categoryId: 1,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 2,
    name: 'Combo do dia 2',
    code: 2,
    imageUrl:
      'https://static.wixstatic.com/media/3e6e5b_c7f83b4a43944549b83462bb6823bfe3~mv2.png/v1/fill/w_680,h_424,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/CHARGER.png',
    categoryId: 1,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 3,
    name: 'Combo do dia 3',
    code: 3,
    imageUrl:
      'https://static.wixstatic.com/media/3e6e5b_c7f83b4a43944549b83462bb6823bfe3~mv2.png/v1/fill/w_680,h_424,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/CHARGER.png',
    categoryId: 1,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 4,
    name: 'Combo do dia 4',
    code: 4,
    imageUrl:
      'https://static.wixstatic.com/media/3e6e5b_c7f83b4a43944549b83462bb6823bfe3~mv2.png/v1/fill/w_680,h_424,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/CHARGER.png',
    categoryId: 1,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 5,
    name: 'acompanhamento 1',
    code: 5,
    imageUrl: 'https://bananafood.com.br/wp-content/uploads/2021/09/10.png',
    categoryId: 2,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 6,
    name: 'acompanhamento 2',
    code: 4,
    imageUrl: 'https://bananafood.com.br/wp-content/uploads/2021/09/10.png',
    categoryId: 2,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 7,
    name: 'acompanhamento 3',
    code: 6,
    imageUrl: 'https://bananafood.com.br/wp-content/uploads/2021/09/10.png',
    categoryId: 2,
    ingredients: 'Hambúrger 200g, queijo, ketchup',
    price: 35,
    extras: [1, 2, 3],
  },
  {
    id: 8,
    name: 'Bebida refrescante 1',
    code: 8,
    imageUrl:
      'https://www.imigrantesbebidas.com.br/bebida/images/drinks/header-margarita.1685183784.png',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
    extras: [4, 5],
  },
  {
    id: 9,
    name: 'Bebida refrescante 2',
    code: 9,
    imageUrl:
      'https://www.imigrantesbebidas.com.br/bebida/images/drinks/header-margarita.1685183784.png',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
    extras: [4, 5],
  },
  {
    id: 10,
    name: 'Bebida refrescante3',
    code: 9,
    imageUrl:
      'https://www.imigrantesbebidas.com.br/bebida/images/drinks/header-margarita.1685183784.png',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
    extras: [4, 5],
  },
  {
    id: 11,
    name: 'Bebida refrescante 4',
    code: 10,
    imageUrl:
      'https://www.imigrantesbebidas.com.br/bebida/images/drinks/header-margarita.1685183784.png',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
    extras: [4, 5],
  },
  {
    id: 12,
    name: 'Huuum.. Bolo de morango',
    code: 12,
    imageUrl:
      'https://images.squarespace-cdn.com/content/55a352c6e4b0d4ed46a2f7b3/1623235757391-GKG2I284EWF1UHAEVGY8/8F2A7DB3-F79E-4A30-A1A2-68F65BA79493_clipped_rev_1.png?format=1500w&content-type=image%2Fpng',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
  },
  {
    id: 13,
    name: 'Bolo de morango 1',
    code: 13,
    imageUrl:
      'https://images.squarespace-cdn.com/content/55a352c6e4b0d4ed46a2f7b3/1623235757391-GKG2I284EWF1UHAEVGY8/8F2A7DB3-F79E-4A30-A1A2-68F65BA79493_clipped_rev_1.png?format=1500w&content-type=image%2Fpng',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
  },
  {
    id: 14,
    name: 'Bolo de morango 2',
    code: 14,
    imageUrl:
      'https://images.squarespace-cdn.com/content/55a352c6e4b0d4ed46a2f7b3/1623235757391-GKG2I284EWF1UHAEVGY8/8F2A7DB3-F79E-4A30-A1A2-68F65BA79493_clipped_rev_1.png?format=1500w&content-type=image%2Fpng',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
  },
  {
    id: 15,
    name: 'Bolo de morango 3',
    code: 15,
    imageUrl:
      'https://images.squarespace-cdn.com/content/55a352c6e4b0d4ed46a2f7b3/1623235757391-GKG2I284EWF1UHAEVGY8/8F2A7DB3-F79E-4A30-A1A2-68F65BA79493_clipped_rev_1.png?format=1500w&content-type=image%2Fpng',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
  },
  {
    id: 16,
    name: 'Bolo de morango 4',
    code: 16,
    imageUrl:
      'https://images.squarespace-cdn.com/content/55a352c6e4b0d4ed46a2f7b3/1623235757391-GKG2I284EWF1UHAEVGY8/8F2A7DB3-F79E-4A30-A1A2-68F65BA79493_clipped_rev_1.png?format=1500w&content-type=image%2Fpng',
    categoryId: 3,
    ingredients: 'Álcool, limão',
    price: 35,
  },
];
