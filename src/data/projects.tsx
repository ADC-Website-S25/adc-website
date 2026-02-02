import { FixedLengthArray } from "@/lib/utils";

// Project type
export type Project = {
  slug: string;
  logo: string;
  logoAlt?: string;
  title: string;
  description: string;
  year: number;
  semester: "Spring" | "Fall";
  showcaseContent?: ShowcaseContent;
  members?: {
    name: string;
    title: string;
    photo?: string;
    zoomPhotoIn?: boolean; // Use this if they have a linkedin badge and you want to zoom it to fit
  }[];
};

// only youtube video links are supported
type ShowcaseContent =
  | { description: string; image: string; videoUrl?: never }
  | { description: string; videoUrl: string; image?: never };

/**
 * All objects for each project that we will define
 * DONT forget to update the allProjects array at the bottom of this file as more years are added
 * TO EXPORT THESE PROJECTS update the export statement at the bottom of this file as well
 */

const FALL_25_PROJECTS: Project[] = [
  {
    slug: "exiger-fall-25",
    logo: "/images/logos/exiger.webp",
    logoAlt: "Exiger Logo",
    title: "Supplier Portal",
    description:
      "Developed a custom supplier portal designed to streamline how global companies interact with their vendors, creating a two-way bridge for managing risk, tracking procurement orders, and handling onboarding tasks",
    year: 2025,
    semester: "Fall",
    showcaseContent: {
      description:
        "Main supplier portal dashboard for managing tasks, risk analysis, and purchase orders",
      image: "/images/projects/fall-25/exigerFALL25/exiger-demo.webp",
    },
    members: [
      {
        name: "Alan Chan",
        title: "Project Lead",
        photo: "/images/projects/fall-25/exigerFALL25/alanChan.jpg",
      },
      {
        name: "Thomas Huitema",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/exigerFALL25/thomasHuitema.jpg",
      },
      {
        name: "Will Graham",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/exigerFALL25/willGraham.png",
      },
      {
        name: "James Miller",
        title: "Full Stack Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/jamesMiller.jpg",
      },
      {
        name: "Rachel Li",
        title: "Full Stack Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/rachelLi.jpg",
      },
      {
        name: "Miles McDonald",
        title: "Full Stack Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/milesMcDonald.jpg",
      },
      {
        name: "Alex Yang",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/alexYang.jpg",
      },
      {
        name: "Urjit Chakraborty",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/urjitChakraborty.jpg",
      },
      {
        name: "Siddhant Jain",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/siddhantJain.jpg",
      },
      {
        name: "Ryan Li",
        title: "Frontend Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/ryanLi.jpg",
      },
      {
        name: "Sai Praneeth Oruganti",
        title: "Frontend Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/saiPraneethOruganti.jpg",
      },
      {
        name: "Tanush Kallem",
        title: "DevOps Engineer",
        photo: "/images/projects/fall-25/exigerFALL25/tanushKallem.jpg",
      },
      {
        name: "Mihira Murthy",
        title: "Project Manager",
        photo: "/images/projects/fall-25/exigerFALL25/mihiraMurthy.jpg",
      },
      {
        name: "Amanda Tsai",
        title: "Shadow",
        photo: "/images/projects/fall-25/exigerFALL25/amandaTsai.jpg",
      },
      {
        name: "Vincent Liu",
        title: "Shadow",
        photo: "/images/projects/fall-25/exigerFALL25/vincentLiu.jpg",
      },
    ],
  },
  {
    slug: "amazon-fall-25",
    logo: "/images/logos/amazon_leo.svg",
    logoAlt: "Amazon Project Leo Logo",
    title: "Amazon Project Leo",
    description:
      "Built a full-stack application on AWS using ML to predict airport boundaries for compliance with satellite regulations, validated globally for accuracy and reliability",
    year: 2025,
    semester: "Fall",
    members: [
      {
        name: "Amelia Harn",
        title: "Project Lead",
        photo: "/images/projects/fall-25/amazonFALL25/ameliaHarn.png",
      },
      {
        name: "Andrew Hong",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/amazonFALL25/andrewHong.png",
      },
      {
        name: "Nandhu Pillai",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/amazonFALL25/nandhuPillai.webp",
      },
      {
        name: "Abhinav Kota",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/abhinavKota.webp",
      },
      {
        name: "Aidana Aibek",
        title: "UI/UX Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/aidanaAibek.png",
      },
      {
        name: "Anish Maheshwar",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/anishMaheshwar.png",
      },
      {
        name: "Arav Luthra",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/aravLuthra.png",
      },
      {
        name: "Arnav Aggarwal",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/arnavAggarwal.png",
      },
      {
        name: "Arnav Gowda",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/arnavGowda.png",
      },
      {
        name: "Eric Huang",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/ericHuang.png",
      },
      {
        name: "Kathy Chen",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/kathyChen.png",
      },
      {
        name: "Seonyoung Lee",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/seonyoungLee.webp",
      },
      {
        name: "Shohini Rhea Sarkar",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/shohiniRheaSarkar.png",
      },
      {
        name: "Smithi Mahendran",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/smithiMahendran.png",
      },
      {
        name: "Suhaan Baru",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/suhaanBaru.png",
      },
      {
        name: "Tanvi Panse",
        title: "Project Manager",
        photo: "/images/projects/fall-25/amazonFALL25/tanviPanse.png",
      },
      {
        name: "Tristan Tsang",
        title: "Engineer",
        photo: "/images/projects/fall-25/amazonFALL25/tristanTsang.webp",
      },
    ],
  },
  {
    slug: "vex-fall-25",
    logo: "/images/logos/vex.png",
    logoAlt: "Vex Logo",
    title: "Vex",
    description:
      "Developed an AI-assisted social platform enabling real-time, voice-enabled chatrooms where an intelligent agent participates in conversations, enhances discussions, and allows users to share and replay meaningful exchanges",
    year: 2025,
    semester: "Fall",
    members: [
      {
        name: "Eswar Karavadi",
        title: "Project Lead",
        photo: "/images/projects/fall-25/vexFALL25/eswarKaravadi.jpg",
      },
      {
        name: "Anvay Panguluri",
        title: "Backend Tech Lead",
        photo: "/images/projects/fall-25/vexFALL25/anvayPanguluri.jpg",
      },
      {
        name: "Ayan Banerjee",
        title: "ML Tech Lead",
        photo: "/images/projects/fall-25/vexFALL25/ayanBanerjee.jpg",
      },
      {
        name: "Tanmay Panguluri",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/vexFALL25/tanmayPanguluri.jpg",
      },
      {
        name: "Pranav Satyadeep",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/vexFALL25/pranavSatyadeep.jpg",
      },
      {
        name: "Shiva Tripurana",
        title: "Front End Engineer",
        photo: "/images/projects/fall-25/vexFALL25/shivaTripurana.jpg",
      },
      {
        name: "Leo Chen",
        title: "UI/UX",
        photo: "/images/projects/fall-25/vexFALL25/leoChen.jpg",
      },
      {
        name: "Emmanuel Michael",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/vexFALL25/emmanuelMichael.jpg",
      },
      {
        name: "Bhavesh Thapar",
        title: "ML Engineer",
        photo: "/images/projects/fall-25/vexFALL25/bhaveshThapar.jpg",
      },
      {
        name: "Purab Shah",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/vexFALL25/purabShah.jpg",
      },
      {
        name: "Eric Gilerson",
        title: "Front End Engineer",
        photo: "/images/projects/fall-25/vexFALL25/ericGilerson.jpg",
      },
      {
        name: "Vihaan Motwani",
        title: "ML Engineer",
        photo: "/images/projects/fall-25/vexFALL25/vihaanMotwani.jpg",
      },
      {
        name: "Kanishk Sivanandam",
        title: "Front End Engineer",
        photo: "/images/projects/fall-25/vexFALL25/kanishkSivanandam.jpg",
      },
      {
        name: "Aditya Koul",
        title: "ML Engineer",
        photo: "/images/projects/fall-25/vexFALL25/adityaKoul.jpg",
      },
    ],
  },
  {
    slug: "qubi-fall-25",
    logo: "/images/logos/qubi.svg",
    logoAlt: "Qubi Logo",
    title: "Qubi",
    description:
      "Developed a full-stack mobile application that enables users to build, send, and visualize quantum circuits on different quantum computers while engaging with an interactive curriculum",
    year: 2025,
    semester: "Fall",
    showcaseContent: {
      image: "/images/projects/fall-25/qubiFALL25/qubi.png",
      description:
        "Interface for building and running a circuit on quantum simulators",
    },
    members: [
      {
        name: "Phoebe Dainer",
        title: "Team Lead",
        photo: "/images/projects/fall-25/qubiFALL25/phoebedainer.jpg",
      },
      { name: "Kanjonavo Sabud", title: "Tech Lead (quantum)" },
      {
        name: "Siddharth Belwal",
        title: "Tech Lead (backend)",
        photo: "/images/projects/fall-25/qubiFALL25/siddharthbelwal.jpg",
      },
      { name: "Aarush Vinod", title: "Backend Engineer" },
      {
        name: "Alex Shrestha",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/qubiFALL25/alexshrestha.jpg",
      },
      {
        name: "Arav Ravula",
        title: "Frontend/Backend Engineer",
        photo: "/images/projects/fall-25/qubiFALL25/aravravula.jpg",
      },
      {
        name: "Christie Cao",
        title: "UI/UX",
        photo: "/images/projects/fall-25/qubiFALL25/christiecao.jpg",
      },
      {
        name: "Joey Lee",
        title: "Quantum Engineer",
        photo: "/images/projects/fall-25/qubiFALL25/joeylee.jpg",
      },
      {
        name: "Nahom Wondimu",
        title: "Frontend Engineer",
        photo: "/images/projects/fall-25/qubiFALL25/nahomwondimu.jpg",
      },
      {
        name: "Victor Casado",
        title: "Frontend Engineer",
        photo: "/images/projects/fall-25/qubiFALL25/victorcasado.jpg",
      },
      {
        name: "Konstantinos Paparrizos",
        title: "Shadow",
        photo: "/images/projects/fall-25/qubiFALL25/konstantinospaparrizos.jpg",
      },
      {
        name: "Abjini Chattopadhyay",
        title: "Shadow",
        photo: "/images/projects/fall-25/qubiFALL25/abjinichattopadhyay.jpg",
      },
      {
        name: "Lianyu Peng",
        title: "Shadow",
        photo: "/images/projects/fall-25/qubiFALL25/lianyupeng.jpg",
      },
    ],
  },
  {
    slug: "cnh-fall-25",
    logo: "/images/logos/childrens-national.png",
    logoAlt: "Childrens National Logo",
    title: "MRI Visualizer",
    description:
      "Developed a web-based application that enables users to upload brain MRI scans, visualize them interactively, and run backend deep-learning models to generate and overlay tumor segmentation results in real time",
    year: 2025,
    semester: "Fall",
    members: [
      {
        name: "Josiah Johnson",
        title: "Project Lead",
        photo: "/images/projects/fall-25/cnhFALL25/josiahjohnson.jpg",
      },
      {
        name: "Anant Agrawal",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/cnhFALL25/anantagrawal.jpg",
      },
      {
        name: "Sathvik Andhavarapu",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/cnhFALL25/sathvikandhavarapu.jpg",
      },
      {
        name: "Mohe Edeen Abu Maizer",
        title: "Fullstack Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/moheabumaizer.jpg",
      },
      {
        name: "Daniel Son",
        title: "DevOps Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/danielson.jpg",
      },
      {
        name: "Anushmita Dey",
        title: "Frontend Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/anushmitadey.jpg",
      },
      {
        name: "Anannya Trehan",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/anannyatrehan.jpg",
      },
      {
        name: "Aymaan Hussain",
        title: "Fullstack Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/aymaanhussain.jpg",
      },
      {
        name: "Cole Sladowsky",
        title: "Frontend Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/colesladowsky.jpg",
      },
      {
        name: "Arnav Sharma",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/arnavsharma.jpg",
      },
      {
        name: "Rohan Chintakindi",
        title: "Backend Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/rohanchintakindi.jpg",
      },
      {
        name: "Emily Ho",
        title: "Shadow",
        photo: "/images/projects/fall-25/cnhFALL25/emilyho.jpg",
      },
      {
        name: "Lakshmee Harivanam",
        title: "Project Manager",
        photo: "/images/projects/fall-25/cnhFALL25/lakshmeeharivanam.jpg",
      },
      {
        name: "Chaitra Bhumula",
        title: "Fullstack Engineer",
        photo: "/images/projects/fall-25/cnhFALL25/chaitrabhumula.jpg",
      },
      {
        name: "Nikita Arya",
        title: "UI/UX",
        photo: "/images/projects/fall-25/cnhFALL25/nikitaarya.jpg",
      },
      {
        name: "Maggie McAndrew",
        title: "Shadow",
        photo: "/images/projects/fall-25/cnhFALL25/maggiemcandrew.jpg",
      },
      {
        name: "Molly Panepento",
        title: "Shadow",
        photo: "/images/projects/fall-25/cnhFALL25/mollypanepento.jpg",
      },
    ],
  },
  {
    slug: "ionq-fall-25",
    logo: "/images/logos/ionq.svg",
    logoAlt: "IonQ Logo",
    title: "Wildfire Prediction",
    description:
      "Developed quantum-ML prototypes with IonQ for wildfire prediction and tensor-network neural nets by integrating quantum layers, fixing amplitude embedding, benchmarking on HPC, and compiling MNIST tensor networks into executable quantum circuits",
    year: 2025,
    semester: "Fall",
    members: [
      {
        name: "Anika Rai",
        title: "Project Lead",
        photo: "/images/projects/fall-25/ionqFALL25/anikarai.jpg",
      },
      {
        name: "Samarth Parekh",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/ionqFALL25/samarthparekh.jpg",
      },
      {
        name: "Jaiman Munshi",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/ionqFALL25/jaimanmunshi.jpg",
      },
      {
        name: "Sara Karnik",
        title: "Quantum Research Engineer",
        photo: "/images/projects/fall-25/ionqFALL25/sarakarnik.jpg",
      },
      {
        name: "Anirudh Mantha",
        title: "Quantum Research Engineer",
        photo: "/images/projects/fall-25/ionqFALL25/anirudhmantha.jpg",
      },
      { name: "Pranav Panicker", title: "Quantum Research Engineer" },
      {
        name: "Tanvi Tewary",
        title: "Quantum Research Engineer",
        photo: "/images/projects/fall-25/ionqFALL25/tanvitewary.jpg",
      },
      {
        name: "Tom Shimoni",
        title: "Quantum Research Engineer",
        photo: "/images/projects/fall-25/ionqFALL25/tomshimoni.jpg",
      },
      {
        name: "Sawyer Bloom",
        title: "Quantum Research Engineer",
        photo: "/images/projects/fall-25/ionqFALL25/sawyerbloom.jpg",
      },
      { name: "Raunak Maheshwari", title: "Machine Learning Engineer" },
    ],
  },
  {
    slug: "boozallen-fall-25",
    logo: "/images/logos/booz-allen.png",
    logoAlt: "Booz Allen Logo",
    title: "AuditAssistant 2.0",
    description:
      "Added AI-powered smart search for quick information retrieval and API-based web-native policy viewer to existing Medicaid policy analysis tool",
    year: 2025,
    semester: "Fall",
    members: [
      {
        name: "Soham Katdare",
        title: "Project Lead",
        photo: "/images/projects/fall-25/boozallenFALL25/sohamkatdare.jpg",
      },
      {
        name: "Kanhav Bhatnagar",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/boozallenFALL25/kanhavbhatnagar.jpg",
      },
      {
        name: "Dev Patel",
        title: "Tech Lead",
        photo: "/images/projects/fall-25/boozallenFALL25/devpatel.jpg",
      },
      {
        name: "Mouli Banga",
        title: "Product Manager",
        photo: "/images/projects/fall-25/boozallenFALL25/moulibanga.jpg",
      },
      { name: "Aditya Tripathi", title: "Full-Stack Engineer" },
      {
        name: "Katherine Hall",
        title: "Full-Stack Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/katherinehall.jpg",
      },
      {
        name: "Aarav Borthakur",
        title: "Full-Stack Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/aaravborthakur.jpg",
      },
      {
        name: "Allison Yu",
        title: "Full-stack Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/allisonyu.jpg",
      },
      {
        name: "Harini Thirukonda",
        title: "Full-stack engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/harinithirukonda.jpg",
      },
      {
        name: "Agnik Banerjee",
        title: "Machine Learning Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/agnikbanerjee.jpg",
      },
      {
        name: "Suneth Ramawickrama",
        title: "Machine Learning Engineer",
        photo:
          "/images/projects/fall-25/boozallenFALL25/sunethramawickrama.jpg",
      },
      {
        name: "Nithin Bhandari",
        title: "Machine Learning Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/nithinbhandari.jpg",
      },
      {
        name: "Rivan Parikh",
        title: "Machine Learning Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/rivanparikh.jpg",
      },
      {
        name: "Amogh Samaga",
        title: "Machine Learning Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/amoghsamaga.jpg",
      },
      {
        name: "Aprameya Kannan",
        title: "DevOps Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/aprameyakannan.jpg",
      },
      {
        name: "Sidharth Ponram",
        title: "DevOps Engineer",
        photo: "/images/projects/fall-25/boozallenFALL25/sidharthponram.jpg",
      },
    ],
  },
];

