import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="font-semibold">Portfolio IA</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/cadastro" className="text-muted-foreground hover:text-foreground transition-colors">
              Para Estudantes
            </Link>
            <Link to="/busca" className="text-muted-foreground hover:text-foreground transition-colors">
              Para Empresas
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            A gente tem a IA, mas os nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              talentos são reais
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conectamos estudantes universitários com empresas baseado no que eles realmente fizeram, 
            não apenas no que estudaram.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transform hover:scale-105 transition-transform">
              <Link to="/cadastro">
                <Users className="mr-2" />
                Sou Estudante
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transform hover:scale-105 transition-transform">
              <Link to="/busca">
                <TrendingUp className="mr-2" />
                Sou Empresa
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Por que escolher a Portfolio IA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Projetos Reais</h3>
                <p className="text-muted-foreground">
                  Mostre o que você realmente construiu, não apenas o que aprendeu na teoria.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">CV Inteligente</h3>
                <p className="text-muted-foreground">
                  Geramos automaticamente um storyline que destaca seus pontos fortes únicos.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Match Perfeito</h3>
                <p className="text-muted-foreground">
                  Empresas encontram candidatos baseado em competências práticas demonstradas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para ser descoberto pelo que você fez?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de estudantes que já transformaram seus projetos em oportunidades.
          </p>
          <Button asChild size="lg" variant="secondary" className="transform hover:scale-105 transition-transform">
            <Link to="/cadastro">
              Começar Agora
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded"></div>
            <span className="font-semibold text-foreground">Portfolio IA</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Portfolio IA. Conectando talentos reais com oportunidades reais.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;