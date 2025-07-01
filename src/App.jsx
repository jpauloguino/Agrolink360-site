import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
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
import logoAgroLink360 from './assets/logo-agrolink360.webp'
import heroBackground from './assets/hero-background.jpg'
import projetoFazenda from './assets/projeto-fazenda-1.jpg'
import projetoComercial from './assets/projeto-comercial-1.jpg'
import projetoIndustrial from './assets/projeto-industrial-1.jpg'
import tecnologiaIA from './assets/tecnologia-ia.jpg'
import projetoAndamento1 from './assets/projeto-andamento-1.jpg'
import projetoAndamento2 from './assets/projeto-andamento-2.jpg'
import equipeTecnica from './assets/equipe-tecnica.jpg'

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

  const whatsappNumber = "5534998267463" // WhatsApp oficial AgroLink360
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
      imagem: projetoFazenda,
      status: "Concluído",
      ano: "2024",
      detalhes: ["6 câmeras Hikvision com IA", "Sistema de alarme sem fio", "Automação de refletores", "Central AXPRO", "Speed dome 4K 30x zoom", "WiFi mesh 2.4/5GHz", "Starlink instalado", "Cobertura 10.000+ m²"]
    },
    {
      id: 2,
      titulo: "Fazenda Peri-Peri - Região de Patos de Minas/MG",
      categoria: "Agronegócio",
      descricao: "Sistema avançado com 48 câmeras 2K, speed dome e NVR com IA embarcada",
      imagem: projetoComercial,
      status: "Concluído",
      ano: "2024",
      detalhes: ["48 câmeras Hikvision 2K", "Speed dome FullHD 25x zoom IR 150m", "NVR com IA embarcada", "Detecção de veículos e placas", "WiFi longo alcance", "Segurança em Pivô 40 hectares", "Reconhecimento facial", "Banco de dados integrado"]
    },
    {
      id: 3,
      titulo: "Projeto Comercial - Região de Patos de Minas/MG",
      categoria: "Comercial",
      descricao: "Segurança perimetral avançada com detecção de intrusão e rastreamento automático",
      imagem: projetoIndustrial,
      status: "Concluído",
      ano: "2023",
      detalhes: ["80 câmeras perimetrais", "Detecção de intrusão por IA", "Rastreamento automático", "Integração com alarmes"]
    }
  ]

  const projetosAndamento = [
    {
      id: 4,
      titulo: "Clube Caiçaras - Patos de Minas/MG",
      categoria: "Lazer e Entretenimento",
      descricao: "Projeto de grande escala: CFTV, WiFi público e segurança perimetral em complexo de 50.000+ m² (Fase 1 de 3)",
      imagem: projetoAndamento1,
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
    },
    {
      id: 5,
      titulo: "Centro Comercial Novo Mundo - RJ",
      categoria: "Comercial",
      descricao: "Instalação de sistema integrado de segurança e controle de acesso",
      imagem: projetoAndamento1,
      status: "Em Andamento",
      previsao: "Fevereiro 2025",
      progresso: 40,
      detalhes: ["95 câmeras em instalação", "Sistema de controle de acesso", "Integração com app mobile", "Previsão: 30 dias"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoAgroLink360} alt="AgroLink360" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('tecnologia')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Tecnologia
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </button>
              <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
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
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-blue-600">
                  Contato
                </button>
                <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 w-fit">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="pt-24 pb-16 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBackground})` }}
      >
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Award className="w-4 h-4 mr-2" />
              Parceiros Oficiais Hikvision
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Segurança Inteligente
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Para o Campo e a Cidade
            </p>
            
            <p className="text-lg text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Especialistas em projetos de CFTV de alta performance com inteligência artificial, 
              desenvolvidos sob medida para agronegócio e comércio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('sobre')}
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Play className="w-5 h-5 mr-2" />
                Conheça Mais
              </Button>
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Integrar tecnologia de ponta para criar ambientes mais seguros e eficientes, 
                  seja em vastas propriedades rurais ou em movimentados estabelecimentos comerciais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser referência em soluções de segurança inteligente, combinando inovação tecnológica 
                  com expertise especializada para cada setor.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Confiabilidade, inovação e atendimento personalizado. Cada projeto é desenvolvido 
                  com foco na excelência e satisfação total do cliente.
                </p>
              </CardContent>
            </Card>
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
            
            <div className="grid lg:grid-cols-3 gap-8">
              {projetosExecutados.map((projeto) => (
                <Card key={projeto.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={projeto.imagem} 
                      alt={projeto.titulo}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                      {projeto.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{projeto.titulo}</CardTitle>
                      <Badge variant="outline">{projeto.categoria}</Badge>
                    </div>
                    <CardDescription>{projeto.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {projeto.detalhes.map((detalhe, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {detalhe}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Concluído em {projeto.ano}</span>
                      <Button size="sm" variant="outline" onClick={openWhatsApp}>
                        Ver Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projetos em Andamento */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Settings className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Projetos em Andamento</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projetosAndamento.map((projeto) => (
                <Card key={projeto.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={projeto.imagem} 
                      alt={projeto.titulo}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      {projeto.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{projeto.titulo}</CardTitle>
                      <Badge variant="outline">{projeto.categoria}</Badge>
                    </div>
                    <CardDescription>{projeto.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {projeto.detalhes.map((detalhe, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                          {detalhe}
                        </div>
                      ))}
                    </div>
                    
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
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Previsão: {projeto.previsao}
                      </span>
                      <Button size="sm" variant="outline" onClick={openWhatsApp}>
                        Acompanhar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Equipe Técnica */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Nossa Equipe Técnica</h3>
                <p className="text-xl mb-6 opacity-90">
                  Profissionais certificados e especializados em sistemas Hikvision, 
                  garantindo instalação e suporte de excelência.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <Wrench className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-semibold">Técnicos Certificados</div>
                  </div>
                  <div>
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-semibold">Suporte 24/7</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={equipeTecnica} 
                  alt="Equipe Técnica AgroLink360"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tecnologia" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossa Tecnologia
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              O Futuro da Segurança ao Seu Alcance
            </p>
          </div>

          {/* Technology Hero Image */}
          <div className="mb-16 relative">
            <img 
              src={tecnologiaIA} 
              alt="Tecnologia de IA"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Inteligência Artificial Avançada</h3>
                <p className="text-lg opacity-90">Tecnologia de ponta para detecção precisa e análise comportamental</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Inteligência Artificial Integrada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Algoritmos de aprendizado profundo para detecção automática de pessoas e veículos, 
                  minimizando alarmes falsos e focando nas ameaças reais.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Detecção inteligente de pessoas</li>
                  <li>• Reconhecimento de veículos</li>
                  <li>• Redução de falsos alarmes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Análise Preditiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Análise algorítmica de imagens para identificar comportamentos suspeitos e 
                  otimizar processos operacionais.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Detecção de comportamentos suspeitos</li>
                  <li>• Prevenção de acidentes</li>
                  <li>• Controle de EPIs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Pesquisa Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Classificação automática de clipes em "Arquivos de pessoas" e "Arquivos de veículos" 
                  para investigação eficiente.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Busca inteligente por eventos</li>
                  <li>• Classificação automática</li>
                  <li>• Economia de tempo</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Hikvision Partnership */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
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
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Wheat className="w-16 h-16 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-2xl">Para o Agronegócio</CardTitle>
                <CardDescription className="text-lg">
                  Proteção Inteligente para Suas Operações Rurais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
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
                      <div className="font-semibold">Otimização e Prevenção</div>
                      <div className="text-sm text-gray-600">
                        Controle de acesso, rastreamento de equipamentos e prevenção de acidentes
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento Rural
                </Button>
              </CardContent>
            </Card>

            {/* Comercial */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Building className="w-16 h-16 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Para o Setor Comercial</CardTitle>
                <CardDescription className="text-lg">
                  Segurança Otimizada para Seu Negócio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
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
                      <div className="font-semibold">Monitoramento Eficiente</div>
                      <div className="text-sm text-gray-600">
                        Sistemas integrados com câmeras, alarmes e sensores 24 horas
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
                
                <Button onClick={openWhatsApp} className="w-full bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento Comercial
                </Button>
              </CardContent>
            </Card>
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Especialização Dupla</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expertise comprovada nos setores agrícola e comercial com soluções personalizadas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Tecnologia de Ponta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Inteligência artificial avançada para detecção precisa e otimização de processos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Parceria de Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Soluções respaldadas pela qualidade e inovação da Hikvision.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Soluções Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Projetos desenvolvidos para suas necessidades específicas com máxima eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Tranquilidade Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Controle total da sua segurança com monitoramento contínuo e alertas em tempo real.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Suporte 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Atendimento técnico especializado disponível 24 horas por dia, 7 dias por semana.
                </p>
              </CardContent>
            </Card>
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
              <Button 
                size="lg" 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-mail
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoAgroLink360} alt="AgroLink360" className="h-12 w-auto mb-4" />
              <p className="text-gray-400 mb-4">
                Segurança inteligente para o campo e a cidade. Especialistas em CFTV com IA.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" onClick={openWhatsApp}>
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>CFTV para Agronegócio</li>
                <li>Segurança Comercial</li>
                <li>Inteligência Artificial</li>
                <li>Monitoramento 24/7</li>
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
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

export default App

