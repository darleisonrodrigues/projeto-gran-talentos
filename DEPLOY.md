# 🚀 GRAN Talentos - Deploy Guide

Este projeto está configurado para deploy automático em **GitHub Pages** e **Vercel**.

## 📋 Problemas Resolvidos

### ✅ GitHub Pages
- **Problema**: Erro 404 ao acessar rotas diretas
- **Solução**: Configuração SPA (Single Page Application) completa
- **Arquivos ajustados**:
  - `public/404.html` - Redirecionamento SPA
  - `index.html` - Script de roteamento SPA
  - `vite.config.ts` - Base path correto
  - `.github/workflows/deploy.yml` - Workflow atualizado

### ✅ Vercel
- **Problema**: Roteamento SPA não funcionava
- **Solução**: Configuração `vercel.json` completa
- **Arquivos criados**:
  - `vercel.json` - Rewrites para SPA

### ✅ Configuração Inteligente
- **App.tsx**: Detecta automaticamente o ambiente (Vercel/GitHub Pages/Local)
- **vite.config.ts**: Base path dinâmico baseado no ambiente

## 🌐 URLs de Deploy

### GitHub Pages
- **URL**: `https://darleisonrodrigues.github.io/projeto-gran-talentos/`
- **Deploy**: Automático via push na branch `main`
- **Status**: ✅ Configurado

### Vercel
- **URL**: Será fornecida após o deploy no Vercel
- **Deploy**: Manual ou via Git integration
- **Status**: ✅ Configurado

## 🛠️ Como Fazer Deploy

### GitHub Pages (Automático)
```bash
# Simplesmente faça push na branch main
git add .
git commit -m "Deploy updates"  
git push origin main
```

### Vercel (Manual)
```bash
# Instalar Vercel CLI (se não tiver)
npm i -g vercel

# Na pasta do projeto
vercel

# Ou usar build específico para Vercel
npm run build:vercel
```

### Vercel (via Git)
1. Conecte o repositório no dashboard do Vercel
2. Configure:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Deploy automático a cada push

## 🧪 Testando Localmente

```bash
# Desenvolvimento
npm run dev

# Build para GitHub Pages
npm run build:github

# Build para Vercel  
npm run build:vercel

# Preview local
npm run preview
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build padrão
- `npm run build:github` - Build otimizado para GitHub Pages
- `npm run build:vercel` - Build otimizado para Vercel
- `npm run preview` - Preview do build local
- `npm run deploy:github` - Deploy manual GitHub Pages

## 📁 Estrutura de Arquivos Importantes

```
├── public/
│   └── 404.html              # SPA redirect para GitHub Pages
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions para deploy automático
├── src/
│   └── App.tsx              # Roteamento inteligente multi-ambiente
├── vercel.json              # Configuração Vercel
├── vite.config.ts           # Build configuration
└── index.html               # SPA routing script
```

## 🐛 Troubleshooting

### GitHub Pages 404
- ✅ Verificar se `basename` está correto em `App.tsx`
- ✅ Confirmar que `404.html` existe em `public/`
- ✅ Verificar se GitHub Pages está habilitado nas configurações do repo

### Vercel 404  
- ✅ Verificar se `vercel.json` está na raiz
- ✅ Confirmar rewrites configuration
- ✅ Verificar build output directory

### Ambos
- ✅ Executar `npm run build` localmente para testar
- ✅ Verificar console do navegador para erros
- ✅ Testar navegação direta para rotas (`/buscar-talentos`, `/company-dashboard`)

## 🎯 Próximos Passos

1. **Fazer push** para disparar deploy automático GitHub Pages
2. **Configurar Vercel** via dashboard ou CLI
3. **Testar ambas URLs** para confirmar funcionamento
4. **Configurar domínio customizado** (opcional)

## 📞 Suporte

Se houver problemas:
1. Verificar logs do GitHub Actions
2. Verificar logs do Vercel Dashboard
3. Testar build local com `npm run build`
4. Verificar configurações de DNS (se usando domínio custom)

---
**Status**: ✅ Pronto para deploy em ambas plataformas!