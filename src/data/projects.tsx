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
    slug: 'trachsense',
    logo: '/images/projects/childrensnational.png',
    logoAlt: 'Childrens National Logo',
    title: 'TrachSense',
    description: 'TrachSense is a medical app that monitors and ensures proper breathing tube placement for tracheotomy patients.',
    year: 2025,
    semester: 'Spring',
    showcaseContent: {
      description: 'Fellowship video for this project',
      videoUrl: 'https://www.youtube.com/embed/wGWQ-bpJkao?si=is5afyMHG4Odvw1n',
    },
    members: [
        { name: 'Hannah Chan', title: 'Team Lead' },
        { name: 'Yashas Bhat', title: 'Tech Lead' },
        { name: 'Mohammad Abd-Elmoniem', title: 'Tech Lead' },
        { name: 'Olivia', title: 'UI/UX' },
        { name: 'Matthew', title: 'Frontend' },
        { name: 'Eswar Karavadi', title: 'Frontend' },
        { name: 'Amogh', title: 'Backend' },
        { name: 'Tanmay', title: 'Backend' },
        { name: 'Tommy', title: 'Backend' },
        { name: 'Surabhi', title: 'Backend' },
        { name: 'Richard', title: 'Backend' },
        { name: 'Pranav', title: 'Backend' },
        { name: 'Michelle', title: 'Backend' },
        { name: 'Jay', title: 'Backend' },
        { name: 'Kira', title: 'Backend' },
    ],
  },
  {
    slug: 'amazon-project-kuiper',
    logo: '/images/projects/amazonkuiper.png',
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
    slug: 'mitre',
    logo: '/images/projects/mitreSP25/mitre.svg',
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
    slug: 'spring-2025-project-4',
    logo: '',
    title: 'Spring 2025 Project 4',
    description: 'Short description of project 4',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Jack Taylor', title: 'Team Lead' },
      { name: 'Kara Adams', title: 'Developer' },
      { name: 'Liam Scott', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-5',
    logo: '',
    title: 'Spring 2025 Project 5',
    description: 'Short description of project 5',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Mia Clark', title: 'Team Lead' },
      { name: 'Nora White', title: 'Developer' },
      { name: 'Oliver Brown', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-6',
    logo: '',
    title: 'Spring 2025 Project 6',
    description: 'Short description of project 6',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Peter Green', title: 'Team Lead' },
      { name: 'Queen Adams', title: 'Developer' },
      { name: 'Riley Black', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-7',
    logo: '',
    title: 'Spring 2025 Project 7',
    description: 'Short description of project 7',
    year: 2025,
    semester: 'Spring',
    members: [
      { name: 'Sofia Wilson', title: 'Team Lead' },
      { name: 'Tom Lee', title: 'Developer' },
      { name: 'Uma Patel', title: 'Designer' },
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