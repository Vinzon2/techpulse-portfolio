import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  User, 
  Cpu, 
  Mail, 
  Terminal, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Award, 
  Upload, 
  X,
  ChevronRight,
  Database,
  Globe,
  Layers,
  Smartphone,
  Facebook
} from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utils ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-tech-accent/10 rounded-lg border border-tech-accent/20">
        <Icon className="w-5 h-5 text-tech-accent" />
      </div>
      <span className="text-tech-accent font-mono text-sm tracking-widest uppercase">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{title}</h2>
  </div>
);

const ServiceCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 bg-tech-surface border border-tech-border rounded-xl group hover:border-tech-accent/50 transition-all"
  >
    <div className="w-12 h-12 bg-tech-bg border border-tech-border rounded-lg flex items-center justify-center mb-4 group-hover:border-tech-accent/30 group-hover:bg-tech-accent/5 transition-all">
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-tech-accent transition-all" />
    </div>
    <h3 className="text-xl font-bold mb-2 group-hover:text-tech-accent transition-all">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const [certificates, setCertificates] = useState<{ id: string; url: string; name: string }[]>([]);
  const [isContacting, setIsContacting] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setCertificates(prev => [
          ...prev,
          { 
            id: Math.random().toString(36).substr(2, 9),
            url: reader.result as string,
            name: file.name
          }
        ]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png', '.jpg', '.gif'] }
  } as any);

  const removeCertificate = (id: string) => {
    setCertificates(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-tech-bg/50 to-tech-bg pointer-events-none" />
      <div className="scanline pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-tech-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-tech-accent rounded flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="font-mono font-bold tracking-tighter text-lg">Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-gray-400">
            <a href="#about" className="hover:text-tech-accent transition-colors">/ABOUT</a>
            <a href="#services" className="hover:text-tech-accent transition-colors">/SERVICES</a>
            <a href="#skills" className="hover:text-tech-accent transition-colors">/SKILLS</a>
            <a href="#certificates" className="hover:text-tech-accent transition-colors">/AWARDS</a>
            <a href="#contact" className="px-4 py-2 bg-tech-accent text-black font-bold rounded hover:bg-tech-accent/90 transition-all">CONTACT_INIT</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section id="about" className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-accent/10 border border-tech-accent/20 text-tech-accent text-xs font-mono mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent"></span>
                  </span>
                  SYSTEM_STATUS: ONLINE
                </motion.div>
                
                <div className="relative mb-8">
                  <motion.h1 
                    className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    I BUILD <br />
                    <span className="text-tech-accent">DIGITAL</span> <br />
                    INFRASTRUCTURE
                  </motion.h1>
                  
                  {/* Real-time moving profile name */}
                  <motion.div 
                    className="absolute -top-10 -right-10 hidden lg:block"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="bg-tech-surface border border-tech-accent p-4 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                      <p className="text-xs font-mono text-tech-accent mb-1">PPROFILE</p>
                      <p className="text-xl font-bold font-mono tracking-tight text-white">VINZON S. ARELLANO</p>
                    </div>
                  </motion.div>
                </div>

                <motion.p 
                  className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                   Software Development specializing in high-performance distributed systems 
                  and immersive web experiences. Bridging the gap between complex logic and 
                  human-centric design.
                </motion.p>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-tech-accent text-black font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform">
                    VIEW_PROJECTS <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-4 px-4">
                    <a href="https://github.com/" className="p-2 text-gray-400 hover:text-tech-accent transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="https://www.linkedin.com/in/vinzon-arellano-474aaa27b/" className="p-2 text-gray-400 hover:text-tech-accent transition-colors"><Linkedin className="w-6 h-6" /></a>
                    <a href="https://www.facebook.com/vinzon.salubre" className="p-2 text-gray-400 hover:text-tech-accent transition-colors"><Facebook className="w-6 h-6" /></a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-tech-border bg-tech-surface relative group">
                  <img 
                    src="https://picsum.photos/seed/tech/800/800" 
                    alt="Profile" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-bg via-transparent to-transparent" />
                  
                  {/* Tech Overlays */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-tech-accent/50 text-right">
                    LAT: 37.7749<br />
                    LONG: -122.4194<br />
                    ALT: 12.4m
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-tech-accent/50">
                    SCANNING_BIOMETRICS...<br />
                    MATCH_FOUND: 99.8%
                  </div>
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-tech-accent" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-tech-accent" />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-32">
            <SectionHeader 
              title="Expertise & Solutions" 
              subtitle="SERVICES" 
              icon={Cpu} 
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                title="Full-Stack Dev" 
                description="End-to-end application development using modern frameworks and scalable architectures."
                icon={Globe}
              />
              <ServiceCard 
                title="System Design" 
                description="Architecting robust, distributed systems capable of handling millions of concurrent requests."
                icon={Layers}
              />
              <ServiceCard 
                title="Cloud Solutions" 
                description="Optimizing infrastructure on AWS, GCP, and Azure for maximum performance and cost-efficiency."
                icon={Database}
              />
              <ServiceCard 
                title="Mobile First" 
                description="Crafting high-performance native and cross-platform mobile applications for iOS and Android."
                icon={Smartphone}
              />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-32">
            <SectionHeader 
              title="Technical" 
              subtitle="SKILLS" 
              icon={Code2} 
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-mono text-tech-accent mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4" /> FRONTEND_CORE
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Angular', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js', 'Redux', 'Vue'].map(s => (
                      <motion.div
                        key={s}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 0 15px rgba(0, 255, 65, 0.2)",
                        }}
                        className="px-3 py-1 bg-tech-surface border border-tech-border rounded-md font-mono text-xs text-gray-400 hover:text-tech-accent hover:border-tech-accent/50 transition-all cursor-default"
                      >
                        {s}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-tech-accent mb-4 flex items-center gap-2">
                    <Database className="w-4 h-4" /> BACKEND_INFRA
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker', 'Kubernetes'].map(s => (
                      <motion.div
                        key={s}
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 0 15px rgba(0, 255, 65, 0.2)",
                        }}
                        className="px-3 py-1 bg-tech-surface border border-tech-border rounded-md font-mono text-xs text-gray-400 hover:text-tech-accent hover:border-tech-accent/50 transition-all cursor-default"
                      >
                        {s}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-tech-surface border border-tech-border rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code2 className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Development Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-tech-accent mt-1" />
                      <div>
                        <h5 className="font-bold mb-1">Performance First</h5>
                        <p className="text-sm text-gray-500">Every millisecond counts. I optimize for the critical path.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-tech-accent mt-1 opacity-50" />
                      <div>
                        <h5 className="font-bold mb-1">Clean Architecture</h5>
                        <p className="text-sm text-gray-500">Code is for humans first, machines second. Maintainability is key.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-tech-accent mt-1 opacity-30" />
                      <div>
                        <h5 className="font-bold mb-1">Security by Design</h5>
                        <p className="text-sm text-gray-500">Integrating security protocols at the foundation of every build.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-12 bg-tech-accent mt-1 opacity-10" />
                      <div>
                        <h5 className="font-bold mb-1">Continuous Delivery</h5>
                        <p className="text-sm text-gray-500">Automated pipelines for reliable and rapid deployments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section id="certificates" className="mb-32">
            <SectionHeader 
              title="Recognition & Achievements" 
              subtitle="AWARDS" 
              icon={Award} 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Upload Area */}
              <div 
                {...getRootProps()} 
                className={cn(
                  "lg:col-span-1 h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all",
                  isDragActive ? "border-tech-accent bg-tech-accent/5" : "border-tech-border hover:border-tech-accent/50 bg-tech-surface"
                )}
              >
                <input {...getInputProps()} />
                <div className="p-4 bg-tech-bg rounded-full border border-tech-border">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-center px-4">
                  <p className="text-sm font-bold">Upload Certificate</p>
                  <p className="text-xs text-gray-500 mt-1">Drag & drop or click to browse</p>
                </div>
              </div>

              {/* Display Area */}
              <AnimatePresence mode="popLayout">
                {certificates.map((cert) => (
                  <motion.div 
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="h-64 bg-tech-surface border border-tech-border rounded-2xl overflow-hidden relative group"
                  >
                    <img src={cert.url} alt={cert.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-xs font-mono text-tech-accent truncate">{cert.name}</p>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeCertificate(cert.id); }}
                      className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-red-500/50 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Placeholder if empty */}
              {certificates.length === 0 && (
                <div className="lg:col-span-3 h-64 border border-tech-border rounded-2xl flex items-center justify-center bg-tech-surface/50">
                  <p className="text-gray-600 font-mono text-sm italic">NO_CERTIFICATES_UPLOADED_YET</p>
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <div className="bg-tech-surface border border-tech-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-tech-accent/5 blur-[100px] rounded-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <SectionHeader 
                    title="Let's Build Something Great" 
                    subtitle="CONTACT" 
                    icon={Mail} 
                  />
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Currently accepting new projects and collaboration opportunities. 
                    Drop a message and let's discuss your next digital breakthrough.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-tech-bg border border-tech-border rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-tech-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-mono uppercase">Email</p>
                        <p className="font-bold">arellanovinzon9@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-tech-bg border border-tech-border rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-tech-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-mono uppercase">Location</p>
                        <p className="font-bold">Asia plaza, Colon street, Cebu,City</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsContacting(true); setTimeout(() => setIsContacting(false), 2000); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase">Full Name</label>
                      <input type="text" className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 focus:border-tech-accent outline-none transition-colors text-white" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase">Email Address</label>
                      <input type="email" className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 focus:border-tech-accent outline-none transition-colors text-white" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Subject</label>
                    <input type="text" className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 focus:border-tech-accent outline-none transition-colors text-white" placeholder="Project Inquiry" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                    <textarea rows={4} className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 focus:border-tech-accent outline-none transition-colors resize-none text-white" placeholder="Tell me about your project..." required></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isContacting}
                    className="w-full py-4 bg-tech-accent text-black font-bold rounded-lg hover:bg-tech-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isContacting ? (
                      <>SENDING_PACKETS... <span className="animate-pulse">_</span></>
                    ) : (
                      <>SEND_MESSAGE <ChevronRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-tech-border py-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-tech-accent" />
            <span className="font-mono text-sm text-gray-500">© 2024 Portfolio. ALL_RIGHTS_RESERVED.</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-gray-500">
            <a href="#" className="hover:text-tech-accent transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-tech-accent transition-colors">TERMS_OF_SERVICE</a>
            <div className="flex items-center gap-4 border-l border-tech-border pl-6">
              <a href="https://github.com/" className="hover:text-tech-accent transition-colors"><Github className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/in/vinzon-arellano-474aaa27b/" className="hover:text-tech-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/vinzon.salubre" className="p-2 text-gray-400 hover:text-tech-accent transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
