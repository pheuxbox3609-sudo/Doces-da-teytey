 # 🍬 Site da Doceria

Um site bonito e responsivo para sua doceria, com galeria de produtos, seção sobre mim e formulário de contato.

## 📁 Estrutura dos Arquivos

```
├── index.html      # Estrutura HTML do site
├── style.css      # Estilização CSS
├── script.js      # Funcionalidades JavaScript (frontend)
├── server.js      # Backend em Node.js/Express
├── package.json   # Dependências do projeto
├── .env.example   # Exemplo de configurações de email
└── README.md      # Este arquivo
```

## 🚀 Como Executar

### 1. Instale o Node.js
Acesse https://nodejs.org e baixe a versão LTS.

### 2. Instale as dependências
Abra o terminal na pasta do projeto e execute:
```
bash
npm install
```

### 3. Configure o email (opcional)
Para receber as mensagens do formulário:
1. Copie o arquivo `.env.example` para `.env`
2. Edite com suas configurações de email
3. Para Gmail, você precisa gerar uma "Senha de App" no Google

### 4. Inicie o servidor
```
bash
npm start
```

### 5. Acesse o site
- Frontend: http://localhost:3000
- API Teste: http://localhost:3000/api/teste

## 🎨 Personalização

### Alterar suas informações:
Abra o arquivo `index.html` e procure por:
- Nome da doceria
- Seus dados de contato
- Sua foto na seção "Sobre Mim"
- Descrição pessoal

### Alterar preços e produtos:
No arquivo `index.html`, seção "Nossos Doces", você pode:
- Adicionar ou remover produtos
- Alterar nomes e preços
- Mudar as cores dos cards

### Cores do site:
No arquivo `style.css`, na seção `:root`, você pode alterar:
- `--primary-color`: Cor principal (padrão: rosa #e91e63)
- `--secondary-color`: Cor secundária
- `--bg-light`: Cor de fundo clara

## 📱 O que o site inclui

✅ Design responsivo (funciona em celular e computador)  
✅ Galeria de produtos com preços  
✅ Seção "Sobre Mim" com sua foto  
✅ Formulário de contato funcionando  
✅ Animação suave ao rolar a página  
✅ Menu mobile adaptável  

---

Feito com ❤️ para sua doceria!
