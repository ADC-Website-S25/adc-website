import { div } from "framer-motion/client";
import React from "react";

const EventsPage = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center pt-40 pb-14 px-2">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-12">
        Events
      </h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showNav=0&mode=AGENDA&showCalendars=0&title=Test%20Calendar&showPrint=0&src=YzAxMWUwYjZiNGZjYzY0ZmJiMmYzYzdlNzllMTI4YTA0ODE4NGY3YTJmYTRiMzJiNDkzMGM4MWZiOThhZDAxM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285f4"
        width="800"
        height="600"
        className="rounded-xl w-full mx-auto max-w-6xl border shadow-lg"
      ></iframe>
    </main>
  );
};

export default EventsPage;
