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
  Wrench,
  Wifi
} from 'lucide-react'
import './App.css'
import logoAgroLink360 from './assets/logo-agrolink360.webp'

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

  const projetosExecutados = [
    {
      id: 1,
      titulo: "Fazenda Sertãozinho - Patos de Minas/MG",
      categoria: "Agronegócio",
      descricao: "Sistema completo de monitoramento com 6 câmeras IA, alarme sem fio e automação de refletores",
      status: "Concluído",
      ano: "2024",
      detalhes: ["6 câmeras Hikvision com IA", "Sistema de alarme sem fio", "Automação de refletores", "Central AXPRO", "Speed dome 4K 30x zoom", "WiFi mesh 2.4/5GHz", "Starlink instalado", "Cobertura 10.000+ m²"]
    },
    {
      id: 2,
      titulo: "Fazenda Peri-Peri - Região de Patos de Minas/MG",
      categoria: "Agronegócio",
      descricao: "Sistema avançado com 48 câmeras 2K, speed dome e NVR com IA embarcada",
      status: "Concluído",
      ano: "2024",
      detalhes: ["48 câmeras Hikvision 2K", "Speed dome FullHD 25x zoom IR 150m", "NVR com IA embarcada", "Detecção de veículos e placas", "WiFi longo alcance", "Segurança em Pivô 40 hectares", "Reconhecimento facial", "Banco de dados integrado"]
    }
  ]

  const projetosAndamento = [
    {
      id: 3,
      titulo: "Clube Caiçaras - Patos de Minas/MG",
      categoria: "Lazer e Entretenimento",
      descricao: "Projeto de grande escala: CFTV, WiFi público e segurança perimetral em complexo de 50.000+ m² (Fase 1 de 3)",
      status: "Em Andamento",
      previsao: "Março 2025",
      progresso: 40,
      detalhes: [
        "17 câmeras Hikvision (4MP/5MP) - Fase 1",
        "WiFi 6E Ubiquiti U7 Pro/Outdoor", 
        "Cobertura completa 50.000+ m²",
        "Site survey WiFi em andamento",
        "Speed Dome 32x zoom",
        "Projeto total: 3 fases planejadas"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/98 backdrop-blur-md shadow-lg border-b border-gray-700' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoAgroLink360} alt="AgroLink360" className="h-20 w-auto" />
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
              <button onClick={() => scrollToSection('tecnologia')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Tecnologia
              </button>
              <button onClick={() => scrollToSection('instagram')} className={`transition-colors ${isScrolled ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-blue-600'}`}>
                Instagram
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-blue-600">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-700 hover:text-blue-600">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-gray-700 hover:text-blue-600">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('projetos')} className="text-left text-gray-700 hover:text-blue-600">
                  Projetos
                </button>
                <button onClick={() => scrollToSection('tecnologia')} className="text-left text-gray-700 hover:text-blue-600">
                  Tecnologia
                </button>
                <button onClick={() => scrollToSection('instagram')} className="text-left text-gray-700 hover:text-blue-600">
                  Instagram
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600">
                  Contato
                </button>
                <button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center w-fit">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="pt-24 pb-16 px-4 relative bg-gradient-to-br from-blue-600 to-green-600"
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
            <p className="text-lg text-gray-600 mt-4">
              <MapPin className="w-5 h-5 inline mr-2" />
              Sede em Patos de Minas - MG | Atendemos toda a região
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Target className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-600">
                Integrar tecnologia de ponta para criar ambientes mais seguros e eficientes, 
                seja em vastas propriedades rurais ou em movimentados estabelecimentos comerciais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Lightbulb className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser referência em soluções de segurança inteligente, combinando inovação tecnológica 
                com expertise especializada para cada setor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
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

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Soluções Sob Medida
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Para Cada Setor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Agronegócio */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <Wheat className="w-16 h-16 mx-auto text-green-600 mb-4" />
                <h3 className="text-2xl font-bold">Para o Agronegócio</h3>
                <p className="text-lg text-gray-600">
                  Proteção Inteligente para Suas Operações Rurais
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Vigilância Abrangente</div>
                    <div className="text-sm text-gray-600">
                      Câmeras IP e Speed Domes com zoom de longo alcance e tecnologia Ultra Low Light
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Segurança Off-Grid</div>
                    <div className="text-sm text-gray-600">
                      Sistemas alimentados por painéis solares com conectividade remota 24/7
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">WiFi Rural de Alto Desempenho</div>
                    <div className="text-sm text-gray-600">
                      Cobertura completa com equipamentos Ubiquiti U7 Pro/Outdoor
                    </div>
                  </div>
                </div>
              </div>
              
              <button onClick={openWhatsApp} className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md flex items-center justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento Agro
              </button>
            </div>

            {/* Comercial */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <Building className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold">Para o Setor Comercial</h3>
                <p className="text-lg text-gray-600">
                  Segurança Otimizada para Seu Negócio
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Detecção Precisa de Ameaças</div>
                    <div className="text-sm text-gray-600">
                      IA capaz de distinguir ameaças reais de gatilhos ambientais
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">WiFi Corporativo</div>
                    <div className="text-sm text-gray-600">
                      Redes empresariais seguras com gerenciamento centralizado
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Soluções Integradas</div>
                    <div className="text-sm text-gray-600">
                      Projetos que se integram perfeitamente à sua infraestrutura existente
                    </div>
                  </div>
                </div>
              </div>
              
              <button onClick={openWhatsApp} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md flex items-center justify-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento Comercial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Especialistas em WiFi Corporativo
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Soluções de conectividade de alto desempenho para empresas e espaços públicos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Wifi className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">WiFi Público</h3>
                  <p className="text-gray-600">
                    Cobertura completa para espaços públicos com gerenciamento de usuários e controle de acesso
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Globe className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">WiFi Corporativo</h3>
                  <p className="text-gray-600">
                    Redes empresariais seguras com gerenciamento centralizado e alta disponibilidade
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Target className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Site Survey Profissional</h3>
                  <p className="text-gray-600">
                    Análise técnica completa para dimensionamento perfeito da sua rede
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Nossos Diferenciais WiFi</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Cobertura até 50.000+ m²</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Equipamentos Ubiquiti certificados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Gerenciamento via UniFi Controller</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Suporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Garantia e manutenção incluídas</span>
                </div>
              </div>
              
              <button onClick={openWhatsApp} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md flex items-center justify-center">
                <Wifi className="w-4 h-4 mr-2" />
                Solicitar Site Survey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Conheça alguns dos projetos que transformaram a segurança de nossos clientes
            </p>
          </div>

          {/* Projetos Executados */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Projetos Executados</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projetosExecutados.map((projeto) => (
                <div key={projeto.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold">{projeto.titulo}</h4>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{projeto.categoria}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{projeto.descricao}</p>
                  <div className="space-y-2">
                    {projeto.detalhes.slice(0, 4).map((detalhe, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600">{detalhe}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">{projeto.status}</span>
                    <span className="text-gray-500 text-sm">{projeto.ano}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projetos em Andamento */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Projetos em Andamento</h3>
            </div>
            
            <div className="grid lg:grid-cols-1 gap-8">
              {projetosAndamento.map((projeto) => (
                <div key={projeto.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-bold">{projeto.titulo}</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{projeto.categoria}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{projeto.descricao}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progresso</span>
                      <span className="text-sm text-gray-500">{projeto.progresso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${projeto.progresso}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {projeto.detalhes.slice(0, 3).map((detalhe, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{detalhe}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {projeto.detalhes.slice(3).map((detalhe, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-600">{detalhe}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{projeto.status}</span>
                    <span className="text-gray-500 text-sm">Previsão: {projeto.previsao}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossa Tecnologia
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              O Futuro da Segurança ao Seu Alcance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Eye className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Inteligência Artificial</h3>
              <p className="text-gray-600 mb-4">
                Detecção automática de pessoas e veículos com algoritmos de aprendizado profundo
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Detecção de intrusos</li>
                <li>• Reconhecimento facial</li>
                <li>• Análise comportamental</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Análise Preditiva</h3>
              <p className="text-gray-600 mb-4">
                Identificação de comportamentos suspeitos e prevenção de incidentes
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Detecção de furtos</li>
                <li>• Prevenção de acidentes</li>
                <li>• Controle de EPIs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Zap className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Pesquisa Rápida</h3>
              <p className="text-gray-600 mb-4">
                Classificação automática de clipes para investigação eficiente
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Busca inteligente por eventos</li>
                <li>• Classificação automática</li>
                <li>• Economia de tempo</li>
              </ul>
            </div>
          </div>

          {/* Hikvision Partnership */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Parceria Estratégica Hikvision</h3>
            <p className="text-xl mb-6 opacity-90">
              Somos parceiros estratégicos da Hikvision, reconhecida como a melhor fabricante de segurança do mundo.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Globe className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Tecnologia Global</div>
              </div>
              <div>
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Qualidade Comprovada</div>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Confiabilidade Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section id="instagram" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Siga-nos no Instagram
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Acompanhe nossos projetos, dicas de segurança e novidades tecnológicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 p-6 text-white text-center rounded-lg hover:shadow-xl transition-shadow">
              <Camera className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Projetos em Destaque</h3>
              <p className="opacity-90">Veja nossos projetos mais recentes e impressionantes</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-6 text-white text-center rounded-lg hover:shadow-xl transition-shadow">
              <Lightbulb className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dicas de Segurança</h3>
              <p className="opacity-90">Conteúdo educativo sobre segurança eletrônica</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-6 text-white text-center rounded-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Novidades Tech</h3>
              <p className="opacity-90">As últimas tendências em tecnologia de segurança</p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.open('https://instagram.com/agrolink360', '_blank')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-md flex items-center mx-auto"
            >
              <Camera className="w-5 h-5 mr-2" />
              @agrolink360
            </button>
            
            <p className="text-gray-600 mt-4">
              Mais de 15 posts sobre tecnologia, projetos e inovação em segurança
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Por Que Escolher a AgroLink360?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Especialização Dupla</h3>
              <p className="text-gray-600">
                Expertise comprovada nos setores agrícola e comercial com soluções personalizadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Cpu className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Inteligência artificial avançada para detecção precisa e otimização de processos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Parceria de Confiança</h3>
              <p className="text-gray-600">
                Soluções respaldadas pela qualidade e inovação da Hikvision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Target className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Soluções Personalizadas</h3>
              <p className="text-gray-600">
                Projetos desenvolvidos para atender às suas necessidades específicas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Tranquilidade Total</h3>
              <p className="text-gray-600">
                Controle total da sua segurança com monitoramento contínuo e alertas em tempo real.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Suporte 24/7</h3>
              <p className="text-gray-600">
                Atendimento técnico especializado disponível 24 horas por dia, 7 dias por semana.
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
            <p className="text-lg mb-10 opacity-80">
              Entre em contato com a AgroLink360 hoje mesmo e descubra como nossas soluções 
              inteligentes de CFTV podem fazer a diferença.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 rounded-md flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: (34) 99826-7463
              </button>
              
              <button 
                onClick={() => window.open('mailto:jpaulo@agrolink360.com.br')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-md flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                jpaulo@agrolink360.com.br
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-lg">
              <MapPin className="w-5 h-5 mr-2" />
              Patos de Minas - MG | Atendemos toda a região
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoAgroLink360} alt="AgroLink360" className="h-16 w-auto mb-4" />
              <p className="text-gray-400">
                Segurança inteligente para o campo e a cidade. Especialistas em CFTV e WiFi de alto desempenho.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>CFTV para Agronegócio</li>
                <li>Segurança Comercial</li>
                <li>WiFi Corporativo</li>
                <li>Inteligência Artificial</li>
                <li>Monitoramento 24/7</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Projetos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Fazenda Sertãozinho</li>
                <li>Fazenda Peri-Peri</li>
                <li>Clube Caiçaras</li>
                <li>Soluções Personalizadas</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (34) 99826-7463
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  jpaulo@agrolink360.com.br
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Patos de Minas - MG
                </li>
                <li className="flex items-center">
                  <Camera className="w-4 h-4 mr-2" />
                  @agrolink360
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AgroLink360. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

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

