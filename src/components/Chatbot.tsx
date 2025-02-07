import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Phone } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; isAction?: boolean }>>([
    { text: 'Hej! 👋 Jag är WEBWAY\'s AI-assistent. Hur kan jag hjälpa dig idag?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    const thinkTime = Math.random() * 1000 + 500;
    setTimeout(() => {
      setIsTyping(false);
      const response = getBotResponse(input);
      setMessages(prev => [...prev, ...response]);
    }, thinkTime);
  };

  const getBotResponse = (userInput: string): Array<{ text: string; isUser: boolean; isAction?: boolean }> => {
    const input = userInput.toLowerCase();
    let responses: Array<{ text: string; isUser: boolean; isAction?: boolean }> = [];
    
    // Direct answers based on query
    if (input.match(/^(hej|hallå|tjena|god dag|godmorgon|godkväll)/)) {
      responses.push({ 
        text: 'Hej! Vad kan jag hjälpa dig med idag? 😊', 
        isUser: false 
      });
    }
    else if (input.includes('webbutveckling') || input.includes('hemsida') || input.includes('webbplats')) {
      responses.push({ 
        text: 'Vi utvecklar moderna, responsiva webbplatser med fokus på användarupplevelse och prestanda. Våra lösningar inkluderar:',
        isUser: false 
      });
      responses.push({ 
        text: '• Skräddarsydd design\n• SEO-optimering\n• Snabb laddningstid\n• Mobilanpassning\n• CMS-integration',
        isUser: false 
      });
    }
    else if (input.includes('e-handel') || input.includes('nätbutik') || input.includes('webshop')) {
      responses.push({ 
        text: 'Vi erbjuder kompletta e-handelslösningar med:',
        isUser: false 
      });
      responses.push({ 
        text: '• Säkra betalningslösningar\n• Lagerhantering\n• Orderhantering\n• Kundhantering\n• Integrationer med affärssystem',
        isUser: false 
      });
    }
    else if (input.includes('seo') || input.includes('sökmotoroptimering')) {
      responses.push({ 
        text: 'Vår SEO-tjänst omfattar:',
        isUser: false 
      });
      responses.push({ 
        text: '• Teknisk SEO\n• Innehållsoptimering\n• Länkbyggande\n• Konkurrensanalys\n• Månadsrapporter',
        isUser: false 
      });
    }
    else if (input.includes('pris') || input.includes('kosta') || input.includes('kostnad')) {
      responses.push({ 
        text: 'Priserna varierar beroende på projektets omfattning. Här är några exempel:',
        isUser: false 
      });
      responses.push({ 
        text: '• Företagshemsida: från 25 000 kr\n• E-handel: från 45 000 kr\n• SEO-paket: från 5 000 kr/mån\n• Underhåll: från 995 kr/mån',
        isUser: false 
      });
    }
    else if (input.includes('tid') || input.includes('leveranstid') || input.includes('när')) {
      responses.push({ 
        text: 'Typiska leveranstider för våra tjänster:',
        isUser: false 
      });
      responses.push({ 
        text: '• Företagshemsida: 4-6 veckor\n• E-handel: 6-10 veckor\n• SEO: Första resultaten inom 3-6 månader\n• Underhåll: Löpande',
        isUser: false 
      });
    }
    else {
      responses.push({ 
        text: 'Jag förstår din fråga. För att ge dig bästa möjliga svar rekommenderar jag att prata med en av våra experter. 🤝', 
        isUser: false 
      });
    }

    // Always add call suggestion
    responses.push({ 
      text: 'Ring oss på 021-123 45 67 för att prata med en expert som kan ge dig en personlig genomgång och skräddarsydd lösning! 📞', 
      isUser: false 
    });

    // Add call-to-action button
    responses.push({
      text: 'Ring oss nu',
      isUser: false,
      isAction: true
    });

    return responses;
  };

  const handleCall = () => {
    window.location.href = 'tel:021-123-45-67';
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full shadow-lg hover:shadow-primary-500/25 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Öppna chat"
      >
        <MessageSquare className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl shadow-2xl z-50 border border-primary-700/50 animate-fade-in">
          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-t-xl border-b border-primary-700/50">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot className="h-6 w-6 text-primary-400" />
                <span className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">WEBWAY Chat</h3>
                <p className="text-xs text-primary-300">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-200 hover:text-white transition-colors p-1.5 hover:bg-primary-800/50 rounded-full"
              aria-label="Stäng chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-3 h-72 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {message.isAction ? (
                  <button
                    onClick={handleCall}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    {message.text}
                  </button>
                ) : (
                  <div
                    className={`max-w-[85%] p-2 text-sm rounded-xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-br-sm'
                        : 'bg-dark-700/50 text-primary-100 rounded-bl-sm'
                    } shadow-lg whitespace-pre-line`}
                  >
                    {message.text}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-dark-700/50 text-primary-100 p-2 rounded-xl rounded-bl-sm shadow-lg">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-primary-700/50 bg-dark-900/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Skriv ett meddelande..."
                className="flex-1 bg-dark-700 text-sm text-white rounded-full px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-400 border border-primary-700/50 placeholder-primary-300"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-1.5 rounded-full hover:shadow-lg hover:shadow-primary-500/25 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                aria-label="Skicka meddelande"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}