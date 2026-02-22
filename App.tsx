/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Instagram, 
  Clock, 
  MapPin, 
  Info, 
  AlertCircle, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  User,
  ChevronRight,
  Star
} from 'lucide-react';

const WHATSAPP_NUMBER = "+38348224888";

const services = [
  { name: "Anti wrinkle", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Filler", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Jawlines", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Nose Filler", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Lip Filler", icon: <Sparkles className="w-6 h-6" /> },
  { name: "BBL", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Lemon Bottle", icon: <Sparkles className="w-6 h-6" /> },
  { name: "Facial", icon: <Sparkles className="w-6 h-6" /> },
];

const workingHours = [
  { day: "E Hënë", hours: "10 AM – 6 PM" },
  { day: "E Martë", hours: "10 AM – 6 PM" },
  { day: "E Mërkurë", hours: "10 AM – 6 PM" },
  { day: "E Enjte", hours: "10 AM – 6 PM" },
  { day: "E Premte", hours: "10 AM – 6 PM" },
  { day: "E Shtunë", hours: "10 AM – 6 PM" },
  { day: "E Diel", hours: "Mbyllur" },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (serviceName?: string) => {
    const text = serviceName 
      ? `Përshëndetje! Jam i interesuar për shërbimin: ${serviceName}`
      : "Përshëndetje! Dua të caktoj një termin.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-gold/30">
      {/* SVG Filter for Electric Effect */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none">
        <defs>
          <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="8" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="10s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="8" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="10s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="8" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="10s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="8" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="10s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />

            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="8" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8"
            >
              <img src="https://i.ibb.co/ZDZftnF/IMG-6136.png" alt="Logo" className="h-32 w-auto" />
            </motion.div>
            <div className="w-48 h-[1px] bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-gold via-gold-light to-gold-dark"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 font-serif text-sm tracking-[0.3em] gold-gradient uppercase"
            >
              Klinika Estetike AM
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
              <motion.div 
                style={{ opacity }}
                className="absolute inset-0 z-0"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="z-10 text-center space-y-8"
              >
                <img 
                  src="https://i.ibb.co/ZDZftnF/IMG-6136.png" 
                  alt="Logo" 
                  className="h-40 md:h-56 mx-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                />
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-8xl font-serif tracking-tighter">
                    <span className="gold-gradient">Klinika Estetike</span>
                    <br />
                    <span className="silver-gradient">AM</span>
                  </h1>
                  <div className="flex items-center justify-center gap-2 text-gold/80">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium tracking-widest uppercase">4.3 (6 Reviews)</span>
                  </div>
                </div>
                <p className="text-white/40 font-light tracking-[0.2em] uppercase text-xs md:text-sm">
                  Health and Beauty Shop • Pejë
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
              >
                <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
              </motion.div>
            </section>

            {/* Doctor Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex justify-center"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 border-2 border-gold/30 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-2 border border-silver/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-4 overflow-hidden rounded-full border-4 border-[#0a0a0a] z-10">
                      <img 
                        src="https://i.ibb.co/bgVf6n5N/IMG-6130.jpg" 
                        alt="Doktorreshë Agnesa Berisha" 
                        className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <p className="gold-gradient font-serif italic text-xl">Doktorreshë</p>
                    <h2 className="text-4xl md:text-6xl font-serif silver-gradient">Agnesa Berisha</h2>
                  </div>
                  <p className="text-white/60 font-light leading-relaxed text-lg">
                    Eksperte në mjekësinë estetike, e përkushtuar për të nxjerrë në pah bukurinë tuaj natyrale përmes teknikave më të avancuara dhe produkteve premium.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/klinikaestetike_am/?hl=en" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-gold/50 transition-colors">
                      <Instagram className="w-5 h-5 text-gold" />
                    </a>
                    <a href="https://www.tiktok.com/@klinikaestetike_am" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-gold/50 transition-colors">
                      <TikTokIcon />
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 bg-white/[0.02]">
              <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-6xl font-serif gold-gradient">Shërbimet Tona</h2>
                  <p className="text-white/40 uppercase tracking-[0.2em] text-xs">Ekselencë në çdo detaj</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {services.map((service, idx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => openWhatsApp(service.name)}
                      className="electric-card-container cursor-pointer group"
                    >
                      <div className="electric-inner-container">
                        <div className="electric-border-outer" />
                        <div className="electric-main-card" />
                        <div className="electric-glow-layer-1" />
                        <div className="electric-glow-layer-2" />
                        <div className="electric-overlay" />
                        <div className="electric-background-glow" />
                        
                        <div className="electric-content">
                          <div className="scrollbar-glass">
                            Premium
                          </div>
                          <div className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-serif text-white group-hover:text-purple-200 transition-colors">
                            {service.name}
                          </h3>
                          <hr className="w-full my-4 border-white/10" />
                          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-purple-400 transition-colors">
                            Rezervo Tani
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Appointment Info */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-gold" />
                    <h2 className="text-3xl font-serif gold-gradient">Info rreth Termineve</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gold-light italic font-serif text-xl">Te dashura kliente,</p>
                    <ul className="space-y-4 text-white/70 font-light">
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span>Terminet janë obligative.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span>Të vini me kohë në terminin tuaj. Mbi 20 minuta vonesë termini anulohet.</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span>Në rast se doni të anuloni terminin tuaj duhet lajmëruar një ditë përpara.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-10 rounded-3xl border border-silver/20 bg-gradient-to-br from-silver/5 to-transparent space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <AlertCircle className="w-8 h-8 text-silver" />
                    <h2 className="text-3xl font-serif silver-gradient">Këshilla Para Aplikimit</h2>
                  </div>
                  <div className="space-y-4 text-white/60 font-light text-sm leading-relaxed">
                    <p className="text-silver-gradient font-medium">Çfarë nuk duhet bërë disa ditë para aplikimit të fillerit:</p>
                    <p>Nuk duhet të merrni aspirinë, anti-inflamatorë si (ibuprofen ose aleve), Vaj peshku, multivitamina ose vitaminën E.</p>
                    <p>Të shmangni alkoolin dhe kafeinën 48 orë para aplikimit dhe pas aplikimit të fillerit.</p>
                    <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl space-y-2">
                      <p className="text-red-400 font-medium">Kundërindikacionet:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Shtatzënë ose ushqeni me gji</li>
                        <li>Alergjik ndaj ndonjë përbërësi</li>
                        <li>Çrregullime neurologjike</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Post Treatment & Mesotherapy */}
            <section className="py-24 px-6 bg-white/[0.01]">
              <div className="max-w-7xl mx-auto space-y-24">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl font-serif silver-gradient border-l-4 border-silver pl-6">Pas Aplikimit</h2>
                    <div className="space-y-6 text-white/70 font-light leading-relaxed">
                      <p>Nuk duhet bërë aktivitete fizike të forta për 48 orë, duhet të shmangim pijet e nxehta.</p>
                      <p>Nuk duhet të rrini në një vend shumë të nxehtë apo shumë të ftohtë, si p.sh solariumi, trajtim me lazer...</p>
                      <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-sm italic">
                          "Në rast të shfaqjes së hematomave ato zakonisht marrin 2-3 ditë për t'u shëruar. Gjatë procesit mund të prisni enjtje dhe skuqje të zonës."
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl font-serif gold-gradient border-l-4 border-gold pl-6">Mesoterapia me Hyaron</h2>
                    <div className="space-y-6 text-white/70 font-light leading-relaxed">
                      <p>Hyaron përcakton nivelin e hidratimit të lëkurës dhe nxit sintezën e kolagjenit dhe elastinës, po ashtu stimulon përhapjen e fibroblasteve.</p>
                      <p>I disponueshëm që nga viti 1987, ky mbushës ka dëshmuar rigjenerimin dhe elasticitetin e lëkurës për më shumë se tre dekada.</p>
                      <p className="gold-gradient font-serif italic text-lg">
                        "Kujdesu për lëkurën tënde me kohë se dikur do jetë tepër vonë."
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Location & Hours */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2936.79532515432!2d20.2972613!3d42.6635959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fd98e578fd9f%3A0x48c3d465a90b6983!2sKlinika%20Estetike%20AM!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] space-y-6"
                  >
                    <div className="flex items-center gap-3 text-gold">
                      <Clock className="w-6 h-6" />
                      <h3 className="text-xl font-serif">Orari i Punës</h3>
                    </div>
                    <div className="space-y-3">
                      {workingHours.map((item) => (
                        <div key={item.day} className="flex justify-between items-center text-sm">
                          <span className="text-white/40">{item.day}</span>
                          <span className={item.hours === "Mbyllur" ? "text-red-400/60" : "text-white/80"}>{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] space-y-4"
                  >
                    <div className="flex items-center gap-3 text-silver">
                      <MapPin className="w-6 h-6" />
                      <h3 className="text-xl font-serif">Lokacioni</h3>
                    </div>
                    <p className="text-white/60 font-light">Fahri Basha, Pejë 30000</p>
                    <button 
                      onClick={() => window.open('https://www.google.com/maps/place/Klinika+Estetike+AM/@42.6635959,20.2972613,17z', '_blank')}
                      className="text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors flex items-center gap-2"
                    >
                      Hap në Maps <ChevronRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center space-y-8">
              <img src="https://i.ibb.co/ZDZftnF/IMG-6136.png" alt="Logo" className="h-20 mx-auto opacity-50" />
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm tracking-widest uppercase text-white/30">
                <a href="tel:+38348224888" className="hover:text-gold transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +383 48 224 888
                </a>
                <div className="w-1 h-1 bg-white/10 rounded-full hidden md:block" />
                <p>© 2024 Klinika Estetike AM. Të gjitha të drejtat e rezervuara.</p>
              </div>
            </footer>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
              <motion.a
                href="tel:+38348224888"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-2xl"
              >
                <Phone className="w-6 h-6" />
              </motion.a>
              <motion.button
                onClick={() => openWhatsApp()}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/20"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
