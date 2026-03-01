// Menu Mobile Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header fixo com transição de cor ao rolar
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animação de entrada dos cards ao scrollar
const doceCards = document.querySelectorAll('.doce-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

doceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Máscara para telefone
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 2) {
            value = `(${value}`;
        } else if (value.length <= 7) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
        }
    }
    e.target.value = value;
});

// Validação e envio do formulário
const contatoForm = document.getElementById('contatoForm');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

contatoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validar campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    
    // Mostrar estado de carregamento
    const btnSubmit = document.querySelector('.btn-submit');
    const originalText = btnSubmit.textContent;
    btnSubmit.textContent = 'Enviando...';
    btnSubmit.disabled = true;
    
    try {
        // Enviar dados para o backend
        const response = await fetch('http://localhost:3000/api/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                mensagem
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            // Mostrar mensagem de sucesso
            contatoForm.reset();
            mensagemSucesso.style.display = 'block';
            
            // Ocultar mensagem após 5 segundos
            setTimeout(() => {
                mensagemSucesso.style.display = 'none';
            }, 5000);
        } else {
            alert(data.erro || 'Erro ao enviar mensagem. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar mensagem. O servidor pode estar offline. Tente novamente mais tarde.');
    } finally {
        // Restaurar botão
        btnSubmit.textContent = originalText;
        btnSubmit.disabled = false;
    }
});

// Efeito de hover nos cards
doceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

console.log('🍬 Site da Doceria carregado com sucesso!');
