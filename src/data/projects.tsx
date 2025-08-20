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
}

// only youtube video links are supported right now
type ShowcaseContent =
  | { description: string; image: string; videoUrl?: never }
  | { description: string; videoUrl: string; image?: never };

/**
 * All objects for each project that we will define
 * DONT forget to update the allProjects array at the bottom of this file as more years are added
 * TO EXPORT THESE PROJECTS update the export statement at the bottom of this file as well
 */

const SPRING_25_PROJECTS: Project[] = [
  {
    slug: 'trachsense-sp-25',
    logo: '/images/logos/childrens-national.svg',
    logoAlt: 'Childrens National Logo',
    title: 'TrachSense',
    description: 'The team developed a compact CO2 sensing system that attaches to pediatric tracheostomy tubes, enabling continuous, remote monitoring to rapidly detect decannulation or obstruction and alert caregivers',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Hannah Chan', title: 'Project Lead', photo: '/images/projects/childrensNationalSP25/hannahChan.jpg' },
      { name: 'Surabhi Singh', title: 'Project Manager', photo: '/images/projects/childrensNationalSP25/surabhiSingh.jpg' },
      { name: 'Yashas Bhat', title: 'Tech Lead', photo: '/images/projects/childrensNationalSP25/yashasBhat.jpg' },
      { name: 'Mohammad Abd-Elmoniem', title: 'Tech Lead', photo: '/images/projects/childrensNationalSP25/mohammadAbd-Elmoniem.jpg' },
      { name: 'Matthew Xu', title: 'Full-stack Engineer' },
      { name: 'Tanmay Panguluri', title: 'Full-stack Engineer', photo: '/images/projects/childrensNationalSP25/tanmayPanguluri.jpg' },
      { name: 'Richard Yin', title: 'Full-stack Engineer', photo: '/images/projects/childrensNationalSP25/richardYin.jpg' },
      { name: 'Eswar Karavadi', title: 'Front-end and TrachHub Engineer', photo: '/images/projects/childrensNationalSP25/eswarKaravadi.jpg' },
      { name: 'Olivia Zhang', title: 'Frontend Engineer', photo: '/images/projects/childrensNationalSP25/oliviaZhang.jpg' },
      { name: 'Amogh Gurram', title: 'Backend Engineer', photo: '/images/projects/childrensNationalSP25/amoghGurram.jpg' },
      { name: 'Thomas Urdinola', title: 'Backend Engineer' },
      { name: 'Michelle Yu', title: 'Shadower', photo: '/images/projects/childrensNationalSP25/michelleYu.jpg' },
      { name: 'Jayant Kammula', title: 'Shadower', photo: '/images/projects/childrensNationalSP25/jayantKammula.jpg' },
      { name: 'Kira Le', title: 'Shadower', photo: '/images/projects/childrensNationalSP25/kiraLe.jpg' },
    ],
  },
  {
    slug: 'amazon-project-kuiper-sp-25',
    logo: '/images/logos/amazon.svg',
    logoAlt: 'Amazon Project Kuiper Logo',
    title: 'Amazon Project Kuiper',
    description: 'Short description of project 2 something something something something something something something something something ',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'David Kim', title: 'Team Lead' },
      { name: 'Eva Brown', title: 'Developer' },
      { name: 'Frank Green', title: 'Designer' },
    ],
  },
  {
    slug: 'mitre-sp-25',
    logo: '/images/logos/mitre.svg',
    logoAlt: 'Mitre Logo',
    title: 'Malware Analysis and Visualization',
    description: 'This semester\'s project involved developing a centralized malware analysis platform for various tools used by the company',
    year: 2025,
    semester: 'Spring',
    showcaseContent: {
      description: 'Selecting what tool to use to analyze the uploaded malware files',
      image: '/images/projects/mitreSP25/mitre-showcase.png',
    },
    members: [
      { name: 'Amelia Harn', title: 'Project Lead', photo: '/images/projects/mitreSP25/ameliaHarn.png' },
      { name: 'Anand Vinod', title: 'Tech Lead', photo: '/images/projects/mitreSP25/anandVinod.png' },
      { name: 'Kevin Chong', title: 'ML Tech Lead', photo: '/images/projects/mitreSP25/kevinChong.webp' },
      { name: 'Shreya Sanikommu', title: 'Project Manager', photo: '/images/projects/mitreSP25/shreyaSanikommu.png', zoomPhotoIn: true },
      { name: 'Anvay Panguluri', title: 'Backend Engineer', photo: '/images/projects/mitreSP25/anvayPanguluri.webp' },
      { name: 'Autumn Anson', title: 'Frontend Engineer/Research', photo: '/images/projects/mitreSP25/autumnAnson.webp' },
      { name: 'Chayanika Sinha', title: 'Data Visualization Engineer', photo: '/images/projects/mitreSP25/chayanikaSinha.webp' },
      { name: 'Gitika Saravanan', title: 'DevOps Engineer', photo: '/images/projects/mitreSP25/gitikaSaravanan.webp' },
      { name: 'Jessica Zhou', title: 'UI/UX Designer', photo: '/images/projects/mitreSP25/jessicaZhou.webp', zoomPhotoIn: true },
      { name: 'Marvin Lin', title: 'ML Engineer', photo: '/images/projects/mitreSP25/marvinLin.png' },
      { name: 'Nate Zhang', title: 'Frontend Engineer/Research', photo: '/images/projects/mitreSP25/nateZhang.png' },
      { name: 'Parth Dua', title: 'Backend/DevOps Engineer', photo: '/images/projects/mitreSP25/parthDua.webp', zoomPhotoIn: true },
      { name: 'Ritvik Thakur', title: 'Backend Engineer', photo: '/images/projects/mitreSP25/ritvikThakur.webp' },
      { name: 'Thomas Huitema', title: 'Backend Engineer', photo: '/images/projects/mitreSP25/thomasHuitema.webp' },
      { name: 'Varun Kota', title: 'ML Engineer', photo: '/images/projects/mitreSP25/varunKota.webp' },
      { name: 'Will Graham', title: 'Frontend Engineer', photo: '/images/projects/mitreSP25/willGraham.png' }
    ]
  },
  {
    slug: 'us-news-sp-25',
    logo: '/images/logos/us-news.svg',
    logoAlt: 'U.S. News Logo',
    title: 'Anomaly Detection & Visualization',
    description: 'Advanced U.S News\' data platform by building a dynamic frontend for their internal API and implementing anomaly detection on multiple metric types',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Madeline Anson', title: 'Team Lead', photo: '/images/projects/usNewsSP25/MadelineAnson.jpg' },
      { name: 'Josiah Lim', title: 'Tech Lead', photo: '/images/projects/usNewsSP25/JosiahLim.jpg' },
      { name: 'Pranav Palle', title: 'Tech Lead', photo: '/images/projects/usNewsSP25/PranavPalle.jpg' },
      { name: 'Tanish Anandababu', title: 'Frontend Engineer', photo: '/images/projects/usNewsSP25/TanishAnandababu.jpg' },
      { name: 'Sathvik Andhavarapu', title: 'Frontend Engineer', photo: '/images/projects/usNewsSP25/SathvikAndhavarapu.jpg' },
      { name: 'Akshita Badkundri', title: 'Backend Engineer', photo: '/images/projects/usNewsSP25/AkshitaBadkundri.jpg' },
      { name: 'Anant Agrawal', title: 'Backend Engineer', photo: '/images/projects/usNewsSP25/AnantAgrawal.jpg' },
      { name: 'Pranjal Kattel', title: 'Engineer', photo: '/images/projects/usNewsSP25/PranjalKattel.jpg' },
      { name: 'Alex Shrestha', title: 'Engineer', photo: '/images/projects/usNewsSP25/AlexShrestha.jpg' },
      { name: 'Bhavya Rajasekaran', title: 'Backend Engineer', photo: '/images/projects/usNewsSP25/BhavyaRajasekaran.jpg' },
      { name: 'Madeline Moldrem', title: 'Shadow', photo: '/images/projects/usNewsSP25/MadelineMoldrem.jpg' },
      { name: 'Samantha Tyles', title: 'Shadow', photo: '/images/projects/usNewsSP25/SamanthaTyles.jpg' }
    ],
    showcaseContent: {
      image: '/images/projects/usNewsSP25/demo.png',
      description: "Dashboard showing anomaly monitoring using the U.S. News API"
    }
  },
  {
    slug: 'booz-allen-sp-25',
    logo: '/images/logos/booz-allen.png',
    logoAlt: 'Booz Allen Logo',
    title: 'Citation Configuration',
    description: 'Created a web app to generate citations that supports uploading, filtering, and exporting policy data in an easy to use way',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Angela Zhang', title: 'Project Lead', photo: '/images/projects/boozAllenSP25/AngelaZhang.jpg' },
      { name: 'Daven Chang', title: 'Tech Lead', photo: '/images/projects/boozAllenSP25/DavenChang.jpg' },
      { name: 'Alan Jiang', title: 'Tech Lead', photo: '/images/projects/boozAllenSP25/AlanJiang.jpg' },
      { name: 'Isabelle Ortiz', title: 'Project Manager' },
      { name: 'Ritvik Mahapatra', title: 'Engineer', photo: '/images/projects/boozAllenSP25/RitvikMahapatra.jpg' },
      { name: 'Aidana Aibek', title: 'UI/UX Designer', photo: '/images/projects/boozAllenSP25/AidanaAibek.jpg' },
      { name: 'Dev Patel', title: 'Engineer', photo: '/images/projects/boozAllenSP25/DevPatel.jpg' },
      { name: 'Adnan Kabir', title: 'Engineer', photo: '/images/projects/boozAllenSP25/AdnanKabir.jpg' },
      { name: 'Sidharth Ponram', title: 'Engineer', photo: '/images/projects/boozAllenSP25/SidharthPonram.jpg' },
      { name: 'Rachel Li', title: 'Engineer', photo: '/images/projects/boozAllenSP25/RachelLi.jpg' },
      { name: 'Vir Trivedi', title: 'Engineer', photo: '/images/projects/boozAllenSP25/VirTrivedi.jpg' },
      { name: 'Kanhav Bhatnagar', title: 'Engineer', photo: '/images/projects/boozAllenSP25/KanhavBhatnagar.jpg' },
      { name: 'Chiraag Nadig', title: 'Engineer', photo: '/images/projects/boozAllenSP25/ChiraagNadig.jpg' }
    ],
  },
  {
    slug: 'gdit-sp-25',
    logo: '/images/logos/general-dynamics.png',
    logoAlt: 'GDIT Logo',
    title: 'EmailMiner',
    description: 'Developed a scalable Retrieval Augmented Generation (RAG) pipeline to better query information from emails, utilizing relationship mappings and similarity search databases to improve data retrieval speed and accuracy',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Nishad Wajge', title: 'Project Lead', photo: '/images/projects/gditSP25/NishadWajge.jpg' },
      { name: 'Utsav Kataria', title: 'Tech Lead', photo: '/images/projects/gditSP25/UtsavKataria.jpg' },
      { name: 'Soham Katdare', title: 'Tech Lead', photo: '/images/projects/gditSP25/SohamKatdare.jpg' },
      { name: 'Ayan Banerjee', title: 'ML Engineer', photo: '/images/projects/gditSP25/AyanBanerjee.jpg' },
      { name: 'Angela Yu', title: 'ML Engineer', photo: '/images/projects/gditSP25/AngelaYu.jpg' },
      { name: 'Sriram Nallani', title: 'ML Engineer', photo: '/images/projects/gditSP25/SriramNallani.jpg' },
      { name: 'Lakshmee Harivanam', title: 'ML Engineer', photo: '/images/projects/gditSP25/LakshmeeHarivanam.jpg' },
      { name: 'Kaleb Ward', title: 'Frontend Engineer', photo: '/images/projects/gditSP25/KalebWard.jpg' },
      { name: 'Shivank Bhimavarapu', title: 'Frontend Engineer', photo: '/images/projects/gditSP25/ShivankBhimavarapu.jpg' },
      { name: 'Jaiman Munshi', title: 'Backend Engineer', photo: '/images/projects/gditSP25/JaimanMunshi.jpg' },
      { name: 'Sid Belwal', title: 'Backend Engineer', photo: '/images/projects/gditSP25/SidBelwal.jpg' },
      { name: 'Nithin Bhandari', title: 'Backend Engineer', photo: '/images/projects/gditSP25/NithinBhandari.jpg' }
    ],
    showcaseContent: {
      image: '/images/projects/gditSP25/demo.png',
      description: 'EmailMiner interface showcasing how the RAG pipeline accurately retrieves relevant information from emails'
    }
  },
  {
    slug: 'omal-sp-25',
    logo: '/images/logos/omal.webp',
    title: 'Omal Learning Platform',
    description: 'Created a cross-platform application that transforms interaction with educators and clients, offering an all-in-one platform to learn, showcase skills, and find projects across diverse professions',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Bilal Suleman', title: 'Project Lead', photo: '/images/projects/omalSP25/BilalSuleman.jpg' },
      { name: 'Krish Thakker', title: 'Tech Lead', photo: '/images/projects/omalSP25/KrishThakker.jpg' },
      { name: 'Vikaas Venkstesh', title: 'Backend Developer', photo: '/images/projects/omalSP25/VikaasVenkstesh.jpg' },
      { name: 'Ezekiel Franklin', title: 'Backend Developer', photo: '/images/projects/omalSP25/EzekielFranklin.jpg' },
      { name: 'Bryant Xiong', title: 'Backend Developer', photo: '/images/projects/omalSP25/BryantXiong.jpg' },
      { name: 'Edna Adissu', title: 'UI/UX Designer', photo: '/images/projects/omalSP25/EdnaAdissu.jpg' },
      { name: 'Miles McDonald', title: 'Frontend Developer', photo: '/images/projects/omalSP25/MilesMcDonald.jpg' },
      { name: 'Siddhant Jain', title: 'Frontend Developer', photo: '/images/projects/omalSP25/SiddhantJain.jpg' },
      { name: 'Lilly Ureta', title: 'Bootcamp Shadow', photo: '/images/projects/omalSP25/LillyUreta.jpg' },
      { name: 'Andrew Chen', title: 'Project Manager', photo: '/images/projects/omalSP25/AndrewChen.jpg' },
    ],
  },
  {
    slug: 'spring-2025-project-8',
    logo: '',
    title: 'Spring 2025 Project 8',
    description: 'Short description of project 8',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Victor Kim', title: 'Team Lead' },
      { name: 'Wendy Brown', title: 'Developer' },
      { name: 'Xander Green', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-9',
    logo: '',
    title: 'Spring 2025 Project 9',
    description: 'Short description of project 9',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Yara Black', title: 'Team Lead' },
      { name: 'Zane Wilson', title: 'Developer' },
      { name: 'Amy Clark', title: 'Designer' },
    ],
  },
];

