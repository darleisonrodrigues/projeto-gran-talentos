import React, { useState } from 'react';
import { Users, Briefcase, Plus, Search, Filter, Eye, Edit, Trash2, MapPin, Clock, DollarSign, Building, MessageCircle, Sparkles, Wand2 } from 'lucide-react';

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState('vagas');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showCandidatesModal, setShowCandidatesModal] = useState(false);
  const [selectedVaga, setSelectedVaga] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAIPrompt, setShowAIPrompt] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock data para vagas
  const [vagas, setVagas] = useState([
    {
      id: 1,
      titulo: "Desenvolvedor Frontend React",
      nivel: "Júnior",
      salario: "R$ 4.000 - R$ 6.000",
      local: "São Paulo, SP",
      tipo: "CLT",
      status: "Ativa",
      candidatos: 15,
      dataPublicacao: "2024-09-25",
      skillsRequeridas: ["React", "JavaScript", "HTML", "CSS"],
      descricao: "Desenvolvedor frontend para criar interfaces modernas e responsivas"
    },
    {
      id: 2,
      titulo: "Designer UX/UI",
      nivel: "Pleno",
      salario: "R$ 6.000 - R$ 8.000",
      local: "Remoto",
      tipo: "PJ",
      status: "Ativa",
      candidatos: 8,
      dataPublicacao: "2024-09-20",
      skillsRequeridas: ["Figma", "Adobe XD", "Photoshop", "UX Design"],
      descricao: "Designer para criar experiências de usuário incríveis"
    }
  ]);

  // Mock data para candidatos/alunos da GRAN
  const candidatos = [
    {
      id: 1,
      nome: "Ana Silva",
      curso: "Sistemas de Informação",
      semestre: "7º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      nivel: "Júnior",
      localizacao: "São Paulo, SP",
      disponibilidade: "Estágio/CLT",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      matchPercentage: 95,
      experiencia: "2 anos de projetos acadêmicos",
      portfolio: "https://anasilva.dev",
      email: "ana.silva@gran.edu.br",
      telefone: "(11) 98765-4321"
    },
    {
      id: 2,
      nome: "Carlos Oliveira",
      curso: "Ciência da Computação",
      semestre: "6º semestre", 
      instituicao: "GRAN Faculdade",
      skills: ["React", "JavaScript", "TypeScript", "Next.js"],
      nivel: "Júnior",
      localizacao: "São Paulo, SP",
      disponibilidade: "CLT",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      matchPercentage: 90,
      experiencia: "1.5 anos em projetos pessoais",
      portfolio: "https://carlosoliveira.com",
      email: "carlos.oliveira@gran.edu.br",
      telefone: "(11) 94567-8901"
    },
    {
      id: 3,
      nome: "Mariana Costa",
      curso: "Design Gráfico",
      semestre: "8º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["Figma", "Adobe XD", "Photoshop", "UX Design", "UI Design"],
      nivel: "Pleno",
      localizacao: "Remoto",
      disponibilidade: "PJ/Freelancer",
      foto: "https://randomuser.me/api/portraits/women/68.jpg",
      matchPercentage: 98,
      experiencia: "3 anos como freelancer",
      portfolio: "https://marianacosta.design",
      email: "mariana.costa@gran.edu.br",
      telefone: "(11) 91234-5678"
    },
    {
      id: 4,
      nome: "Pedro Santos",
      curso: "Design Digital",
      semestre: "5º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["Figma", "Adobe Creative Suite", "Sketch"],
      nivel: "Júnior",
      localizacao: "São Paulo, SP",
      disponibilidade: "Estágio",
      foto: "https://randomuser.me/api/portraits/men/17.jpg",
      matchPercentage: 75,
      experiencia: "1 ano em projetos universitários",
      portfolio: "https://pedrosantos.art",
      email: "pedro.santos@gran.edu.br",
      telefone: "(11) 97890-1234"
    },
    {
      id: 5,
      nome: "Julia Rodrigues",
      curso: "Engenharia de Software",
      semestre: "4º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["JavaScript", "React", "Python", "Git"],
      nivel: "Júnior",
      localizacao: "São Paulo, SP",
      disponibilidade: "Estágio/Trainee",
      foto: "https://randomuser.me/api/portraits/women/25.jpg",
      matchPercentage: 85,
      experiencia: "6 meses em projetos acadêmicos",
      portfolio: "https://juliarodrigues.dev",
      email: "julia.rodrigues@gran.edu.br",
      telefone: "(11) 96543-2109"
    },
    {
      id: 6,
      nome: "Lucas Ferreira",
      curso: "Análise e Desenvolvimento de Sistemas",
      semestre: "6º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["Java", "Spring Boot", "MySQL", "Docker"],
      nivel: "Júnior",
      localizacao: "Remoto",
      disponibilidade: "CLT/PJ",
      foto: "https://randomuser.me/api/portraits/men/41.jpg",
      matchPercentage: 70,
      experiencia: "1.5 anos em desenvolvimento backend",
      portfolio: "https://lucasferreira.tech",
      email: "lucas.ferreira@gran.edu.br",
      telefone: "(11) 95432-1098"
    },
    {
      id: 7,
      nome: "Beatriz Almeida",
      curso: "Design Digital",
      semestre: "7º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["Figma", "Adobe Illustrator", "Branding", "Motion Design"],
      nivel: "Pleno",
      localizacao: "São Paulo, SP",
      disponibilidade: "Freelancer",
      foto: "https://randomuser.me/api/portraits/women/52.jpg",
      matchPercentage: 92,
      experiencia: "2.5 anos como designer freelancer",
      portfolio: "https://beatrizalmeida.design",
      email: "beatriz.almeida@gran.edu.br",
      telefone: "(11) 94321-5678"
    },
    {
      id: 8,
      nome: "Rafael Nascimento",
      curso: "Ciência da Computação",
      semestre: "8º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      nivel: "Pleno",
      localizacao: "Campinas, SP",
      disponibilidade: "CLT",
      foto: "https://randomuser.me/api/portraits/men/73.jpg",
      matchPercentage: 88,
      experiencia: "3 anos em desenvolvimento full-stack",
      portfolio: "https://rafaelnascimento.dev",
      email: "rafael.nascimento@gran.edu.br",
      telefone: "(19) 98765-4321"
    },
    {
      id: 9,
      nome: "Isabella Santos",
      curso: "Sistemas de Informação",
      semestre: "5º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["Python", "Data Science", "Machine Learning", "SQL"],
      nivel: "Júnior",
      localizacao: "Remoto",
      disponibilidade: "Estágio/CLT",
      foto: "https://randomuser.me/api/portraits/women/36.jpg",
      matchPercentage: 65,
      experiencia: "1 ano em análise de dados",
      portfolio: "https://isabellasantos.data",
      email: "isabella.santos@gran.edu.br",
      telefone: "(11) 97654-3210"
    },
    {
      id: 10,
      nome: "Gabriel Costa",
      curso: "Engenharia de Software",
      semestre: "6º semestre",
      instituicao: "GRAN Faculdade",
      skills: ["Vue.js", "JavaScript", "CSS", "Firebase"],
      nivel: "Júnior",
      localizacao: "Santos, SP",
      disponibilidade: "CLT/Remoto",
      foto: "https://randomuser.me/api/portraits/men/58.jpg",
      matchPercentage: 82,
      experiencia: "1.5 anos em desenvolvimento frontend",
      portfolio: "https://gabrielcosta.web",
      email: "gabriel.costa@gran.edu.br",
      telefone: "(13) 99876-5432"
    }
  ];

  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    nivel: '',
    salarioMin: '',
    salarioMax: '',
    local: '',
    tipo: '',
    requisitos: '',
    beneficios: ''
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Função para gerar vaga com IA
  const generateJobWithAI = async () => {
    if (!aiPrompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulação de IA - você pode integrar com OpenAI API futuramente
    try {
      // Aguardar simulação de processamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Lógica simples de parsing baseado no prompt
      const promptLower = aiPrompt.toLowerCase();
      
      let generatedData = {
        titulo: '',
        descricao: '',
        nivel: 'Júnior',
        salarioMin: '3000',
        salarioMax: '5000',
        local: 'São Paulo, SP',
        tipo: 'CLT',
        requisitos: '',
        beneficios: 'Vale alimentação, Vale transporte, Plano de saúde'
      };

      // Análise inteligente do prompt para preencher campos
      if (promptLower.includes('frontend') || promptLower.includes('react')) {
        generatedData = {
          titulo: 'Desenvolvedor Frontend React',
          descricao: 'Desenvolvimento de interfaces modernas e responsivas usando React, HTML5, CSS3 e JavaScript. Trabalho em equipe ágil com foco em experiência do usuário.',
          nivel: promptLower.includes('senior') || promptLower.includes('pleno') ? 'Pleno' : 'Júnior',
          salarioMin: promptLower.includes('senior') ? '6000' : promptLower.includes('pleno') ? '4500' : '3500',
          salarioMax: promptLower.includes('senior') ? '9000' : promptLower.includes('pleno') ? '7000' : '5500',
          local: promptLower.includes('remoto') ? 'Remoto' : 'São Paulo, SP',
          tipo: promptLower.includes('pj') || promptLower.includes('freelance') ? 'PJ' : 'CLT',
          requisitos: 'React, JavaScript ES6+, HTML5, CSS3, Git, Conhecimento em TypeScript será um diferencial',
          beneficios: 'Vale alimentação, Vale transporte, Plano de saúde, Flexibilidade de horário'
        };
      } else if (promptLower.includes('backend') || promptLower.includes('java') || promptLower.includes('node')) {
        generatedData = {
          titulo: 'Desenvolvedor Backend',
          descricao: 'Desenvolvimento e manutenção de APIs REST, integração com bancos de dados e serviços externos. Trabalho com arquitetura de microsserviços.',
          nivel: promptLower.includes('senior') || promptLower.includes('pleno') ? 'Pleno' : 'Júnior',
          salarioMin: promptLower.includes('senior') ? '7000' : promptLower.includes('pleno') ? '5000' : '4000',
          salarioMax: promptLower.includes('senior') ? '10000' : promptLower.includes('pleno') ? '8000' : '6000',
          local: promptLower.includes('remoto') ? 'Remoto' : 'São Paulo, SP',
          tipo: promptLower.includes('pj') || promptLower.includes('freelance') ? 'PJ' : 'CLT',
          requisitos: 'Java/Node.js, APIs REST, SQL, Git, Docker será um diferencial',
          beneficios: 'Vale alimentação, Vale transporte, Plano de saúde, Programa de capacitação'
        };
      } else if (promptLower.includes('design') || promptLower.includes('ux') || promptLower.includes('ui')) {
        generatedData = {
          titulo: 'Designer UX/UI',
          descricao: 'Criação de experiências digitais intuitivas e acessíveis. Desenvolvimento de protótipos, wireframes e interfaces centradas no usuário.',
          nivel: promptLower.includes('senior') || promptLower.includes('pleno') ? 'Pleno' : 'Júnior',
          salarioMin: promptLower.includes('senior') ? '6000' : promptLower.includes('pleno') ? '4000' : '3000',
          salarioMax: promptLower.includes('senior') ? '9000' : promptLower.includes('pleno') ? '6500' : '5000',
          local: promptLower.includes('remoto') ? 'Remoto' : 'São Paulo, SP',
          tipo: promptLower.includes('pj') || promptLower.includes('freelance') ? 'PJ' : 'CLT',
          requisitos: 'Figma, Adobe Creative Suite, Prototipagem, Design System, UX Research',
          beneficios: 'Vale alimentação, Vale transporte, Plano de saúde, Ambiente criativo'
        };
      } else {
        // Vaga genérica baseada no prompt
        generatedData.titulo = promptLower.includes('estágio') ? 'Estagiário em TI' : 'Analista de Sistemas';
        generatedData.descricao = `Oportunidade para trabalhar em ${aiPrompt}. Desenvolvimento profissional em ambiente colaborativo.`;
        generatedData.requisitos = 'Formação em área relacionada, Proatividade, Trabalho em equipe';
      }

      // Preencher o formulário
      setFormData(generatedData);
      setShowAIPrompt(false);
      setAiPrompt('');
      
    } catch (error) {
      console.error('Erro ao gerar vaga:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Função para calcular match entre vaga e candidato
  const calculateMatch = (vaga, candidato) => {
    let matchScore = 0;
    const totalFactors = 4;

    // Match de skills (40% do peso)
    const skillsMatch = vaga.skillsRequeridas.filter(skill => 
      candidato.skills.some(candidatoSkill => 
        candidatoSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(candidatoSkill.toLowerCase())
      )
    ).length;
    const skillsPercentage = (skillsMatch / vaga.skillsRequeridas.length) * 40;
    matchScore += skillsPercentage;

    // Match de nível (25% do peso)
    const nivelMatch = vaga.nivel === candidato.nivel ? 25 : 
                      (vaga.nivel === 'Júnior' && candidato.nivel === 'Júnior') ? 25 : 15;
    matchScore += nivelMatch;

    // Match de localização (20% do peso)
    const localMatch = vaga.local.toLowerCase().includes('remoto') || 
                      candidato.localizacao.toLowerCase().includes('remoto') ||
                      vaga.local.toLowerCase().includes(candidato.localizacao.toLowerCase()) ? 20 : 10;
    matchScore += localMatch;

    // Match de disponibilidade (15% do peso)
    const dispMatch = candidato.disponibilidade.toLowerCase().includes(vaga.tipo.toLowerCase()) ||
                     vaga.tipo.toLowerCase().includes(candidato.disponibilidade.toLowerCase()) ? 15 : 5;
    matchScore += dispMatch;

    return Math.min(100, Math.round(matchScore));
  };

  // Função para obter candidatos com match para uma vaga
  const getCandidatesForJob = (vaga) => {
    return candidatos
      .map(candidato => ({
        ...candidato,
        matchPercentage: calculateMatch(vaga, candidato)
      }))
      .sort((a, b) => b.matchPercentage - a.matchPercentage)
      .slice(0, 10); // Top 10 matches
  };

  // Função para visualizar candidatos de uma vaga
  const viewJobCandidates = (vaga) => {
    setSelectedVaga(vaga);
    setShowCandidatesModal(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    const novaVaga = {
      id: vagas.length + 1,
      titulo: formData.titulo,
      nivel: formData.nivel,
      salario: `R$ ${formData.salarioMin} - R$ ${formData.salarioMax}`,
      local: formData.local,
      tipo: formData.tipo,
      status: "Ativa",
      candidatos: 0,
      dataPublicacao: new Date().toISOString().split('T')[0],
      skillsRequeridas: formData.requisitos.split(',').map(skill => skill.trim()).filter(skill => skill),
      descricao: formData.descricao
    };
    
    setVagas([...vagas, novaVaga]);
    setFormData({
      titulo: '',
      descricao: '',
      nivel: '',
      salarioMin: '',
      salarioMax: '',
      local: '',
      tipo: '',
      requisitos: '',
      beneficios: ''
    });
    setShowJobModal(false);
  };

  // Header Component
  const Header = () => (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-[#0D134C]">
            <span className="text-[#DD303E]">GRAN</span> Talentos
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => setActiveTab('vagas')} 
            className={`text-lg font-medium ${activeTab === 'vagas' ? 'text-[#DD303E]' : 'text-[#0D134C] hover:text-[#DD303E]'}`}
          >
            Minhas Vagas
          </button>
          <button 
            onClick={() => setActiveTab('candidatos')} 
            className={`text-lg font-medium ${activeTab === 'candidatos' ? 'text-[#DD303E]' : 'text-[#0D134C] hover:text-[#DD303E]'}`}
          >
            Candidatos
          </button>
          <button 
            onClick={() => setActiveTab('mensagens')} 
            className={`text-lg font-medium relative ${activeTab === 'mensagens' ? 'text-[#DD303E]' : 'text-[#0D134C] hover:text-[#DD303E]'}`}
          >
            Mensagens
            <span className="absolute -top-2 -right-2 bg-[#DD303E] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="relative group">
            <button className="text-[#0D134C] hover:text-[#DD303E] text-lg font-medium">Minha Conta</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 min-w-[180px]">
              <a href="#" className="block px-4 py-2 text-[#0D134C] hover:text-[#DD303E] hover:bg-gray-50">Perfil da Empresa</a>
              <a href="#" className="block px-4 py-2 text-[#0D134C] hover:text-[#DD303E] hover:bg-gray-50">Configurações</a>
              <hr className="my-1" />
              <a href="#" className="block px-4 py-2 text-[#DD303E] hover:bg-gray-50">Sair</a>
            </div>
          </div>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-[#0D134C]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-md border-t`}>
        <button onClick={() => { setActiveTab('vagas'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-[#0D134C] hover:text-[#DD303E] hover:bg-gray-50">Minhas Vagas</button>
        <button onClick={() => { setActiveTab('candidatos'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-[#0D134C] hover:text-[#DD303E] hover:bg-gray-50">Candidatos</button>
        <button onClick={() => { setActiveTab('mensagens'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-[#0D134C] hover:text-[#DD303E] hover:bg-gray-50 flex justify-between items-center">
          Mensagens 
          <span className="bg-[#DD303E] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
        </button>
        <hr />
        <a href="#" className="block px-4 py-3 text-[#0D134C] hover:text-[#DD303E] hover:bg-gray-50">Minha Conta</a>
        <a href="#" className="block px-4 py-3 text-[#DD303E] hover:bg-gray-50">Sair</a>
      </nav>
    </header>
  );

  // Dashboard Stats
  const DashboardStats = () => (
    <section className="bg-gradient-to-r from-[#0D134C] to-[#071731] text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard da Empresa</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Briefcase className="w-8 h-8 mx-auto mb-3 text-[#DD303E]" />
            <h3 className="text-2xl font-bold">{vagas.length}</h3>
            <p className="text-gray-300">Vagas Ativas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <Users className="w-8 h-8 mx-auto mb-3 text-[#DD303E]" />
            <h3 className="text-2xl font-bold">{vagas.reduce((acc, vaga) => acc + vaga.candidatos, 0)}</h3>
            <p className="text-gray-300">Candidatos</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Vagas Tab
  const VagasTab = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#0D134C]">Gerenciar Vagas</h2>
        <button 
          onClick={() => setShowJobModal(true)}
          className="bg-[#DD303E] text-white px-6 py-3 rounded-lg hover:bg-[#C02A37] flex items-center space-x-2 font-medium"
        >
          <Plus className="w-5 h-5" />
          <span>Nova Vaga</span>
        </button>
      </div>

      <div className="grid gap-6">
        {vagas.map((vaga) => (
          <div key={vaga.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0D134C] mb-2">{vaga.titulo}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{vaga.nivel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{vaga.salario}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{vaga.local}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{vaga.tipo}</span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                vaga.status === 'Ativa' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {vaga.status}
              </span>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{vaga.candidatos} candidatos</span>
                </span>
                <span>Publicada em {new Date(vaga.dataPublicacao).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => viewJobCandidates(vaga)}
                  className="p-2 text-gray-600 hover:text-[#DD303E] hover:bg-gray-100 rounded"
                  title="Ver candidatos com match"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-[#DD303E] hover:bg-gray-100 rounded">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Candidates Modal
  const CandidatesModal = () => {
    if (!showCandidatesModal || !selectedVaga) return null;
    
    const matchedCandidates = getCandidatesForJob(selectedVaga);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#0D134C]">Candidatos para: {selectedVaga.titulo}</h2>
                <p className="text-gray-600 mt-1">{matchedCandidates.length} candidatos encontrados</p>
              </div>
              <button 
                onClick={() => setShowCandidatesModal(false)}
                className="text-gray-600 hover:text-gray-800 text-2xl"
              >
                ✖
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid gap-6">
              {matchedCandidates.map((candidato) => (
                <div key={candidato.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={candidato.foto} 
                      alt={candidato.nome}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0D134C]">{candidato.nome}</h3>
                          <p className="text-gray-600">{candidato.curso} - {candidato.semestre}</p>
                          <p className="text-sm text-gray-500">{candidato.instituicao}</p>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            candidato.matchPercentage >= 90 ? 'bg-green-100 text-green-800' :
                            candidato.matchPercentage >= 70 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {candidato.matchPercentage}% Match
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {candidato.skills.slice(0, 5).map((skill, index) => (
                            <span 
                              key={index}
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                selectedVaga.skillsRequeridas.some(reqSkill => 
                                  skill.toLowerCase().includes(reqSkill.toLowerCase()) ||
                                  reqSkill.toLowerCase().includes(skill.toLowerCase())
                                ) ? 'bg-[#DD303E] text-white' : 'bg-gray-200 text-gray-700'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                          {candidato.skills.length > 5 && (
                            <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                              +{candidato.skills.length - 5} mais
                            </span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <strong>Nível:</strong> {candidato.nivel}
                          </div>
                          <div>
                            <strong>Localização:</strong> {candidato.localizacao}
                          </div>
                          <div>
                            <strong>Disponibilidade:</strong> {candidato.disponibilidade}
                          </div>
                        </div>
                        
                        <div className="mt-3 text-sm text-gray-600">
                          <strong>Experiência:</strong> {candidato.experiencia}
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          <button className="bg-[#DD303E] text-white px-4 py-2 rounded-lg hover:bg-[#C02A37] text-sm font-medium">
                            Entrar em Contato
                          </button>
                          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-sm font-medium">
                            Ver Portfólio
                          </button>
                          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 text-sm font-medium">
                            Salvar Candidato
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {matchedCandidates.length === 0 && (
              <div className="text-center py-8">
                <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Nenhum candidato encontrado para esta vaga.</p>
                <p className="text-sm text-gray-500 mt-2">Tente ajustar os requisitos da vaga.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Job Modal
  const JobModal = () => (
    showJobModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#0D134C]">Criar Nova Vaga</h2>
              <div className="flex items-center space-x-3">
                <button 
                  type="button"
                  onClick={() => setShowAIPrompt(!showAIPrompt)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">IA Assistente</span>
                </button>
                <button 
                  onClick={() => setShowJobModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  ✖
                </button>
              </div>
            </div>
            
            {/* Interface AI */}
            {showAIPrompt && (
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-2 mb-3">
                  <Wand2 className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-purple-800">Assistente de IA para Criação de Vagas</h3>
                </div>
                <p className="text-sm text-purple-700 mb-4">
                  Descreva a vaga que você deseja criar e nossa IA preencherá automaticamente os campos para você.
                </p>
                
                <div className="space-y-3">
                  <textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Ex: 'Preciso de um desenvolvedor frontend sênior para trabalhar com React, salário entre 8k e 12k, remoto, experiência com TypeScript...'"
                    className="w-full p-3 border border-purple-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-none"
                    rows={4}
                  />
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-purple-600">
                      <p className="font-medium">💡 Dicas para melhores resultados:</p>
                      <p>• Mencione o nível (júnior, pleno, sênior)</p>
                      <p>• Inclua tecnologias específicas</p>
                      <p>• Especifique se é remoto, híbrido ou presencial</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => {
                          setShowAIPrompt(false);
                          setAiPrompt('');
                        }}
                        className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={generateJobWithAI}
                        disabled={!aiPrompt.trim() || isGenerating}
                        className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {isGenerating ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            <span>Gerando...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            <span>Gerar com IA</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmitJob} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Título da Vaga *</label>
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                placeholder="Ex: Desenvolvedor Frontend React"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Vaga *</label>
              <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                placeholder="Descreva as principais responsabilidades e atividades..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nível *</label>
                <select
                  name="nivel"
                  value={formData.nivel}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Estágio">Estágio</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Júnior">Júnior</option>
                  <option value="Pleno">Pleno</option>
                  <option value="Sênior">Sênior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Contrato *</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                  required
                >
                  <option value="">Selecione</option>
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Temporário">Temporário</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salário Mínimo</label>
                <input
                  type="number"
                  name="salarioMin"
                  value={formData.salarioMin}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                  placeholder="3000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salário Máximo</label>
                <input
                  type="number"
                  name="salarioMax"
                  value={formData.salarioMax}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                  placeholder="5000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Localização *</label>
              <input
                type="text"
                name="local"
                value={formData.local}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                placeholder="Ex: São Paulo, SP ou Remoto"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requisitos</label>
              <textarea
                name="requisitos"
                value={formData.requisitos}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                placeholder="Liste os requisitos obrigatórios e desejáveis..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Benefícios</label>
              <textarea
                name="beneficios"
                value={formData.beneficios}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#DD303E] focus:border-[#DD303E]"
                placeholder="Descreva os benefícios oferecidos..."
              />
            </div>

            <div className="flex space-x-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="flex-1 bg-[#DD303E] text-white py-3 rounded-lg hover:bg-[#C02A37] font-medium"
              >
                Publicar Vaga
              </button>
              <button
                type="button"
                onClick={() => setShowJobModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 font-medium"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DashboardStats />
      
      {activeTab === 'vagas' && <VagasTab />}
      {activeTab === 'candidatos' && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[#0D134C] mb-6">Candidatos Interessados</h2>
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">Esta funcionalidade estará disponível em breve.</p>
            <p className="text-sm text-gray-500 mt-2">Aqui você poderá visualizar todos os candidatos que se inscreveram nas suas vagas.</p>
          </div>
        </div>
      )}

      {activeTab === 'mensagens' && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#0D134C]">Mensagens</h2>
            <div className="flex items-center space-x-2">
              <span className="bg-[#DD303E] text-white text-sm px-3 py-1 rounded-full">3 não lidas</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Mensagem 1 - Não lida */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-[#DD303E] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Ana Silva"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#0D134C] flex items-center">
                        Ana Silva 
                        <span className="ml-2 bg-[#DD303E] text-white text-xs px-2 py-1 rounded">Novo</span>
                      </h3>
                      <p className="text-sm text-gray-600">Interesse na vaga: Desenvolvedor Frontend React</p>
                    </div>
                    <span className="text-xs text-gray-500">há 2 horas</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Olá! Tenho muito interesse na vaga de Desenvolvedor Frontend. Tenho experiência com React e projetos acadêmicos. Gostaria de saber mais sobre a oportunidade.
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <button className="bg-[#DD303E] text-white px-4 py-2 text-sm rounded hover:bg-[#C02A37]">
                      Responder
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-300">
                      Ver Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensagem 2 - Não lida */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-[#DD303E] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Mariana Costa"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#0D134C] flex items-center">
                        Mariana Costa 
                        <span className="ml-2 bg-[#DD303E] text-white text-xs px-2 py-1 rounded">Novo</span>
                      </h3>
                      <p className="text-sm text-gray-600">Interesse na vaga: Designer UX/UI</p>
                    </div>
                    <span className="text-xs text-gray-500">há 4 horas</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Boa tarde! Sou designer com 3 anos de experiência e tenho grande interesse na posição de UX/UI. Meu portfólio está disponível e inclui projetos de redesign completo.
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <button className="bg-[#DD303E] text-white px-4 py-2 text-sm rounded hover:bg-[#C02A37]">
                      Responder
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-300">
                      Ver Portfólio
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensagem 3 - Não lida */}
            <div className="bg-white rounded-lg shadow-md border-l-4 border-[#DD303E] p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Carlos Oliveira"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#0D134C] flex items-center">
                        Carlos Oliveira 
                        <span className="ml-2 bg-[#DD303E] text-white text-xs px-2 py-1 rounded">Novo</span>
                      </h3>
                      <p className="text-sm text-gray-600">Dúvida sobre processo seletivo</p>
                    </div>
                    <span className="text-xs text-gray-500">há 1 dia</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Olá! Gostaria de saber quais são as próximas etapas do processo seletivo para a vaga de Frontend. Já enviei meu currículo e portfolio.
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <button className="bg-[#DD303E] text-white px-4 py-2 text-sm rounded hover:bg-[#C02A37]">
                      Responder
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-300">
                      Agendar Entrevista
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mensagem 4 - Lida */}
            <div className="bg-gray-50 rounded-lg shadow-sm border-l-4 border-gray-300 p-6 opacity-75">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/25.jpg" 
                  alt="Julia Rodrigues"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-700">Julia Rodrigues</h3>
                      <p className="text-sm text-gray-500">Agradecimento - Processo finalizado</p>
                    </div>
                    <span className="text-xs text-gray-400">há 2 dias</span>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Muito obrigada pela oportunidade de participar do processo seletivo. Foi uma experiência muito enriquecedora!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
      <CandidatesModal />
      <JobModal />
    </div>
  );
};

export default CompanyDashboard;