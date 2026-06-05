# Suvaco de Cobra — Landing Page

Landing page do **Forrozão Suvaco de Cobra**, banda de Forró Pé de Serra de São Luís — MA.

## Como visualizar

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
# Com Python
python -m http.server 8080

# Com Node (npx)
npx serve .
```

Acesse: `http://localhost:8080`

## Estrutura

```
suvacodecobra/
├── index.html          # Página principal
├── css/styles.css      # Estilos
├── js/main.js          # Menu mobile, lightbox da galeria
├── images/             # Fotos da banda (.png + .webp otimizado)
├── robots.txt          # Instruções para buscadores
└── sitemap.xml         # Mapa do site
```

## Atualizar a agenda

Os shows ficam na seção `#agenda` do `index.html`. Para cada evento, copie um bloco `<article class="agenda-item">` e ajuste data, título, local e horário. Use a classe `agenda-item--particular` e o badge `Evento particular` para shows privados.

## Contato

- Telefone: (98) 98114-5339
- E-mail: suvacodecobraslz@gmail.com
- Instagram: [@forrozaosuvacodecobraslz](https://www.instagram.com/forrozaosuvacodecobraslz)
- WhatsApp: [Chamar no WhatsApp](https://wa.me/5598981145339)
