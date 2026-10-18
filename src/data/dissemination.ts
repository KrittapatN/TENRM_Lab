import type { Bi } from '../lib/lang';
import type { LeaderId } from './people';

export type OutputType = 'journal' | 'conference' | 'book' | 'thesis';
export type ThesisLevel = 'dissertation' | 'thesis' | 'senior';

export interface Site {
  name: Bi;
  lat: number;
  lng: number;
}

export interface Output {
  id: string;
  type: OutputType;
  thesisLevel?: ThesisLevel;
  bookKind?: 'book' | 'chapter' | 'library';
  title: string;
  authors: string;
  venue: string;
  year?: number;
  leaders: LeaderId[];
  tags: string[];
  sites?: string[];
  partners?: string[];
  url?: string;
}

export const outputTypes: { id: OutputType; label: Bi }[] = [
  { id: 'journal', label: { en: 'Journal', th: 'วารสาร' } },
  { id: 'conference', label: { en: 'Conference', th: 'การประชุมวิชาการ' } },
  { id: 'book', label: { en: 'Book', th: 'หนังสือ' } },
  { id: 'thesis', label: { en: 'Thesis', th: 'วิทยานิพนธ์' } },
];

export const thesisLevels: { id: ThesisLevel; label: Bi }[] = [
  { id: 'dissertation', label: { en: 'Dissertation', th: 'ดุษฎีนิพนธ์' } },
  { id: 'thesis', label: { en: 'Thesis', th: 'วิทยานิพนธ์' } },
  { id: 'senior', label: { en: 'Senior project', th: 'โครงงานวิทยาศาสตร์' } },
];

export const tags: Record<string, Bi> = {
  commod: { en: 'Companion modelling', th: 'แบบจำลองเพื่อนร่วมทาง' },
  games: { en: 'Games & simulation', th: 'เกมและสถานการณ์จำลอง' },
  coproduction: { en: 'Co-production', th: 'การสร้างความรู้ร่วม' },
  landuse: { en: 'Land-use change', th: 'การเปลี่ยนแปลงการใช้ที่ดิน' },
  forest: { en: 'Forest ecology', th: 'นิเวศวิทยาป่าไม้' },
  urban: { en: 'Urban ecology', th: 'นิเวศวิทยาเมือง' },
  birds: { en: 'Birds', th: 'นก' },
  agro: { en: 'Agroecology', th: 'นิเวศเกษตร' },
  onehealth: { en: 'One Health', th: 'สุขภาพหนึ่งเดียว' },
  coastal: { en: 'Coastal & marine', th: 'ชายฝั่งและทะเล' },
  herp: { en: 'Reptiles', th: 'สัตว์เลื้อยคลาน' },
  soil: { en: 'Soil & fungi', th: 'ดินและเห็ดรา' },
  biocontrol: { en: 'Biological control', th: 'การควบคุมโดยชีววิธี' },
};

export const partners: Record<string, Bi> = {
  cirad: { en: 'CIRAD, France', th: 'CIRAD ประเทศฝรั่งเศส' },
};

export const sites: Record<string, Site> = {
  nan: { name: { en: 'Nan Province', th: 'จังหวัดน่าน' }, lat: 18.7756, lng: 100.773 },
  bangkok: { name: { en: 'Bangkok', th: 'กรุงเทพมหานคร' }, lat: 13.7563, lng: 100.5018 },
  sathingphra: { name: { en: 'Sathing Phra, Songkhla', th: 'สทิงพระ สงขลา' }, lat: 7.475, lng: 100.43 },
  kungkrabaen: { name: { en: 'Kung Krabaen Bay, Chanthaburi', th: 'อ่าวคุ้งกระเบน จันทบุรี' }, lat: 12.58, lng: 101.9 },
  wianglor: { name: { en: 'Wiang Lor Wildlife Sanctuary, Phayao', th: 'เขตรักษาพันธุ์สัตว์ป่าเวียงลอ พะเยา' }, lat: 19.38, lng: 100.3 },
  similan: { name: { en: 'Payan Island, Similan Islands', th: 'เกาะปายัน หมู่เกาะสิมิลัน' }, lat: 8.65, lng: 97.64 },
  khonkaen: { name: { en: 'Ban Kok, Khon Kaen', th: 'บ้านโคก ขอนแก่น' }, lat: 16.44, lng: 102.83 },
  nakhonnayok: { name: { en: 'Ongkharak, Nakhon Nayok', th: 'องครักษ์ นครนายก' }, lat: 14.11, lng: 100.98 },
};

