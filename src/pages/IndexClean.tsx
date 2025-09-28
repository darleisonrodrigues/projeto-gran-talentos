import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle, 
  Star, 
  Search,
  Shield,
  Zap,
  Award,
  ArrowRight,
  Play,
  Globe,
  MessageCircle,
  X,
  Phone,
  Mail,
  BarChart3,
  Brain,
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

      {/* Seção com Imagem da Recrutadora */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto à esquerda */}
            <div data-aos="fade-right">
              <Badge className="mb-4 bg-brand-red-100 text-brand-red-800">
                ✨ Talentos de Qualidade
              </Badge>
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
                    <p className="text-gray-600 text-sm">Apps com milhares de usuários, sistemas que otimizaram processos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-dark-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Validação Universitária</h4>
                    <p className="text-gray-600 text-sm">Perfis aprovados pelas melhores instituições do país</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-brand-dark-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Matching Inteligente</h4>
                    <p className="text-gray-600 text-sm">IA que encontra candidatos perfeitos em segundos</p>
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
                <div className="absolute top-8 right-8 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-red-500">89%</div>
                    <div className="text-sm text-gray-600">Taxa de<br/>Aprovação</div>
                  </div>
                </div>

                {/* Card flutuante com informação */}
                <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-lg border max-w-[240px]">
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

      {/* Seção de Soluções */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Soluções para cada necessidade
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ferramentas completas para encontrar, avaliar e contratar os melhores talentos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Solução 1 */}
            <Card className="border-0 shadow-lg" data-aos="slide-right">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Busca Inteligente de Talentos
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Encontre candidatos ideais através de projetos reais
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">O Desafio:</p>
                    <p className="text-gray-600 text-sm">
                      Como encontrar talentos que vão além da teoria 
                      e têm experiência prática comprovada?
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Nossa Solução:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• <strong>Perfis com projetos reais</strong> desenvolvidos pelos estudantes</li>
                      <li>• <strong>Busca inteligente</strong> por skills e experiências específicas</li>
                      <li>• <strong>Validação de resultados:</strong> métricas de impacto dos projetos</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 cursor-default">
                  Explorar Talentos
                </Button>
              </CardContent>
            </Card>

            {/* Solução 2 */}
            <Card className="border-0 shadow-lg" data-aos="slide-left">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Plataforma de Recrutamento
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Automatize e acelere seu processo de contratação
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">O Desafio:</p>
                    <p className="text-gray-600 text-sm">
                      Como reduzir tempo de recrutamento sem perder 
                      qualidade na seleção?
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Nossa Plataforma:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• <strong>Interface intuitiva:</strong> Visualize projetos rapidamente</li>
                      <li>• <strong>Filtros inteligentes:</strong> Encontre o perfil exato</li>
                      <li>• <strong>Base qualificada:</strong> Talentos pré-validados</li>
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

      {/* Footer Moderno */}
      <footer id="sobre" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-red-500 to-brand-navy-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-bold">GRAN Talentos</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                A GRAN Talentos conecta os melhores talentos universitários 
                com as empresas mais inovadoras do mercado.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Globe className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-semibold text-white mb-4">Para Empresas</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Busca de Talentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold text-white mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 GRAN Talentos. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl border z-50">
          <div className="p-4 bg-gradient-to-r from-brand-red-500 to-brand-navy-900 rounded-t-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Assistente GRAN Talentos</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-4 max-h-80 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`mb-3 ${msg.type === 'bot' ? 'text-left' : 'text-right'}`}>
                <div className={`inline-block p-3 rounded-lg text-sm max-w-[250px] ${
                  msg.type === 'bot' 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-brand-red-500 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="space-y-2">
              {predefinedQuestions.map((qa, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left h-auto p-2 text-xs"
                  onClick={() => handleQuestionClick(qa)}
                >
                  {qa.question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Botão do Chat */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-brand-red-500 hover:bg-brand-red-600 shadow-lg z-40"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default Index;