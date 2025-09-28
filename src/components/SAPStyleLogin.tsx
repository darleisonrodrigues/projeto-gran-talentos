import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Lock, Eye, EyeOff, Building2, Shield, Zap, ArrowRight, CheckCircle, Users } from "lucide-react";

const SAPStyleLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular login
    setTimeout(() => {
      setIsLoading(false);
      // Redirecionar ou fechar modal
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-transparent hover:bg-brand-red-500 border-2 border-brand-red-500 text-brand-red-500 hover:text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2 font-medium"
        >
          <User className="h-4 w-4 mr-2" />
          Login
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-brand-red-500 to-brand-navy-900 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-white m-0">
                Faça login em sua conta
              </DialogTitle>
            </div>
          </div>
          <p className="text-white/80 text-sm">
            Acesse sua conta para gerenciar talentos e oportunidades
          </p>
        </div>

        <div className="p-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="font-medium">Fazer Login</TabsTrigger>
              <TabsTrigger value="register" className="font-medium">Criar Conta</TabsTrigger>
            </TabsList>

            {/* Tab de Login */}
            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    E-mail corporativo
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu.email@empresa.com"
                      className="pl-10 h-11 border-gray-300 focus:border-brand-red-500 focus:ring-brand-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Senha
                  </Label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Digite sua senha"
                      className="pl-10 pr-10 h-11 border-gray-300 focus:border-brand-red-500 focus:ring-brand-red-500"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Lembrar de mim</span>
                  </label>
                  <a href="#" className="text-brand-red-500 hover:text-brand-red-600 font-medium">
                    Esqueceu a senha?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-dark-500 hover:bg-brand-dark-600 text-white h-11 font-semibold rounded-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Entrando...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Fazer login
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>

            {/* Tab de Registro */}
            <TabsContent value="register" className="space-y-4">
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-brand-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Crie sua conta corporativa
                </h3>
                <p className="text-gray-600 mb-6">
                  Junte-se a milhares de empresas que usam nossa plataforma 
                  para encontrar os melhores talentos na GRAN Talentos.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-left">
                    <CheckCircle className="h-5 w-5 text-brand-dark-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Acesso a 2.400+ talentos verificados</span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="h-5 w-5 text-brand-dark-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Matching automático com IA</span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="h-5 w-5 text-brand-dark-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dashboard de gestão completo</span>
                  </div>
                  <div className="flex items-center text-left">
                    <CheckCircle className="h-5 w-5 text-brand-dark-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Suporte dedicado 24/7</span>
                  </div>
                </div>

                <Button className="w-full bg-brand-red-500 hover:bg-brand-red-600 text-white h-11 font-semibold mb-3">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Solicitar Acesso Corporativo
                </Button>

                <a href="#" className="text-brand-navy-900 hover:text-brand-navy-800 font-medium text-sm">
                  Conheça os benefícios corporativos
                </a>
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Seguro e Confiável</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>2.400+ empresas</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>Matching em 3s</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SAPStyleLogin;