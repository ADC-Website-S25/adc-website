export type LeadershipMember = {
  name: string;
  role: string;
  src?: string; // Optional photo source
}

export const leadershipMembers: LeadershipMember[] = [
  { name: "Atheesh Thirumalairajan", role: "President", src: '/images/leadership/AtheeshThirumalairajan.jpg' },
  { name: "Amelia Harn", role: "Managing Director, Project Lead", src: '/images/leadership/ameliaHarn.png' },
  { name: "Hannah Chen", role: "Position", src: "/images/leadership/hannahChan.jpg" },
  { name: "Ashna Nayak", role: "Position" },
]