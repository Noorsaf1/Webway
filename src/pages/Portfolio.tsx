import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-handelsplattform',
      category: 'E-handel',
      description: 'Modern e-handel med fokus på användarupplevelse och konvertering. Implementerade avancerade filtreringsfunktioner och snabb checkout.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      results: ['50% ökad konvertering', '30% snabbare laddningstid', '40% ökning i mobilförsäljning']
    },
    {
      title: 'Företagsportal',
      category: 'Webbapplikation',
      description: 'Intern portal för effektiv kommunikation och projekthantering. Skräddarsydd lösning med realtidsuppdateringar.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      results: ['70% effektivare kommunikation', '45% mindre e-posttrafik', '25% ökad produktivitet']
    },
    {
      title: 'Hälso-app',
      category: 'Mobilapplikation',
      description: 'Innovativ app för hälsa och välbefinnande med personliga träningsprogram och kostråd.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'GraphQL', 'AWS', 'Machine Learning'],
      results: ['100,000+ nedladdningar', '4.8/5 i App Store', '92% aktiva användare']
    },
    {
      title: 'Restaurangbokning',
      category: 'Webbapplikation',
      description: 'Digital bokningsplattform för restauranger med realtidsuppdatering av tillgänglighet och bordshantering.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
      results: ['60% fler bokningar', '35% mindre administrativ tid', '28% ökad omsättning']
    },
    {
      title: 'Fastighetsmäklare CRM',
      category: 'Webbapplikation',
      description: 'Omfattande CRM-system för fastighetsmäklare med automatiserad kundhantering och objektsvisning.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'ElasticSearch'],
      results: ['40% effektivare kundhantering', '65% snabbare sökningar', '30% ökad försäljning']
    },
    {
      title: 'Event-app',
      category: 'Mobilapplikation',
      description: 'Digital plattform för eventhantering med biljettbokning och deltagarinteraktion i realtid.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Socket.io'],
      results: ['200,000+ användare', '500+ evenemang', '95% nöjda arrangörer']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h1 className="section-title">Våra projekt</h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Utforska vårt urval av framgångsrika projekt där vi har hjälpt företag att transformera 
              sin digitala närvaro och uppnå sina mål.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    
                    <div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center reveal">
            <h2 className="text-3xl font-bold text-white mb-6">Redo att starta ditt projekt?</h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Låt oss diskutera hur vi kan hjälpa dig att uppnå dina mål med en skräddarsydd digital lösning.
            </p>
            <Link to="/kontakt" className="btn-primary inline-block">
              Starta en diskussion
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}