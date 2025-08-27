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
      title: "Foraje Puturi de Apă București",
      description: "Servicii profesionale de forare puturi de apă pentru proprietăți rezidențiale, comerciale și agricole cu echipamente moderne de forare în București și Ilfov."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Întreținere și Reparații Puturi",
      description: "Servicii complete de întreținere și reparații puturi pentru a asigura un debit optim al apei și longevitatea sistemului de pompare."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Instalare Pompe Submersibile",
      description: "Servicii experte de instalare și înlocuire pompe submersibile cu echipamente de înaltă calitate pentru eficiență și fiabilitate maximă."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Testare Calitate Apă Puturi",
      description: "Servicii complete de testare calitatea apei și inspecție puturi pentru a asigura apă potabilă sigură și curată pentru proprietatea dumneavoastră."
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Peste 25 de Ani Experiență Foraje Puturi",
      description: "Decenii de expertiză în forarea puțurilor de apă cu sute de proiecte finalizate cu succes în București și împrejurimi."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licențiați și Asigurați pentru Foraje",
      description: "Complet licențiați și asigurați pentru servicii de forare puturi conform reglementărilor românești pentru liniștea dumneavoastră."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Servicii Urgență Puturi 24/7",
      description: "Servicii de urgență non-stop pentru probleme cu puțurile de apă când aveți nevoie urgent de restabilirea apei."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Garanție Completă Foraje Puturi",
      description: "Ne susținem munca cu garanții complete pentru toate serviciile de forare puturi și instalare echipamente."
    }
  ];

  const testimonials = [
    {
      name: "Maria Popescu",
      location: "Proprietar Rural, Ilfov",
      rating: 5,
      text: "Servicii excepționale de forare puturi! Au forat puțul nostru rapid și profesional. Calitatea apei este excelentă și echipa a fost incredibil de competentă pentru forarea puțului de apă."
    },
    {
      name: "Ion Georgescu",
      location: "Manager Fermă, Giurgiu",
      rating: 5,
      text: "Aveam nevoie de o sursă fiabilă de apă pentru animalele noastre. Echipa de foraje puturi a livrat exact ceea ce aveam nevoie la timp și în buget pentru puțul de apă."
    },
    {
      name: "Ana Dumitrescu",
      location: "Proprietar Casă, București Sector 1",
      rating: 5,
      text: "Profesioniști de la început până la sfârșit pentru forarea puțului. Au explicat întregul proces de forare puturi și au oferit servicii excelente de urmărire. Recomand cu încredere!"
    }
  ];

  const heroImages = [
    {
      id: 1,
      content: (
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/water-well-drilling-truck.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)'
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
            <div className="max-w-3xl text-white">
              <ScrollAnimation animation="fadeInUp">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Foraje Puturi București
                  <span className="text-blue-400"> Servicii Profesionale</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={200}>
                <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
                  Experți de încredere în forarea puțurilor de apă, servind clienți rezidențiali, comerciali și agricoli cu peste 25 de ani de experiență în București și Ilfov.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInUp" delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  Ofertă Gratuită Foraje Puturi
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </a>
                  <a href="#servicii">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Servicii Foraje Puturi
                  </button> 
                  </a>
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
          <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/What-is-the-Typical-Well-Drilling-Process1-scaled.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)'
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
            <div className="max-w-3xl text-white">
              <ScrollAnimation animation="fadeInLeft">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Tehnologie Avansată
                  <span className="text-orange-400"> Forare Puturi</span>
                  <br />București
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={200}>
                <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
                  Utilizăm echipamente moderne de forare puturi și tehnici avansate pentru a vă oferi cele mai bune soluții de apă în București și Ilfov.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="relative min-h-screen">
          {/* Gradient overlay from right to left */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent"></div>

          {/* Background image aligned left */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/close-up-of-well-drilling-rig-boring-dowin-into-th-2024-10-18-09-39-04-utc-scaled-r672zbfdtdbfjxgllrlzj91emihb5x2zhspsfehg5c.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.6)'
            }}
          ></div>

          {/* Text content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
            <div className="max-w-3xl text-white">
              <ScrollAnimation animation="fadeInLeft">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Soluții Complete
                  <span className="text-blue-400"> Puțuri de Apă</span>
                  <br />București
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fadeInLeft" delay={200}>
                <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed">
                  De la consultanță și proiectare până la forare puturi și echipare, oferim servicii la cheie adaptate nevoilor tale rezidențiale, industriale sau agricole în București.
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
                alt="Foraje Puturi București Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#acasa" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Acasă</a>
              <a href="#servicii" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Servicii Foraje</a>
              <a href="#despre" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Despre Noi</a>
              <a href="#testimoniale" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Recenzii Clienți</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Phone className="w-4 h-4 text-blue-800" />
              <span className="text-sm font-semibold text-gray-900"><a href="tel:+40765807100">0765 807 100</a></span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Deschide meniul"
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
              <a href="#servicii" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Servicii Foraje</a>
              <a href="#despre" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Despre Noi</a>
              <a href="#testimoniale" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Recenzii Clienți</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-800 transition-colors font-medium">Contact</a>
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <Phone className="w-4 h-4 text-blue-800" />
                <span className="text-sm font-semibold text-gray-900">0765 807 100</span>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Servicii Foraje Puturi București</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Servicii complete de forare puturi de apă și sisteme de pompare adaptate nevoilor dumneavoastră specifice în București și Ilfov
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

          {/* Additional SEO Content */}
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">De Ce Să Alegeți Serviciile Noastre de Foraje Puturi în București?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experiență Vastă în Foraje Puturi</h4>
                  <p className="mb-4">Cu peste 25 de ani de experiență în forarea puțurilor de apă în București și Ilfov, am dezvoltat expertiza necesară pentru a gestiona orice tip de proiect de forare puturi.</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Echipamente Moderne de Forare</h4>
                  <p className="mb-4">Utilizăm cele mai moderne echipamente de forare puturi pentru a asigura eficiență maximă și rezultate de calitate superioară pentru fiecare puț de apă.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Servicii Complete Puturi de Apă</h4>
                  <p className="mb-4">Oferim servicii complete de la consultanță inițială, forare puturi, instalare pompe submersibile, până la întreținerea pe termen lung a puțurilor de apă.</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Prețuri Competitive Foraje Puturi</h4>
                  <p>Oferim cele mai competitive prețuri pentru servicii de forare puturi în București, fără compromisuri la calitate. Solicitați o ofertă gratuită pentru proiectul dumneavoastră.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
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
                  De peste 25 de ani, compania noastră este liderul în servicii de forare puturi de apă din regiunea București-Ilfov.
                  Combinăm expertiza tradițională cu tehnologia modernă de forare pentru a oferi soluții fiabile de apă pentru
                  case, afaceri și ferme din întreaga zonă metropolitană.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Echipa noastră de profesioniști certificați în forarea puțurilor folosește echipamente de ultimă generație și respectă
                  protocoale stricte de siguranță pentru a asigura că fiecare proiect de forare puturi este finalizat la cele mai înalte standarde de calitate.
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
                      <div className="text-gray-600">Ani Experiență Foraje</div>
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
                  alt="Echipament profesional de forare puturi București"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                  <Users className="w-8 h-8 mb-2" />
                  <div className="font-bold">Licențiați & Asigurați</div>
                  <div className="text-sm">Echipă Profesională Foraje</div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">De Ce Să Ne Alegeți pentru Foraje Puturi?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Suntem dedicați să oferim servicii excepționale de forare puturi și soluții fiabile de apă în București
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

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Întrebări Frecvente Foraje Puturi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Răspunsuri la cele mai comune întrebări despre serviciile noastre de forare puturi în București
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fadeInLeft">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cât costă să forez un puț de apă în București?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prețul pentru forarea unui puț de apă în București variază în funcție de adâncime, tipul solului și echipamentele necesare. 
                  Oferim evaluări gratuite și prețuri competitive pentru toate serviciile de forare puturi. Contactați-ne la 0765 807 100 pentru o ofertă personalizată.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cât timp durează să forez un puț de apă?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Durata forării unui puț de apă depinde de adâncimea necesară și tipul solului din zona București. 
                  În general, un puț rezidențial poate fi finalizat în 1-3 zile. Vă oferim un program detaliat după evaluarea inițială a terenului.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aveți licențe pentru forarea puțurilor în București?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Da, suntem complet licențiați și asigurați pentru servicii de forare puturi în București și Ilfov. 
                  Avem toate autorizațiile necesare și respectăm reglementările locale pentru forarea puțurilor de apă.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Oferiți garanție pentru serviciile de forare puturi?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Da, oferim garanție completă pentru toate serviciile noastre de forare puturi și instalare echipamente. 
                  Garanția variază în funcție de tipul serviciului, dar ne susținem munca cu încredere și profesionalism.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoniale" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recenzii Clienți Foraje Puturi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nu luați doar cuvântul nostru - ascultați de la clienții mulțumiți din întreaga regiune București despre serviciile noastre de forare puturi
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
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Foraje Puturi București</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Gata să începeți proiectul de forare puturi? Contactați-ne pentru o consultație și ofertă gratuită pentru servicii de forare puturi în București
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <ScrollAnimation animation="fadeInRight">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații Contact Foraje Puturi</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-800 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon Foraje Puturi</h4>
                      <p className="text-gray-600"><a href="tel:+40765807100">0733 819 972</a></p>
                      <p className="text-sm text-gray-500">Servicii de urgență puturi 24/7 disponibile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-800 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Zona Deservită Foraje Puturi</h4>
                      <p className="text-gray-600">București, Ilfov, Teleorman, Argeș, Ialomița, Urziceni, Călărași, Dâmbovița</p>
                      <p className="text-sm text-gray-500">Licențiați pentru foraje puturi în multiple județe</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-orange-50 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-gray-900 mb-2">Servicii Urgență Foraje Puturi</h4>
                  <p className="text-gray-600 mb-4">
                    Aveți nevoie de asistență imediată cu sistemul de apă sau puțul dumneavoastră? Oferim servicii de urgență 24/7 pentru situații urgente legate de puțurile de apă.
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    <a href="tel:+40765807100">Apelați Linia de Urgență Puturi</a>
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
                    alt="Foraje Puturi București Logo"
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Servicii profesionale de forare puturi București cu peste 25 de ani de experiență.
                  Partenerul dumneavoastră de încredere pentru soluții fiabile de apă prin forarea puțurilor.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={100}>
              <div>
                <h4 className="font-bold mb-4">Servicii Foraje Puturi</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#servicii" className="hover:text-white transition-colors">Forare Puturi de Apă București</a></li>
                  <li><a href="#servicii" className="hover:text-white transition-colors">Întreținere Puturi Apă</a></li>
                  <li><a href="#servicii" className="hover:text-white transition-colors">Instalare Pompe Submersibile</a></li>
                  <li><a href="#servicii" className="hover:text-white transition-colors">Testare Calitate Apă Puturi</a></li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div>
                <h4 className="font-bold mb-4">Companie Foraje Puturi</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#despre" className="hover:text-white transition-colors">Despre Foraje Puturi București</a></li>
                  <li><a href="#testimoniale" className="hover:text-white transition-colors">Recenzii Clienți Foraje</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact Foraje Puturi</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Licențe Foraje & Asigurări</a></li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={300}>
              <div>
                <h4 className="font-bold mb-4">Contact Foraje Puturi</h4>
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span><a href="tel:+40765807100">0765 807 100</a></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span><a href="mailto:adrianrobert748@gmail.com">adrianrobert748@gmail.com</a></span>
                  </div>
                  <div className="text-sm">
                    <p>Foraje Puturi București, Ilfov, Teleorman, Argeș, Ialomița, Urziceni, Călărași, Dâmbovița</p>
                    <p>Servicii profesionale 24/7</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Foraje Puturi București. Toate drepturile rezervate. Licențiați și Asigurați pentru Forarea Puțurilor.</p>
              <p className="mt-2 text-sm">Servicii profesionale foraje puturi de apă în București, Ilfov și împrejurimi</p>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}

export default App;