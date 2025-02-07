import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import { validateEmail } from '../utils';
import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'hejsan@webwayna.se',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        toast.success('Tack för ditt meddelande! Vi återkommer så snart som möjligt.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast.error('Ett fel uppstod. Försök igen senare.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="reveal">
              <h1 className="section-title">Kontakta oss</h1>
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
                    <a href="mailto:hejsan@webwayna.se" className="text-primary-200 hover:text-primary-400 transition-colors">
                      hejsan@webwayna.se
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-primary-500/20 rounded-full p-4">
                    <Phone className="h-8 w-8 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefon</p>
                    <a href="tel:021-123-45-67" className="text-primary-200 hover:text-primary-400 transition-colors">
                      021-123 45 67
                    </a>
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
              <form className="space-y-6" onSubmit={handleSubmit}>
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
      </div>
    </Layout>
  );
}