

const ramenList = [
  {
    id: 6,
    title: 'Tonkotsu ramen',
    description: "Bouillon d'os de porc, sauce soja, pâte de miso, ail, gingembre, oignons, poitrine de porc, bambou, champignons, œufs mollets, nori, huile de sésame, graines de sésame",
    image: 'tonkotsu.jpg',
    spiciness: null, // 1 to 3
    vegetarian: false,
    vegan: false,
    price: 12.99,
    type: 'tonkotsu'
  },
  {
    id: 18,
    title: 'Shio ramen',
    description: "Shio tare, yuzu, ail, gingembre, shiitake, radis, œufs mollets, feuilles de nori, graines de sésame grillées, feuilles de shiso",
    image: 'shio.jpg',
    spiciness: null, // 1 to 3
    vegetarian: false,
    vegan: false,
    price: 12.99,
    type: 'shio'
  },
  {
    id: 5,
    title: 'Shoyu ramen',
    description: "Bouillon de poulet, sauce soja, pâte de miso, ail, gingembre, oignons, poitrine de porc ou poulet tranché, bambou, champignons, soja, œufs mollets, nori, huile de sésame",
    image: 'shoyu.jpg',
    spiciness: null, // 1 to 3
    vegetarian: false,
    vegan: false,
    price: 12.99,
    type: 'shoyu'
  },
    {
      id: 4,
      title: 'Shiro Tantanmen',
      description: "Bouillon de légumes, pâte de sésame, soja, miso, ail, gingembre, oignons, champignons, carottes, épinards, huile de sésame, sésame grillé, coriandre",
      image: 'shiro.jpg',
      spiciness: null, // 1 to 3
      vegetarian: true,
      vegan: false,
      price: 12.99,
      type: 'shio'
    },
    {
      id: 15,
      title: 'Daurade Sublime en ramen',
      description: "Bouillon clair de daurade de méditerranée, shio tare, assemblage de sels français, huile de daurade au sancho, filet de Daurade royale, chashu de daurade mariné au sancho",
      image: 'daurade.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 14.99,
      type: 'shio'
    },
    {
      id: 7,
      title: 'Coco dingo ramen',
      description: "Lait de coco, bouillon de poulet, pâte de curry rouge, sauce soja, ail, gingembre, oignons, poitrine de poulet tranchée, poivrons, maïs, bambou, coriandre, jus de lime, piment, huile de sésame",
      image: 'coco.jpg',
      spiciness: 2, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'shoyu'
    },
    {
      id: 1,
      title: 'Ramen à la bretonne',
      description: "Bouillon de légumes, artichaut, poireau, ail, échalote, vin blanc, beurre, thym, laurier, épinards, œufs mollets, persil, zeste de citron",
      image: 'artichoke.jpg',
      spiciness: null, // 1 to 3
      vegetarian: true,
      vegan: false,
      price: 12.99,
      type: 'tonkotsu'
    },
    {
      id: 2,
      title: 'Choucroute ramen',
      description: "Bouillon de légumes, choucroute, poitrine de porc, ail, oignons, graines de carvi, sauce soja, vinaigre de cidre, moutarde, laurier, thym, oignons, persil",
      image: 'choucroute.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'shoyu'
    },
    {
      id: 8,
      title: 'Spicy blueberry ramen',
      description: "Bouillon de poulet, myrtilles, sauce soja, ail, gingembre, oignons, poitrine de poulet tranchée, pâte de piment rouge, poivrons, épinards, huile de sésame",
      image: 'blueberry.jpg',
      spiciness: 1, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'shio'
    },
    {
      id: 9,
      title: 'Flaming hot tornado ramen',
      description: "Bouillon de poulet, soja, piment, ail, gingembre, tranches de bœuf mariné, jalapeño, kimchi, œuf mollet, sriracha, piment, oignons, coriandre",
      image: 'tornado.jpg',
      spiciness: 3, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'tonkotsu'
    },
    {
      id: 10,
      title: 'Cyberpunk ramen',
      description: "Bouillon de miso, soja, ail, gingembre, oignons, porc, champignons, maïs, bambou, radis marinés, nori, piment, huile de sésame, garnitures de légumes aux couleurs néon",
      image: 'cyberpunk.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'shoyu'
    },
    {
      id: 11,
      title: 'Margherita ramen',
      description: "Sauce tomate, mozzarella, parmesan, ail, assaisonnement italien, sauce soja, huile d'olive, tranches de pepperoni ou légumes, basilic frais, oignons verts",
      image: 'pizza.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'tonkotsu'
    },
    {
      id: 3,
      title: 'Bourguignon ramen',
      description: "Bouillon de bœuf, boeuf, vin rouge, carottes, oignons, ail, champignons, concentré de tomates, demi-glace de bœuf, laurier, thym, sauce soja, beurre, huile d'olive, oignons, persil",
      image: 'bourguignon.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'tonkotsu'
    },
    {
      id: 12,
      title: 'Corn shoyu ramen',
      description: "Bouillon de légumes, pâte de miso, maïs, ail, gingembre, oignons, sauce soja, huile de sésame, champignons, épinards, tofu, graines de sésame",
      image: 'mais.jpg',
      spiciness: null, // 1 to 3
      vegetarian: true,
      vegan: false,
      price: 12.99,
      type: 'shoyu'
    },
    {
      id: 13,
      title: 'Chocolate delight ramen',
      description: "Bouillon de légumes, pâte de miso, sauce soja, chocolat noir, huile de sésame, ail, gingembre, tofu, shiitake, œufs mollets, épinards, oignons, graines de sésame grillées, nori",
      image: 'chocolat.jpg',
      spiciness: null, // 1 to 3
      vegetarian: true,
      vegan: false,
      price: 12.99,
      type: 'shoyu'
    },
    {
      id: 14,
      title: 'Ramen galette complète',
      description: "Bouillon de légumes, chips de sarrasin, sauce soja, ail, échalotes, poireaux, champignons, épinards, œufs mollets, fromage râpé, jambon, oignons, huile de sésame",
      image: 'galette.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: false,
      price: 12.99,
      type: 'tonkotsu'
    },
    {
      id: 16,
      title: 'Évasion Vegan au Curry d’Ananas',
      description: "Lait de coco, bouillon de légumes, ananas, pâte de curry rouge, ail, gingembre, sauce soja, maïs, petit pois, jus de lime, basilic thaï, piment, huile de sésame, cacahuètes concassées",
      image: 'tropical.jpg',
      spiciness: 2, // 1 to 3
      vegetarian: false,
      vegan: true,
      price: 12.99,
      type: 'shoyu'
    },
    {
      id: 17,
      title: 'Ramen vegan forestier',
      description: "Bouillon de champignons, girolles, shiitake, cèpe, ail, échalotes, sauce soja, thym, épinards, châtaignes rôties, huile de truffe noire, oignons, persil",
      image: 'forestier.jpg',
      spiciness: null, // 1 to 3
      vegetarian: false,
      vegan: true,
      price: 11.99,
      type: 'shio'
    }
  ];
  
  export default ramenList;
  