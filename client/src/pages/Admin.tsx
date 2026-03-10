import { useState, useRef } from "react";
import { useTimeline } from "@/context/TimelineContext";
import { ArrowLeft, ImagePlus, Loader2, X } from "lucide-react";
import { useLocation } from "wouter";
import imageCompression from 'browser-image-compression';
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { timelineData, addImages, removeImage } = useTimeline();
  const [, setLocation] = useLocation();
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const [isCompressing, setIsCompressing] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();
  
  const handleFileChange = async (eventId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsCompressing(prev => ({ ...prev, [eventId]: true }));
      const filesArray = Array.from(e.target.files);
      
      try {
        const compressedImagesPromises = filesArray.map(async (file) => {
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
          };
          
          try {
            const compressedFile = await imageCompression(file, options);
            return URL.createObjectURL(compressedFile);
          } catch (error) {
            console.error("Error compressing image:", error);
            return URL.createObjectURL(file); // Fallback to original if compression fails
          }
        });

        const imageUrls = await Promise.all(compressedImagesPromises);
        addImages(eventId, imageUrls);
        
        toast({
          title: "Upload Successful",
          description: `Successfully added ${filesArray.length} photo${filesArray.length !== 1 ? 's' : ''}.`,
          duration: 3000,
        });
      } catch (error) {
        toast({
          title: "Upload Failed",
          description: "There was an error processing your images.",
          variant: "destructive",
        });
      } finally {
        setIsCompressing(prev => ({ ...prev, [eventId]: false }));
        
        // Reset input
        if (fileInputRefs.current[eventId]) {
          fileInputRefs.current[eventId]!.value = '';
        }
      }
    }
  };

  const handleDelete = (eventId: string, index: number) => {
    removeImage(eventId, index);
    toast({
      title: "Photo Removed",
      description: "The photo has been removed from the timeline.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-secondary/30 pb-20">
      <header className="bg-white border-b border-border sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLocation("/")}
              className="p-2 -ml-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
            Mockup Mode
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Upload Photos</h2>
          <p className="text-muted-foreground">Select a day below to add photos to the timeline.</p>
        </div>

        <div className="grid gap-6">
          {timelineData.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-bold text-primary mb-1">{event.date}</div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                  <div className="mt-3 text-sm font-medium text-foreground">
                    {event.images.length} photo{event.images.length !== 1 ? 's' : ''} uploaded
                  </div>
                </div>
                
                <div className="shrink-0">
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    className="hidden"
                    ref={el => fileInputRefs.current[event.id] = el}
                    onChange={(e) => handleFileChange(event.id, e)}
                    disabled={isCompressing[event.id]}
                  />
                  <button 
                    onClick={() => fileInputRefs.current[event.id]?.click()}
                    disabled={isCompressing[event.id]}
                    className="w-full md:w-auto px-6 py-3 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {isCompressing[event.id] ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Optimizing...
                      </>
                    ) : (
                      <>
                        <ImagePlus className="w-4 h-4" />
                        Upload Photos
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Preview thumbnails */}
              {event.images.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border flex gap-3 overflow-x-auto pb-2">
                  {event.images.map((img, i) => (
                    <div key={i} className="group relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-border">
                      <img src={img} className="w-full h-full object-cover" alt="" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={() => handleDelete(event.id, i)}
                          className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                          title="Delete photo"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}