# Como Trocar as Imagens do Site

## Passo 1: Colocar as fotos na pasta
1. Crie uma pasta chamada `fotos` na mesma pasta do projeto
2. Coloque suas imagens nessa pasta (formatos aceitos: .jpg, .png, .jpeg)
3. Nomeie as imagens de forma simples, exemplo: `bomba.jpg`, `beijinho.png`, `minhafoto.jpg`

## Passo 2: Editar o arquivo HTML
Abra o arquivo `index.html` e encontre o局部 que deseja trocar.

### Para trocar a imagem de um doce:
Procure no HTML algo assim:
```
html
<div class="doce-image" style="background-color: #FFFAF0;">
    <span class="doce-icon">🍮</span>
</div>
```

E替换成:
```
html
<div class="doce-image">
    <img src="fotos/nome-da-sua-imagem.jpg" alt="Bomba de Leite Ninho">
</div>
```

### Para trocar a foto na seção "Sobre Mim":
Procure:
```
html
<div class="image-placeholder">
    <span>👩‍🍳</span>
    <p>Sua Foto Aqui</p>
</div>
```

E替换成:
```
html
<img src="fotos/sua-foto.jpg" alt="Minha Foto">
```

### Para trocar as fotos da Galeria:
Procure:
```
html
<div class="foto-placeholder">
    <span>📷</span>
    <p>Foto 1</p>
</div>
```

E替换成:
```
html
<img src="fotos/foto1.jpg" alt="Trabalho 1">
```

## Dicas
- Use imagens com boa resolução (mínimo 800x800 pixels para quadrados)
- O tamanho ideal é quadrado ou retangular 1:1
- Nomeie as imagens em letras minúsculas sem espaços (use hífen: `minha-foto.jpg`)

## Exemplo Prático
Se você tem uma foto chamada `bomba-ninho.png` na pasta `fotos`:

**Antes:**
```
html
<div class="doce-image" style="background-color: #FFFAF0;">
    <span class="doce-icon">🍮</span>
</div>
<h3>Bomba de Leite Ninho</h3>
```

**Depois:**
```html
<div class="doce-image">
    <img src="fotos/bomba-ninho.png" alt="Bomba de Leite Ninho">
</div>
<h3>Bomba de Leite Ninho</h3>
```

---

Precisa de mais ajuda? É só perguntar!
