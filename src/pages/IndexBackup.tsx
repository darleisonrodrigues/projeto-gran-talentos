import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Search,
  Shield,
  Zap,
  Target,
  Award,
  Building,
  ArrowRight,
  Play,
  ChevronRight,
  Globe,
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  BarChart3,
  Briefcase,
  Brain,
  Database,
  Network,
  Filter,
  Menu,
  UserCheck,
  Rocket,
  User
} from "lucide-react";
import { Link } from "react-router-dom";
import SAPStyleLogin from "@/components/SAPStyleLogin";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Olá! Sou a assistente da GRAN Talentos. Como posso ajudar você a encontrar os melhores talentos universitários?' }
  ]);

  const predefinedQuestions = [
    {
      question: "Como funciona o matching automático?",
      answer: "Nossa IA analisa perfis dos candidatos e necessidades das empresas, fazendo matches precisos em tempo real. Você recebe apenas candidatos qualificados para suas vagas!"
    },
    {
      question: "Quais são os diferenciais da GRAN Talentos?",
      answer: "Temos uma base de 2.400+ talentos universitários verificados, matching inteligente com IA, e foco em projetos reais dos estudantes, não apenas notas."
    },
    {
      question: "Como posso me cadastrar como empresa?",
      answer: "É simples! Clique em 'Login Empresarial' no topo da página e crie sua conta. Oferecemos teste gratuito por 7 dias."
    }
  ];

  const handleQuestionClick = (qa) => {
    setChatMessages(prev => [
      ...prev,
      { type: 'user', text: qa.question },
      { type: 'bot', text: qa.answer }
    ]);
  };

  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Moderno */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-red-500 to-brand-navy-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">GRAN Talentos</span>
                <div className="text-xs text-gray-500 uppercase tracking-wide">CONECTANDO TALENTOS</div>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-brand-red-500 transition-colors font-medium">
                Início
              </a>
              <a href="#talentos" className="text-gray-600 hover:text-brand-red-500 transition-colors font-medium">
                Talentos
              </a>
              <a href="#solucoes" className="text-gray-600 hover:text-brand-red-500 transition-colors font-medium">
                Soluções
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-brand-red-500 transition-colors font-medium">
                Sobre
              </a>
            </nav>

            {/* Botões de Ação */}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Para Estudantes
              </Button>
              <SAPStyleLogin />
              
              {/* Menu Mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-600 hover:text-brand-red-500 transition-colors">
                  Início
                </a>
                <a href="#talentos" className="text-gray-600 hover:text-brand-red-500 transition-colors">
                  Talentos
                </a>
                <a href="#solucoes" className="text-gray-600 hover:text-brand-red-500 transition-colors">
                  Soluções
                </a>
                <a href="#sobre" className="text-gray-600 hover:text-brand-red-500 transition-colors">
                  Sobre
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section Moderno */}
      <section id="inicio" className="relative pt-20 pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decoração de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-brand-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-brand-navy-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Principal */}
            <div data-aos="fade-right">
              <Badge className="mb-6 bg-brand-red-100 text-brand-red-800 border-brand-red-200">
                🚀 Mais de 2.400 talentos verificados
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Encontre o
                <span className="text-brand-red-500"> talento perfeito</span>
                <br />para sua empresa
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Conectamos as melhores empresas aos talentos universitários mais promissores. 
                Matching inteligente, resultados comprovados, contratação assertiva.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-brand-red-500 hover:bg-brand-red-600 cursor-default">
                  <Search className="mr-2 h-5 w-5" />
                  Explorar Talentos
                </Button>
                <Button size="lg" variant="outline" className="border-brand-navy-500 text-brand-navy-700 hover:bg-brand-navy-50">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração
                </Button>
              </div>

              {/* Métricas de Sucesso */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-red-600">89%</div>
                  <div className="text-sm text-gray-600">Taxa de Aprovação</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-navy-700">2.4k+</div>
                  <div className="text-sm text-gray-600">Talentos Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-dark-600">97%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Área Visual - Dashboard Preview */}
            <div data-aos="fade-left">
              <div className="relative">
                {/* Card Principal */}
                <Card className="bg-white shadow-2xl border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-gray-900">Talentos Destacados</h3>
                      <Badge className="bg-green-100 text-green-800">Disponível Agora</Badge>
                    </div>

                    {/* Perfil 1 */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-brand-red-500">
                        <img src="/Aluna.png" alt="Ana Silva" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Ana Silva</div>
                        <div className="text-sm text-gray-600">Eng. Software • USP</div>
                        <div className="flex gap-1 mt-1">
                          <Badge variant="secondary" className="text-xs">React</Badge>
                          <Badge variant="secondary" className="text-xs">Python</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-brand-red-600">95%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>

                    {/* Perfil 2 */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-brand-navy-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Carlos Santos</div>
                        <div className="text-sm text-gray-600">Design • UNICAMP</div>
                        <div className="flex gap-1 mt-1">
                          <Badge variant="secondary" className="text-xs">UI/UX</Badge>
                          <Badge variant="secondary" className="text-xs">Figma</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-brand-navy-600">92%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>

                    <Button className="w-full bg-brand-dark-500 hover:bg-brand-dark-600">
                      Ver Todos os Talentos
                    </Button>
                  </CardContent>
                </Card>

                {/* Cards Flutuantes */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Novo Match!</div>
                      <div className="text-xs text-gray-500">há 2 minutos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="talentos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a GRAN Talentos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolucionamos o processo de contratação conectando empresas aos melhores 
              talentos universitários através de tecnologia inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefício 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Matching Inteligente</h3>
                <p className="text-gray-600">
                  Nossa IA analisa skills, projetos e fit cultural para encontrar 
                  candidatos perfeitos em segundos
                </p>
              </CardContent>
            </Card>

            {/* Benefício 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-navy-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-8 w-8 text-brand-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talentos Verificados</h3>
                <p className="text-gray-600">
                  Todos os perfis são validados pelas universidades. 
                  Projetos reais, não apenas teorias
                </p>
              </CardContent>
            </Card>

            {/* Benefício 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-dark-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-brand-dark-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contratação Rápida</h3>
                <p className="text-gray-600">
                  Reduza em 60% o tempo de contratação. 
                  Do match à contratação em dias, não meses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTINUAR DAQUI - removendo o conteúdo antigo que estava duplicado */}
      <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-brand-dark-500" />
                  <span>Seguro e Confiável</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-brand-red-500" />
                  <span>Implementação em 30 dias</span>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border overflow-hidden">
                {/* Header com indicador de tempo real */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Dashboard Vitae Talent</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-brand-dark-500 rounded-full animate-pulse"></div>
                        Atualizando em tempo real
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-brand-dark-100 text-brand-dark-800 border-brand-dark-200 font-semibold">
                    <div className="w-2 h-2 bg-brand-dark-500 rounded-full mr-2"></div>
                    Live
                  </Badge>
                </div>

                {/* Métricas principais com melhor visual */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-brand-red-50 to-brand-red-100 rounded-xl p-4 text-center border border-brand-red-200">
                    <div className="text-3xl font-black text-brand-red-700 mb-1">2.4k+</div>
                    <div className="text-sm font-medium text-brand-red-600">Talentos Verificados</div>
                    <div className="text-xs text-brand-red-500 mt-1">↑ +15% esta semana</div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-dark-50 to-brand-dark-100 rounded-xl p-4 text-center border border-brand-dark-200">
                    <div className="text-3xl font-black text-brand-dark-700 mb-1">97%</div>
                    <div className="text-sm font-medium text-brand-dark-600">Match Success</div>
                    <div className="text-xs text-brand-dark-500 mt-1">↑ +3% este mês</div>
                  </div>
                </div>

                {/* Card de candidato em destaque com match percentage */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border-2 border-brand-red-500">
                        <img 
                          src="/Aluna.png" 
                          alt="Ana Silva" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-base">Ana Silva</div>
                        <div className="text-sm text-gray-600 font-medium">Ciência da Computação • USP</div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="bg-brand-navy-100 text-brand-navy-800 text-xs font-semibold">React</Badge>
                          <Badge className="bg-brand-dark-100 text-brand-dark-800 text-xs font-semibold">Node.js</Badge>
                          <Badge className="bg-brand-red-100 text-brand-red-800 text-xs font-semibold">Python</Badge>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-brand-dark-500 text-white font-bold text-sm px-3 py-1 shadow-md">
                      95% Match
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-xs text-gray-600 ml-1 font-medium">4.9/5</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        📊 Portfolio: 8 projetos ativos
                      </div>
                    </div>
                    <Button size="sm" className="bg-brand-red-500 hover:bg-brand-red-600 text-white text-xs font-semibold">
                      Ver Perfil Completo
                    </Button>
                  </div>
                </div>

                {/* Indicador de atividade recente */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>🔥 12 novos matches hoje</span>
                    <span>⚡ Última atualização: agora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAP Style Login Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-brand-dark-100 text-brand-dark-700">
              🏢 Padrão Empresarial
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interface de Login Corporativo
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experimente nossa interface de login seguindo os padrões SAP de design empresarial
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <SAPStyleLogin />
              <div className="text-sm text-gray-500">
                ← Clique para ver o modal de login estilo SAP
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-brand-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Design Corporativo</h3>
                <p className="text-gray-600 text-sm">Interface seguindo padrões corporativos modernos com máxima usabilidade</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-brand-dark-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-brand-dark-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Login Simplificado</h3>
                <p className="text-gray-600 text-sm">Sistema de autenticação simples e seguro para facilitar o acesso</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-brand-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-brand-navy-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multi-perfil</h3>
                <p className="text-gray-600 text-sm">Suporte para empresas e universidades com funcionalidades específicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 bg-gradient-to-br from-brand-red-50 to-brand-dark-100" id="como-funciona">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <Badge className="mb-4 bg-brand-red-100 text-brand-red-700">
              🔄 Processo Revolucionário
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como funciona o matching automático + IA preparatória
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo inteligente em 4 etapas que conecta automaticamente seus alunos 
              às vagas ideais e os prepara para o sucesso profissional.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-brand-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Aluno se cadastra
              </h3>
              <p className="text-gray-600 text-sm">
                Estudante preenche perfil completo: habilidades, projetos, experiências, 
                idiomas e objetivos de carreira.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-brand-dark-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Empresa cadastra vaga
              </h3>
              <p className="text-gray-600 text-sm">
                Empresa conveniada publica vaga com requisitos detalhados. 
                Sistema automaticamente busca matches.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-brand-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Match automático
              </h3>
              <p className="text-gray-600 text-sm">
                IA analisa compatibilidade e envia notificação instantânea 
                para alunos que fazem match com a vaga.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-brand-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                IA prepara o aluno
              </h3>
              <p className="text-gray-600 text-sm">
                IA analisa a vaga e cria plano personalizado: simulações, 
                conteúdo de estudo e dicas específicas da empresa.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
            <Card className="bg-gradient-to-r from-brand-red-50 to-brand-dark-50 border-0 p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Resultado: Alunos preparados e direcionados
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Seus estudantes não saem apenas com diploma, mas com oportunidades reais 
                e preparação especializada. Aumente a empregabilidade da sua instituição!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-dark-500 hover:bg-brand-dark-600 text-white">
                  <Zap className="mr-2 h-5 w-5" />
                  Implementar na Minha Universidade
                </Button>
                <Button variant="outline" size="lg" className="border-brand-red-600 text-brand-red-600 hover:bg-brand-red-50">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demonstração Completa
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white" id="solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Do matching automático à preparação inteligente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Substitua o portal de vagas tradicional por um sistema inteligente que conecta 
              automaticamente seus alunos às vagas ideais e os prepara com IA para o sucesso.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-brand-red-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Matching automático inteligente
                </h3>
                <p className="text-gray-600 mb-6">
                  Empresa cadastra vaga → IA faz matching automaticamente → Aluno recebe 
                  notificação instantânea. Sem busca manual, sem candidaturas perdidas.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Matching em Ação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-brand-dark-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-brand-dark-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  IA Preparatória 24/7
                </h3>
                <p className="text-gray-600 mb-6">
                  IA analisa a vaga e treina o aluno especificamente para ela: simulações de 
                  entrevista, preparação técnica e dicas personalizadas. Suporte até a contratação.
                </p>
                <Button variant="outline" className="w-full">
                  Conhecer IA Preparatória
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-brand-navy-100 rounded-xl flex items-center justify-center mb-6">
                  <Building className="h-6 w-6 text-brand-navy-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Alunos direcionados e preparados
                </h3>
                <p className="text-gray-600 mb-6">
                  Seus alunos não saem apenas com diploma, mas com oportunidades reais 
                  e preparação especializada. Aumente a taxa de empregabilidade da sua instituição.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Taxa de Sucesso
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50" id="produtos">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transformamos o recrutamento universitário
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções B2B para empresas que buscam talentos universitários de alta qualidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Produto 1 */}
            <Card className="border-0 shadow-lg" data-aos="slide-right">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Busca Inteligente de Talentos
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Solução: Conectar empresas aos melhores talentos universitários
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">O Desafio:</p>
                    <p className="text-gray-600 text-sm">
                      Como encontrar talentos universitários qualificados que vão além da teoria 
                      e têm experiência prática comprovada?
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Nossa Solução:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• <strong>Perfis com projetos reais</strong> desenvolvidos pelos estudantes</li>
                      <li>• <strong>Busca inteligente</strong> por skills e experiências específicas</li>
                      <li>• <strong>Validação de resultados:</strong> "1k usuários", "40% melhoria"</li>
                      <li>• <strong>Acesso direto</strong> aos melhores talentos das universidades</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 cursor-default">
                  Explorar Talentos
                </Button>
              </CardContent>
            </Card>

            {/* Produto 2 */}
            <Card className="border-0 shadow-lg" data-aos="slide-left">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Plataforma de Recrutamento Escalável
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Solução: Automatizar e acelerar o processo de contratação
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">O Desafio:</p>
                    <p className="text-gray-600 text-sm">
                      Como reduzir o tempo de recrutamento e encontrar candidatos qualificados 
                      sem ter que analisar milhares de currículos manualmente?
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Nossa Plataforma:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• <strong>Interface intuitiva:</strong> Visualize projetos e resultados rapidamente</li>
                      <li>• <strong>Filtros inteligentes:</strong> Encontre exatamente o perfil que precisa</li>
                      <li>• <strong>Contato direto:</strong> Conecte-se instantaneamente com candidatos</li>
                      <li>• <strong>Base qualificada:</strong> Apenas talentos pré-validados pelas universidades</li>
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  Solicitar Demonstração
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção Talento Qualificado com Recrutadora */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Talento não é só certificado.
                <span className="text-brand-red-500"> É resultado comprovado.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa plataforma conecta você aos melhores talentos universitários que vão além da teoria. 
                Cada perfil mostra projetos reais, impacto mensurável e resultados concretos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-dark-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Projetos com Impacto Real</h4>
                    <p className="text-gray-600 text-sm">Apps com milhares de usuários, sistemas que otimizaram processos, pesquisas publicadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-dark-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Validação Universitária</h4>
                    <p className="text-gray-600 text-sm">Perfis pré-aprovados pelas melhores instituições de ensino do país</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-dark-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Matching Inteligente</h4>
                    <p className="text-gray-600 text-sm">IA que encontra candidatos com o perfil exato para sua vaga em segundos</p>
                  </div>
                </div>
              </div>

              <Button className="bg-brand-red-500 hover:bg-brand-red-600 text-white cursor-default" size="lg">
                <Search className="mr-2 h-5 w-5" />
                Explorar Talentos Verificados
              </Button>
            </div>

            {/* Imagem à direita */}
            <div data-aos="fade-left">
              <div className="relative">
                <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/recrutadora.jpeg" 
                    alt="Recrutadora analisando perfis de talentos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card flutuante com estatística */}
                <div className="absolute top-8 right-8 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-red-500">89%</div>
                    <div className="text-sm text-gray-600">Aprovação em<br/>Processos Seletivos</div>
                  </div>
                </div>

                {/* Card flutuante com informação */}
                <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg border border-gray-200 max-w-[240px]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-brand-dark-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">2.400+ Talentos</div>
                      <div className="text-xs text-gray-600">Verificados e ativos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold">GRAN Talentos</span>
              </div>
              <p className="text-gray-400 mb-4">
                A plataforma enterprise que conecta universidades e empresas 
                através de talentos qualificados.
              </p>
              <div className="text-sm text-gray-400">
                <p>Brasil</p>
                <p>0800 123 4567</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Busca de Talentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestão de Candidatos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vitae Talent. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isChatOpen && (
          <div className="mb-4 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Assistente Vitae</h3>
                  <p className="text-blue-100 text-xs">Online agora</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-blue-500 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 max-h-80 overflow-y-auto space-y-3">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-gray-100">
              <p className="text-xs text-gray-600 mb-3 font-medium">Perguntas frequentes:</p>
              <div className="space-y-2">
                {predefinedQuestions.slice(0, 3).map((qa, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(qa)}
                    className="w-full text-left text-xs p-2 bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700 transition-colors"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
              
              {/* Contact Actions */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-8"
                    onClick={() => handleQuestionClick(predefinedQuestions[5])}
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Falar com Especialista
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-8"
                    asChild
                  >
                    <a href="mailto:empresas@vitaetalent.com">
                      <Mail className="w-3 h-3 mr-1" />
                      Email Comercial
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chat Trigger Button */}
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isChatOpen 
              ? 'bg-gray-600 hover:bg-gray-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isChatOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Index;