const SPRING_25_PROJECTS: Project[] = [
  {
    slug: "trachsense-sp-25",
    logo: "/images/logos/childrens-national.png",
    logoAlt: "Childrens National Logo",
    title: "TrachSense",
    description:
      "The team developed a compact CO2 sensing system that attaches to pediatric tracheostomy tubes, enabling continuous, remote monitoring to rapidly detect decannulation or obstruction and alert caregivers",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Hannah Chan",
        title: "Project Lead",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/hannahChan.jpg",
      },
      {
        name: "Surabhi Singh",
        title: "Project Manager",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/surabhiSingh.jpg",
      },
      {
        name: "Yashas Bhat",
        title: "Tech Lead",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/yashasBhat.jpg",
      },
      {
        name: "Mohammad Abd-Elmoniem",
        title: "Tech Lead",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/mohammadAbd-Elmoniem.jpg",
      },
      { name: "Matthew Xu", title: "Full-stack Engineer" },
      {
        name: "Tanmay Panguluri",
        title: "Full-stack Engineer",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/tanmayPanguluri.jpg",
      },
      {
        name: "Richard Yin",
        title: "Full-stack Engineer",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/richardYin.jpg",
      },
      {
        name: "Eswar Karavadi",
        title: "Front-end and TrachHub Engineer",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/eswarKaravadi.jpg",
      },
      {
        name: "Olivia Zhang",
        title: "Frontend Engineer",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/oliviaZhang.jpg",
      },
      {
        name: "Amogh Gurram",
        title: "Backend Engineer",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/amoghGurram.jpg",
      },
      { name: "Thomas Urdinola", title: "Backend Engineer" },
      {
        name: "Michelle Yu",
        title: "Shadower",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/michelleYu.jpg",
      },
      {
        name: "Jayant Kammula",
        title: "Shadower",
        photo:
          "/images/projects/spring-25/childrensNationalSP25/jayantKammula.jpg",
      },
      {
        name: "Kira Le",
        title: "Shadower",
        photo: "/images/projects/spring-25/childrensNationalSP25/kiraLe.jpg",
      },
    ],
  },
  {
    slug: "amazon-project-kuiper-sp-25",
    logo: "/images/logos/amazon.svg",
    logoAlt: "Amazon Project Kuiper Logo",
    title: "Amazon Project Kuiper",
    description:
      "Built a full-stack application on AWS using ML to predict representative clutter height for satellite ground station site selection, validated globally for accuracy and reliability",
    year: 2025,
    semester: "Spring",
    showcaseContent: {
      description:
        "A showcase of the dashboard and how it predicts satellite ground station site selection",
      image: "/images/projects/spring-25/amazonSP25/amazonSP25-showcase.png",
    },
    members: [
      {
        name: "Yuvraj Rekhi",
        title: "Project Lead",
        photo: "/images/projects/spring-25/amazonSP25/YuvrajRekhi.jpg",
      },
      {
        name: "Rhea Sarkar",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/amazonSP25/RheaSarkar.jpg",
      },
      {
        name: "Vivek Nadig",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/amazonSP25/VivekNadig.jpg",
      },
      {
        name: "Anjali Gallacher",
        title: "PM / UI/UX",
        photo: "/images/projects/spring-25/amazonSP25/AnjaliGallacher.jpg",
      },

      {
        name: "Joseph Cho",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/JosephCho.jpg",
      },
      {
        name: "Advay Choudhury",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/AdvayChoudhury.jpg",
      },
      {
        name: "Smithi Mahendran",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/SmithiMahendran.jpg",
      },
      {
        name: "Viraj Urs",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/VirajUrs.jpg",
      },
      {
        name: "Rishi Chudasama",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/RishiChudasama.jpg",
      },
      {
        name: "Mohe Edeen Abu Maizer",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/MoheEdeenAbuMaizer.jpg",
      },
      {
        name: "Arsh Goenka",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/ArshGoenka.jpg",
      },
      {
        name: "Arav Luthra",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/AravLuthra.jpg",
      },
      {
        name: "Akash Wudali",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/AkashWudali.jpg",
      },
      {
        name: "Varun Mannam",
        title: "Engineer",
        photo: "/images/projects/spring-25/amazonSP25/VarunMannam.jpg",
      },

      {
        name: "Aryan Jain",
        title: "Shadow",
        photo: "/images/projects/spring-25/amazonSP25/AryanJain.jpg",
      },
      {
        name: "Ryan Li",
        title: "Shadow",
        photo: "/images/projects/spring-25/amazonSP25/RyanLi.jpg",
      },
    ],
  },
  {
    slug: "mitre-sp-25",
    logo: "/images/logos/mitre.svg",
    logoAlt: "Mitre Logo",
    title: "Malware Analysis and Visualization",
    description:
      "This semester's project involved developing a centralized malware analysis platform for various tools used by the company",
    year: 2025,
    semester: "Spring",
    showcaseContent: {
      description:
        "Selecting what tool to use to analyze the uploaded malware files",
      image: "/images/projects/spring-25/mitreSP25/mitre-showcase.png",
    },
    members: [
      {
        name: "Amelia Harn",
        title: "Project Lead",
        photo: "/images/projects/spring-25/mitreSP25/ameliaHarn.png",
      },
      {
        name: "Anand Vinod",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/mitreSP25/anandVinod.png",
      },
      {
        name: "Kevin Chong",
        title: "ML Tech Lead",
        photo: "/images/projects/spring-25/mitreSP25/kevinChong.webp",
      },
      {
        name: "Shreya Sanikommu",
        title: "Project Manager",
        photo: "/images/projects/spring-25/mitreSP25/shreyaSanikommu.png",
        zoomPhotoIn: true,
      },
      {
        name: "Anvay Panguluri",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/mitreSP25/anvayPanguluri.webp",
      },
      {
        name: "Autumn Anson",
        title: "Frontend Engineer/Research",
        photo: "/images/projects/spring-25/mitreSP25/autumnAnson.webp",
      },
      {
        name: "Chayanika Sinha",
        title: "Data Visualization Engineer",
        photo: "/images/projects/spring-25/mitreSP25/chayanikaSinha.webp",
      },
      {
        name: "Gitika Saravanan",
        title: "DevOps Engineer",
        photo: "/images/projects/spring-25/mitreSP25/gitikaSaravanan.webp",
      },
      {
        name: "Jessica Zhou",
        title: "UI/UX Designer",
        photo: "/images/projects/spring-25/mitreSP25/jessicaZhou.webp",
        zoomPhotoIn: true,
      },
      {
        name: "Marvin Lin",
        title: "ML Engineer",
        photo: "/images/projects/spring-25/mitreSP25/marvinLin.png",
      },
      {
        name: "Nate Zhang",
        title: "Frontend Engineer/Research",
        photo: "/images/projects/spring-25/mitreSP25/nateZhang.png",
      },
      {
        name: "Parth Dua",
        title: "Backend/DevOps Engineer",
        photo: "/images/projects/spring-25/mitreSP25/parthDua.webp",
        zoomPhotoIn: true,
      },
      {
        name: "Ritvik Thakur",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/mitreSP25/ritvikThakur.webp",
      },
      {
        name: "Thomas Huitema",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/mitreSP25/thomasHuitema.webp",
      },
      {
        name: "Varun Kota",
        title: "ML Engineer",
        photo: "/images/projects/spring-25/mitreSP25/varunKota.webp",
      },
      {
        name: "Will Graham",
        title: "Frontend Engineer",
        photo: "/images/projects/spring-25/mitreSP25/willGraham.png",
      },
    ],
  },
  {
    slug: "us-news-sp-25",
    logo: "/images/logos/us-news.svg",
    logoAlt: "U.S. News Logo",
    title: "Anomaly Detection & Visualization",
    description:
      "Advanced U.S News' data platform by building a dynamic frontend for their internal API and implementing anomaly detection on multiple metric types",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Madeline Anson",
        title: "Team Lead",
        photo: "/images/projects/spring-25/usNewsSP25/MadelineAnson.jpg",
      },
      {
        name: "Josiah Lim",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/usNewsSP25/JosiahLim.jpg",
      },
      {
        name: "Pranav Palle",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/usNewsSP25/PranavPalle.jpg",
      },
      {
        name: "Tanish Anandababu",
        title: "Frontend Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/TanishAnandababu.jpg",
      },
      {
        name: "Sathvik Andhavarapu",
        title: "Frontend Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/SathvikAndhavarapu.jpg",
      },
      {
        name: "Akshita Badkundri",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/AkshitaBadkundri.jpg",
      },
      {
        name: "Anant Agrawal",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/AnantAgrawal.jpg",
      },
      {
        name: "Pranjal Kattel",
        title: "Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/PranjalKattel.jpg",
      },
      {
        name: "Alex Shrestha",
        title: "Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/AlexShrestha.jpg",
      },
      {
        name: "Bhavya Rajasekaran",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/usNewsSP25/BhavyaRajasekaran.jpg",
      },
      {
        name: "Madeline Moldrem",
        title: "Shadow",
        photo: "/images/projects/spring-25/usNewsSP25/MadelineMoldrem.jpg",
      },
      {
        name: "Samantha Tyles",
        title: "Shadow",
        photo: "/images/projects/spring-25/usNewsSP25/SamanthaTyles.jpg",
      },
    ],
    showcaseContent: {
      image: "/images/projects/spring-25/usNewsSP25/demo.png",
      description:
        "Dashboard showing anomaly monitoring using the U.S. News API",
    },
  },
  {
    slug: "booz-allen-sp-25",
    logo: "/images/logos/booz-allen.png",
    logoAlt: "Booz Allen Logo",
    title: "Citation Configuration",
    description:
      "Created a web app to generate citations that supports uploading, filtering, and exporting policy data in an easy to use way",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Angela Zhang",
        title: "Project Lead",
        photo: "/images/projects/spring-25/boozAllenSP25/AngelaZhang.jpg",
      },
      {
        name: "Daven Chang",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/boozAllenSP25/DavenChang.jpg",
      },
      {
        name: "Alan Jiang",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/boozAllenSP25/AlanJiang.jpg",
      },
      { name: "Isabelle Ortiz", title: "Project Manager" },
      {
        name: "Ritvik Mahapatra",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/RitvikMahapatra.jpg",
      },
      {
        name: "Aidana Aibek",
        title: "UI/UX Designer",
        photo: "/images/projects/spring-25/boozAllenSP25/AidanaAibek.jpg",
      },
      {
        name: "Dev Patel",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/DevPatel.jpg",
      },
      {
        name: "Adnan Kabir",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/AdnanKabir.jpg",
      },
      {
        name: "Sidharth Ponram",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/SidharthPonram.jpg",
      },
      {
        name: "Rachel Li",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/RachelLi.jpg",
      },
      {
        name: "Vir Trivedi",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/VirTrivedi.jpg",
      },
      {
        name: "Kanhav Bhatnagar",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/KanhavBhatnagar.jpg",
      },
      {
        name: "Chiraag Nadig",
        title: "Engineer",
        photo: "/images/projects/spring-25/boozAllenSP25/ChiraagNadig.jpg",
      },
    ],
  },
  {
    slug: "gdit-sp-25",
    logo: "/images/logos/general-dynamics.png",
    logoAlt: "GDIT Logo",
    title: "EmailMiner",
    description:
      "Developed a scalable Retrieval Augmented Generation (RAG) pipeline to better query information from emails, utilizing relationship mappings and similarity search databases to improve data retrieval speed and accuracy",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Nishad Wajge",
        title: "Project Lead",
        photo: "/images/projects/spring-25/gditSP25/NishadWajge.jpg",
      },
      {
        name: "Utsav Kataria",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/gditSP25/UtsavKataria.jpg",
      },
      {
        name: "Soham Katdare",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/gditSP25/SohamKatdare.jpg",
      },
      {
        name: "Ayan Banerjee",
        title: "ML Engineer",
        photo: "/images/projects/spring-25/gditSP25/AyanBanerjee.jpg",
      },
      {
        name: "Angela Yu",
        title: "ML Engineer",
        photo: "/images/projects/spring-25/gditSP25/AngelaYu.jpg",
      },
      {
        name: "Sriram Nallani",
        title: "ML Engineer",
        photo: "/images/projects/spring-25/gditSP25/SriramNallani.jpg",
      },
      {
        name: "Lakshmee Harivanam",
        title: "ML Engineer",
        photo: "/images/projects/spring-25/gditSP25/LakshmeeHarivanam.jpg",
      },
      {
        name: "Kaleb Ward",
        title: "Frontend Engineer",
        photo: "/images/projects/spring-25/gditSP25/KalebWard.jpg",
      },
      {
        name: "Shivank Bhimavarapu",
        title: "Frontend Engineer",
        photo: "/images/projects/spring-25/gditSP25/ShivankBhimavarapu.jpg",
      },
      {
        name: "Jaiman Munshi",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/gditSP25/JaimanMunshi.jpg",
      },
      {
        name: "Sid Belwal",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/gditSP25/SidBelwal.jpg",
      },
      {
        name: "Nithin Bhandari",
        title: "Backend Engineer",
        photo: "/images/projects/spring-25/gditSP25/NithinBhandari.jpg",
      },
    ],
    showcaseContent: {
      image: "/images/projects/spring-25/gditSP25/demo.png",
      description:
        "EmailMiner interface showcasing how the RAG pipeline accurately retrieves relevant information from emails",
    },
  },
  {
    slug: "omal-sp-25",
    logo: "/images/logos/omal.webp",
    title: "Omal Learning Platform",
    description:
      "Created a cross-platform application that transforms interaction with educators and clients, offering an all-in-one platform to learn, showcase skills, and find projects across diverse professions",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Bilal Suleman",
        title: "Project Lead",
        photo: "/images/projects/spring-25/omalSP25/BilalSuleman.jpg",
      },
      {
        name: "Krish Thakker",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/omalSP25/KrishThakker.jpg",
      },
      {
        name: "Vikaas Venkstesh",
        title: "Backend Developer",
        photo: "/images/projects/spring-25/omalSP25/VikaasVenkstesh.jpg",
      },
      {
        name: "Ezekiel Franklin",
        title: "Backend Developer",
        photo: "/images/projects/spring-25/omalSP25/EzekielFranklin.jpg",
      },
      {
        name: "Bryant Xiong",
        title: "Backend Developer",
        photo: "/images/projects/spring-25/omalSP25/BryantXiong.jpg",
      },
      {
        name: "Edna Adissu",
        title: "UI/UX Designer",
        photo: "/images/projects/spring-25/omalSP25/EdnaAdissu.jpg",
      },
      {
        name: "Miles McDonald",
        title: "Frontend Developer",
        photo: "/images/projects/spring-25/omalSP25/MilesMcDonald.jpg",
      },
      {
        name: "Siddhant Jain",
        title: "Frontend Developer",
        photo: "/images/projects/spring-25/omalSP25/SiddhantJain.jpg",
      },
      {
        name: "Lilly Ureta",
        title: "Bootcamp Shadow",
        photo: "/images/projects/spring-25/omalSP25/LillyUreta.jpg",
      },
      {
        name: "Andrew Chen",
        title: "Project Manager",
        photo: "/images/projects/spring-25/omalSP25/AndrewChen.jpg",
      },
    ],
  },
  {
    slug: "cnh-xray-sp25",
    logo: "/images/logos/childrens-national.png",
    logoAlt: "Childrens National Logo",
    title: "CNH X-Ray Project",
    description:
      "The team trained a Graph Neural Network (GNN) on the ABIDE and sEEG brain imaging dataset to create an application that assists in Autism diagnosis",
    year: 2025,
    semester: "Spring",
    showcaseContent: {
      image: "/images/projects/spring-25/cnhXraySP25/demo.png",
      description:
        "Visualizing imaging in 2D and 3D with focus on regions of interest",
    },
    members: [
      {
        name: "Andrew Yang",
        title: "Project Lead",
        photo: "/images/projects/spring-25/cnhXraySP25/andrewYang.jpg",
      },
      {
        name: "Shlok Desai",
        title: "Research Lead",
        photo: "/images/projects/spring-25/cnhXraySP25/ShlokDesai.jpg",
      },
      {
        name: "Naman Nagelia",
        title: "Engineer Lead",
        photo: "/images/projects/spring-25/cnhXraySP25/NamanNagelia.jpg",
      },
      {
        name: "Nandhu Pillai",
        title: "Researcher",
        photo: "/images/projects/spring-25/cnhXraySP25/NandhuPillai.jpg",
      },
      {
        name: "William Lee",
        title: "Researcher",
        photo: "/images/projects/spring-25/cnhXraySP25/WilliamLee.jpg",
      },
      {
        name: "Anika Rai",
        title: "Researcher",
        photo: "/images/projects/spring-25/cnhXraySP25/AnikaRai.jpg",
      },
      {
        name: "Rian Tiwari",
        title: "Researcher",
        photo: "/images/projects/spring-25/cnhXraySP25/RianTiwari.jpg",
      },
      {
        name: "Anu Daga",
        title: "Researcher",
        photo: "/images/projects/spring-25/cnhXraySP25/AnuDaga.jpg",
      },
      {
        name: "Jude Lwin",
        title: "Engineer",
        photo: "/images/projects/spring-25/cnhXraySP25/JudeLwin.jpg",
      },
      {
        name: "Cathy Wu",
        title: "Engineer",
        photo: "/images/projects/spring-25/cnhXraySP25/CathyWu.jpg",
      },
      {
        name: "Arush Jain",
        title: "Engineer",
        photo: "/images/projects/spring-25/cnhXraySP25/ArushJain.jpg",
      },
      {
        name: "Alan Chan",
        title: "Engineer",
        photo: "/images/projects/spring-25/cnhXraySP25/AlanChan.jpg",
      },
      {
        name: "Vibhas Ramani",
        title: "Engineer",
        photo: "/images/projects/spring-25/cnhXraySP25/VibhasRamani.jpg",
      },
      {
        name: "Ishaan Chakraborty",
        title: "Project Manager",
        photo: "/images/projects/spring-25/cnhXraySP25/IshaanChakraborty.jpg",
      },
      {
        name: "James Miller",
        title: "Shadow",
        photo: "/images/projects/spring-25/cnhXraySP25/JamesMiller.jpg",
      },
      { name: "Aarya Vijayaraghavan", title: "Shadow" },
      {
        name: "Bhavya Tanugula",
        title: "Shadow",
        photo: "/images/projects/spring-25/cnhXraySP25/BhavyaTanugula.jpg",
      },
    ],
  },
  {
    slug: "mokhtarzada-sp-25",
    logo: "/images/logos/hatchery-logo.webp",
    title: "Mokhtarzada Project",
    description:
      "Developed a tool to automatically fetch relevant financial documents from websites using AI-based browser automation and construct a vector database of financial data to inform the user about market situations and provide detailed insights into specific industries",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Atheesh Thirumalairajan",
        title: "Project Lead",
        photo:
          "/images/projects/spring-25/mokhtarzadaSP25/AtheeshThirumalairajan.jpg",
      },
      {
        name: "Andy Diep",
        title: "Tech lead",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/AndyDiep.jpg",
      },
      {
        name: "Aadarsh Govada",
        title: "Engineer",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/AadarshGovada.jpg",
      },
      {
        name: "Arjun Rajaram",
        title: "Engineer",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/ArjunRajaram.jpg",
      },
      {
        name: "Eva Dimitrova",
        title: "Engineer",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/EvaDimitrova.jpg",
      },
      {
        name: "Evelyn Jiang",
        title: "Engineer",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/EvelynJiang.jpg",
      },
      {
        name: "Gili Gordiyenko",
        title: "Engineer",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/GiliGordiyenko.jpg",
      },
      {
        name: "Harini Thirukonda",
        title: "Engineer",
        photo:
          "/images/projects/spring-25/mokhtarzadaSP25/HariniThirukonda.jpg",
      },
      {
        name: "Narain Sriram",
        title: "Engineer",
        photo: "/images/projects/spring-25/mokhtarzadaSP25/NarainSriram.jpg",
      },
    ],
  },
  {
    slug: "warriors-legacy-sp-25",
    logo: "/images/logos/warriors-legacy.png",
    title: "Warriors Legacy Project",
    description:
      "Developed an all-in-one mobile app for veterans, integrating healthcare access, AI-powered resume suggestions, video calling, and messaging to support medical, career, and community needs",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Josiah Johnson",
        title: "Project Lead",
        photo:
          "/images/projects/spring-25/warriors-legacySP25/JosiahJohnson.jpg",
      },
      {
        name: "Andy Hong",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/warriors-legacySP25/AndyHong.jpg",
      },
      {
        name: "Arnav Aggarwal",
        title: "Tech Lead",
        photo:
          "/images/projects/spring-25/warriors-legacySP25/ArnavAggarwal.jpg",
      },

      {
        name: "Aprameya Kannan",
        title: "Fullstack Engineer",
        photo:
          "/images/projects/spring-25/warriors-legacySP25/AprameyaKannan.jpg",
      },
      {
        name: "Aadi Anand",
        title: "Fullstack Engineer",
        photo: "/images/projects/spring-25/warriors-legacySP25/AadiAnand.jpg",
      },
      {
        name: "Jacob Plunkert",
        title: "Fullstack Engineer",
        photo:
          "/images/projects/spring-25/warriors-legacySP25/JacobPlunkert.jpg",
      },
      {
        name: "Tanay Naik",
        title: "Fullstack Engineer",
        photo: "/images/projects/spring-25/warriors-legacySP25/TanayNaik.jpg",
      },
      { name: "Bharath Malipeddi", title: "Fullstack Engineer" },
      {
        name: "Rithvik Singh",
        title: "Fullstack Engineer",
        photo:
          "/images/projects/spring-25/warriors-legacySP25/RithvikSingh.jpg",
      },
      {
        name: "Samarth Parekh",
        title: "Fullstack Engineer",
        photo:
          "/images/projects/spring-25/warriors-legacySP25/SamarthParekh.jpg",
      },

      {
        name: "Riya Lakhani",
        title: "Fullstack Engineer",
        photo: "/images/projects/spring-25/warriors-legacySP25/RiyaLakhani.jpg",
      },
      {
        name: "Milana Dagne",
        title: "Fullstack Engineer",
        photo: "/images/projects/spring-25/warriors-legacySP25/MilanaDagne.jpg",
      },
    ],
  },
  {
    slug: "ionq-sp-25",
    logo: "/images/logos/ionq.svg",
    title: "Quantum Machine Learning",
    description:
      "Explored quantum machine learning for image classification, reproducing IonQ research papers, benchmarking against classical techniques, and testing quantum circuits on simulators before deploying to Aria-1 and Forte-1 ion-trap quantum computers",
    year: 2025,
    semester: "Spring",
    members: [
      {
        name: "Ashna Nayak",
        title: "Project Lead",
        photo: "/images/projects/spring-25/ionqSP25/AshnaNayak.jpg",
      },
      {
        name: "Kushagra Mehta",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/ionqSP25/KushagraMehta.jpg",
      },
      {
        name: "Samarth Sriram",
        title: "Tech Lead",
        photo: "/images/projects/spring-25/ionqSP25/SamarthSriram.jpg",
      },
      {
        name: "Joey Lee",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/JoeyLee.jpg",
      },
      {
        name: "Kanjonavo Sabud",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/KanjonavoSabud.jpg",
      },
      {
        name: "Kevan Kazeminezhad",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/KevanKazeminezhad.jpg",
      },
      {
        name: "Max Wang",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/MaxWang.jpg",
      },
      {
        name: "Mihir Talati",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/MihirTalati.jpg",
      },
      {
        name: "Richa Gupta",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/RichaGupta.jpg",
      },
      {
        name: "Samarth Parekh",
        title: "QML Engineer",
        photo: "/images/projects/spring-25/ionqSP25/SamarthParekh.jpg",
      },
      {
        name: "Jessica Zhou",
        title: "PM",
        photo: "/images/projects/spring-25/ionqSP25/jessicaZhou.webp",
        zoomPhotoIn: true,
      },
      {
        name: "Pranav Krishnamurthy",
        title: "Shadower",
        photo: "/images/projects/spring-25/ionqSP25/PranavKrishnamurthy.jpg",
      },
      {
        name: "Sawyer Bloom",
        title: "Shadower",
        photo: "/images/projects/spring-25/ionqSP25/SawyerBloom.jpg",
      },
    ],
  },
];

// Featured projects must have exactly 3 items
const FEATURED_PROJECTS: FixedLengthArray<Project, 3> = [
  FALL_25_PROJECTS[0],
  FALL_25_PROJECTS[1],
  FALL_25_PROJECTS[2],
];
// const ALL_PROJECTS: Project[] = [...SPRING_25_PROJECTS, ...FALL_24_PROJECTS];
const ALL_PROJECTS: Project[] = [...SPRING_25_PROJECTS, ...FALL_25_PROJECTS];

export {
  ALL_PROJECTS,
  FEATURED_PROJECTS,
  SPRING_25_PROJECTS,
  FALL_25_PROJECTS,
};
