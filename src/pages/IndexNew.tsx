import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  ExternalLink, 
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
  BarChart3,
  Briefcase,
  Brain,
  Database,
  Network,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Vitae Talent</span>
                <div className="text-xs text-gray-500 uppercase tracking-wide">UNIVERSITY RECRUITMENT</div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Soluções
              </a>
              <a href="#produtos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Produtos
              </a>
              <a href="#customers" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Clientes
              </a>
              <a href="#parceiros" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Parceiros
              </a>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link to="/buscar-talentos">
                  Acessar Plataforma
                </Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#demo">
                  Solicitar Demo
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                  🚀 Revolucione seu recrutamento universitário
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Os melhores{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    talentos da sua instituição
                  </span>
                  {" "}conectados às empresas certas
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Potencialize o valor dos seus estudantes conectando-os diretamente com as empresas ideais. 
                  Transforme projetos acadêmicos em oportunidades reais de carreira.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/buscar-talentos">
                    <Search className="mr-2 h-5 w-5" />
                    Explorar Talentos
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-lg px-8 py-4"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo (2 min)
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Seguro e Confiável</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>Implementação em 30 dias</span>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Dashboard Vitae Talent</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">Live</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">1.2k+</div>
                      <div className="text-sm text-gray-600">Talentos Ativos</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">94%</div>
                      <div className="text-sm text-gray-600">Match Success</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">180+</div>
                      <div className="text-sm text-gray-600">Empresas</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        A
                      </div>
                      <div>
                        <div className="font-medium text-sm">Ana Silva - Ciência da Computação</div>
                        <div className="text-xs text-gray-500">React • Node.js • Python</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white" id="solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Atue com segurança hoje – lidere com visão de futuro amanhã
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Vitae Talent unifica sua busca por talentos, seus dados de candidatos e suas 
              ferramentas de recrutamento para ajudar você a se adaptar, inovar e seguir em frente com mais clareza.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Desenvolvido para o futuro do recrutamento
                </h3>
                <p className="text-gray-600 mb-6">
                  Nossa plataforma integrada conecta universidades e empresas com 
                  inteligência artificial avançada para identificar os melhores matches.
                </p>
                <Button variant="outline" className="w-full">
                  Conheça a Plataforma
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Dê suporte a todos os times e fortaleça todos os processos
                </h3>
                <p className="text-gray-600 mb-6">
                  Equipe todos os times com ferramentas para adaptação, escala e 
                  fornecimento de resultados reais no recrutamento universitário.
                </p>
                <Button variant="outline" className="w-full">
                  Ver Recursos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Com a confiança de grandes empresas
                </h3>
                <p className="text-gray-600 mb-6">
                  Universidades líderes e empresas inovadoras já confiam em nossa 
                  plataforma para conectar os melhores talentos.
                </p>
                <Button variant="outline" className="w-full">
                  Casos de Sucesso
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

                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/buscar-talentos">
                    Explorar Talentos
                  </Link>
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

      {/* Customers Section */}
      <section className="py-16 bg-white" id="customers">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Com a confiança de grandes universidades e empresas
            </h2>
            <p className="text-lg text-gray-600">
              Acelere o sucesso com nosso amplo ecossistema de parceiros
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Logos de universidades e empresas */}
            {['USP', 'UNICAMP', 'PUC', 'FATEC', 'FGV', 'Mackenzie'].map((logo, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-bold text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Button variant="outline" size="lg">
              Ver Todos os Casos de Sucesso
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para revolucionar seu recrutamento?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se às principais universidades e empresas que já transformaram 
            seu processo de conexão de talentos com o Vitae Talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Search className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Play className="mr-2 h-5 w-5" />
              Agendar Demonstração
            </Button>
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
                <span className="text-xl font-bold">Vitae Talent</span>
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
    </div>
  );
};

export default Index;