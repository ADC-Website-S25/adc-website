import { Banner } from "@/components/layout/banner";

// Here we will define any event banners we want to display on the site
// We can set begin and end dates for the banners, and they will only show if the current date is within that range
// Uncomment the undefined banner to disable the banner
// Add a banner object to the array to enable a banner at a set time

// export const banners: Banner[] = [];
export const banners: Banner[] = [
  {
    title: "ADC @ the First Look Fair",
    subtitle: "Stop by our booth to learn more about the club!", // Try to keep below 55 characters for 1 line
    // href: "/join", // Optional link for the banner title
    eventLocation: "McKeldin Mall",
    eventDateTime: {
      date: new Date('2025-09-12'),
      startTime: new Date('2025-09-12T10:00:00-04:00'), // 10am EST
      endTime: new Date('2025-09-12T15:00:00-04:00'),   // 3pm EST
    },
    showBannerStartDate: new Date('2025-09-9'),
    showBannerEndDate: new Date('2025-09-13'),
  },
];
  // {
  //   title: "",
  //   subtitle: "", // Try to keep below 55 characters for 1 line
  //   href: "/",
  //   eventLocation: "",
  //   eventDateTime: {
  //     date: new Date('2025-08-06'),
  //     startTime: new Date('2025-08-06T19:00:00'),
  //     endTime: new Date('2025-08-06T20:00:00'),
  //   },
  //   showBannerStartDate: new Date('2025-08-01'),
  //   showBannerEndDate: new Date('2025-08-31'),
  // },