const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para envio de contato
app.post('/api/contato', async (req, res) => {
    try {
        const { nome, email, telefone, mensagem } = req.body;
        
        // Validação básica
        if (!nome || !email || !mensagem) {
            return res.status(400).json({ 
                sucesso: false, 
                erro: 'Por favor, preencha todos os campos obrigatórios!' 
            });
        }
        
        // Configuração do transporte de email
        // Nota: Para produção, configure com seu servidor de email real
        const transporter = nodemailer.createTransport({
            service: 'gmail', // ou outro serviço de email
            auth: {
                user: process.env.EMAIL_USER || 'seuemail@gmail.com',
                pass: process.env.EMAIL_PASS || 'suasenhadeapp'
            }
        });
        
        // Opções do email
        const mailOptions = {
            from: `"Doceria" <${process.env.EMAIL_USER || 'seuemail@gmail.com'}>`,
            to: process.env.EMAIL_DESTINO || 'seuemail@exemplo.com',
            subject: `Novo pedido - ${nome}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
                    <h2 style="color: #e91e63;">🍬 Novo contato da sua Doceria</h2>
                    
                    <div style="background: #fdf2f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <p><strong>Nome:</strong> ${nome}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
                    </div>
                    
                    <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h3 style="color: #333;">Mensagem:</h3>
                        <p style="line-height: 1.6;">${mensagem}</p>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        Enviado em: ${new Date().toLocaleString('pt-BR')}
                    </p>
                </div>
            `
        };
        
        // Enviar email (comentado para desenvolvimento)
        // await transporter.sendMail(mailOptions);
        
        // Para desenvolvimento, apenas simulamos o sucesso
        console.log('📧 Novo contato recebido:', { nome, email, telefone, mensagem });
        
        // Simular delay de processamento
        await new Promise(resolve => setTimeout(resolve, 500));
        
        res.json({ 
            sucesso: true, 
            mensagem: 'Mensagem enviada com sucesso!' 
        });
        
    } catch (error) {
        console.error('Erro ao processar contato:', error);
        res.status(500).json({ 
            sucesso: false, 
            erro: 'Erro ao enviar mensagem. Tente novamente.' 
        });
    }
});

// Rota de teste
app.get('/api/teste', (req, res) => {
    res.json({ 
        status: 'ok', 
        mensagem: 'API da Doceria funcionando!' 
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
    🍬 Servidor da Doceria iniciado!
    📍 Acesse: http://localhost:${PORT}
    ✅ API: http://localhost:${PORT}/api/teste
    `);
});
