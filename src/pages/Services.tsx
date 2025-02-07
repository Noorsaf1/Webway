import React from 'react';
import { Code2, Search, MessageSquare, Zap, Layout, ShieldCheck, Smartphone, Megaphone, Bot, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Webbutveckling',
      description: 'Moderna och responsiva webbplatser byggda med de senaste teknologierna för optimal prestanda och användarupplevelse.',
      features: ['Responsiv design', 'SEO-optimerad', 'Snabb laddningstid', 'Modern teknologi']
    },
    {
      icon: Layout,
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
    },
    {
      icon: Smartphone,
      title: 'App-utveckling',
      description: 'Skapa moderna mobilapplikationer som ger mervärde för dina kunder och ditt företag.',
      features: ['iOS & Android', 'UX-design', 'API-integration', 'Prestanda']
    },
    {
      icon: ShieldCheck,
      title: 'IT-säkerhet',
      description: 'Säkra din digitala närvaro med våra experttjänster inom IT-säkerhet och dataskydd.',
      features: ['Säkerhetsanalys', 'GDPR-anpassning', 'Penetrationstester', 'Säkerhetsutbildning']
    },
    {
      icon: Zap,
      title: 'Hosting & Underhåll',
      description: 'Låt oss ta hand om din webbplats med våra hosting- och underhållstjänster.',
      features: ['24/7 övervakning', 'Backup', 'Uppdateringar', 'Support']
    },
    {
      icon: Megaphone,
      title: 'Digital Marknadsföring',
      description: 'Nå rätt målgrupp med vår expertis inom digital marknadsföring och annonsering.',
      features: ['SEM/PPC', 'Social media', 'E-postmarknadsföring', 'Innehållsmarknadsföring']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h1 className="section-title">Våra tjänster</h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Vi erbjuder ett brett utbud av digitala tjänster för att hjälpa ditt företag att växa och lyckas online. 
              Vårt team av experter arbetar dedikerat för att leverera skräddarsydda lösningar som möter dina specifika behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="mt-20 text-center reveal">
            <h2 className="text-3xl font-bold text-white mb-6">Redo att ta ditt företag till nästa nivå?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri konsultation där vi diskuterar hur vi kan hjälpa dig att nå dina mål.
            </p>
            <Link to="/kontakt" className="btn-primary inline-block">
              Kom igång
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}