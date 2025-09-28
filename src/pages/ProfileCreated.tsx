import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Share, ArrowLeft, Sparkles, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface CVData {
  resumo: string;
  storyline: string;
  pontosFortes: string[];
  recomendacoesEntrevista?: string[];
  dados: {
    nome: string;
    curso: string;
    semestre: number;
    cidade: string;
    disponibilidade: string;
    ira: number;
    projetos: string;
    githubPortfolio: string;
  };
}

const ProfileCreated = () => {
  const [cvData, setCvData] = useState<CVData | null>(null);

  useEffect(() => {
    const storedCV = localStorage.getItem("vitae_current_cv");
    if (storedCV) {
      setCvData(JSON.parse(storedCV));
    }
  }, []);

  if (!cvData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando seu perfil...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" asChild className="mr-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Início
            </Link>
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-primary rounded"></div>
            <span className="font-semibold">Portfolio IA</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seu perfil foi criado com{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              sucesso!
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Geramos automaticamente seu CV e storyline baseado nos seus projetos reais. 
            Agora as empresas podem te descobrir pelo que você realmente fez.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CV Resumido */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5" />
                Seu CV Resumido
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{cvData.dados.nome}</h3>
                <p className="text-muted-foreground">{cvData.resumo}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{cvData.dados.curso}</Badge>
                <Badge variant="outline">{cvData.dados.semestre}º Semestre</Badge>
                <Badge className="bg-primary text-primary-foreground">
                  {cvData.dados.disponibilidade}
                </Badge>
                <Badge variant="outline">IRA: {cvData.dados.ira}</Badge>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-1">Localização</h4>
                <p className="text-muted-foreground text-sm">{cvData.dados.cidade}</p>
              </div>

              {cvData.pontosFortes.length > 0 && (
                <div>
                  <h4 className="font-medium text-foreground mb-2">Pontos Fortes Detectados</h4>
                  <div className="flex flex-wrap gap-1">
                    {cvData.pontosFortes.map((ponto, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {ponto}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {cvData.dados.githubPortfolio && (
                <div>
                  <h4 className="font-medium text-foreground mb-1">Portfólio</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cvData.dados.githubPortfolio} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Ver Portfólio
                    </a>
                  </Button>
                </div>
              )}

              {cvData.recomendacoesEntrevista && cvData.recomendacoesEntrevista.length > 0 && (
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Dicas para Entrevistas</h4>
                  <ul className="space-y-1">
                    {cvData.recomendacoesEntrevista.map((recomendacao, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 flex-shrink-0">•</span>
                        {recomendacao}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Storyline */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Sua Storyline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-muted to-background p-4 rounded-lg">
                <p className="text-foreground leading-relaxed">
                  "{cvData.storyline}"
                </p>
              </div>
              
              {cvData.dados.projetos && (
                <div className="mt-4">
                  <h4 className="font-medium text-foreground mb-2">Projetos Destacados</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cvData.dados.projetos}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="transform hover:scale-105 transition-transform">
              <Download className="mr-2 h-4 w-4" />
              Baixar CV Completo
            </Button>
            <Button variant="outline" size="lg" className="transform hover:scale-105 transition-transform">
              <Share className="mr-2 h-4 w-4" />
              Compartilhar Perfil
            </Button>
          </div>
          
          <div className="bg-muted p-4 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-medium text-foreground mb-2">🎉 Próximos Passos</h3>
            <ul className="text-sm text-muted-foreground space-y-1 text-left">
              <li>• Seu perfil já está visível para empresas parceiras</li>
              <li>• Continue atualizando seus projetos para melhorar seu ranking</li>
              <li>• Receba notificações quando empresas demonstrarem interesse</li>
            </ul>
          </div>

          <Button asChild variant="secondary" size="lg" className="transform hover:scale-105 transition-transform">
            <Link to="/busca">
              Ver Como as Empresas Te Veem
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreated;