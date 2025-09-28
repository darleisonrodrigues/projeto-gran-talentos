import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Video, ArrowLeft, Sparkles, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface StudentData {
  nome: string;
  cidade: string;
  faculdade: string;
  disponibilidade: string;
  modalidadeTrabalho: string;
  curso: string;
  semestre: number;
  previsaoFormatura: string;
  ira: number;
  projetos: string;
  githubPortfolio: string;
  linkHistorico: string;
  linkVideo: string;
  compartilharHistorico: boolean;
  compartilharGraduacao: boolean;
  compartilharSoftSkills: boolean;
  compartilharVideo: boolean;
}

const StudentRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<StudentData>({
    nome: "",
    cidade: "",
    faculdade: "",
    disponibilidade: "",
    modalidadeTrabalho: "",
    curso: "",
    semestre: 1,
    previsaoFormatura: "",
    ira: 0,
    projetos: "",
    githubPortfolio: "",
    linkHistorico: "",
    linkVideo: "",
    compartilharHistorico: true,
    compartilharGraduacao: true,
    compartilharSoftSkills: true,
    compartilharVideo: true,
  });

  const gerarCV = (dados: StudentData) => {
    const storyline = `${dados.nome} é ${dados.disponibilidade === "Ambos" ? "um talento versátil" : `candidato para ${dados.disponibilidade.toLowerCase()}`} cursando ${dados.curso} na ${dados.faculdade} no ${dados.semestre}º semestre com IRA de ${dados.ira}. ${dados.projetos ? `Destaca-se por projetos práticos como: ${dados.projetos.substring(0, 100)}...` : 'Demonstra proatividade e vontade de aprender.'} Disponível para trabalho ${dados.modalidadeTrabalho.toLowerCase()} em ${dados.cidade}.`;
    
    const pontosFortes = extrairPontosFortes(dados.projetos);
    const recomendacoesEntrevista = gerarRecomendacoesEntrevista(dados);
    
    return {
      resumo: `${dados.curso} | ${dados.semestre}º Semestre | IRA: ${dados.ira}`,
      storyline: storyline,
      pontosFortes: pontosFortes,
      recomendacoesEntrevista: recomendacoesEntrevista,
      dados: dados
    };
  };

  const extrairPontosFortes = (projetos: string) => {
    const keywords = ["app", "sistema", "website", "api", "mobile", "web", "startup", "usuários", "gestão", "design"];
    const encontrados = keywords.filter(keyword => 
      projetos.toLowerCase().includes(keyword)
    );
    return encontrados.slice(0, 3);
  };

  const gerarRecomendacoesEntrevista = (dados: StudentData) => {
    const recomendacoes = [];
    
    if (dados.ira >= 8.5) {
      recomendacoes.push("Destaque seu excelente desempenho acadêmico como prova de dedicação e capacidade de aprendizado.");
    }
    
    if (dados.projetos && dados.projetos.length > 50) {
      recomendacoes.push("Prepare exemplos específicos dos seus projetos com métricas e resultados concretos.");
    }
    
    if (dados.semestre >= 6) {
      recomendacoes.push("Enfatize sua experiência e maturidade acadêmica, mostrando evolução ao longo do curso.");
    }
    
    recomendacoes.push("Demonstre paixão pelo que faz e curiosidade para aprender novas tecnologias.");
    recomendacoes.push("Prepare perguntas inteligentes sobre a empresa e o papel para mostrar seu interesse genuíno.");
    
    return recomendacoes.slice(0, 3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.curso || !formData.cidade || !formData.faculdade) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, curso, cidade e faculdade.",
        variant: "destructive",
      });
      return;
    }

    const cv = gerarCV(formData);
    
    // Salvar no localStorage
    const students = JSON.parse(localStorage.getItem("vitae_students") || "[]");
    const newStudent = {
      id: Date.now(),
      ...formData,
      cv: cv,
      createdAt: new Date().toISOString(),
    };
    
    students.push(newStudent);
    localStorage.setItem("vitae_students", JSON.stringify(students));
    localStorage.setItem("vitae_current_cv", JSON.stringify(cv));

    toast({
      title: "Perfil criado com sucesso!",
      description: "Seu CV foi gerado automaticamente.",
    });

    navigate("/perfil-criado");
  };

  const handleInputChange = (field: keyof StudentData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" asChild className="mr-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-primary rounded"></div>
            <span className="font-semibold">Portfolio IA</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seja encontrado pelo que você{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              REALMENTE fez
            </span>
          </h1>
          <p className="text-muted-foreground">
            Conte sua história através dos seus projetos e conquistas reais
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Dados Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo*</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cidade">Cidade*</Label>
                <Input
                  id="cidade"
                  placeholder="Cidade onde está localizado"
                  value={formData.cidade}
                  onChange={(e) => handleInputChange("cidade", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="faculdade">Faculdade/Universidade*</Label>
                <Input
                  id="faculdade"
                  placeholder="Nome da sua instituição de ensino"
                  value={formData.faculdade}
                  onChange={(e) => handleInputChange("faculdade", e.target.value)}
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="disponibilidade">Disponibilidade</Label>
                  <Select onValueChange={(value) => handleInputChange("disponibilidade", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua disponibilidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Estágio">Estágio</SelectItem>
                      <SelectItem value="Emprego">Emprego</SelectItem>
                      <SelectItem value="Ambos">Ambos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="modalidadeTrabalho">Modalidade de Trabalho</Label>
                  <Select onValueChange={(value) => handleInputChange("modalidadeTrabalho", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a modalidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Presencial">Presencial</SelectItem>
                      <SelectItem value="Remoto">Remoto</SelectItem>
                      <SelectItem value="Híbrido">Híbrido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Histórico Acadêmico */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico Acadêmico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="linkHistorico">Link do Histórico Escolar</Label>
                <Input
                  id="linkHistorico"
                  type="url"
                  placeholder="https://drive.google.com/... ou outro link de acesso"
                  value={formData.linkHistorico}
                  onChange={(e) => handleInputChange("linkHistorico", e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">Compartilhe um link de acesso ao seu histórico acadêmico</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="curso">Curso*</Label>
                  <Input
                    id="curso"
                    placeholder="Ex: Engenharia de Software"
                    value={formData.curso}
                    onChange={(e) => handleInputChange("curso", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="semestre">Semestre Atual</Label>
                  <Input
                    id="semestre"
                    type="number"
                    min="1"
                    max="12"
                    placeholder="1-12"
                    value={formData.semestre}
                    onChange={(e) => handleInputChange("semestre", parseInt(e.target.value) || 1)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="formatura">Previsão de Formatura</Label>
                  <Input
                    id="formatura"
                    type="date"
                    value={formData.previsaoFormatura}
                    onChange={(e) => handleInputChange("previsaoFormatura", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="ira">IRA (0-10)</Label>
                  <Input
                    id="ira"
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    placeholder="8.5"
                    value={formData.ira}
                    onChange={(e) => handleInputChange("ira", parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projetos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5" />
                Projetos Universitários
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="projetos">Descreva 1-2 projetos mais relevantes</Label>
                <Textarea
                  id="projetos"
                  placeholder="Ex: Desenvolvi um app de gestão estudantil que hoje tem mais de 1.000 usuários ativos na minha universidade. O projeto começou como TCC e se tornou uma startup real..."
                  rows={4}
                  value={formData.projetos}
                  onChange={(e) => handleInputChange("projetos", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="github">Link GitHub/Portfólio</Label>
                <Input
                  id="github"
                  type="url"
                  placeholder="https://github.com/seuusuario ou seu-portfolio.com"
                  value={formData.githubPortfolio}
                  onChange={(e) => handleInputChange("githubPortfolio", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  "Pensamento Estratégico",
                  "Persuasão", 
                  "Habilidade de Apresentação",
                  "Pensamento Crítico",
                  "Mentoria",
                  "Inteligência Emocional",
                  "Inovação",
                  "Gestão Financeira", 
                  "Resiliência",
                  "Gestão de Tempo"
                ].map((skill) => (
                  <Badge key={skill} variant="outline" className="text-center justify-center py-2 cursor-pointer hover:bg-accent transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Essas habilidades são extraídas automaticamente dos seus projetos e experiências
              </p>
            </CardContent>
          </Card>

          {/* Link Vídeo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2 h-5 w-5" />
                Vídeo de Apresentação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="linkVideo">Link do Vídeo de Apresentação</Label>
                <Input
                  id="linkVideo"
                  type="url"
                  placeholder="https://youtube.com/... ou outro link do seu vídeo"
                  value={formData.linkVideo}
                  onChange={(e) => handleInputChange("linkVideo", e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Compartilhe um vídeo de 60 segundos contando sobre você
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Autorização de Compartilhamento */}
          <Card>
            <CardHeader>
              <CardTitle>Autorização de Compartilhamento</CardTitle>
              <p className="text-sm text-muted-foreground">
                Selecione quais informações você autoriza compartilhar com empresas cadastradas na plataforma:
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="compartilharHistorico"
                  checked={formData.compartilharHistorico}
                  onChange={(e) => handleInputChange("compartilharHistorico", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="compartilharHistorico">Histórico escolar</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="compartilharGraduacao"
                  checked={formData.compartilharGraduacao}
                  onChange={(e) => handleInputChange("compartilharGraduacao", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="compartilharGraduacao">Dados da graduação atual</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="compartilharSoftSkills"
                  checked={formData.compartilharSoftSkills}
                  onChange={(e) => handleInputChange("compartilharSoftSkills", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="compartilharSoftSkills">Soft skills</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="compartilharVideo"
                  checked={formData.compartilharVideo}
                  onChange={(e) => handleInputChange("compartilharVideo", e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="compartilharVideo">Link para vídeo</Label>
              </div>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" className="w-full transform hover:scale-105 transition-transform">
            <Sparkles className="mr-2" />
            Gerar Meu CV Poderoso
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;