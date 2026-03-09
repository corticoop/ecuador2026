import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Camera, Heart } from "lucide-react";

// Asset imports
import luggageImg from "@assets/IMG_3152_1773063740528.jpg";
import busImg from "@assets/IMG_0003_1773063740530.jpg";
import mapImg from "@assets/GPI_1773063930173.jpg";
import turtleImg from "@/assets/images/turtle.jpg";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  isFuture: boolean;
}

const timelineData: TimelineEvent[] = [
  {
    id: "day1",
    date: "Mon, Mar 9",
    title: "The Journey Begins",
    location: "New York → Quito, Ecuador",
    description: "Departure from New York, arriving in the high-altitude capital of Ecuador.",
    images: [luggageImg, busImg],
    isFuture: false,
  },
  {
    id: "day2",
    date: "Tue, Mar 10",
    title: "Exploring the Equator",
    location: "Quito, Ecuador",
    description: "Visiting the Intiñan Museum and witnessing natural forces at work near the equator.",
    images: [],
    isFuture: true,
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary/20 pb-20">
      {/* Visual Hero Banner */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <img 
          src={turtleImg} 
          alt="Galapagos Giant Tortoise" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>

      {/* Header Section */}
      <header className="relative -mt-20 md:-mt-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/40"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
            <MapPin className="w-4 h-4" />
            Ecuador & Galapagos Islands
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-black">
            William's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              Galapagos Adventure
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-serif">
            Walking in Darwin's footsteps across the fascinating archipelago. 
            Follow along as we explore giant tortoises, volcanic landscapes, and Andean culture on this incredible school expedition.
          </p>

          {/* Supporter Callout */}
          <div className="mt-8 p-6 md:p-8 bg-green-50/80 border border-green-200/60 rounded-2xl relative shadow-sm">
            <Heart className="w-8 h-8 text-primary/40 absolute top-6 left-6" />
            <div className="pl-12">
              <p className="text-lg md:text-xl text-green-900 italic font-serif leading-relaxed">
                "A huge thank you to all my family and friends who supported me to make this trip possible. I am so grateful and excited to share this amazing adventure with you all!"
              </p>
              <p className="text-primary font-bold mt-4">— William</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Map Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mt-16 md:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-border shadow-sm bg-secondary/30"
        >
          <img 
            src={mapImg} 
            alt="Trip Itinerary Map" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </section>

      {/* Timeline Section */}
      <main className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="relative border-l border-primary/20 ml-4 md:ml-8 space-y-24">
          
          {timelineData.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-white border-2 
                ${event.isFuture ? 'border-primary/40' : 'border-primary shadow-[0_0_12px_rgba(34,197,94,0.6)]'}`} 
              />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="hidden md:block w-8 h-[1px] bg-border" />
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                  {event.title}
                </h3>
                
                <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                  {event.description}
                </p>

                {/* Images Grid - Removed hard cropping to show full images */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {event.images.length > 0 ? (
                    event.images.map((img, i) => (
                      <div key={i} className="group relative rounded-2xl overflow-hidden bg-secondary border border-border/50">
                        <img 
                          src={img} 
                          alt={`Photo from ${event.title}`}
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-1 md:col-span-2 py-16 rounded-2xl border border-dashed border-border flex flex-col items-center justify-center bg-secondary/30 text-muted-foreground/50 space-y-3">
                      <Camera className="w-8 h-8 opacity-40" />
                      <span className="text-sm font-medium uppercase tracking-wider">Awaiting Photos</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border mt-12">
        <p>Updating live from the equator. More adventures to come!</p>
      </footer>
    </div>
  );
}