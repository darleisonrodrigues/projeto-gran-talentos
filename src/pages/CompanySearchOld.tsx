import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, MapPin, Calendar, TrendingUp, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface Candidate {
  id: number;
  nome: string;
  curso: string;
  semestre: number;
  ira: number;
  cidade: string;
  disponibilidade: string;
  projetos: string;
  storyline: string;
  githubPortfolio?: string;
}

const CompanySearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [courseFilter, setCourseFilter] = useState("all");
  const [semesterFilter, setSemesterFilter] = useState("all");

  // Dados fake para demonstração
  const candidatosFake: Candidate[] = [
    {
      id: 1,
      nome: "A.S.",
      curso: "Engenharia de Software",
      semestre: 6,
      ira: 8.7,
      cidade: "São Paulo",
      disponibilidade: "Estágio",
      projetos: "App de gestão estudantil com 1k usuários ativos. Desenvolveu sistema de notificações push e integração com APIs da universidade.",
      storyline: "Transformou um projeto acadêmico em solução real para sua universidade. Demonstra capacidade de execução e visão de produto.",
      githubPortfolio: "https://github.com/anasilva"
    },
    {
      id: 2,
      nome: "C.M.",
      curso: "Design",
      semestre: 4,
      ira: 9.1,
      cidade: "Rio de Janeiro",
      disponibilidade: "Emprego",
      projetos: "Sistema de design para startup de healthtech. Criou 50+ componentes reutilizáveis e documentação completa no Figma.",
      storyline: "Já trabalhou freelance para 3 startups enquanto mantém IRA excelente. Combina criatividade com metodologia.",
      githubPortfolio: "https://behance.net/carlosmendes"
    },
    {
      id: 3,
      nome: "M.C.",
      curso: "Administração",
      semestre: 7,
      ira: 8.3,
      cidade: "Belo Horizonte",
      disponibilidade: "Ambos",
      projetos: "Consultoria para 5 pequenas empresas locais. Aumentou vendas em média 40% através de estratégias digitais.",
      storyline: "Une teoria administrativa com resultados práticos. Já impactou negócios reais antes mesmo de se formar.",
      githubPortfolio: "https://linkedin.com/in/marianacosta"
    },
    {
      id: 4,
      nome: "P.S.",
      curso: "Engenharia de Software",
      semestre: 8,
      ira: 9.0,
      cidade: "Porto Alegre",
      disponibilidade: "Emprego",
      projetos: "API REST para e-commerce que processa 10k requisições por minuto. Implementou cache inteligente e otimizações de performance.",
      storyline: "Demonstra domínio técnico avançado com foco em performance e escalabilidade. Pronto para desafios enterprise.",
      githubPortfolio: "https://github.com/pedrosantos"
    },
    {
      id: 5,
      nome: "J.O.",
      curso: "Design",
      semestre: 5,
      ira: 8.9,
      cidade: "Brasília",
      disponibilidade: "Estágio",
      projetos: "Redesign completo de app bancário com foco em acessibilidade. Aumentou taxa de conclusão de tarefas em 65%.",
      storyline: "Combina design thinking com dados. Suas decisões são baseadas em pesquisa e resultam em impacto mensurável.",
      githubPortfolio: "https://dribbble.com/juliaoliveira"
    },
    {
      id: 6,
      nome: "L.F.",
      curso: "Administração",
      semestre: 6,
      ira: 8.1,
      cidade: "Recife",
      disponibilidade: "Estágio",
      projetos: "Startup de delivery sustentável. Captou R$ 50k em investimento anjo e tem 200+ restaurantes parceiros.",
      storyline: "É um empreendedor nato que validou uma ideia de negócio real. Demonstra liderança e visão de mercado.",
      githubPortfolio: "https://linkedin.com/in/lucasferreira"
    },
    {
      id: 7,
      nome: "I.R.",
      curso: "Engenharia de Software",
      semestre: 3,
      ira: 9.3,
      cidade: "Florianópolis",
      disponibilidade: "Estágio",
      projetos: "Chatbot inteligente para atendimento ao cliente usando NLP. Reduziu tempo de resposta em 80% para empresa de telecom.",
      storyline: "Domina IA aplicada mesmo estando no início do curso. Demonstra capacidade de aprendizado acelerado.",
      githubPortfolio: "https://github.com/isabelarodrigues"
    },
    {
      id: 8,
      nome: "R.L.",
      curso: "Design",
      semestre: 8,
      ira: 8.4,
      cidade: "Salvador",
      disponibilidade: "Emprego",
      projetos: "Identidade visual para 20+ marcas locais. Especialista em branding para pequenos negócios com foco em impacto social.",
      storyline: "Alia talento criativo com propósito social. Seus projetos geram valor tanto estético quanto comercial.",
      githubPortfolio: "https://rafaellima.design"
    },
    {
      id: 9,
      nome: "C.S.",
      curso: "Administração",
      semestre: 5,
      ira: 8.8,
      cidade: "Curitiba",
      disponibilidade: "Ambos",
      projetos: "Gestão de projeto que reduziu custos operacionais em 30% para ONG local. Implementou processos lean e métricas de impacto.",
      storyline: "Combina eficiência operacional com propósito social. Transforma processos complexos em soluções simples.",
      githubPortfolio: "https://linkedin.com/in/camilasouza"
    },
    {
      id: 10,
      nome: "G.T.",
      curso: "Engenharia de Software",
      semestre: 7,
      ira: 8.6,
      cidade: "Fortaleza",
      disponibilidade: "Emprego",
      projetos: "Plataforma de ensino online com 500+ alunos ativos. Desenvolveu sistema de gamificação que aumentou engajamento em 150%.",
      storyline: "Identificou uma lacuna no mercado educacional e criou uma solução escalável. Demonstra visão de produto e execução.",
      githubPortfolio: "https://github.com/gabrieltorres"
    },
    {
      id: 11,
      nome: "Fernanda Alves",
      curso: "Engenharia de Software",
      semestre: 5,
      ira: 9.2,
      cidade: "Goiânia",
      disponibilidade: "Estágio",
      projetos: "Sistema de monitoramento IoT para agricultura inteligente. Sensores conectados que otimizam irrigação e reduzem desperdício em 40%.",
      storyline: "Fernanda combina tecnologia de ponta com sustentabilidade. Seus projetos geram impacto real no agronegócio.",
      githubPortfolio: "https://github.com/fernandaalves"
    },
    {
      id: 12,
      nome: "Thiago Martins",
      curso: "Marketing Digital",
      semestre: 6,
      ira: 8.5,
      cidade: "São Paulo",
      disponibilidade: "Emprego",
      projetos: "Campanha viral que gerou 2M de visualizações para startup de fintech. ROI de 300% em aquisição de clientes.",
      storyline: "Thiago entende o comportamento digital da geração Z. Suas campanhas conectam marcas com audiências de forma autêntica.",
      githubPortfolio: "https://linkedin.com/in/thiago-martins"
    },
    {
      id: 13,
      nome: "Larissa Pereira",
      curso: "Design",
      semestre: 7,
      ira: 8.9,
      cidade: "Campinas",
      disponibilidade: "Ambos",
      projetos: "Interface de realidade aumentada para museus. Experiência imersiva que aumentou engajamento de visitantes em 85%.",
      storyline: "Larissa está na vanguarda do design para tecnologias emergentes. Combina arte, tecnologia e experiência do usuário.",
      githubPortfolio: "https://larissapereira.design"
    },
    {
      id: 14,
      nome: "Roberto Santos",
      curso: "Ciência de Dados",
      semestre: 8,
      ira: 9.4,
      cidade: "Brasília",
      disponibilidade: "Emprego",
      projetos: "Modelo de ML para previsão de demanda que reduziu desperdício em 25% para rede de supermercados. Processamento de 10M+ registros.",
      storyline: "Roberto transforma dados em insights acionáveis. Suas análises preditivas geram valor mensurável para negócios.",
      githubPortfolio: "https://github.com/robertosantos"
    },
    {
      id: 15,
      nome: "Amanda Lima",
      curso: "Psicologia Organizacional",
      semestre: 6,
      ira: 8.7,
      cidade: "Porto Alegre",
      disponibilidade: "Estágio",
      projetos: "Programa de bem-estar corporativo que reduziu turnover em 35% em startup de tecnologia. Implementação de práticas de mindfulness.",
      storyline: "Amanda entende que pessoas são o coração das organizações. Suas intervenções criam ambientes de trabalho mais saudáveis e produtivos.",
      githubPortfolio: "https://linkedin.com/in/amanda-lima-psi"
    },
    {
      id: 16,
      nome: "Diego Costa",
      curso: "Engenharia de Software",
      semestre: 4,
      ira: 8.8,
      cidade: "Manaus",
      disponibilidade: "Estágio",
      projetos: "App de preservação ambiental com gamificação. 5k usuários ativos registrando ações sustentáveis e plantio de árvores na Amazônia.",
      storyline: "Diego usa tecnologia para consciência ambiental. Seus projetos conectam inovação digital com preservação da natureza.",
      githubPortfolio: "https://github.com/diego-amazonia"
    },
    {
      id: 17,
      nome: "Beatriz Oliveira",
      curso: "Arquitetura e Urbanismo",
      semestre: 7,
      ira: 9.0,
      cidade: "Belo Horizonte",
      disponibilidade: "Emprego",
      projetos: "Projeto de habitação social sustentável premiado. Casas eco-eficientes que reduzem custos em 50% para famílias de baixa renda.",
      storyline: "Beatriz projeta espaços que transformam vidas. Sua arquitetura social combina sustentabilidade com acessibilidade.",
      githubPortfolio: "https://beatrizoliveira-arq.com"
    },
    {
      id: 18,
      nome: "Victor Ferreira",
      curso: "Engenharia Mecânica",
      semestre: 8,
      ira: 8.6,
      cidade: "São José dos Campos",
      disponibilidade: "Emprego",
      projetos: "Protótipo de drone autônomo para inspeção de turbinas eólicas. Reduz tempo de manutenção em 60% e aumenta segurança.",
      storyline: "Victor está na fronteira da engenharia 4.0. Seus projetos automatizam processos complexos com precisão e segurança.",
      githubPortfolio: "https://github.com/victor-drones"
    },
    {
      id: 19,
      nome: "Natália Silva",
      curso: "Jornalismo Digital",
      semestre: 5,
      ira: 8.4,
      cidade: "Recife",
      disponibilidade: "Ambos",
      projetos: "Podcast sobre inovação social com 50k downloads mensais. Cobriu 30+ startups de impacto social no Nordeste.",
      storyline: "Natália amplifica vozes que transformam comunidades. Seu jornalismo conecta inovação social com audiências engajadas.",
      githubPortfolio: "https://natalia-midia.com"
    },
    {
      id: 20,
      nome: "Henrique Gomes",
      curso: "Economia",
      semestre: 6,
      ira: 8.9,
      cidade: "Fortaleza",
      disponibilidade: "Estágio",
      projetos: "Análise econométrica que orientou política pública municipal. Estudo sobre microcrédito impactou 500+ microempreendedores.",
      storyline: "Henrique usa economia para justiça social. Suas análises fundamentam políticas que geram oportunidades para comunidades vulneráveis.",
      githubPortfolio: "https://linkedin.com/in/henrique-economista"
    },
    {
      id: 21,
      nome: "Carla Mendonça",
      curso: "Biotecnologia",
      semestre: 7,
      ira: 9.1,
      cidade: "Ribeirão Preto",
      disponibilidade: "Emprego",
      projetos: "Pesquisa sobre biomarcadores para diagnóstico precoce de diabetes. Publicou 3 artigos em periódicos internacionais.",
      storyline: "Carla está desenvolvendo o futuro da medicina personalizada. Sua pesquisa pode revolucionar diagnósticos médicos.",
      githubPortfolio: "https://researchgate.net/carla-mendonca"
    },
    {
      id: 22,
      nome: "Felipe Rocha",
      curso: "Educação Física",
      semestre: 5,
      ira: 8.3,
      cidade: "Salvador",
      disponibilidade: "Ambos",
      projetos: "App de treinamento personalizado para pessoas com deficiência. 200+ usuários com programas adaptativos baseados em IA.",
      storyline: "Felipe democratiza o acesso ao esporte adaptado. Seus programas promovem inclusão através da atividade física personalizada.",
      githubPortfolio: "https://felipe-esporte-inclusivo.com"
    },
    {
      id: 23,
      nome: "Patrícia Andrade",
      curso: "Direito Digital",
      semestre: 8,
      ira: 9.3,
      cidade: "São Paulo",
      disponibilidade: "Emprego",
      projetos: "Manual de compliance para startups em LGPD. Consultoria jurídica que ajudou 20+ empresas a se adequarem à lei.",
      storyline: "Patrícia navega na intersecção entre direito e tecnologia. Sua expertise protege empresas e cidadãos no mundo digital.",
      githubPortfolio: "https://patricia-direito-digital.com"
    },
    {
      id: 24,
      nome: "Leonardo Castro",
      curso: "Engenharia Ambiental",
      semestre: 6,
      ira: 8.7,
      cidade: "Curitiba",
      disponibilidade: "Estágio",
      projetos: "Sistema de tratamento de água inovador para comunidades rurais. Solução de baixo custo que atende 1k+ famílias.",
      storyline: "Leonardo engenheira soluções para acesso universal à água limpa. Seus projetos combinam tecnologia apropriada com impacto social.",
      githubPortfolio: "https://github.com/leonardo-agua"
    },
    {
      id: 25,
      nome: "Raquel Santos",
      curso: "Nutrição Esportiva",
      semestre: 7,
      ira: 8.8,
      cidade: "Rio de Janeiro",
      disponibilidade: "Ambos",
      projetos: "App de nutrição para atletas olímpicos. Planos alimentares personalizados com base em análise de bioimpedância.",
      storyline: "Raquel otimiza performance através da nutrição de precisão. Seus protocolos alimentares elevam atletas ao próximo nível.",
      githubPortfolio: "https://raquel-nutri-esporte.com"
    },
    {
      id: 26,
      nome: "Bruno Almeida",
      curso: "Música e Tecnologia",
      semestre: 4,
      ira: 8.5,
      cidade: "São Paulo",
      disponibilidade: "Estágio",
      projetos: "Plataforma de colaboração musical online. 3k+ músicos criando colaborações remotas com ferramentas de IA para composição.",
      storyline: "Bruno está redefinindo a criação musical colaborativa. Sua plataforma conecta talentos musicais ao redor do mundo.",
      githubPortfolio: "https://bruno-music-tech.com"
    },
    {
      id: 27,
      nome: "Vanessa Costa",
      curso: "Terapia Ocupacional",
      semestre: 6,
      ira: 9.0,
      cidade: "Brasília",
      disponibilidade: "Estágio",
      projetos: "Programa de reabilitação com realidade virtual para AVC. Protocolo inovador que acelera recuperação motora em 40%.",
      storyline: "Vanessa usa tecnologia imersiva para reabilitação. Seus protocolos devolvem independência e qualidade de vida aos pacientes.",
      githubPortfolio: "https://vanessa-reabilitacao-vr.com"
    },
    {
      id: 28,
      nome: "Ricardo Pinto",
      curso: "Logística e Supply Chain",
      semestre: 8,
      ira: 8.4,
      cidade: "Santos",
      disponibilidade: "Emprego",
      projetos: "Otimização de rotas portuárias com algoritmos genéticos. Reduziu tempo de carga/descarga em 25% no Porto de Santos.",
      storyline: "Ricardo revoluciona a logística brasileira com algoritmos inteligentes. Suas otimizações impactam a competitividade nacional.",
      githubPortfolio: "https://linkedin.com/in/ricardo-logistica"
    },
    {
      id: 29,
      nome: "Carolina Neves",
      curso: "Veterinária",
      semestre: 7,
      ira: 9.2,
      cidade: "Goiânia",
      disponibilidade: "Ambos",
      projetos: "Telemedicina veterinária para regiões remotas. Plataforma que conecta veterinários a produtores rurais, atendendo 500+ animais.",
      storyline: "Carolina democratiza cuidados veterinários através da tecnologia. Sua telemedicina salva vidas animais em áreas carentes.",
      githubPortfolio: "https://carolina-televet.com"
    },
    {
      id: 30,
      nome: "André Barbosa",
      curso: "Filosofia e Ética Digital",
      semestre: 5,
      ira: 8.6,
      cidade: "Rio de Janeiro",
      disponibilidade: "Estágio",
      projetos: "Pesquisa sobre ética em IA que influenciou políticas de 3 empresas de tecnologia. Framework para desenvolvimento responsável de algoritmos.",
      storyline: "André garante que a tecnologia serve à humanidade. Sua pesquisa ética orienta o desenvolvimento responsável da inteligência artificial.",
      githubPortfolio: "https://andre-etica-digital.com"
    }
  ];

  useEffect(() => {
    // Carregar candidatos do localStorage (estudantes reais) + dados fake
    const storedStudents = JSON.parse(localStorage.getItem("vitae_students") || "[]");
    const realCandidates = storedStudents.map((student: any) => ({
      id: student.id,
      nome: student.nome,
      curso: student.curso,
      semestre: student.semestre,
      ira: student.ira,
      cidade: student.cidade,
      disponibilidade: student.disponibilidade,
      projetos: student.projetos || "Projetos em desenvolvimento",
      storyline: student.cv?.storyline || `${student.nome} é um estudante dedicado de ${student.curso}.`,
      githubPortfolio: student.githubPortfolio
    }));

    const allCandidates = [...candidatosFake, ...realCandidates];
    setCandidates(allCandidates);
    setFilteredCandidates(allCandidates);
  }, []);

  useEffect(() => {
    let filtered = candidates;

    if (courseFilter !== "all") {
      filtered = filtered.filter(candidate => candidate.curso === courseFilter);
    }

    if (semesterFilter !== "all") {
      if (semesterFilter === "1-3") {
        filtered = filtered.filter(candidate => candidate.semestre >= 1 && candidate.semestre <= 3);
      } else if (semesterFilter === "4-6") {
        filtered = filtered.filter(candidate => candidate.semestre >= 4 && candidate.semestre <= 6);
      } else if (semesterFilter === "7+") {
        filtered = filtered.filter(candidate => candidate.semestre >= 7);
      }
    }

    setFilteredCandidates(filtered);
  }, [courseFilter, semesterFilter, candidates]);

  const getDisponibilidadeColor = (disponibilidade: string) => {
    switch (disponibilidade) {
      case "Estágio":
        return "bg-primary text-primary-foreground";
      case "Emprego":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-accent text-accent-foreground";
    }
  };

  const getIRAColor = (ira: number) => {
    if (ira >= 8.5) return "text-secondary";
    if (ira >= 7.5) return "text-primary";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" asChild className="mr-4">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded"></div>
              <span className="font-semibold">Vitae Talent</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contrate baseado no que eles{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              REALMENTE fizeram
            </span>
          </h1>
          <p className="text-muted-foreground">
            Descubra talentos através de projetos reais, não apenas diplomas
          </p>
        </div>

        {/* Filtros */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Filtrar Candidatos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Curso</label>
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os cursos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os cursos</SelectItem>
                    <SelectItem value="Engenharia de Software">Engenharia de Software</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Administração">Administração</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Semestre</label>
                <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Qualquer semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Qualquer semestre</SelectItem>
                    <SelectItem value="1-3">1º-3º semestre</SelectItem>
                    <SelectItem value="4-6">4º-6º semestre</SelectItem>
                    <SelectItem value="7+">7º+ semestre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            {filteredCandidates.length} candidato{filteredCandidates.length !== 1 ? 's' : ''} encontrado{filteredCandidates.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Lista de Candidatos */}
        <div className="grid gap-6">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{candidate.nome}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline">{candidate.curso}</Badge>
                      <Badge variant="outline">{candidate.semestre}º Semestre</Badge>
                      <Badge className={getDisponibilidadeColor(candidate.disponibilidade)}>
                        {candidate.disponibilidade}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {candidate.cidade}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className={getIRAColor(candidate.ira)}>IRA: {candidate.ira}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Storyline</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {candidate.storyline}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Projetos Destacados</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {candidate.projetos}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
                  <div className="flex gap-2">
                    {candidate.githubPortfolio && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={candidate.githubPortfolio} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Portfólio
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button size="sm" className="transform hover:scale-105 transition-transform">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Ver Perfil Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Nenhum candidato encontrado</h3>
              <p className="text-muted-foreground">
                Tente ajustar os filtros para encontrar mais candidatos
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CompanySearch;