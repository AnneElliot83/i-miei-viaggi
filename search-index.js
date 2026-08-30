// Indice di ricerca "profondo": ogni singolo luogo/voce dentro le pagine del portale,
// non solo i titoli delle guide. Generato automaticamente — rigenerare quando si aggiunge
// nuovo contenuto, invece di modificarlo a mano.
const deepIndex = [
  {
    "name": "Propilei",
    "file": "atene.html",
    "id": "propilei",
    "context": "Atene"
  },
  {
    "name": "Tempio di Atena Nike",
    "file": "atene.html",
    "id": "tempio-di-atena-nike",
    "context": "Atene"
  },
  {
    "name": "Partenone",
    "file": "atene.html",
    "id": "partenone",
    "context": "Atene"
  },
  {
    "name": "Eretteo (e Portico delle Cariatidi)",
    "file": "atene.html",
    "id": "eretteo-e-portico-delle-cariatidi",
    "context": "Atene"
  },
  {
    "name": "Antico Tempio di Atena",
    "file": "atene.html",
    "id": "antico-tempio-di-atena",
    "context": "Atene"
  },
  {
    "name": "Santuario di Zeus Polieus",
    "file": "atene.html",
    "id": "santuario-di-zeus-polieus",
    "context": "Atene"
  },
  {
    "name": "Pandroseion e Arreforion",
    "file": "atene.html",
    "id": "pandroseion-e-arreforion",
    "context": "Atene"
  },
  {
    "name": "Calcoteca",
    "file": "atene.html",
    "id": "calcoteca",
    "context": "Atene"
  },
  {
    "name": "Santuario di Artemide Brauronia",
    "file": "atene.html",
    "id": "santuario-di-artemide-brauronia",
    "context": "Atene"
  },
  {
    "name": "Odeon di Erode Attico",
    "file": "atene.html",
    "id": "odeon-di-erode-attico",
    "context": "Atene"
  },
  {
    "name": "Stoa di Eumene",
    "file": "atene.html",
    "id": "stoa-di-eumene",
    "context": "Atene"
  },
  {
    "name": "Asklepieion (Santuario di Asclepio)",
    "file": "atene.html",
    "id": "asklepieion-santuario-di-asclepio",
    "context": "Atene"
  },
  {
    "name": "Teatro di Dioniso",
    "file": "atene.html",
    "id": "teatro-di-dioniso",
    "context": "Atene"
  },
  {
    "name": "Museo dell'Acropoli",
    "file": "atene.html",
    "id": "museo-dell-acropoli",
    "context": "Atene"
  },
  {
    "name": "Tempio di Efesto (Theseion)",
    "file": "atene.html",
    "id": "tempio-di-efesto-theseion",
    "context": "Atene"
  },
  {
    "name": "Stoa di Attalo (e Museo dell'Agorà)",
    "file": "atene.html",
    "id": "stoa-di-attalo-e-museo-dell-agor",
    "context": "Atene"
  },
  {
    "name": "Bouleuterion (Vecchio e Nuovo)",
    "file": "atene.html",
    "id": "bouleuterion-vecchio-e-nuovo",
    "context": "Atene"
  },
  {
    "name": "Tholos",
    "file": "atene.html",
    "id": "tholos",
    "context": "Atene"
  },
  {
    "name": "Metroon",
    "file": "atene.html",
    "id": "metroon",
    "context": "Atene"
  },
  {
    "name": "Monumento degli Eroi Eponimi",
    "file": "atene.html",
    "id": "monumento-degli-eroi-eponimi",
    "context": "Atene"
  },
  {
    "name": "Altare dei Dodici Dei",
    "file": "atene.html",
    "id": "altare-dei-dodici-dei",
    "context": "Atene"
  },
  {
    "name": "Stoa di Zeus Eleutherios",
    "file": "atene.html",
    "id": "stoa-di-zeus-eleutherios",
    "context": "Atene"
  },
  {
    "name": "Stoa Basileios (Stoa Reale)",
    "file": "atene.html",
    "id": "stoa-basileios-stoa-reale",
    "context": "Atene"
  },
  {
    "name": "Stoa Poikile (Stoa Dipinta)",
    "file": "atene.html",
    "id": "stoa-poikile-stoa-dipinta",
    "context": "Atene"
  },
  {
    "name": "Tempio di Apollo Patroos",
    "file": "atene.html",
    "id": "tempio-di-apollo-patroos",
    "context": "Atene"
  },
  {
    "name": "Odeon di Agrippa",
    "file": "atene.html",
    "id": "odeon-di-agrippa",
    "context": "Atene"
  },
  {
    "name": "Biblioteca di Pantainos",
    "file": "atene.html",
    "id": "biblioteca-di-pantainos",
    "context": "Atene"
  },
  {
    "name": "Areopago",
    "file": "atene.html",
    "id": "areopago",
    "context": "Atene"
  },
  {
    "name": "Agorà Romana",
    "file": "atene.html",
    "id": "agor-romana",
    "context": "Atene"
  },
  {
    "name": "Torre dei Venti",
    "file": "atene.html",
    "id": "torre-dei-venti",
    "context": "Atene"
  },
  {
    "name": "Biblioteca di Adriano",
    "file": "atene.html",
    "id": "biblioteca-di-adriano",
    "context": "Atene"
  },
  {
    "name": "Arco di Adriano",
    "file": "atene.html",
    "id": "arco-di-adriano",
    "context": "Atene"
  },
  {
    "name": "Tempio di Zeus Olimpio (Olympieion)",
    "file": "atene.html",
    "id": "tempio-di-zeus-olimpio-olympieion",
    "context": "Atene"
  },
  {
    "name": "Monumento di Lisicrate",
    "file": "atene.html",
    "id": "monumento-di-lisicrate",
    "context": "Atene"
  },
  {
    "name": "Pnice",
    "file": "atene.html",
    "id": "pnice",
    "context": "Atene"
  },
  {
    "name": "Collina di Filopappo",
    "file": "atene.html",
    "id": "collina-di-filopappo",
    "context": "Atene"
  },
  {
    "name": "Kerameikos",
    "file": "atene.html",
    "id": "kerameikos",
    "context": "Atene"
  },
  {
    "name": "Museo Archeologico Nazionale",
    "file": "atene.html",
    "id": "museo-archeologico-nazionale",
    "context": "Atene"
  },
  {
    "name": "Plaka",
    "file": "atene.html",
    "id": "plaka",
    "context": "Atene"
  },
  {
    "name": "Anafiotika",
    "file": "atene.html",
    "id": "anafiotika",
    "context": "Atene"
  },
  {
    "name": "Monastiraki",
    "file": "atene.html",
    "id": "monastiraki",
    "context": "Atene"
  },
  {
    "name": "Psyrri",
    "file": "atene.html",
    "id": "psyrri",
    "context": "Atene"
  },
  {
    "name": "Thissio",
    "file": "atene.html",
    "id": "thissio",
    "context": "Atene"
  },
  {
    "name": "Koukaki",
    "file": "atene.html",
    "id": "koukaki",
    "context": "Atene"
  },
  {
    "name": "Kolonaki",
    "file": "atene.html",
    "id": "kolonaki",
    "context": "Atene"
  },
  {
    "name": "Exarchia",
    "file": "atene.html",
    "id": "exarchia",
    "context": "Atene"
  },
  {
    "name": "Porta dei Leoni e mura ciclopiche",
    "file": "micene.html",
    "id": "porta-dei-leoni-e-mura-ciclopiche",
    "context": "Micene"
  },
  {
    "name": "Palazzo e Megaron",
    "file": "micene.html",
    "id": "palazzo-e-megaron",
    "context": "Micene"
  },
  {
    "name": "Tesoro di Atreo (Tomba di Agamennone)",
    "file": "micene.html",
    "id": "tesoro-di-atreo-tomba-di-agamennone",
    "context": "Micene"
  },
  {
    "name": "Tomba di Clitemnestra",
    "file": "micene.html",
    "id": "tomba-di-clitemnestra",
    "context": "Micene"
  },
  {
    "name": "Museo Archeologico di Micene",
    "file": "micene.html",
    "id": "museo-archeologico-di-micene",
    "context": "Micene"
  },
  {
    "name": "Aspis — l'acropoli",
    "file": "argo.html",
    "id": "aspis-l-acropoli",
    "context": "Argo"
  },
  {
    "name": "Teatro antico",
    "file": "argo.html",
    "id": "teatro-antico",
    "context": "Argo"
  },
  {
    "name": "Agorà e Terme romane",
    "file": "argo.html",
    "id": "agor-e-terme-romane",
    "context": "Argo"
  },
  {
    "name": "Museo Archeologico di Argo",
    "file": "argo.html",
    "id": "museo-archeologico-di-argo",
    "context": "Argo"
  },
  {
    "name": "Santuario di Apollo — Via Sacra e Tesori votivi",
    "file": "delfi.html",
    "id": "santuario-di-apollo-via-sacra-e-tesori-votivi",
    "context": "Delfi"
  },
  {
    "name": "Tesoro degli Ateniesi",
    "file": "delfi.html",
    "id": "tesoro-degli-ateniesi",
    "context": "Delfi"
  },
  {
    "name": "Tempio di Apollo",
    "file": "delfi.html",
    "id": "tempio-di-apollo",
    "context": "Delfi"
  },
  {
    "name": "Teatro",
    "file": "delfi.html",
    "id": "teatro",
    "context": "Delfi"
  },
  {
    "name": "Stadio",
    "file": "delfi.html",
    "id": "stadio",
    "context": "Delfi"
  },
  {
    "name": "Tempio di Atena Pronaia (Marmaria)",
    "file": "delfi.html",
    "id": "tempio-di-atena-pronaia-marmaria",
    "context": "Delfi"
  },
  {
    "name": "Museo Archeologico di Delfi",
    "file": "delfi.html",
    "id": "museo-archeologico-di-delfi",
    "context": "Delfi"
  },
  {
    "name": "Teatro Antico di Sparta",
    "file": "sparta.html",
    "id": "teatro-antico-di-sparta",
    "context": "Sparta"
  },
  {
    "name": "Acropoli",
    "file": "sparta.html",
    "id": "acropoli",
    "context": "Sparta"
  },
  {
    "name": "Tempio di Atena Chalkioikos",
    "file": "sparta.html",
    "id": "tempio-di-atena-chalkioikos",
    "context": "Sparta"
  },
  {
    "name": "Museo Archeologico di Sparta",
    "file": "sparta.html",
    "id": "museo-archeologico-di-sparta",
    "context": "Sparta"
  },
  {
    "name": "Menelaion",
    "file": "sparta.html",
    "id": "menelaion",
    "context": "Sparta"
  },
  {
    "name": "Tempio di Apollo",
    "file": "corinto.html",
    "id": "tempio-di-apollo",
    "context": "Corinto"
  },
  {
    "name": "Fontana di Peirene",
    "file": "corinto.html",
    "id": "fontana-di-peirene",
    "context": "Corinto"
  },
  {
    "name": "Agorà e Via di Lechaion",
    "file": "corinto.html",
    "id": "agor-e-via-di-lechaion",
    "context": "Corinto"
  },
  {
    "name": "Bema di Corinto",
    "file": "corinto.html",
    "id": "bema-di-corinto",
    "context": "Corinto"
  },
  {
    "name": "Museo Archeologico di Corinto",
    "file": "corinto.html",
    "id": "museo-archeologico-di-corinto",
    "context": "Corinto"
  },
  {
    "name": "Acrocorinto",
    "file": "corinto.html",
    "id": "acrocorinto",
    "context": "Corinto"
  },
  {
    "name": "Fortezza di Palamidi",
    "file": "nauplia.html",
    "id": "fortezza-di-palamidi",
    "context": "Nauplia"
  },
  {
    "name": "Acronauplia",
    "file": "nauplia.html",
    "id": "acronauplia",
    "context": "Nauplia"
  },
  {
    "name": "Bourtzi",
    "file": "nauplia.html",
    "id": "bourtzi",
    "context": "Nauplia"
  },
  {
    "name": "Città vecchia e Piazza Syntagma",
    "file": "nauplia.html",
    "id": "citt-vecchia-e-piazza-syntagma",
    "context": "Nauplia"
  },
  {
    "name": "Tempio di Zeus",
    "file": "olimpia.html",
    "id": "tempio-di-zeus",
    "context": "Olimpia"
  },
  {
    "name": "Tempio di Hera (Heraion)",
    "file": "olimpia.html",
    "id": "tempio-di-hera-heraion",
    "context": "Olimpia"
  },
  {
    "name": "Pelopion",
    "file": "olimpia.html",
    "id": "pelopion",
    "context": "Olimpia"
  },
  {
    "name": "Metroon",
    "file": "olimpia.html",
    "id": "metroon",
    "context": "Olimpia"
  },
  {
    "name": "Tesori",
    "file": "olimpia.html",
    "id": "tesori",
    "context": "Olimpia"
  },
  {
    "name": "Stoa dell'Eco",
    "file": "olimpia.html",
    "id": "stoa-dell-eco",
    "context": "Olimpia"
  },
  {
    "name": "Stoa Meridionale",
    "file": "olimpia.html",
    "id": "stoa-meridionale",
    "context": "Olimpia"
  },
  {
    "name": "Bouleuterion",
    "file": "olimpia.html",
    "id": "bouleuterion",
    "context": "Olimpia"
  },
  {
    "name": "Pritaneo (Prytaneion)",
    "file": "olimpia.html",
    "id": "pritaneo-prytaneion",
    "context": "Olimpia"
  },
  {
    "name": "Filippeion",
    "file": "olimpia.html",
    "id": "filippeion",
    "context": "Olimpia"
  },
  {
    "name": "Leonidaion",
    "file": "olimpia.html",
    "id": "leonidaion",
    "context": "Olimpia"
  },
  {
    "name": "Palestra",
    "file": "olimpia.html",
    "id": "palestra",
    "context": "Olimpia"
  },
  {
    "name": "Ginnasio",
    "file": "olimpia.html",
    "id": "ginnasio",
    "context": "Olimpia"
  },
  {
    "name": "Theokoleon",
    "file": "olimpia.html",
    "id": "theokoleon",
    "context": "Olimpia"
  },
  {
    "name": "Officina di Fidia",
    "file": "olimpia.html",
    "id": "officina-di-fidia",
    "context": "Olimpia"
  },
  {
    "name": "Terme del Kladeos",
    "file": "olimpia.html",
    "id": "terme-del-kladeos",
    "context": "Olimpia"
  },
  {
    "name": "Stadio",
    "file": "olimpia.html",
    "id": "stadio",
    "context": "Olimpia"
  },
  {
    "name": "Ippodromo",
    "file": "olimpia.html",
    "id": "ippodromo",
    "context": "Olimpia"
  },
  {
    "name": "Ninfeo di Erode Attico",
    "file": "olimpia.html",
    "id": "ninfeo-di-erode-attico",
    "context": "Olimpia"
  },
  {
    "name": "Museo Archeologico di Olimpia",
    "file": "olimpia.html",
    "id": "museo-archeologico-di-olimpia",
    "context": "Olimpia"
  },
  {
    "name": "Museo dei Giochi Olimpici Antichi",
    "file": "olimpia.html",
    "id": "museo-dei-giochi-olimpici-antichi",
    "context": "Olimpia"
  },
  {
    "name": "Mura Ciclopiche",
    "file": "tirinto.html",
    "id": "mura-ciclopiche",
    "context": "Tirinto"
  },
  {
    "name": "Propilei e rampa d'accesso",
    "file": "tirinto.html",
    "id": "propilei-e-rampa-d-accesso",
    "context": "Tirinto"
  },
  {
    "name": "Palazzo e Megaron",
    "file": "tirinto.html",
    "id": "palazzo-e-megaron",
    "context": "Tirinto"
  },
  {
    "name": "Gallerie a volta e casematte",
    "file": "tirinto.html",
    "id": "gallerie-a-volta-e-casematte",
    "context": "Tirinto"
  },
  {
    "name": "Metropoli (Agios Dimitrios)",
    "file": "mistra.html",
    "id": "metropoli-agios-dimitrios",
    "context": "Mistrà"
  },
  {
    "name": "Monastero di Vrontochion (Afendiko)",
    "file": "mistra.html",
    "id": "monastero-di-vrontochion-afendiko",
    "context": "Mistrà"
  },
  {
    "name": "Monastero di Peribleptos",
    "file": "mistra.html",
    "id": "monastero-di-peribleptos",
    "context": "Mistrà"
  },
  {
    "name": "Monastero di Pantanassa",
    "file": "mistra.html",
    "id": "monastero-di-pantanassa",
    "context": "Mistrà"
  },
  {
    "name": "Palazzo dei Despoti",
    "file": "mistra.html",
    "id": "palazzo-dei-despoti",
    "context": "Mistrà"
  },
  {
    "name": "Santa Sofia",
    "file": "mistra.html",
    "id": "santa-sofia",
    "context": "Mistrà"
  },
  {
    "name": "Castello (Kastro)",
    "file": "mistra.html",
    "id": "castello-kastro",
    "context": "Mistrà"
  },
  {
    "name": "Le Rocce di Meteora (geologia e storia)",
    "file": "meteora.html",
    "id": "le-rocce-di-meteora-geologia-e-storia",
    "context": "Meteora"
  },
  {
    "name": "Grande Meteora (Trasfigurazione)",
    "file": "meteora.html",
    "id": "grande-meteora-trasfigurazione",
    "context": "Meteora"
  },
  {
    "name": "Varlaam",
    "file": "meteora.html",
    "id": "varlaam",
    "context": "Meteora"
  },
  {
    "name": "Rousanou (Santa Barbara)",
    "file": "meteora.html",
    "id": "rousanou-santa-barbara",
    "context": "Meteora"
  },
  {
    "name": "San Nicola Anapafsas",
    "file": "meteora.html",
    "id": "san-nicola-anapafsas",
    "context": "Meteora"
  },
  {
    "name": "Santa Trinità",
    "file": "meteora.html",
    "id": "santa-trinit",
    "context": "Meteora"
  },
  {
    "name": "Santo Stefano",
    "file": "meteora.html",
    "id": "santo-stefano",
    "context": "Meteora"
  },
  {
    "name": "Kalabaka",
    "file": "meteora.html",
    "id": "kalabaka",
    "context": "Meteora"
  },
  {
    "name": "Kastraki",
    "file": "meteora.html",
    "id": "kastraki",
    "context": "Meteora"
  },
  {
    "name": "Zeus",
    "file": "mitologia.html",
    "id": "zeus",
    "context": "Mitologia Greca"
  },
  {
    "name": "Era",
    "file": "mitologia.html",
    "id": "era",
    "context": "Mitologia Greca"
  },
  {
    "name": "Poseidone",
    "file": "mitologia.html",
    "id": "poseidone",
    "context": "Mitologia Greca"
  },
  {
    "name": "Atena",
    "file": "mitologia.html",
    "id": "atena",
    "context": "Mitologia Greca"
  },
  {
    "name": "Apollo",
    "file": "mitologia.html",
    "id": "apollo",
    "context": "Mitologia Greca"
  },
  {
    "name": "Artemide",
    "file": "mitologia.html",
    "id": "artemide",
    "context": "Mitologia Greca"
  },
  {
    "name": "Demetra",
    "file": "mitologia.html",
    "id": "demetra",
    "context": "Mitologia Greca"
  },
  {
    "name": "Dioniso",
    "file": "mitologia.html",
    "id": "dioniso",
    "context": "Mitologia Greca"
  },
  {
    "name": "Afrodite",
    "file": "mitologia.html",
    "id": "afrodite",
    "context": "Mitologia Greca"
  },
  {
    "name": "Ares",
    "file": "mitologia.html",
    "id": "ares",
    "context": "Mitologia Greca"
  },
  {
    "name": "Efesto",
    "file": "mitologia.html",
    "id": "efesto",
    "context": "Mitologia Greca"
  },
  {
    "name": "Ermes",
    "file": "mitologia.html",
    "id": "ermes",
    "context": "Mitologia Greca"
  },
  {
    "name": "Estia",
    "file": "mitologia.html",
    "id": "estia",
    "context": "Mitologia Greca"
  },
  {
    "name": "Eracle",
    "file": "mitologia.html",
    "id": "eracle",
    "context": "Mitologia Greca"
  },
  {
    "name": "Teseo",
    "file": "mitologia.html",
    "id": "teseo",
    "context": "Mitologia Greca"
  },
  {
    "name": "Perseo",
    "file": "mitologia.html",
    "id": "perseo",
    "context": "Mitologia Greca"
  },
  {
    "name": "Pelope",
    "file": "mitologia.html",
    "id": "pelope",
    "context": "Mitologia Greca"
  },
  {
    "name": "Bellerofonte",
    "file": "mitologia.html",
    "id": "bellerofonte",
    "context": "Mitologia Greca"
  },
  {
    "name": "Giasone",
    "file": "mitologia.html",
    "id": "giasone",
    "context": "Mitologia Greca"
  },
  {
    "name": "Achille",
    "file": "mitologia.html",
    "id": "achille",
    "context": "Mitologia Greca"
  },
  {
    "name": "Il Ciclo degli Atridi",
    "file": "mitologia.html",
    "id": "il-ciclo-degli-atridi",
    "context": "Mitologia Greca"
  },
  {
    "name": "La Guerra di Troia",
    "file": "mitologia.html",
    "id": "la-guerra-di-troia",
    "context": "Mitologia Greca"
  },
  {
    "name": "Il Ciclo di Argo (Danao, Perseo, Io)",
    "file": "mitologia.html",
    "id": "il-ciclo-di-argo-danao-perseo-io",
    "context": "Mitologia Greca"
  },
  {
    "name": "Medea e Giasone",
    "file": "mitologia.html",
    "id": "medea-e-giasone",
    "context": "Mitologia Greca"
  },
  {
    "name": "Le Origini di Atene (Cecrope, Erittonio)",
    "file": "mitologia.html",
    "id": "le-origini-di-atene-cecrope-erittonio",
    "context": "Mitologia Greca"
  },
  {
    "name": "Le Amazzoni",
    "file": "mitologia.html",
    "id": "le-amazzoni",
    "context": "Mitologia Greca"
  },
  {
    "name": "I Centauri",
    "file": "mitologia.html",
    "id": "i-centauri",
    "context": "Mitologia Greca"
  },
  {
    "name": "I Giganti",
    "file": "mitologia.html",
    "id": "i-giganti",
    "context": "Mitologia Greca"
  },
  {
    "name": "Il Minotauro",
    "file": "mitologia.html",
    "id": "il-minotauro",
    "context": "Mitologia Greca"
  },
  {
    "name": "Medusa e le Gorgoni",
    "file": "mitologia.html",
    "id": "medusa-e-le-gorgoni",
    "context": "Mitologia Greca"
  },
  {
    "name": "I Ciclopi",
    "file": "mitologia.html",
    "id": "i-ciclopi",
    "context": "Mitologia Greca"
  },
  {
    "name": "Solone",
    "file": "personaggi.html",
    "id": "solone",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Clistene",
    "file": "personaggi.html",
    "id": "clistene",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Leonida",
    "file": "personaggi.html",
    "id": "leonida",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Temistocle",
    "file": "personaggi.html",
    "id": "temistocle",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Pericle",
    "file": "personaggi.html",
    "id": "pericle",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Demostene",
    "file": "personaggi.html",
    "id": "demostene",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Alessandro Magno",
    "file": "personaggi.html",
    "id": "alessandro-magno",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Socrate",
    "file": "personaggi.html",
    "id": "socrate",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Platone",
    "file": "personaggi.html",
    "id": "platone",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Aristotele",
    "file": "personaggi.html",
    "id": "aristotele",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Eschilo",
    "file": "personaggi.html",
    "id": "eschilo",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Sofocle",
    "file": "personaggi.html",
    "id": "sofocle",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Euripide",
    "file": "personaggi.html",
    "id": "euripide",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Fidia",
    "file": "personaggi.html",
    "id": "fidia",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Adriano",
    "file": "personaggi.html",
    "id": "adriano",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Erode Attico",
    "file": "personaggi.html",
    "id": "erode-attico",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "Pausania (il viaggiatore)",
    "file": "personaggi.html",
    "id": "pausania-il-viaggiatore",
    "context": "Personaggi Storici Greci"
  },
  {
    "name": "La Città di Stirling",
    "file": "stirling.html",
    "id": "la-citta-di-stirling",
    "context": "Stirling"
  },
  {
    "name": "Il Castello di Stirling",
    "file": "stirling.html",
    "id": "il-castello-di-stirling",
    "context": "Stirling"
  },
  {
    "name": "National Wallace Monument",
    "file": "stirling.html",
    "id": "national-wallace-monument",
    "context": "Stirling"
  },
  {
    "name": "I Trossachs — quadro generale",
    "file": "trossachs.html",
    "id": "i-trossachs-quadro-generale",
    "context": "I Trossachs"
  },
  {
    "name": "Loch Lomond",
    "file": "trossachs.html",
    "id": "loch-lomond",
    "context": "I Trossachs"
  },
  {
    "name": "Loch Katrine",
    "file": "trossachs.html",
    "id": "loch-katrine",
    "context": "I Trossachs"
  },
  {
    "name": "Duke's Pass e Aberfoyle",
    "file": "trossachs.html",
    "id": "duke-s-pass-e-aberfoyle",
    "context": "I Trossachs"
  },
  {
    "name": "Balquhidder",
    "file": "trossachs.html",
    "id": "balquhidder",
    "context": "I Trossachs"
  },
  {
    "name": "Tweed Valley",
    "file": "scottish-borders.html",
    "id": "tweed-valley",
    "context": "Scottish Borders"
  },
  {
    "name": "Rosslyn Chapel",
    "file": "scottish-borders.html",
    "id": "rosslyn-chapel",
    "context": "Scottish Borders"
  },
  {
    "name": "Abbotsford House",
    "file": "scottish-borders.html",
    "id": "abbotsford-house",
    "context": "Scottish Borders"
  },
  {
    "name": "I Cairngorms",
    "file": "cairngorms.html",
    "id": "i-cairngorms",
    "context": "Cairngorms & Highlands Orientali"
  },
  {
    "name": "Balmoral Castle",
    "file": "cairngorms.html",
    "id": "balmoral-castle",
    "context": "Cairngorms & Highlands Orientali"
  },
  {
    "name": "Blair Castle",
    "file": "cairngorms.html",
    "id": "blair-castle",
    "context": "Cairngorms & Highlands Orientali"
  },
  {
    "name": "Edimburgo — quadro storico generale",
    "file": "edimburgo-scozia.html",
    "id": "edimburgo-quadro-storico-generale",
    "context": "Edimburgo"
  },
  {
    "name": "Il Castello di Edimburgo",
    "file": "edimburgo-scozia.html",
    "id": "il-castello-di-edimburgo",
    "context": "Edimburgo"
  },
  {
    "name": "La Cattedrale di St. Giles",
    "file": "edimburgo-scozia.html",
    "id": "la-cattedrale-di-st-giles",
    "context": "Edimburgo"
  },
  {
    "name": "Il Palazzo di Holyroodhouse",
    "file": "edimburgo-scozia.html",
    "id": "il-palazzo-di-holyroodhouse",
    "context": "Edimburgo"
  },
  {
    "name": "Dean Village e il Water of Leith",
    "file": "edimburgo-scozia.html",
    "id": "dean-village-e-il-water-of-leith",
    "context": "Edimburgo"
  },
  {
    "name": "Il Great Glen",
    "file": "great-glen.html",
    "id": "il-great-glen",
    "context": "Great Glen"
  },
  {
    "name": "Loch Ness",
    "file": "great-glen.html",
    "id": "loch-ness",
    "context": "Great Glen"
  },
  {
    "name": "Urquhart Castle",
    "file": "great-glen.html",
    "id": "urquhart-castle",
    "context": "Great Glen"
  },
  {
    "name": "Inverness",
    "file": "great-glen.html",
    "id": "inverness",
    "context": "Great Glen"
  },
  {
    "name": "Glencoe",
    "file": "highlands-occidentali.html",
    "id": "glencoe",
    "context": "Highlands Occidentali"
  },
  {
    "name": "Glen Nevis e Ben Nevis",
    "file": "highlands-occidentali.html",
    "id": "glen-nevis-e-ben-nevis",
    "context": "Highlands Occidentali"
  },
  {
    "name": "Isola di Skye",
    "file": "highlands-occidentali.html",
    "id": "isola-di-skye",
    "context": "Highlands Occidentali"
  },
  {
    "name": "Il Castello di Eilean Donan",
    "file": "highlands-occidentali.html",
    "id": "il-castello-di-eilean-donan",
    "context": "Highlands Occidentali"
  },
  {
    "name": "Wester Ross",
    "file": "highlands-occidentali.html",
    "id": "wester-ross",
    "context": "Highlands Occidentali"
  },
  {
    "name": "William Wallace",
    "file": "personaggi-scozia.html",
    "id": "william-wallace",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "Robert the Bruce",
    "file": "personaggi-scozia.html",
    "id": "robert-the-bruce",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "Maria Stuarda",
    "file": "personaggi-scozia.html",
    "id": "maria-stuarda",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "John Knox",
    "file": "personaggi-scozia.html",
    "id": "john-knox",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "Rob Roy MacGregor",
    "file": "personaggi-scozia.html",
    "id": "rob-roy-macgregor",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "Bonnie Prince Charlie",
    "file": "personaggi-scozia.html",
    "id": "bonnie-prince-charlie",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "Sir Walter Scott",
    "file": "personaggi-scozia.html",
    "id": "sir-walter-scott",
    "context": "Personaggi Scozzesi"
  },
  {
    "name": "I Clan Scozzesi",
    "file": "extra-scozia.html",
    "id": "i-clan-scozzesi",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Il tessuto Tweed",
    "file": "extra-scozia.html",
    "id": "il-tessuto-tweed",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Lo Scotch Whisky",
    "file": "extra-scozia.html",
    "id": "lo-scotch-whisky",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "La Birra Scozzese",
    "file": "extra-scozia.html",
    "id": "la-birra-scozzese",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Cosa Mangiare in Scozia",
    "file": "extra-scozia.html",
    "id": "cosa-mangiare-in-scozia",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Flora e Fauna della Scozia",
    "file": "extra-scozia.html",
    "id": "flora-e-fauna-della-scozia",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Le Lingue della Scozia",
    "file": "extra-scozia.html",
    "id": "le-lingue-della-scozia",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Tartan, Kilt e Simboli Scozzesi",
    "file": "extra-scozia.html",
    "id": "tartan-kilt-e-simboli-scozzesi",
    "context": "Cultura e Tradizioni (Scozia)"
  },
  {
    "name": "Storia della Scozia",
    "file": "scozia-generale.html",
    "id": "storia-della-scozia",
    "context": "Scozia — Storia e Geografia"
  },
  {
    "name": "Geografia della Scozia",
    "file": "scozia-generale.html",
    "id": "geografia-della-scozia",
    "context": "Scozia — Storia e Geografia"
  },
  {
    "name": "Geologia della Scozia",
    "file": "scozia-generale.html",
    "id": "geologia-della-scozia",
    "context": "Scozia — Storia e Geografia"
  },
  {
    "name": "Il Vallo di Adriano",
    "file": "scozia-generale.html",
    "id": "il-vallo-di-adriano",
    "context": "Scozia — Storia e Geografia"
  },
  {
    "name": "York",
    "file": "scozia-generale.html",
    "id": "york",
    "context": "Scozia — Storia e Geografia"
  },
  {
    "name": "Fountains Abbey",
    "file": "scozia-generale.html",
    "id": "fountains-abbey",
    "context": "Scozia — Storia e Geografia"
  },
  {
    "name": "Autun",
    "file": "borgogna.html",
    "id": "autun",
    "context": "Borgogna"
  },
  {
    "name": "Noyers-sur-Serein",
    "file": "borgogna.html",
    "id": "noyers-sur-serein",
    "context": "Borgogna"
  },
  {
    "name": "Château d'Ancy-le-Franc",
    "file": "borgogna.html",
    "id": "chateau-d-ancy-le-franc",
    "context": "Borgogna"
  },
  {
    "name": "Château de Tanlay",
    "file": "borgogna.html",
    "id": "chateau-de-tanlay",
    "context": "Borgogna"
  },
  {
    "name": "Abbazia di Pontigny",
    "file": "borgogna.html",
    "id": "abbazia-di-pontigny",
    "context": "Borgogna"
  },
  {
    "name": "Auxerre",
    "file": "borgogna.html",
    "id": "auxerre",
    "context": "Borgogna"
  },
  {
    "name": "Châteauneuf-en-Auxois",
    "file": "borgogna.html",
    "id": "chateauneuf-en-auxois",
    "context": "Borgogna"
  },
  {
    "name": "Digione",
    "file": "borgogna.html",
    "id": "digione",
    "context": "Borgogna"
  },
  {
    "name": "Clos de Vougeot & la Côte de Nuits",
    "file": "borgogna.html",
    "id": "clos-de-vougeot-la-cote-de-nuits",
    "context": "Borgogna"
  },
  {
    "name": "Beaune",
    "file": "borgogna.html",
    "id": "beaune",
    "context": "Borgogna"
  },
  {
    "name": "Abbazia di Fontenay",
    "file": "borgogna.html",
    "id": "abbazia-di-fontenay",
    "context": "Borgogna"
  },
  {
    "name": "Flavigny-sur-Ozerain",
    "file": "borgogna.html",
    "id": "flavigny-sur-ozerain",
    "context": "Borgogna"
  },
  {
    "name": "Semur-en-Auxois",
    "file": "borgogna.html",
    "id": "semur-en-auxois",
    "context": "Borgogna"
  },
  {
    "name": "Paray-le-Monial",
    "file": "borgogna.html",
    "id": "paray-le-monial",
    "context": "Borgogna"
  },
  {
    "name": "Cluny",
    "file": "borgogna.html",
    "id": "cluny",
    "context": "Borgogna"
  },
  {
    "name": "Château de Cormatin",
    "file": "borgogna.html",
    "id": "chateau-de-cormatin",
    "context": "Borgogna"
  },
  {
    "name": "Vézelay",
    "file": "borgogna.html",
    "id": "vezelay",
    "context": "Borgogna"
  },
  {
    "name": "Avallon",
    "file": "borgogna.html",
    "id": "avallon",
    "context": "Borgogna"
  },
  {
    "name": "Château de Bazoches",
    "file": "borgogna.html",
    "id": "chateau-de-bazoches",
    "context": "Borgogna"
  },
  {
    "name": "Bibracte",
    "file": "borgogna.html",
    "id": "bibracte",
    "context": "Borgogna"
  },
  {
    "name": "Autun gallo-romana",
    "file": "borgogna.html",
    "id": "autun-gallo-romana",
    "context": "Borgogna"
  },
  {
    "name": "Guédelon",
    "file": "borgogna.html",
    "id": "guedelon",
    "context": "Borgogna"
  },
  {
    "name": "Storia di Brescia",
    "file": "brescia.html",
    "id": "storia-di-brescia",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Parco Archeologico di Brescia Romana",
    "file": "brescia.html",
    "id": "parco-archeologico-di-brescia-romana",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Pinacoteca Tosio Martinengo",
    "file": "brescia.html",
    "id": "pinacoteca-tosio-martinengo",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Castello di Brescia",
    "file": "brescia.html",
    "id": "castello-di-brescia",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Duomo Vecchio (la Rotonda)",
    "file": "brescia.html",
    "id": "duomo-vecchio-la-rotonda",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Duomo Nuovo",
    "file": "brescia.html",
    "id": "duomo-nuovo",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Broletto e Torre del Popolo",
    "file": "brescia.html",
    "id": "broletto-e-torre-del-popolo",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Monastero di San Salvatore-Santa Giulia",
    "file": "brescia.html",
    "id": "monastero-di-san-salvatore-santa-giulia",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Torri viscontee",
    "file": "brescia.html",
    "id": "torri-viscontee",
    "context": "Brescia (Lombardia)"
  },
  {
    "name": "Storia di Genova",
    "file": "genova.html",
    "id": "storia-di-genova",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Le grandi famiglie di Genova",
    "file": "genova.html",
    "id": "le-grandi-famiglie-di-genova",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Musei di Strada Nuova",
    "file": "genova.html",
    "id": "musei-di-strada-nuova",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Palazzo Rosso",
    "file": "genova.html",
    "id": "palazzo-rosso",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Palazzo Bianco",
    "file": "genova.html",
    "id": "palazzo-bianco",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Palazzo Doria Tursi",
    "file": "genova.html",
    "id": "palazzo-doria-tursi",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Caruggi (Centro Storico)",
    "file": "genova.html",
    "id": "caruggi-centro-storico",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Palazzo Reale",
    "file": "genova.html",
    "id": "palazzo-reale",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Chiesa della Santissima Annunziata del Vastato",
    "file": "genova.html",
    "id": "chiesa-della-santissima-annunziata-del-vastato",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Cattedrale di San Lorenzo",
    "file": "genova.html",
    "id": "cattedrale-di-san-lorenzo",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Porto Antico",
    "file": "genova.html",
    "id": "porto-antico",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Palazzo Spinola",
    "file": "genova.html",
    "id": "palazzo-spinola",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Acquario di Genova",
    "file": "genova.html",
    "id": "acquario-di-genova",
    "context": "Genova (Liguria)"
  },
  {
    "name": "Galata Museo del Mare",
    "file": "genova.html",
    "id": "galata-museo-del-mare",
    "context": "Genova (Liguria)"
  },
  {
    "name": "La storia della Borgogna in sette epoche",
    "file": "borgogna-storia.html",
    "id": null,
    "context": "Borgogna — Approfondimento"
  },
  {
    "name": "Cluny e Cîteaux",
    "file": "borgogna-cluny-citeaux.html",
    "id": null,
    "context": "Borgogna — Approfondimento"
  },
  {
    "name": "Il romanico borgognone",
    "file": "borgogna-romanico.html",
    "id": null,
    "context": "Borgogna — Approfondimento"
  },
  {
    "name": "I Climats di Borgogna",
    "file": "borgogna-climats.html",
    "id": null,
    "context": "Borgogna — Approfondimento"
  }
];
