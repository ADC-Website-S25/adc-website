export type LeadershipMember = {
  name: string;
  role: string;
  src?: string; // Optional photo source
};

export const leadershipMembers: LeadershipMember[] = [
  {
    name: "Atheesh Thirumalairajan",
    role: "President",
    src: "/images/leadership/AtheeshThirumalairajan.jpg",
  },
  {
    name: "Ashna Nayak",
    role: "Executive Director",
    src: "/images/leadership/AshnaNayak.jpg",
  },
  {
    name: "Alan Chan",
    role: "Vice President",
    src: "/images/leadership/alanChan.png",
  },
  {
    name: "Thomas Huitema",
    role: "Managing Director",
    src: "/images/leadership/thomasHuitema.png",
  },
];
