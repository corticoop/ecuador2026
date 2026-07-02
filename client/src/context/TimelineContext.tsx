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

import galapagosImg1 from "@assets/galapagos-01.jpg";
import galapagosImg2 from "@assets/galapagos-02.jpg";
import galapagosImg3 from "@assets/galapagos-03.jpg";
import galapagosImg4 from "@assets/galapagos-04.jpg";
import galapagosImg5 from "@assets/galapagos-05.jpg";
import galapagosImg6 from "@assets/galapagos-06.jpg";
import galapagosImg7 from "@assets/galapagos-07.jpg";
import galapagosImg8 from "@assets/galapagos-08.jpg";
import galapagosImg9 from "@assets/galapagos-09.jpg";
import galapagosImg10 from "@assets/galapagos-10.jpg";
import galapagosImg11 from "@assets/galapagos-11.jpg";
import galapagosImg12 from "@assets/galapagos-12.jpg";
import galapagosImg13 from "@assets/galapagos-13.jpg";
import galapagosImg14 from "@assets/galapagos-14.jpg";
import galapagosImg15 from "@assets/galapagos-15.jpg";
import galapagosImg16 from "@assets/galapagos-16.jpg";
import galapagosImg17 from "@assets/galapagos-17.jpg";
import galapagosImg18 from "@assets/galapagos-18.jpg";
import galapagosImg19 from "@assets/galapagos-19.jpg";
import galapagosImg20 from "@assets/galapagos-20.jpg";
import galapagosImg21 from "@assets/galapagos-21.jpg";
import galapagosImg22 from "@assets/galapagos-22.jpg";

import andeanImg1 from "@assets/andean-01.jpg";
import andeanImg2 from "@assets/andean-02.jpg";
import andeanImg3 from "@assets/andean-03.jpg";
import andeanImg4 from "@assets/andean-04.jpg";
import andeanImg5 from "@assets/andean-05.jpg";
import andeanImg6 from "@assets/andean-06.jpg";
import andeanImg7 from "@assets/andean-07.jpg";
import andeanImg8 from "@assets/andean-08.jpg";
import andeanImg9 from "@assets/andean-09.jpg";
import andeanImg10 from "@assets/andean-10.jpg";
import andeanImg11 from "@assets/andean-11.jpg";
import andeanImg12 from "@assets/andean-12.jpg";
import andeanImg13 from "@assets/andean-13.jpg";
import andeanImg14 from "@assets/andean-14.jpg";

import miamiImg1 from "@assets/miami-01.jpg";
import miamiImg2 from "@assets/miami-02.jpg";
import miamiImg3 from "@assets/miami-03.jpg";
import miamiImg4 from "@assets/miami-04.jpg";
import miamiImg5 from "@assets/miami-05.jpg";
import miamiImg6 from "@assets/miami-06.jpg";
import miamiImg7 from "@assets/miami-07.jpg";
import miamiImg8 from "@assets/miami-08.jpg";
import miamiImg9 from "@assets/miami-09.jpg";
import miamiImg10 from "@assets/miami-10.jpg";
import miamiImg11 from "@assets/miami-11.jpg";
import miamiImg12 from "@assets/miami-12.jpg";
import miamiImg13 from "@assets/miami-13.jpg";
import miamiImg14 from "@assets/miami-14.jpg";

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
    date: "Wed, Mar 11 – Sun, Mar 15",
    title: "Galápagos Islands Adventure",
    location: "Santa Cruz, Isabela & San Cristóbal Islands",
    description: "Five unforgettable days island-hopping the Galápagos: Twin Craters and wild tortoises in the Santa Cruz highlands, a flamingo habitat and snorkeling at Tintoreras on Isabela Island, hiking Tortuga Bay and visiting the Charles Darwin Research Station, and rounding it out on San Cristóbal with Tijeretas Hill and the sea lions of La Lobería before flying back to Quito.",
    images: [galapagosImg1, galapagosImg2, galapagosImg3, galapagosImg4, galapagosImg5, galapagosImg6, galapagosImg7, galapagosImg8, galapagosImg9, galapagosImg10, galapagosImg11, galapagosImg12, galapagosImg13, galapagosImg14, galapagosImg15, galapagosImg16, galapagosImg17, galapagosImg18, galapagosImg19, galapagosImg20, galapagosImg21, galapagosImg22],
    isFuture: false,
  },
  {
    id: "day8",
    date: "Mon, Mar 16",
    title: "Andean Culture",
    location: "Otavalo & Cotacachi → Airport",
    description: "Day trip to Otavalo to see the famous local market and artisan demonstrations, followed by a waterfall visit in Cotacachi before heading to the airport.",
    images: [andeanImg1, andeanImg2, andeanImg3, andeanImg4, andeanImg5, andeanImg6, andeanImg7, andeanImg8, andeanImg9, andeanImg10, andeanImg11, andeanImg12, andeanImg13, andeanImg14],
    isFuture: false,
  },
  {
    id: "day9",
    date: "Wed, Mar 18",
    title: "Stranded in Miami",
    location: "Miami, Florida",
    description: "A flight delay turned into an unexpected extra day! We made the most of it with a rainy walk along Miami Beach and an afternoon admiring the colorful street art and murals of the Design District before finally heading home.",
    images: [miamiImg1, miamiImg2, miamiImg3, miamiImg4, miamiImg5, miamiImg6, miamiImg7, miamiImg8, miamiImg9, miamiImg10, miamiImg11, miamiImg12, miamiImg13, miamiImg14],
    isFuture: false,
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
