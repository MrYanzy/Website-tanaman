// ==========================================================
// DATA TANAMAN
// Semua teks tanaman (Indonesia & English) ada di file ini.
// Kalau mau mengubah teks, edit di sini saja — tidak perlu
// membuka file HTML satu per satu.
// ==========================================================

const plantsData = {
  "cabai-keriting": {
    order: 1,
    image: "images/cabai-keriting.jpg",
    id: {
      name: "Cabai Keriting",
      latin: "Capsicum annuum var. longum",
      description:
        "Cabai keriting adalah jenis cabai merah dengan bentuk buah panjang dan bergelombang. Cabai ini menjadi salah satu bumbu dasar yang paling sering dipakai dalam masakan Indonesia, terutama untuk membuat sambal.",
      characteristics: [
        "Buah memanjang dan bergelombang (keriting)",
        "Warna hijau saat muda, merah saat matang",
        "Permukaan kulit buah tidak rata",
        "Rasa pedas sedang, tidak sepedas cabai rawit",
      ],
      benefits: [
        "Sumber vitamin C",
        "Menambah cita rasa dan warna pada masakan",
        "Dapat meningkatkan nafsu makan",
        "Mengandung capsaicin yang bermanfaat bagi tubuh",
      ],
      care: [
        "Disiram secara teratur, jangan sampai tanah kering",
        "Ditanam di tempat yang terkena sinar matahari cukup",
        "Berikan pupuk organik secara berkala",
        "Pangkas daun yang sudah layu atau menguning",
      ],
      habitat:
        "Tumbuh baik di dataran rendah hingga menengah dengan iklim tropis, pada tanah yang gembur dan memiliki drainase baik.",
    },
    en: {
      name: "Curly Chili",
      description:
        "Curly chili is a type of red chili with a long, wavy pod. It is one of the most common base seasonings in Indonesian cooking, especially for making sambal.",
      characteristics: [
        "Long, wavy (curly) fruit",
        "Green when young, red when ripe",
        "Uneven skin surface",
        "Medium spiciness, milder than bird's eye chili",
      ],
      benefits: [
        "A good source of vitamin C",
        "Adds flavor and color to dishes",
        "Can help stimulate appetite",
        "Contains capsaicin, which offers health benefits",
      ],
      care: [
        "Water regularly, don't let the soil dry out",
        "Plant in a spot with enough sunlight",
        "Apply organic fertilizer periodically",
        "Prune wilted or yellowing leaves",
      ],
      habitat:
        "Grows well in lowland to medium-elevation tropical climates, in loose, well-drained soil.",
    },
  },

  "cabai-setan": {
    order: 2,
    image: "images/cabai-setan.jpg",
    id: {
      name: "Cabai Setan",
      latin: "Capsicum frutescens",
      description:
        "Cabai setan dikenal sebagai cabai rawit dengan tingkat kepedasan yang sangat tinggi. Ukurannya kecil, tetapi rasa pedasnya jauh lebih tajam dibanding cabai keriting.",
      characteristics: [
        "Buah kecil dan memanjang",
        "Tumbuh tegak menghadap ke atas",
        "Hijau saat muda, merah menyala saat matang",
        "Sangat pedas",
      ],
      benefits: [
        "Mengandung capsaicin tinggi",
        "Sumber vitamin C dan vitamin A",
        "Digunakan sebagai bumbu sambal khas",
        "Dipercaya membantu melancarkan peredaran darah",
      ],
      care: [
        "Disiram setiap hari, pagi atau sore",
        "Membutuhkan sinar matahari penuh",
        "Pemupukan rutin setiap 2 minggu sekali",
        "Jaga agar akar tidak tergenang air",
      ],
      habitat:
        "Cocok ditanam di dataran rendah dengan suhu hangat dan sinar matahari yang melimpah.",
    },
    en: {
      name: "Devil Chili",
      description:
        "Devil chili is a type of bird's eye chili known for its extremely high level of spiciness. It is small in size, but far hotter than curly chili.",
      characteristics: [
        "Small, elongated fruit",
        "Grows pointing upward",
        "Green when young, bright red when ripe",
        "Extremely spicy",
      ],
      benefits: [
        "Contains high levels of capsaicin",
        "A source of vitamin C and vitamin A",
        "Used as a signature sambal seasoning",
        "Believed to help improve blood circulation",
      ],
      care: [
        "Water every day, morning or evening",
        "Needs full sunlight",
        "Fertilize routinely every 2 weeks",
        "Keep the roots from sitting in waterlogged soil",
      ],
      habitat:
        "Suitable for lowland areas with warm temperatures and abundant sunlight.",
    },
  },

  pandan: {
    order: 3,
    image: "images/pandan.jpg",
    id: {
      name: "Pandan",
      latin: "Pandanus amaryllifolius",
      description:
        "Pandan adalah tanaman daun beraroma khas yang sering digunakan sebagai penyedap alami dan pewarna hijau pada berbagai makanan dan minuman tradisional.",
      characteristics: [
        "Daun panjang, ramping, dan berwarna hijau tua",
        "Memiliki aroma khas yang harum",
        "Tumbuh berumpun",
        "Tidak berbunga dan berbuah pada budidaya biasa",
      ],
      benefits: [
        "Penyedap alami untuk masakan dan kue",
        "Pewangi ruangan alami",
        "Pewarna hijau alami pada makanan",
        "Dipercaya memiliki manfaat untuk kesehatan",
      ],
      care: [
        "Disiram secukupnya, tidak perlu terlalu sering",
        "Tidak wajib terkena matahari langsung sepanjang hari",
        "Tumbuh baik di tempat teduh atau semi-teduh",
        "Gunakan pupuk kandang atau kompos",
      ],
      habitat:
        "Tumbuh subur di daerah tropis yang lembap, cocok ditanam di pekarangan maupun dalam pot.",
    },
    en: {
      name: "Pandan",
      description:
        "Pandan is a fragrant leaf plant commonly used as a natural flavoring and green coloring agent in traditional dishes and drinks.",
      characteristics: [
        "Long, slender, dark green leaves",
        "Has a distinctive fragrant aroma",
        "Grows in clumps",
        "Rarely flowers or fruits under normal cultivation",
      ],
      benefits: [
        "Natural flavoring for dishes and cakes",
        "Natural room fragrance",
        "Natural green food coloring",
        "Believed to offer health benefits",
      ],
      care: [
        "Water moderately, no need for frequent watering",
        "Does not require full-day direct sunlight",
        "Grows well in shaded or semi-shaded spots",
        "Use manure or compost as fertilizer",
      ],
      habitat:
        "Thrives in humid tropical areas, suitable for planting in yards or pots.",
    },
  },

  terong: {
    order: 4,
    image: "images/terong.jpg",
    id: {
      name: "Terong",
      latin: "Solanum melongena",
      description:
        "Terong adalah tanaman sayuran yang buahnya berbentuk lonjong berwarna ungu. Buah ini sering diolah menjadi berbagai masakan sehari-hari.",
      characteristics: [
        "Buah lonjong berwarna ungu mengkilap",
        "Daun lebar dengan permukaan berbulu halus",
        "Batang memiliki duri kecil",
        "Tumbuh sebagai semak setinggi 40–150 cm",
      ],
      benefits: [
        "Sumber serat dan antioksidan",
        "Rendah kalori",
        "Mengandung berbagai vitamin dan mineral",
        "Baik dikonsumsi sebagai bagian dari menu sehat",
      ],
      care: [
        "Disiram secara rutin",
        "Ditanam di tempat yang terkena sinar matahari penuh",
        "Berikan pupuk secara berkala",
        "Lakukan pengendalian hama secara rutin",
      ],
      habitat:
        "Tumbuh baik di dataran rendah hingga menengah dengan tanah yang subur dan gembur.",
    },
    en: {
      name: "Eggplant",
      description:
        "Eggplant is a vegetable plant with an oval, purple-colored fruit. It is commonly cooked into a variety of everyday dishes.",
      characteristics: [
        "Glossy purple, oval-shaped fruit",
        "Broad leaves with a finely hairy surface",
        "Stem has small thorns",
        "Grows as a shrub 40–150 cm tall",
      ],
      benefits: [
        "A source of fiber and antioxidants",
        "Low in calories",
        "Contains various vitamins and minerals",
        "Good as part of a healthy diet",
      ],
      care: [
        "Water regularly",
        "Plant in a spot with full sunlight",
        "Fertilize periodically",
        "Control pests routinely",
      ],
      habitat:
        "Grows well in lowland to medium-elevation areas with fertile, loose soil.",
    },
  },

  "jeruk-limau": {
    order: 5,
    image: "images/jeruk-limau.jpg",
    id: {
      name: "Jeruk Limau",
      latin: "Citrus amblycarpa",
      description:
        "Jeruk limau adalah tanaman jeruk berukuran kecil yang buahnya sering digunakan sebagai penyegar rasa pada masakan dan minuman khas Indonesia.",
      characteristics: [
        "Buah bulat berukuran kecil",
        "Kulit buah hijau hingga kekuningan saat matang",
        "Daun berbentuk oval dengan aroma segar",
        "Batang memiliki duri",
      ],
      benefits: [
        "Sumber vitamin C",
        "Digunakan sebagai penyegar rasa masakan",
        "Aroma daun dan kulitnya bermanfaat sebagai penyedap alami",
        "Air perasannya sering dipakai untuk sambal dan minuman",
      ],
      care: [
        "Disiram teratur, jangan berlebihan",
        "Membutuhkan sinar matahari yang cukup",
        "Lakukan pemangkasan ranting secara berkala",
        "Berikan pupuk setiap beberapa bulan",
      ],
      habitat:
        "Cocok tumbuh di dataran rendah hingga menengah dengan sinar matahari cukup dan tanah yang subur.",
    },
    en: {
      name: "Lime (Jeruk Limau)",
      description:
        "Jeruk limau is a small citrus plant whose fruit is often used to freshen the flavor of Indonesian dishes and drinks.",
      characteristics: [
        "Small, round fruit",
        "Skin is green, turning yellowish when ripe",
        "Oval-shaped leaves with a fresh aroma",
        "Thorny stem",
      ],
      benefits: [
        "A source of vitamin C",
        "Used to freshen the flavor of dishes",
        "Leaf and peel aroma acts as a natural flavor enhancer",
        "Its juice is commonly used in sambal and drinks",
      ],
      care: [
        "Water regularly, but not excessively",
        "Needs adequate sunlight",
        "Prune branches periodically",
        "Fertilize every few months",
      ],
      habitat:
        "Suitable for lowland to medium-elevation areas with enough sunlight and fertile soil.",
    },
  },

  tomat: {
    order: 6,
    image: "images/tomat.jpg",
    id: {
      name: "Tomat",
      latin: "Solanum lycopersicum",
      description:
        "Tomat adalah tanaman yang buahnya berwarna merah saat matang. Buah ini banyak digunakan sebagai bahan masakan, sambal, hingga minuman.",
      characteristics: [
        "Buah bulat, hijau saat muda dan merah saat matang",
        "Daun bergerigi dengan aroma khas",
        "Batang lunak dan berbulu halus",
        "Membutuhkan penyangga (ajir) saat tumbuh tinggi",
      ],
      benefits: [
        "Sumber vitamin C dan likopen",
        "Baik untuk kesehatan kulit dan jantung",
        "Sering digunakan sebagai bahan masakan sehari-hari",
        "Bisa dikonsumsi langsung sebagai buah segar",
      ],
      care: [
        "Disiram secara teratur",
        "Membutuhkan sinar matahari penuh",
        "Gunakan ajir/tiang penyangga saat tanaman mulai tinggi",
        "Pemupukan dilakukan secara rutin",
      ],
      habitat:
        "Tumbuh baik di dataran rendah hingga dataran tinggi dengan suhu sejuk dan tanah yang subur.",
    },
    en: {
      name: "Tomato",
      description:
        "Tomato is a plant whose fruit turns red when ripe. It is widely used as an ingredient in cooking, sambal, and drinks.",
      characteristics: [
        "Round fruit, green when young and red when ripe",
        "Serrated leaves with a distinctive scent",
        "Soft, finely hairy stem",
        "Needs a stake for support as it grows taller",
      ],
      benefits: [
        "A source of vitamin C and lycopene",
        "Good for skin and heart health",
        "Commonly used as a daily cooking ingredient",
        "Can be eaten fresh as a fruit",
      ],
      care: [
        "Water regularly",
        "Needs full sunlight",
        "Use a stake for support once the plant grows taller",
        "Fertilize routinely",
      ],
      habitat:
        "Grows well in lowland to highland areas with cool temperatures and fertile soil.",
    },
  },
};

// Urutan slug tanaman, dipakai untuk menampilkan daftar tanaman
const plantsOrder = [
  "cabai-keriting",
  "cabai-setan",
  "pandan",
  "terong",
  "jeruk-limau",
  "tomat",
];