/** Google Scholar search for an exact title, used when no publisher link is recorded. */
export const scholarSearch = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${title}"`)}`;

// Source: public Google Scholar records of the three lab leaders (PD, NRD) and
// a Google Scholar search for VA, retrieved October 2026. Duplicate records,
// drafts and translations were merged. Edit freely as the lab curates its list.
export const outputs: Output[] = [
  // ---------- Journal ----------
  { id: 'j-zinnia-2025', type: 'journal', title: 'Flowering zinnia as companion plant increases predatory arthropod abundance and improves yard-long bean yield', authors: 'P Khongruang, K Rison, NR Disyatat, C Chaisuekul', venue: 'BioControl 70 (1), 19–31', year: 2025, leaders: ['nrd'], tags: ['biocontrol', 'agro'] },
  { id: 'j-exclusion-2025', type: 'journal', title: 'Exploring top-down control: an exclusion experiment in early stage of dipterocarp reforestation plots', authors: 'P Nuchpho, NR Disyatat, C Chaisuekul', venue: 'Journal of Tropical Ecology 41, e21', year: 2025, leaders: ['nrd'], tags: ['forest', 'biocontrol'] },
  { id: 'j-birdvideo-2026', type: 'journal', title: 'Complementing bird point counts with passive video monitoring at artificial perches and puddles in restoration area', authors: 'P Nuchpho, C Chaisuekul, NR Disyatat', venue: 'Journal of Forest Research, 1–9', year: 2026, leaders: ['nrd'], tags: ['birds', 'forest'] },
  { id: 'j-spiders-2026', type: 'journal', title: 'Prey deprivation drives sucrose feeding in the cursorial spiders, Carrhotus viduus (Araneae: Salticidae) and Oxyopes javanus (Araneae: Oxyopidae)', authors: 'P Khongruang, K Rison, NR Disyatat, C Chaisuekul', venue: 'Current Zoology, zoag015', year: 2026, leaders: ['nrd'], tags: ['biocontrol'] },
  { id: 'j-onehealth-2024', type: 'journal', title: 'A One Health approach to assess pesticide exposure levels in communities, domestic animals and wildlife in a rural landscape of Nan Province, Thailand', authors: 'A Kritiyakan, C Thinphovong, M Tanita, P Dumrongrojwatthana, et al.', venue: 'Human and Ecological Risk Assessment 30 (5–6), 436–461', year: 2024, leaders: ['pd'], tags: ['onehealth', 'agro'], sites: ['nan'] },
  { id: 'j-ecm-2023', type: 'journal', title: 'Temporal dynamics of ectomycorrhizal fungal communities in Shorea siamensis forest fragments', authors: 'P Pachit, J Piapukiew, NR Disyatat', venue: 'Fungal Ecology 61, 101208', year: 2023, leaders: ['nrd'], tags: ['soil', 'forest'] },
  { id: 'j-rainfall-2022', type: 'journal', title: 'Increased frequency of extreme rainfall events threatens an emblematic cultural coastal agroecosystem in Southeastern Thailand', authors: 'P Dumrongrojwatthana, G Lacombe, G Trébuil', venue: 'Regional Environmental Change 22 (2), 36', year: 2022, leaders: ['pd'], tags: ['agro', 'coastal'], partners: ['cirad'] },
  { id: 'j-malaria-2022', type: 'journal', title: 'Significant factors associated with malaria spread in Thailand: a cross-sectional study', authors: 'P Krainara, P Dumrongrojwatthana, P Bhattarakosol', venue: 'Journal of Health Research 36 (3), 515–523', year: 2022, leaders: ['pd'], tags: ['onehealth'] },
  { id: 'j-agility-2022', type: 'journal', title: 'Co-productive agility and four collaborative pathways to sustainability transformations', authors: 'JM Chambers, C Wyborn, NL Klenk, M Ryan, A Serban, NJ Bennett, et al.', venue: 'Global Environmental Change 72, 102422', year: 2022, leaders: ['pd'], tags: ['coproduction'] },
  { id: 'j-sixmodes-2021', type: 'journal', title: 'Six modes of co-production for sustainability', authors: 'JM Chambers, C Wyborn, ME Ryan, RS Reid, M Riechers, A Serban, et al.', venue: 'Nature Sustainability 4 (11), 983–996', year: 2021, leaders: ['pd'], tags: ['coproduction'] },
  { id: 'j-cf-ne-2021', type: 'journal', title: 'Participatory modelling and simulation to support community forestry in northern Thailand', authors: 'W Wimolsakcharoen, G Trébuil, P Dumrongrojwatthana, C Le Page, et al.', venue: 'Nature and Environment 10 (3)', year: 2021, leaders: ['pd'], tags: ['commod', 'forest'], partners: ['cirad'] },
  { id: 'j-cf-abm-2021', type: 'journal', title: 'An agent-based model to support community forest management and non-timber forest product harvesting in northern Thailand', authors: 'W Wimolsakcharoen, P Dumrongrojwatthana, C Le Page, F Bousquet, et al.', venue: 'Socio-Environmental Systems Modelling 3, 17894', year: 2021, leaders: ['pd'], tags: ['commod', 'forest'], partners: ['cirad'] },
  { id: 'j-sugarpalm-2020', type: 'journal', title: 'Driving factors and impact of land-use change in a fragile rainfed lowland rice-sugar palm cultural agroforestry system in southern Thailand', authors: 'P Dumrongrojwatthana, K Wanich, G Trébuil', venue: 'Sustainability Science 15 (5), 1317–1335', year: 2020, leaders: ['pd'], tags: ['landuse', 'agro'], sites: ['sathingphra'], partners: ['cirad'] },
  { id: 'j-greenroof-2020', type: 'journal', title: 'Rapid assessment checklist for green roof ecosystem services in Bangkok, Thailand', authors: 'R Phoomirat, NR Disyatat, TY Park, DK Lee, P Dumrongrojwatthana', venue: 'Ecological Processes 9 (1), 19', year: 2020, leaders: ['pd', 'nrd'], tags: ['urban'], sites: ['bangkok'] },
  { id: 'j-enzyme-2020', type: 'journal', title: 'Temporal changes in enzyme activities associated with ectomycorrhizas and soil from secondary deciduous dipterocarp forest fragments', authors: 'P Pachit, NR Disyatat, J Piapukiew', venue: 'Pedobiologia 81, 150661', year: 2020, leaders: ['nrd'], tags: ['soil', 'forest'] },
  { id: 'j-ntfp-2020', type: 'journal', title: "Production of non-timber forest products (NTFPs) and diversity of harvesters' practices and decision-making processes in northern Thailand community forests", authors: 'W Wimolsakcharoen, P Dumrongrojwatthana, G Trébuil', venue: 'Bois et Forêts des Tropiques 343, 39–52', year: 2020, leaders: ['pd'], tags: ['forest'], partners: ['cirad'] },
  { id: 'j-crab-2019', type: 'journal', title: 'The reproductive cycle of the female blue swimming crab Portunus pelagicus (Linnaeus, 1758) from Kung Krabaen Bay, the eastern Gulf of Thailand', authors: 'C Kunsook, P Dumrongrojwatthana', venue: 'Journal of Agricultural Science and Technology B 9 (4), 272–280', year: 2019, leaders: ['pd'], tags: ['coastal'], sites: ['kungkrabaen'] },
  { id: 'j-rpg-2018', type: 'journal', title: 'Role-playing game to create learning about farming in an area surrounded by national park', authors: 'S Pruksakorn, S Kiratiprayoon, S Uttaranakorn, O Sukreeyapongse, et al.', venue: 'Interdisciplinary Research Review 13 (3), 51–63', year: 2018, leaders: ['pd'], tags: ['games', 'agro'] },
  { id: 'j-soilgame-2018', type: 'journal', title: 'Game for low-formal education farmers to learn how to improve soil quality', authors: 'S Pruksakorn, S Kiratiprayoon, S Uttaranakorn, O Sukreeyapongse, et al.', venue: 'Simulation & Gaming 49 (2), 146–167', year: 2018, leaders: ['pd'], tags: ['games', 'agro'] },
  { id: 'j-media-2018', type: 'journal', title: 'Need of media for public relation in agricultural-tourism at Flower Ornamental Plant Village, Khlong 15, Ongkharak District, Nakhon Nayok Province', authors: 'S KongKeaw, K Lertpanich, V Aranyavalai, et al.', venue: 'King Mongkut’s Agricultural Journal 36 (1), 12–20', year: 2018, leaders: ['va'], tags: ['agro'], sites: ['nakhonnayok'], url: 'https://li01.tci-thaijo.org/index.php/agritechjournal/article/download/133039/99805' },
  { id: 'j-peafowl-2017', type: 'journal', title: 'Seasonal distribution and habitat use of the green peafowl Pavo muticus, Linnaeus 1766, in Wiang Lor Wildlife Sanctuary, Phayao Province, Northern Thailand', authors: 'G Saridnirun, W Meckvichai, P Dumrongrojwatthana', venue: 'Chiang Mai Journal of Science 44, 824–838', year: 2017, leaders: ['pd'], tags: ['birds', 'forest'], sites: ['wianglor'] },
  { id: 'j-portunid-2017', type: 'journal', title: 'Species diversity and abundance of marine crabs (Portunidae: Decapoda) from a collapsible crab trap fishery at Kung Krabaen Bay, Chanthaburi Province, Thailand', authors: 'C Kunsook, P Dumrongrojwatthana', venue: 'Tropical Life Sciences Research 28 (1), 45', year: 2017, leaders: ['pd'], tags: ['coastal'], sites: ['kungkrabaen'] },
  { id: 'j-ecm-2016', type: 'journal', title: 'Community structure and dynamics of ectomycorrhizal fungi in a dipterocarp forest fragment and plantation in Thailand', authors: 'N Ruankaew Disyatat, S Yomyart, P Sihanonth, J Piapukiew', venue: 'Plant Ecology & Diversity 9 (5–6), 577–588', year: 2016, leaders: ['nrd'], tags: ['soil', 'forest'] },
  { id: 'j-peafowl-2016', type: 'journal', title: 'Seasonal distribution and habitat use of green peafowl Pavo muticus Linnaeus, 1766, in Nam Whean Forest Protection Unit, Northern Thailand', authors: 'G Saridnirun, P Dumrongrojwatthana, W Meckvichai, et al.', venue: 'Walailak Journal of Science and Technology 13 (9), 729–744', year: 2016, leaders: ['pd'], tags: ['birds', 'forest'] },
  { id: 'j-spatial-2013', type: 'journal', title: 'Spatial representations are not neutral: lessons from a participatory agent-based modelling process in a land-use conflict', authors: 'C Barnaud, C Le Page, P Dumrongrojwatthana, G Trébuil', venue: 'Environmental Modelling & Software 45, 150–159', year: 2013, leaders: ['pd'], tags: ['commod', 'landuse'], partners: ['cirad'] },
  { id: 'j-tortoise-2013', type: 'journal', title: 'Population structure and reproduction of the elongated tortoise Indotestudo elongata (Blyth, 1853) at Ban Kok Village, Northeastern Thailand', authors: 'K Sriprateep, V Aranyavalai, et al.', venue: 'Tropical Natural History', year: 2013, leaders: ['va'], tags: ['herp'], sites: ['khonkaen'], url: 'https://li01.tci-thaijo.org/index.php/tnh/article/view/103039' },
  { id: 'j-lygosoma-2013', type: 'journal', title: 'Distribution and chromosomal variation in the scincid lizard genus Lygosoma (Reptilia: Squamata) in Thailand', authors: 'V Aranyavalai, K Lertpanich, W Chulalaksananukul', venue: 'Natural Science 5 (9), 993–996', year: 2013, leaders: ['va'], tags: ['herp'] },
  { id: 'j-herders-2011', type: 'journal', title: 'Co-constructing an agent-based model to mediate land use conflict between herders and foresters in northern Thailand', authors: 'P Dumrongrojwatthana, C Le Page, N Gajaseni, G Trébuil', venue: 'Journal of Land Use Science 6 (2–3), 101–120', year: 2011, leaders: ['pd'], tags: ['commod', 'landuse'], sites: ['nan'], partners: ['cirad'] },
  { id: 'j-commod-2010', type: 'journal', title: 'Companion modelling for integrated renewable resource management: a new collaborative approach to create common values for sustainable development', authors: 'N Ruankaew, C Le Page, P Dumrongrojwattana, C Barnaud, N Gajaseni, et al.', venue: 'International Journal of Sustainable Development & World Ecology 17 (1), 15–23', year: 2010, leaders: ['pd', 'nrd'], tags: ['commod'], partners: ['cirad'] },
  { id: 'j-namwa-2009', type: 'journal', title: 'Impacts of disturbance on floristic and soil properties in deciduous forest, Nam Wa sub-watershed, northern Thailand', authors: 'P Dumrongrojwatthana, N Gajaseni, A Popan', venue: 'Journal of Scientific Research, Chulalongkorn University 34, 49–57', year: 2009, leaders: ['pd'], tags: ['forest', 'soil'], sites: ['nan'] },
  { id: 'j-areastudy-2008', type: 'journal', title: 'Area study prior to companion modelling to integrate multiple interests in upper watershed management of Northern Thailand', authors: 'C Barnaud, G Trébuil, P Dumrongrojwatthana, J Marie', venue: 'Japanese Journal of Southeast Asian Studies 45 (4), 559–585', year: 2008, leaders: ['pd'], tags: ['commod', 'landuse'], sites: ['nan'], partners: ['cirad'] },
  { id: 'j-betta-2007', type: 'journal', title: 'Species diversity, distribution and habitat characteristics of wild bubble nesting betta (Betta spp.) in Thailand', authors: 'K Lertpanich, V Aranyavalai', venue: 'KMITL Science Journal 7 (1), 37–42', year: 2007, leaders: ['va'], tags: [] },
  { id: 'j-leiolepis-2004', type: 'journal', title: 'Karyotype and unisexuality of Leiolepis boehmei Darevsky and Kupriyanova, 1993 (Sauria: Agamidae) from southern Thailand', authors: 'V Aranyavalai, K Thirakhupt, et al.', venue: 'Tropical Natural History', year: 2004, leaders: ['va'], tags: ['herp'], url: 'https://li01.tci-thaijo.org/index.php/tnh/article/view/102903' },

  // ---------- Conference ----------
  { id: 'c-noise-2018', type: 'conference', title: 'Effect of noise on occurrence of birds in public parks, Bangkok', authors: 'P Aimvijarn, NR Disyatat', venue: 'Proceedings of the 44th Congress on Science and Technology of Thailand, 347–354', year: 2018, leaders: ['nrd'], tags: ['birds', 'urban'], sites: ['bangkok'] },
  { id: 'c-ntfp-game-2018', type: 'conference', title: "Gaming and simulation to explore harvesters' decision-making process of non-timber forest products (NTFPs) in community forests", authors: 'W Wimolsakcharoen, P Dumrongrojwatthana', venue: 'Conference paper', year: 2018, leaders: ['pd'], tags: ['games', 'forest'] },
  { id: 'c-greenroof-birds-2017', type: 'conference', title: 'Species diversity of birds utilizing green roofs in Bangkok', authors: 'P Sananunsakul, P Dumrongrojwatthana, NR Disyatat', venue: 'Proceedings of the 6th Burapha University International Conference, 426–434', year: 2017, leaders: ['pd', 'nrd'], tags: ['birds', 'urban'], sites: ['bangkok'] },
  { id: 'c-water-2015', type: 'conference', title: "Companion modelling for resilient water management: stakeholders' perceptions of water dynamics and collective learning at catchment scale", authors: 'P Buchheit, P Campo, P Dumrongrojwatthana, P Promburom', venue: 'Modelling and Simulation Society of Australia and New Zealand (MODSIM)', year: 2015, leaders: ['pd'], tags: ['commod'] },
  { id: 'c-microarthropods-2015', type: 'conference', title: 'Soil microarthropods in reforested area of Dipterocarpus seedlings at different stages', authors: 'C Seweewallop, NR Disyatat, C Chaisuekul', venue: 'Proceedings of the 3rd National Meeting on Biodiversity Management in Thailand', year: 2015, leaders: ['nrd'], tags: ['soil', 'forest'] },
  { id: 'c-predators-2015', type: 'conference', title: 'Diversity and abundance of predatory arthropods in sunflower and sunnhemp patches', authors: 'R Senadee, NR Disyatat, C Chaisuekul', venue: 'Proceedings of the 3rd National Meeting on Biodiversity Management in Thailand', year: 2015, leaders: ['nrd'], tags: ['biocontrol', 'agro'] },
  { id: 'c-isda-2010', type: 'conference', title: "Exploring synergies between farmers' livelihoods, forest conservation and social equity: participatory simulations for creative negotiation in Thailand highlands", authors: 'C Barnaud, C Le Page, P Dumrongrojwatthana, G Trébuil', venue: 'ISDA 2010 (Innovation and Sustainable Development in Agriculture and Food)', year: 2010, leaders: ['pd'], tags: ['commod', 'games'], partners: ['cirad'] },
  { id: 'c-sloping-2007', type: 'conference', title: 'Initial analysis for companion modelling to meet the needs of multiple interests in upper watershed management', authors: 'C Barnaud, P Dumrongrojwatthana, J Marie, C Le Page, G Trébuil', venue: 'International Conference on Sustainable Sloping Lands and Watershed Management', year: 2007, leaders: ['pd'], tags: ['commod'], partners: ['cirad'] },
  { id: 'c-nicobar-2002', type: 'conference', title: 'The breeding ecology of the Nicobar pigeon on Payan Island, Similan National Park, Thailand', authors: 'P Dumrongrojwatthana, W Meckvichai', venue: '23rd International Ornithological Congress (abstract)', year: 2002, leaders: ['pd'], tags: ['birds', 'coastal'], sites: ['similan'] },

  // ---------- Book ----------
  { id: 'b-anyflip', type: 'book', bookKind: 'library', title: 'TENRM Lab e-book library', authors: 'TENRM Lab', venue: 'AnyFlip — learning manuals, game guides and field books', leaders: [], tags: [], url: 'https://anyflip.com/homepage/tqmmg/' },
  { id: 'b-extinction-2024', type: 'book', bookKind: 'book', title: 'On the Edge of the Sixth Mass Extinction in Biodiversity Hotspots: Facts, needs, solutions and opportunities in Thailand and adjacent countries', authors: 'J Claude, N Kitana, et al.', venue: 'CU Press', year: 2024, leaders: ['pd', 'nrd'], tags: [] },
  { id: 'b-urbanbirds-2024', type: 'book', bookKind: 'chapter', title: 'Urban ecosystems as alternative habitats for birds', authors: 'NR Disyatat, P Dumrongrojwatthana, P Sananunsakul, R Phoomirat, et al.', venue: 'In: On the Edge of the Sixth Mass Extinction (CU Press), p. 53', year: 2024, leaders: ['pd', 'nrd'], tags: ['birds', 'urban'], sites: ['bangkok'] },
  { id: 'b-neosim-2019', type: 'book', bookKind: 'book', title: 'Neo-Simulation and Gaming Toward Active Learning', authors: 'R Hamada, S Soranastaporn, H Kanegae, P Dumrongrojwatthana, et al. (eds.)', venue: 'Springer', year: 2019, leaders: ['pd'], tags: ['games'] },
  { id: 'b-greenroofgame-2019', type: 'book', bookKind: 'chapter', title: 'Board game for collective learning on green roof ecosystem services', authors: 'R Phoomirat, J Akkapiphat, P Dumrongrojwatthana', venue: 'In: Neo-Simulation and Gaming Toward Active Learning (Springer), 191–199', year: 2019, leaders: ['pd'], tags: ['games', 'urban'], sites: ['bangkok'] },
  { id: 'b-cfgame-2019', type: 'book', bookKind: 'chapter', title: 'Community forest board game for learning interactions among ecosystem components in community forest with local people', authors: 'S Pinmaneenopparat, K Punyawong, I Huaihongthong, N Khunnala, et al.', venue: 'In: Neo-Simulation and Gaming Toward Active Learning (Springer), 355–363', year: 2019, leaders: ['pd'], tags: ['games', 'forest'] },
  { id: 'b-biodiv-2017', type: 'book', bookKind: 'chapter', title: 'Participatory learning and management of biodiversity: the companion modeling approach', authors: 'P Dumrongrojwatthana, C Kunsook, K Worrapimphong', venue: 'In: Biodiversity Conservation in Southeast Asia, 207–229', year: 2017, leaders: ['pd'], tags: ['commod'] },
  { id: 'b-knowledge-2011', type: 'book', bookKind: 'chapter', title: 'Gaming and simulation for co-learning and collective action: companion modelling for collaborative landscape management between herders and foresters in northern Thailand', authors: 'P Dumrongrojwatthana, G Trébuil', venue: 'In: Knowledge in Action: The search for collaborative research for sustainable landscape development', year: 2011, leaders: ['pd'], tags: ['commod', 'games'], sites: ['nan'], partners: ['cirad'] },
  { id: 'b-cgiar-2008', type: 'book', bookKind: 'chapter', title: 'Agent-based modeling to facilitate resilient water management in Southeast and South Asia', authors: 'CT Hoanh, C Le Page, O Barreteau, G Trébuil, F Bousquet, et al.', venue: 'CGIAR Challenge Program on Water and Food, 271', year: 2008, leaders: ['pd'], tags: ['commod'], partners: ['cirad'] },
  { id: 'b-mekong-2006', type: 'book', bookKind: 'chapter', title: 'Initial diagnostic analysis for companion modelling to accommodate multiple interests in upper watershed management', authors: 'C Barnaud, P Dumrongrojwatthana, J Marie, C Le Page, G Trébuil', venue: 'Mekong Press', year: 2006, leaders: ['pd'], tags: ['commod'], partners: ['cirad'] },

  // ---------- Thesis ----------
  { id: 't-pd-phd-2010', type: 'thesis', thesisLevel: 'dissertation', title: 'Interactions between cattle raising and reforestation in the highland socio-ecosystem of Nan Province, northern Thailand: a companion modelling process to improve landscape management', authors: 'P Dumrongrojwatthana', venue: 'Doctoral dissertation, Université Paris Ouest Nanterre La Défense and Chulalongkorn University', year: 2010, leaders: ['pd'], tags: ['commod', 'landuse'], sites: ['nan'], partners: ['cirad'] },
  { id: 't-pd-msc-2004', type: 'thesis', thesisLevel: 'thesis', title: 'Impacts of forest disturbance on soil organic matter, soil nutrients and carbon sequestration in Nam Wa sub-watershed, Nan Province', authors: 'P Dumrongrojwatthana', venue: 'MSc thesis, Department of Biology, Faculty of Science, Chulalongkorn University', year: 2004, leaders: ['pd'], tags: ['forest', 'soil'], sites: ['nan'] },
  { id: 't-va-2003', type: 'thesis', thesisLevel: 'thesis', title: 'Species diversity and habitat characteristics of butterfly lizards (Leiolepis spp.) in Thailand', authors: 'V Aranyavalai', venue: 'Thesis, Chulalongkorn University', year: 2003, leaders: ['va'], tags: ['herp'], url: 'https://digital.car.chula.ac.th/chulaetd/55410/' },
];
