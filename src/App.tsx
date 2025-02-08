import React, { useState, useEffect } from 'react';
import { Code2, Search, Globe, ChevronRight, MessageSquare, Users, Zap, CheckCircle, Mail, Phone, MapPin, Moon, Sun, Layout as LayoutGrid, ShieldCheck, Smartphone, Megaphone, Target, Heart, Award, Rocket, ExternalLink, Bot, Sliders } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail, sleep } from './utils';
import Chatbot from './components/Chatbot';
// Uppdaterade imports längst upp
import emailjs from 'emailjs-com';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validering förblir densamma
    if (!formData.name.trim()) {
      toast.error('Vänligen ange ditt namn');
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Vänligen ange en giltig e-postadress');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Vänligen skriv ett meddelande');
      return;
    }
  
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_t1s7b9k',      // Ersätt med ditt Email.js Service ID
        'template_flgs50j',     // Ersätt med ditt Email.js Template ID
        e.target as HTMLFormElement,
        'PjMWEk1Mieqvmxmlt'          // Ersätt med ditt Email.js User I
      );
  
      toast.success('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Ett fel uppstod:', error);
      toast.error('Ett fel uppstod. Försök igen senare.');
    } finally {
      setIsSubmitting(false);
    }
  };



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);

  };

  





  // Services data
  const services = [
    {
      icon: Code2,
      title: 'Webbutveckling',
      description: 'Moderna och responsiva webbplatser byggda med de senaste teknologierna för optimal prestanda och användarupplevelse.',
      features: ['Responsiv design', 'SEO-optimerad', 'Snabb laddningstid', 'Modern teknologi']
    },
    {
      icon: LayoutGrid,
      title: 'E-handel',
      description: 'Skräddarsydda e-handelslösningar som hjälper ditt företag att växa online och nå fler kunder.',
      features: ['Säker betalning', 'Lagerhantering', 'Kundhantering', 'Analysverktyg']
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Skräddarsydda AI-chatbottar som förbättrar kundservice och effektiviserar kommunikation med avancerad naturlig språkbehandling.',
      features: ['24/7 Kundservice', 'AI-driven interaktion', 'Personalisering', 'Flerspråksstöd']
    },
    {
      icon: Sliders,
      title: 'Web Scraping',
      description: 'Automatiserad datainsamling och analys från webben för att ge värdefulla insikter och konkurrensfördelar.',
      features: ['Prisbevakning', 'Marknadsanalys', 'Dataextrahering', 'Automatiserade rapporter']
    },
    {
      icon: Search,
      title: 'SEO-optimering',
      description: 'Förbättra din synlighet i sökmotorer och nå fler potentiella kunder med vår expertis inom SEO.',
      features: ['Nyckelordsanalys', 'Innehållsstrategi', 'Teknisk SEO', 'Länkbyggande']
    },
    {
      icon: MessageSquare,
      title: 'Digital strategi',
      description: 'Skapa en stark digital närvaro med vår expertis och erfarenhet inom digital marknadsföring.',
      features: ['Målgruppsanalys', 'Konkurrensanalys', 'Innehållsstrategi', 'ROI-fokus']
    }
  ];

  // Stats data
  const stats = [
    { icon: Users, value: '100+', label: 'Nöjda kunder' },
    { icon: Zap, value: '250+', label: 'Projekt levererade' },
    { icon: CheckCircle, value: '8+', label: 'Års erfarenhet' },
    { icon: Globe, value: '24/7', label: 'Support' }
  ];

  // Values data
  const values = [
    {
      icon: Target,
      title: 'Resultatfokus',
      description: 'Vi mäter vår framgång genom våra kunders framgång och strävar alltid efter mätbara resultat.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Vår passion för teknik och innovation driver oss att alltid leverera det bästa för våra kunder.'
    },
    {
      icon: Award,
      title: 'Kvalitet',
      description: 'Vi kompromissar aldrig med kvaliteten och strävar alltid efter perfektion i varje projekt.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Vi håller oss uppdaterade med de senaste trenderna och teknologierna för att leverera moderna lösningar.'
    }
  ];

  // Projects data
  const projects = [
    {
      title: 'E-handelsplattform',
      category: 'E-handel',
      description: 'Modern e-handel med fokus på användarupplevelse och konvertering.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      results: ['50% ökad konvertering', '30% snabbare laddningstid']
    },
    {
      title: 'Företagsportal',
      category: 'Webbapplikation',
      description: 'Intern portal för effektiv kommunikation och projekthantering.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      results: ['70% effektivare kommunikation', '45% mindre e-posttrafik']
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Toaster position="top-right" />
      <Chatbot />
      
      {/* Navigation */}
      <nav className={`fixed w-full backdrop-blur-md z-50 transition-all duration-500 ${isScrolled ? 'bg-dark-900/90 shadow-lg shadow-primary-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white flex items-center gap-2 group">
                <Globe className="h-8 w-8 text-primary-400 transition-all duration-700 animate-float group-hover:text-primary-300 group-hover:rotate-180" />
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text transition-all duration-700 group-hover:tracking-wider">WEBWAY</span>
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-primary-800/20 transition-colors duration-300"
                aria-label={isDarkMode ? 'Aktivera ljust läge' : 'Aktivera mörkt läge'}
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-primary-400" />
                ) : (
                  <Moon className="h-6 w-6 text-primary-400" />
                )}
              </button>
              
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-100 hover:text-primary-400 transition-all duration-500 hover:scale-110 relative group"
                >
                  Tjänster
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-100 hover:text-primary-400 transition-all duration-500 hover:scale-110 relative group"
                >
                  Om oss
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-primary-100 hover:text-primary-400 transition-all duration-500 hover:scale-110 relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary animate-pulse-slow"
                >
                  Kontakta oss
                </button>
              </div>
              <button 
                className="md:hidden text-white p-2 hover:bg-primary-800/20 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 top-0.5 w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
                  <span className={`absolute left-0 top-3 w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute left-0 top-5.5 w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-dark-900/95 backdrop-blur-md rounded-lg mt-2 animate-fade-in">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
              >
                Tjänster
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                style={{ animationDelay: '100ms' }}
              >
                Om oss
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                style={{ animationDelay: '200ms' }}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                style={{ animationDelay: '300ms' }}
              >
                Kontakta oss
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-primary-900/80 to-dark-900/90"></div>
        </div>
        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-down leading-tight bg-gradient-to-r from-white via-primary-200 to-secondary-200 text-transparent bg-clip-text">
              Vi skapar digitala <br /> upplevelser som gör skillnad
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Moderna webbplatser och applikationer som driver din verksamhet framåt
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary animate-fade-in-up"
                style={{ animationDelay: '400ms' }}
              >
                Kom igång
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-outline animate-fade-in-up"
                style={{ animationDelay: '600ms' }}
              >
                Läs mer
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('services')} className="text-primary-400 hover:text-primary-300 transition-colors">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h2 className="section-title">Våra tjänster</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Vi erbjuder ett brett utbud av digitala tjänster för att hjälpa ditt företag att växa och lyckas online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="card reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary-400 mb-6">
                    <Icon className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-primary-200 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-primary-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-400 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-dark-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h2 className="section-title">Om oss</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Vi är ett passionerat team av digitala experter som hjälper företag att växa och lyckas i den digitala världen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="card text-center reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12 text-primary-400" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-primary-200">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title} 
                  className="card text-center reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary-500/20 rounded-full p-4">
                      <Icon className="h-8 w-8 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-primary-200">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h2 className="section-title">Våra projekt</h2>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Utforska några av våra senaste projekt där vi har hjälpt företag att transformera sin digitala närvaro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative overflow-hidden rounded-2xl reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-4">
                      <span className="text-primary-400 text-sm font-semibold">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-primary-200 mb-4">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Teknologier</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span 
                            key={tech}
                            className="bg-primary-500/20 text-primary-200 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Resultat</h4>
                      <ul className="space-y-1">
                        {project.results.map(result => (
                          <li key={result} className="text-primary-200 flex items-center">
                            <ChevronRight className="h-4 w-4 text-primary-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="btn-primary inline-flex items-center">
                      Se detaljer <ExternalLink className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-dark-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal">
              <h2 className="section-title">Kontakta oss</h2>
              <p className="text-xl text-primary-200 mb-12">
                Låt oss diskutera hur vi kan hjälpa ditt företag att växa digitalt. Kontakta oss idag för en kostnadsfri konsultation.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-primary-500/20 rounded-full p-4">
                    <Mail className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">E-post</p>
                    <p className="text-primary-200">Hejsan@webwayna.se</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-primary-500/20 rounded-full p-4">
                    <Phone className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefon</p>
                    <p className="text-primary-200">079-0165648</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-primary-500/20 rounded-full p-4">
                    <MapPin className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Adress</p>
                    <p className="text-primary-200">Stora gatan 1, 722 12 Västerås</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card reveal">
              <form  
              
                id="contact-form"
                className="space-y-6"
              onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-2">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-primary-700 text-white placeholder-primary-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-primary-700 text-white placeholder-primary-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="Din e-postadress"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-primary-700 text-white placeholder-primary-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="Ditt meddelande"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900 text-white py-20 border-t border-primary-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">WEBWAY</span>
              </div>
              <p className="text-primary-200">
                Vi hjälper företag att växa och lyckas i den digitala världen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Tjänster</h3>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('services')} className="text-primary-200 hover:text-primary-400 transition-colors">Webbutveckling</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-primary-200 hover:text-primary-400 transition-colors">SEO-optimering</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-primary-200 hover:text-primary-400 transition-colors">Digital strategi</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-primary-200 hover:text-primary-400 transition-colors">E-handel</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Företaget</h3>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('about')} className="text-primary-200 hover:text-primary -400 transition-colors">Om oss </button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-primary-200 hover:text-primary-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-primary-200 hover:text-primary-400 transition-colors">Karriär</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-primary-200 hover:text-primary-400 transition-colors">Kontakt</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Följ oss</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-800/50 p-3 rounded-full text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-primary-800/50 p-3 rounded-full text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-primary-800/50 p-3 rounded-full text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-800/30 mt-16 pt-8 text-center">
            <p className="text-primary-200">© 2022 WEBWAY.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;