const FALL_24_PROJECTS: Project[] = [
  {
    slug: 'fall-2024-project-1',
    logo: '',
    title: 'Fall 2024 Project 1',
    description: 'Short description of project 1',
    year: 2024,
    semester: 'Fall',
    members: [
      { name: 'Brian Hall', title: 'Team Lead' },
      { name: 'Cathy Young', title: 'Developer' },
      { name: 'Derek Fox', title: 'Designer' },
    ],
  },
  {
    slug: 'fall-2024-project-2',
    logo: '',
    title: 'Fall 2024 Project 2',
    description: 'Short description of project 2',
    year: 2024,
    semester: 'Fall',
    members: [
      { name: 'Ella King', title: 'Team Lead' },
      { name: 'Finn Moore', title: 'Developer' },
      { name: 'Gina Ray', title: 'Designer' },
    ],
  },
  {
    slug: 'fall-2024-project-3',
    logo: '',
    title: 'Fall 2024 Project 3',
    description: 'Short description of project 3',
    year: 2024,
    semester: 'Fall',
    members: [
      { name: 'Holly West', title: 'Team Lead' },
      { name: 'Ian Bell', title: 'Developer' },
      { name: 'Judy Snow', title: 'Designer' },
    ],
  },
];

// Featured projects must have exactly 3 items
const FEATURED_PROJECTS: FixedLengthArray<Project, 3> = [
  SPRING_25_PROJECTS[0],
  SPRING_25_PROJECTS[1],
  SPRING_25_PROJECTS[2],
];
const ALL_PROJECTS: Project[] = [...SPRING_25_PROJECTS, ...FALL_24_PROJECTS];

export { ALL_PROJECTS, FEATURED_PROJECTS, SPRING_25_PROJECTS, FALL_24_PROJECTS };