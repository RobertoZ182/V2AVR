import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Drill, 
  Shield, 
  Clock, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Wrench,
  Truck,
  Users,
  Droplets,
  Settings,
  ThumbsUp
} from 'lucide-react';
import { ScrollAnimation } from './components/ScrollAnimation';
import { Carousel } from './components/Carousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Drill className="w-8 h-8" />,
      title: "Foraje Puturi de Apă",
      description: "Servicii profesionale de forare puturi de apă pentru proprietăți rezidențiale, comerciale și agricole cu echipamente de ultimă generație."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Întreținere Puturi",
      description: "Servicii complete de întreținere și reparații puturi pentru a asigura un debit optim al apei și longevitatea sistemului."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Instalare Pompe",
      description: "Servicii experte de instalare și înlocuire pompe cu echipamente de înaltă calitate pentru eficiență și fiabilitate maximă."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Testare Puturi",
      description: "Servicii complete de testare calitatea apei și inspecție puturi pentru a asigura apă sigură și curată pentru proprietatea dumneavoastră."
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Peste 25 de Ani Experiență",
      description: "Decenii de expertiză în forarea puțurilor cu sute de proiecte finalizate cu succes."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licențiați și Asigurați",
      description: "Complet licențiați și asigurați pentru liniștea și protecția dumneavoastră."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Servicii de Urgență 24/7",
      description: "Servicii de urgență non-stop când aveți nevoie urgent de restabilirea apei."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Garanție de Calitate",
      description: "Ne susținem munca cu garanții complete pentru toate serviciile de forare."
    }
  ];

  const testimonials = [
    {
      name: "Maria Popescu",
      location: "Proprietar Rural",
      rating: 5,
      text: "Servicii excepționale! Au forat puțul nostru rapid și profesional. Calitatea apei este excelentă și echipa a fost incredibil de competentă."
    },
    {
      name: "Ion Georgescu",
      location: "Manager Fermă",
      rating: 5,
      text: "Aveam nevoie de o sursă fiabilă de apă pentru animalele noastre. Echipa a livrat exact ceea ce aveam nevoie la timp și în buget."
    },
    {
      name: "Ana Dumitrescu",
      location: "Proprietar Casă",
      rating: 5,
      text: "Profesioniști de la început până la sfârșit. Au explicat întregul proces și au oferit servicii excelente de urmărire. Recomand cu încredere!"
    }
  ];

  const heroImages = [
    {
      id: 1,
      content: (
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-black/40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/water-well-drilling-truck.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
            <div className="max-w-3xl text-white">
              <ScrollAnimation animation="fadeInUp">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Servicii Profesionale de
                  <span className="text-orange-400"> Forare Puturi</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={200}>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                  Experți de încredere în forarea puțurilor de apă, servind clienți rezidențiali, comerciali și agricoli cu peste 25 de ani de experiență.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    Ofertă Gratuită
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Serviciile Noastre
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-black/40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/What-is-the-Typical-Well-Drilling-Process1-scaled.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
            <div className="max-w-3xl text-white">
              <ScrollAnimation animation="fadeInLeft">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Tehnologie
                  <span className="text-orange-400"> Avansată</span>
                  <br />de Forare
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={200}>
                <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                  Utilizăm echipamente moderne și tehnici avansate pentru a vă oferi cele mai bune soluții de apă.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/Screenshot_2025-06-15_at_15.24.03-removebg-preview.png" 
                alt="Foraje Puturi Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#acasa" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Acasă</a>
              <a href="#servicii" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Servicii</a>
              <a href="#despre" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Despre</a>
              <a href="#testimoniale" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Testimoniale</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Phone className="w-4 h-4 text-blue-800" />
              <span className="text-sm font-semibold text-gray-900">0755 123 456</span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#acasa" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Acasă</a>
              <a href="#servicii" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Servicii</a>
              <a href="#despre" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Despre</a>
              <a href="#testimoniale" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Testimoniale</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Contact</a>
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <Phone className="w-4 h-4 text-blue-800" />
                <span className="text-sm font-semibold text-gray-900">0755 123 456</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Carousel */}
      <section id="acasa" className="pt-16">
        <Carousel 
          items={heroImages}
          autoPlay={true}
          interval={6000}
          className="min-h-screen"
        />
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Serviciile Noastre</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Servicii complete de forare puturi și sisteme de apă adaptate nevoilor dumneavoastră specifice
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation 
                key={index}
                animation="fadeInUp"
                delay={index * 100}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-blue-800 mb-4 group-hover:text-orange-500 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Experți de Încredere în Forarea Puțurilor din 1998
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  De peste 25 de ani, Foraje Puturi este compania lider în forarea puțurilor de apă din regiune. 
                  Combinăm expertiza tradițională cu tehnologia modernă pentru a oferi soluții fiabile de apă pentru 
                  case, afaceri și ferme.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Echipa noastră de profesioniști certificați folosește echipamente de ultimă generație și respectă 
                  protocoale stricte de siguranță pentru a asigura că fiecare proiect este finalizat la cele mai înalte standarde.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <ScrollAnimation animation="scaleIn" delay={200}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-800 mb-2">500+</div>
                      <div className="text-gray-600">Puturi Forate</div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scaleIn" delay={300}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-800 mb-2">25+</div>
                      <div className="text-gray-600">Ani Experiență</div>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animation="scaleIn" delay={400}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-800 mb-2">100%</div>
                      <div className="text-gray-600">Satisfacție Clienți</div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInRight">
              <div className="relative">
                <img 
                  src="/images/water-well-drilling-truck.jpg"
                  alt="Echipament profesional de forare"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                  <Users className="w-8 h-8 mb-2" />
                  <div className="font-bold">Licențiați & Asigurați</div>
                  <div className="text-sm">Echipă Profesională</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">De Ce Să Ne Alegeți?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Suntem dedicați să oferim servicii excepționale și soluții fiabile de apă
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollAnimation 
                key={index}
                animation="fadeInUp"
                delay={index * 150}
              >
                <div className="text-center group">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoniale" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ce Spun Clienții Noștri</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nu luați doar cuvântul nostru - ascultați de la clienții mulțumiți din întreaga regiune
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation 
                key={index}
                animation="fadeInUp"
                delay={index * 200}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Obțineți Oferta Gratuită Astăzi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Gata să începeți proiectul de forare? Contactați-ne pentru o consultație și ofertă gratuită
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation animation="fadeInLeft">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trimiteți-ne un Mesaj</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prenume</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Ion"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nume</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Popescu"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adresa Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="ion@exemplu.ro"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Număr Telefon</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="0755 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Detalii Proiect</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Spuneți-ne despre nevoile dumneavoastră de forare puturi..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                    Obțineți Ofertă Gratuită
                  </button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation animation="fadeInRight">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-800 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">0755 123 456</p>
                      <p className="text-sm text-gray-500">Servicii de urgență 24/7 disponibile</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-800 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@forajeputuri.ro</p>
                      <p className="text-sm text-gray-500">Răspundem în 24 de ore</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-800 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Zona de Servicii</h4>
                      <p className="text-gray-600">Deservim într-o rază de 100 km</p>
                      <p className="text-sm text-gray-500">Licențiați în multiple județe</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-2">Servicii de Urgență</h4>
                  <p className="text-gray-600 mb-4">
                    Aveți nevoie de asistență imediată cu sistemul de apă? Oferim servicii de urgență 24/7 pentru situații urgente.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Apelați Linia de Urgență
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <ScrollAnimation animation="fadeInUp">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/images/Screenshot_2025-06-15_at_15.24.03-removebg-preview.png" 
                    alt="Foraje Puturi Logo" 
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Servicii profesionale de forare puturi cu peste 25 de ani de experiență. 
                  Partenerul dumneavoastră de încredere pentru soluții fiabile de apă.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div>
                <h4 className="font-bold mb-4">Servicii</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Forare Puturi de Apă</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Întreținere Puturi</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instalare Pompe</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Testare Puturi</a></li>
                </ul>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div>
                <h4 className="font-bold mb-4">Companie</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#despre" className="hover:text-white transition-colors">Despre Noi</a></li>
                  <li><a href="#testimoniale" className="hover:text-white transition-colors">Testimoniale</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Licențe & Asigurări</a></li>
                </ul>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>0755 123 456</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>info@forajeputuri.ro</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Foraje Puturi. Toate drepturile rezervate. Licențiați și Asigurați.</p>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}

export default App;