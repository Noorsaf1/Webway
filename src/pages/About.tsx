import React from 'react';
import { Users, Zap, CheckCircle, Globe, Target, Heart, Award, Rocket } from 'lucide-react';
import Layout from '../components/Layout';

export default function About() {
  const stats = [
    { icon: Users, value: '100+', label: 'Nöjda kunder' },
    { icon: Zap, value: '250+', label: 'Projekt levererade' },
    { icon: CheckCircle, value: '8+', label: 'Års erfarenhet' },
    { icon: Globe, value: '24/7', label: 'Support' }
  ];

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

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h1 className="section-title">Om WEBWAY</h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Vi är ett passionerat team av digitala experter som hjälper företag att växa och lyckas i den digitala världen. 
              Med vår expertis och erfarenhet skapar vi skräddarsydda lösningar som driver resultat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="reveal">
              <h2 className="text-3xl font-bold text-white mb-6">Vår historia</h2>
              <p className="text-lg text-primary-200 mb-8">
                Sedan starten 2016 har vi hjälpt hundratals företag att utveckla sin digitala närvaro. 
                Vår resa började med en vision om att göra digital transformation tillgänglig för alla företag, 
                oavsett storlek.
              </p>
              <p className="text-lg text-primary-200 mb-8">
                Idag är vi ett växande team av passionerade experter inom webbutveckling, design, 
                digital marknadsföring och IT-säkerhet. Vi fortsätter att utvecklas och anpassa oss 
                till den snabbt föränderliga digitala världen.
              </p>
            </div>
            <div className="relative reveal">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working together" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 card p-6">
                <div className="flex items-center gap-6">
                  <div className="bg-primary-500/20 rounded-full p-4">
                    <Award className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">8+</p>
                    <p className="text-primary-200">År av erfarenhet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
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

          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white text-center mb-16 reveal">Våra värderingar</h2>
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

          <div className="text-center reveal">
            <h2 className="text-3xl font-bold text-white mb-6">Vill du veta mer?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Vi älskar att prata om teknik och hur vi kan hjälpa företag att växa. 
              Kontakta oss för en kostnadsfri konsultation.
            </p>
            <Link to="/kontakt" className="btn-primary inline-block">
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}