import React, { createContext, useContext, useState } from 'react';
import luggageImg from "@assets/IMG_3152_1773063740528.jpg";
import busImg from "@assets/IMG_0003_1773063740530.jpg";
import nycAerialImg from "@assets/Screenshot_2026-03-10_at_11.15.50_AM_1773155905075.png";
import planeImg1 from "@assets/Screenshot_2026-03-10_at_11.15.28_AM_1773155905075.png";
import planeImg2 from "@assets/Screenshot_2026-03-10_at_7.57.44_AM_1773155905075.png";
import quitoSignImg from "@assets/Screenshot_2026-03-10_at_4.53.02_PM_1773175993134.png";
import day2Img1 from "@assets/76026510-e29d-4300-b4d2-d82f14e8259b_1773246304705.jpeg";
import day2Img2 from "@assets/08e740af-ae1a-4015-b37b-5b4a2202d150_1773246304705.jpeg";
import day2Img3 from "@assets/IMG_0129_1773246304705.jpeg";
import day2Img4 from "@assets/IMG_0114_1773246304705.jpeg";
import day2Img5 from "@assets/IMG_8949_1773246304705.jpeg";
import day2Img6 from "@assets/IMG_8948_1773246304706.jpeg";
import day2Img7 from "@assets/IMG_0099_1773246304706.jpeg";
import day2Img8 from "@assets/IMG_4891_1773246304706.jpeg";
import day2Img9 from "@assets/IMG_4845_1773246304706.jpeg";
import day2Img10 from "@assets/IMG_8851_1773246304706.jpeg";
import day2Img11 from "@assets/IMG_8827_1773246304706.jpeg";
import day2Img12 from "@assets/IMG_8821_1773246304706.jpeg";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  isFuture: boolean;
}

const initialTimelineData: TimelineEvent[] = [
  {
    id: "day1",
    date: "Mon, Mar 9",
    title: "The Journey Begins",
    location: "New York → Quito, Ecuador",
    description: "Departure from New York, arriving in the high-altitude capital of Ecuador.",
    images: [luggageImg, busImg, nycAerialImg, planeImg1, planeImg2, quitoSignImg],
    isFuture: false,
  },
  {
    id: "day2",
    date: "Tue, Mar 10",
    title: "Exploring the Equator",
    location: "Quito, Ecuador",
    description: "Visiting the Intiñan Museum and witnessing natural forces at work near the equator.",
    images: [day2Img1, day2Img2, day2Img3, day2Img4, day2Img5, day2Img6, day2Img7, day2Img8, day2Img9, day2Img10, day2Img11, day2Img12],
    isFuture: false,
  },
  {
    id: "day3",
    date: "Wed, Mar 11",
    title: "Arrival in the Galapagos",
    location: "Santa Cruz Island",
    description: "Flying to the Galapagos Islands! Visiting the Twin Craters and Santa Cruz highlands to see wild tortoises.",
    images: [],
    isFuture: true,
  },
  {
    id: "day4",
    date: "Thu, Mar 12",
    title: "Isabela Island Adventures",
    location: "Isabela Island",
    description: "Boat travel to Isabela Island. Visiting a pink flamingo habitat, tortoise breeding center, and snorkeling at Tintoreras Lava Islet.",
    images: [],
    isFuture: true,
  },
  {
    id: "day5",
    date: "Fri, Mar 13",
    title: "Darwin's Footsteps",
    location: "Santa Cruz Island",
    description: "Hiking to Tortuga Bay, relaxing on Playa Mansa, and visiting the Charles Darwin Research Station.",
    images: [],
    isFuture: true,
  },
  {
    id: "day6",
    date: "Sat, Mar 14",
    title: "San Cristóbal Discoveries",
    location: "San Cristóbal Island",
    description: "Traveling to San Cristóbal. Visiting the Interpretation Center, hiking Tijeretas Hill, and snorkeling at La Loberia Beach.",
    images: [],
    isFuture: true,
  },
  {
    id: "day7",
    date: "Sun, Mar 15",
    title: "Final Island Explorations",
    location: "San Cristóbal → Quito",
    description: "Enjoying final exploration time on San Cristóbal before flying back to the mainland capital.",
    images: [],
    isFuture: true,
  },
  {
    id: "day8",
    date: "Mon, Mar 16",
    title: "Andean Culture",
    location: "Otavalo & Cotacachi → Home",
    description: "Day trip to Otavalo to see the famous local market and artisan demonstrations, followed by a waterfall visit in Cotacachi before heading to the airport.",
    images: [],
    isFuture: true,
  }
];

interface TimelineContextType {
  timelineData: TimelineEvent[];
  addImages: (eventId: string, newImages: string[]) => void;
  removeImage: (eventId: string, imageIndex: number) => void;
}

const TimelineContext = createContext<TimelineContextType | undefined>(undefined);

export function TimelineProvider({ children }: { children: React.ReactNode }) {
  const [timelineData, setTimelineData] = useState<TimelineEvent[]>(initialTimelineData);

  const addImages = (eventId: string, newImages: string[]) => {
    setTimelineData(prev => prev.map(event => {
      if (event.id === eventId) {
        return { 
          ...event, 
          images: [...event.images, ...newImages], 
          isFuture: false // Once images are added, it's no longer 'future' visually
        };
      }
      return event;
    }));
  };

  const removeImage = (eventId: string, imageIndex: number) => {
    setTimelineData(prev => prev.map(event => {
      if (event.id === eventId) {
        const newImages = [...event.images];
        newImages.splice(imageIndex, 1);
        return {
          ...event,
          images: newImages,
          isFuture: newImages.length === 0 && event.images.length > 0 ? true : event.isFuture // revert to future if all images deleted (optional logic, but makes sense)
        };
      }
      return event;
    }));
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addImages, removeImage }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) throw new Error("useTimeline must be used within TimelineProvider");
  return context;
}
