import { useState } from "react";
import { useLocation } from "wouter";
import { Lock, ArrowRight } from "lucide-react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Galapagos") {
      setLocation("/admin");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
        <p className="text-muted-foreground text-center mb-8">Enter the password to upload photos.</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Enter password"
              autoFocus
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            Login <ArrowRight className="w-4 h-4" />
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <button onClick={() => setLocation("/")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Return to timeline
          </button>
        </div>
      </div>
    </div>
  );
}