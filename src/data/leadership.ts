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
    name: "Amelia Harn",
    role: "Executive Director",
    src: "/images/leadership/ameliaHarn.png",
  },
  {
    name: "Ashna Nayak",
    role: "Vice President",
    src: "/images/leadership/AshnaNayak.jpg",
  },
];
