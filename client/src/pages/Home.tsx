import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Camera, Heart, X, ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { Link } from "wouter";
import { useTimeline } from "@/context/TimelineContext";

// Asset imports
import mapImg from "@assets/GPI_1773063930173.jpg";
import newTurtleImg from "@assets/closeup-green-sea-turtle-swimming-underwater-lights_1773064213060.jpg";

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
    images: [],
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
    date: "Wed, Mar 11 – Sun, Mar 15",
    title: "Galápagos Islands Adventure",
    location: "Santa Cruz, Isabela & San Cristóbal Islands",
    description: "Five unforgettable days island-hopping the Galápagos: Twin Craters and wild tortoises in the Santa Cruz highlands, a flamingo habitat and snorkeling at Tintoreras on Isabela Island, hiking Tortuga Bay and visiting the Charles Darwin Research Station, and rounding it out on San Cristóbal with Tijeretas Hill and the sea lions of La Lobería before flying back to Quito.",
    images: [],
    isFuture: true,
  },
  {
    id: "day8",
    date: "Mon, Mar 16",
    title: "Andean Culture",
    location: "Otavalo & Cotacachi → Airport",
    description: "Day trip to Otavalo to see the famous local market and artisan demonstrations, followed by a waterfall visit in Cotacachi before heading to the airport.",
    images: [],
    isFuture: true,
  },
  {
    id: "day9",
    date: "Wed, Mar 18",
    title: "Stranded in Miami",
    location: "Miami, Florida",
    description: "A flight delay turned into an unexpected extra day! We made the most of it with a rainy walk along Miami Beach and an afternoon admiring the colorful street art and murals of the Design District before finally heading home.",
    images: [],
    isFuture: true,
  }
];

export default function Home() {
  const { timelineData } = useTimeline();
  const [selectedGallery, setSelectedGallery] = useState<{ images: string[], initialIndex: number } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sync index when a new gallery is opened
  React.useEffect(() => {
    if (selectedGallery) {
      setCurrentIndex(selectedGallery.initialIndex);
    }
  }, [selectedGallery]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setCurrentIndex((prev) => (prev === selectedGallery.images.length - 1 ? 0 : prev + 1));
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setCurrentIndex((prev) => (prev === 0 ? selectedGallery.images.length - 1 : prev - 1));
    }
  };

  const closeGallery = () => setSelectedGallery(null);

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGallery) return;
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev === selectedGallery.images.length - 1 ? 0 : prev + 1));
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev === 0 ? selectedGallery.images.length - 1 : prev - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGallery]);

  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary/20 pb-20 relative">
      {/* Visual Hero Banner */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img 
          src={newTurtleImg} 
          alt="Galapagos Green Sea Turtle" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Header Section */}
      <header className="relative -mt-16 md:-mt-28 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto z-10">
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
            <div>
              <p className="text-lg md:text-xl text-green-900 italic font-serif leading-relaxed">
                "Thank you to all my family and friends who supported me to make this trip possible. I am so grateful and excited to share this amazing adventure with you all!"
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
          className="rounded-3xl overflow-hidden border border-border shadow-sm bg-secondary/30 relative"
        >
          <img 
            src={mapImg} 
            alt="Trip Itinerary Map" 
            className="w-full h-auto object-contain relative z-0"
          />
          {/* Equator Overlay */}
          <div className="absolute top-[46%] left-0 right-0 border-t-2 border-dashed border-primary/60 z-10 hidden md:flex items-center" style={{ pointerEvents: 'none' }}>
            <span className="text-primary text-xs font-bold px-2 py-1 bg-white/80 backdrop-blur-sm rounded ml-6 shadow-sm border border-primary/20">
              EQUATOR (0°)
            </span>
          </div>
          {/* Mobile version of equator label */}
          <div className="absolute top-[46%] left-0 right-0 border-t-2 border-dashed border-primary/60 z-10 flex md:hidden items-center" style={{ pointerEvents: 'none' }}>
            <span className="text-primary text-[10px] font-bold px-1.5 py-0.5 bg-white/80 backdrop-blur-sm rounded ml-2 shadow-sm border border-primary/20">
              EQUATOR
            </span>
          </div>
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

                {/* Images Grid - Uncropped masonry layout */}
                <div className="pt-6">
                  {event.images.length > 0 ? (
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                      {event.images.map((img, i) => (
                        <div 
                          key={i} 
                          className="group relative rounded-xl overflow-hidden bg-secondary border border-border/50 cursor-pointer break-inside-avoid"
                          onClick={() => setSelectedGallery({ images: event.images, initialIndex: i })}
                        >
                          <img 
                            src={img} 
                            alt={`Photo from ${event.title}`}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full py-16 rounded-2xl border border-dashed border-border flex flex-col items-center justify-center bg-secondary/30 text-muted-foreground/50 space-y-3">
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

      {/* Closing Quote */}
      <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 bg-green-50/80 border border-green-200/60 rounded-2xl relative shadow-sm"
        >
          <p className="text-lg md:text-xl text-green-900 italic font-serif leading-relaxed">
            "My favorite part of the whole trip was the street art and exploring all the wildlife on the beaches of San Cristóbal. Thanks again for helping make this trip happen!"
          </p>
          <p className="text-primary font-bold mt-4">— William</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative text-center text-muted-foreground text-sm border-t border-border mt-12">
        <p>Updating live from the equator. More adventures to come!</p>
        
        <Link href="/login" className="absolute bottom-6 right-6 text-muted-foreground/30 hover:text-primary transition-colors">
          <Lock className="w-4 h-4" />
        </Link>
      </footer>

      {/* Fullscreen Image Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeGallery}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); closeGallery(); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedGallery.images.length > 1 && (
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            <div className="w-full h-full max-w-6xl max-h-[90vh] p-4 md:p-12 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={selectedGallery.images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>

            {selectedGallery.images.length > 1 && (
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image Counter */}
            {selectedGallery.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm tracking-widest bg-black/50 px-4 py-1.5 rounded-full">
                {currentIndex + 1} / {selectedGallery.images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}