/* =========================================================
   Product catalogue — Swamishrayy Creations
   Edit prices, names, descriptions or images right here.
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Surya Kiran Cotton Garland",
    tagline: "Sunlit blooms for Bappa's welcome",
    price: 129,
    mrp: 169,
    image: "img/clean-product-1.jpg",
    badge: "Ganpati Special",
    rating: 4.9,
    shortDesc: "A pair of hand-rolled cotton sunflowers strung along soft cotton rope, tipped with gold beads and tied in red satin — made for the day Bappa comes home.",
    quote: "Every petal is rolled by hand, one bloom at a time, so the garland you hang has a person's care folded into it.",
    overview: "Surya Kiran is our festive best-seller — two mirrored strands of white cotton flowers with sun-orange centres, finished with a fine gold bead at the heart of every bloom. It's built for the ten days of Ganpati, but soft and light enough to keep hanging well beyond the festival.",
    craft: "Each flower begins as a single strip of pure, carded cotton, layered and pinched by hand into eight even petals before the coloured centre is stitched in. No two garlands are pressed from a mould — small, human variations are part of the charm.",
    details: [
      "Material: 100% pure carded cotton, cotton rope base",
      "Length: approx. 26 inches per strand (sold as a pair)",
      "Accents: gold-tone bead centres, red satin ribbon ties",
      "Weight: extremely lightweight — safe for daily hanging",
      "Occasion: Ganpati festival, temple and home mandir décor"
    ],
    care: "Keep away from water and direct sunlight. Dust gently with a soft, dry brush after use. Store flat in a box or pouch between festivals to keep the petals in shape."
  },
  {
    id: 2,
    name: "Nakshatra Tara Cotton Garland",
    tagline: "Little stars, strung by hand",
    price: 135,
    mrp: 175,
    image: "img/clean-product-2.jpg",
    badge: "Bestseller",
    rating: 4.8,
    shortDesc: "Six-petal cotton stars with sapphire-blue centres, closed off with a single amethyst bloom — a quiet, jewel-toned garland for Krishna's altar.",
    quote: "Blue for the night sky He was born under, cotton for the softness of a mother's lap.",
    overview: "Designed with Janmashtami in mind, Nakshatra Tara pairs star-shaped cotton blossoms with cool sapphire-blue bead centres. A single deeper amethyst flower anchors the base of each strand, giving the garland a gentle, considered finish rather than a repeating pattern.",
    craft: "The star shape is one of our more delicate cuts — each petal is tapered by hand before the bead is set at the centre with fine thread, so it sits flush and doesn't work loose with handling.",
    details: [
      "Material: 100% pure cotton, silver-tone ribbon binding",
      "Length: approx. 24 inches per strand (sold as a pair)",
      "Accents: sapphire and amethyst glass beads, green satin ribbon",
      "Weight: light enough for daily idol décor",
      "Occasion: Janmashtami, Diwali, everyday deity décor"
    ],
    care: "Avoid moisture and perfume sprays near the beadwork. Store in a dry pouch away from direct light to keep the blue tones from fading."
  },
  {
    id: 3,
    name: "Mayura Ekal Cotton Garland",
    tagline: "One strand of cotton, one of peacock",
    price: 149,
    mrp: 189,
    image: "img/clean-product-3.jpg",
    badge: "Krishna Special",
    rating: 5.0,
    shortDesc: "A single elegant strand pairs stone-studded cotton blooms with genuine peacock feathers, meeting at one large flower with a green silk tassel.",
    quote: "The peacock feather has followed Krishna through every story — we simply gave it a cotton companion to walk beside.",
    overview: "Mayura Ekal is our most striking single-strand design: one line of cotton blooms edged in gold trim and tiny stones runs alongside a line of real peacock feathers, and both come together at a large central flower finished with a silk tassel.",
    craft: "Because the two strands are built separately before being joined, the feathers keep their natural curve and shine instead of being flattened into the braid — the garland reads as two materials in conversation, not one pressed into the other.",
    details: [
      "Material: pure cotton blooms, genuine peacock feathers",
      "Length: approx. 22 inches",
      "Accents: gold trim, faceted stone detailing, green silk tassel",
      "Hanger: orange-red satin ribbon",
      "Occasion: Krishna and Radha-Krishna idols, Janmashtami décor"
    ],
    care: "Peacock feathers are delicate — hang away from fans or draughts and handle by the ribbon, not the feather tips. Store flat in a box."
  },
  {
    id: 4,
    name: "Mogra Ras Cotton Garland",
    tagline: "The classic, in cotton",
    price: 119,
    mrp: 149,
    image: "img/clean-product-4.jpg",
    badge: "Classic",
    rating: 4.7,
    shortDesc: "A fuller, layered garland of pink-centred cotton blooms styled the traditional way — the one that looks equally at home at a housewarming or a wedding pooja.",
    quote: "Some things don't need reinventing. We just made them last longer.",
    overview: "Mogra Ras takes the familiar, densely-strung silhouette of a traditional flower garland and rebuilds it in cotton, so it keeps its fresh, full look for months instead of a single day. The pink flower centres echo real jasmine buds without ever wilting.",
    craft: "This design uses smaller, tightly clustered blooms threaded close together for volume — it's the most time-intensive garland in our catalogue, with every bud individually knotted along the cord.",
    details: [
      "Material: 100% pure cotton, cotton cord base",
      "Length: approx. 25 inches",
      "Accents: pink flower centres, pink satin ribbon tie",
      "Style: dense, traditional layered silhouette",
      "Occasion: housewarming, wedding poojas, daily temple décor, gifting"
    ],
    care: "Fluff gently by hand if the petals flatten in transit. Keep away from open flames and direct sun for the pink centres to stay bright."
  },
  {
    id: 5,
    name: "Mayur Heera Cotton Garland",
    tagline: "Diamonds among the feathers",
    price: 145,
    mrp: 185,
    image: "img/clean-product-5.jpg",
    badge: "Wedding Favourite",
    rating: 4.9,
    shortDesc: "Six-petal cotton blooms scattered with tiny diamante stones, crowned with peacock feather clusters and hung from a silver ribbon.",
    quote: "Made to catch the light the way the real thing would — without a single petal fading by evening.",
    overview: "Mayur Heera was designed for the mandap: each cotton flower carries a scatter of small diamante stones around a central gem-tone bead, and every strand finishes in a burst of peacock feathers at the top. It photographs beautifully and holds its shape through a full day of celebrations.",
    craft: "The stone-setting is done after the petals are shaped and dried, so the diamantes sit securely without weighing the cotton down or pulling the flower out of form.",
    details: [
      "Material: 100% pure cotton, diamante stone detailing",
      "Length: approx. 24 inches per strand (sold as a pair)",
      "Accents: genuine peacock feather clusters, silver ribbon",
      "Finish: dense stone-work for a bridal, celebratory look",
      "Occasion: wedding mandap décor, Griha Pravesh, festive gifting"
    ],
    care: "Handle by the ribbon to protect the feather tips. Store flat, away from humidity, to keep the stones secure and bright."
  },
  {
    id: 6,
    name: "Mayur Teal Cotton Garland",
    tagline: "Peacock feathers, teal-eyed blooms",
    price: 139,
    mrp: 179,
    image: "img/clean-product-6.jpg",
    badge: "Peacock Collection",
    rating: 4.8,
    shortDesc: "Cotton blooms with teal bead centres are topped with peacock feather fans and finished in a long feather tassel at the base.",
    quote: "A garland that borrows its colour from the very feathers it's paired with.",
    overview: "Part of our Peacock Collection, Mayur Teal repeats a soft teal-green thread through the beadwork so the cotton blooms and the peacock feathers read as one palette rather than two separate materials stitched together. A trailing feather tassel finishes each strand.",
    craft: "The teal thread is hand-wound around each bead setting before the flower is closed, which is what gives the centres their soft glow rather than a hard, shiny bead look.",
    details: [
      "Material: 100% pure cotton, genuine peacock feathers",
      "Length: approx. 23 inches per strand (sold as a pair)",
      "Accents: teal bead centres, yellow satin ribbon hanger",
      "Finish: trailing peacock feather tassel at the base",
      "Occasion: festive décor, Janmashtami, gifting"
    ],
    care: "Keep out of direct sun to protect the feather colour. Store flat in a box between uses."
  },
  {
    id: 7,
    name: "Vrindavan Hariyali Cotton Garland",
    tagline: "A touch of green among the white",
    price: 129,
    mrp: 165,
    image: "img/clean-product-7.jpg",
    badge: "Peacock Collection",
    rating: 4.7,
    shortDesc: "Lime-green rosette centres sit inside star-shaped cotton blooms, paired with peacock feather accents along each strand.",
    quote: "Named for the groves of Vrindavan — green at the centre of every white petal.",
    overview: "Vrindavan Hariyali swaps the usual bead centre for a small folded satin rosette in a fresh lime green, giving the garland a slightly more contemporary look while keeping the cotton petals and peacock feather trim consistent with the rest of the collection.",
    craft: "Each satin rosette is folded and stitched by hand before being set into the flower, so the centre keeps a soft, fabric texture instead of the harder shine of a bead or stone.",
    details: [
      "Material: 100% pure cotton, satin rosette centres",
      "Length: approx. 23 inches per strand (sold as a pair)",
      "Accents: genuine peacock feather clusters, yellow ribbon hanger",
      "Colour note: lime-green centres, one sky-blue accent flower at the base",
      "Occasion: festive décor, Janmashtami, gifting"
    ],
    care: "Dust gently with a dry brush. Keep away from water so the satin centres don't lose their shape."
  },
  {
    id: 8,
    name: "Rani Kamal Cotton Garland",
    tagline: "Rose-pink centres on a bed of white",
    price: 125,
    mrp: 159,
    image: "img/clean-product-8.jpg",
    badge: "Peacock Collection",
    rating: 4.8,
    shortDesc: "Dense clusters of white cotton petals with rose-pink centres and a fine silver dust finish, tied with a yellow satin ribbon.",
    quote: "Kamal means lotus — and this one never needs fresh water to stay open.",
    overview: "Rani Kamal is the softest-looking garland in our line-up: layered white petals cluster tightly around a rose-pink heart, dusted with the faintest silver shimmer. It's a quieter design, well suited to everyday puja as much as a special occasion.",
    craft: "The petal clusters are layered three deep before the pink centre is added, which is what gives the finished flower its rounded, full-bodied shape instead of sitting flat.",
    details: [
      "Material: 100% pure cotton",
      "Length: approx. 24 inches per strand (sold as a pair)",
      "Accents: rose-pink centres, fine silver-dust detailing, yellow ribbon",
      "Finish: dense, rounded petal clusters",
      "Occasion: daily puja, festive décor, gifting"
    ],
    care: "Store flat in a box away from moisture. Dust lightly with a soft brush to keep the silver detailing looking fresh."
  }
];

/* Utility used by product.html */
function getProductById(id){
  return PRODUCTS.find(p => String(p.id) === String(id));
}
