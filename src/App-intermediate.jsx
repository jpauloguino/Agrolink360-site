import React, { useState, useEffect } from 'react'
import { 
  Shield, 
  Eye, 
  Zap, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  Star,
  Camera,
  Cpu,
  Globe,
  Truck,
  Building,
  Wheat,
  MessageCircle,
  ArrowRight,
  Play,
  Award,
  Target,
  Lightbulb,
  Clock,
  Menu,
  X,
  Calendar,
  Settings,
  TrendingUp,
  Wrench
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const whatsappNumber = "5534998267463"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as soluções de segurança da AgroLink360."

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/98 backdrop-blur-md shadow-lg border-b border-gray-700' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-20 w-20 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                LOGO
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Serviços
              </button>
              <button onClick={() => scrollToSection('projetos')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Projetos
              </button>
              <button onClick={() => scrollToSection('contato')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Contato
              </button>
              <button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="pt-24 pb-16 px-4 relative bg-blue-600"
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 mr-2 inline" />
              Parceiros Oficiais Hikvision
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Segurança Inteligente
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Para o Campo e a Cidade
            </p>
            
            <p className="text-lg text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Especialistas em projetos de CFTV de alta performance com inteligência artificial e 
              soluções WiFi corporativo e público de alto desempenho, desenvolvidos sob medida para agronegócio e comércio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-md flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </button>
              
              <button 
                onClick={() => scrollToSection('sobre')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-md flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Conheça Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoramento</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Quem Somos
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A AgroLink360 nasceu da visão de oferecer soluções de segurança eletrônica que vão além da vigilância tradicional. 
              Somos uma equipe de especialistas dedicados a proteger seu patrimônio, otimizar suas operações e proporcionar 
              a tranquilidade que você merece.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Target className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Integrar tecnologia de ponta para criar ambientes mais seguros e eficientes, 
                seja em vastas propriedades rurais ou em movimentados estabelecimentos comerciais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Lightbulb className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser referência em soluções de segurança inteligente, combinando inovação tecnológica 
                com expertise especializada para cada setor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <CheckCircle className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-gray-600">
                Confiabilidade, inovação e atendimento personalizado. Cada projeto é desenvolvido 
                com foco na excelência e satisfação total do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale Conosco
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Pronto para elevar o nível de segurança do seu negócio ou propriedade?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-md flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: (34) 99826-7463
              </button>
              
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-md flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                jpaulo@agrolink360.com.br
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse flex items-center justify-center text-white"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default App

