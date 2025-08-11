import { Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import GradientText from '../ui/gradient-text';

export type Banner = {
  title: string;
  subtitle: string;
  eventLocation: string;
  eventDateTime: {
    date: Date;
    startTime: Date;
    endTime: Date;
  }
  href?: string;
  showBannerStartDate: Date;
  showBannerEndDate: Date;
}

const Banner = (banner: Banner) => {
  if (!banner) return null;
  const { title, subtitle, showBannerStartDate, showBannerEndDate, eventLocation, eventDateTime, href } = banner;
  if( showBannerStartDate > new Date() || showBannerEndDate < new Date()) return null;
  
  const today = new Date();
  const eventDate = new Date(eventDateTime.startTime);

  const happeningNow = new Date() >= eventDateTime.startTime && new Date() <= eventDateTime.endTime;
  const happeningToday = today.toDateString() === eventDate.toDateString();
  const isActive = happeningNow || happeningToday;

  return (
    <aside className="w-full bg-white z-[99999] shadow-2xl">
      <div className={`flex flex-col md:grid items-center gap-4 px-4 py-2 max-w-6xl mx-auto ${isActive ? 'grid-cols-[1fr_auto_1fr]' : 'grid-cols-2'}`}>
        <div className='max-w-sm max-md:text-center'>
          <h2 className='text-2xl font-bold'>
            {href ? <Link href={href}>{title}</Link> : title}
          </h2>
          <p className='text-muted-foreground text-sm'>{subtitle}</p>
        </div>
        
        {isActive && (
          <div className="flex justify-center">
            <GradientText
              colors={["#00b5ff", "#0083ff", "#10b981", "#0066cc", "#06b6d4"]}
              animationSpeed={10}
              showBorder={false}
              className="text-3xl whitespace-nowrap"
            >
              {happeningNow ? "Happening Now!" : "Happening Today!"}
            </GradientText>
          </div>
        )}

        <div className="flex flex-col max-md:items-center md:ml-auto">
          {eventDateTime && (
            <span className='flex items-center'>
              <Clock size={16} className="inline mr-1" />
              <p className="truncate">
                {`${eventDateTime.date.toLocaleString('en-US', { month: 'short', day: 'numeric' })}, 
                ${eventDateTime.startTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}-${eventDateTime.endTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`}
              </p>
            </span>
          )}
          {eventLocation && (
            <span className='flex items-center'>
              <MapPin size={16} className="inline mr-1" />
              <p className="truncate">{eventLocation}</p>
            </span>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Banner