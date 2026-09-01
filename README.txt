# Portfolio de Julián Ezequiel Balbi

## Estructura

- `index.html` → página principal.
- `style.css` → diseño, responsive y animaciones.
- `script.js` → menú, smooth/reveal, cargador de imágenes y racha de Duolingo.
- `assets/` → imágenes y futuros archivos del portfolio.

## Cómo subirlo a Neocities

1. Entrá al panel de tu sitio de Neocities.
2. Subí `index.html`, `style.css` y `script.js`.
3. Creá/subí la carpeta `assets`.
4. Poné tus fotos dentro de `assets`.
5. En `index.html`, cambiá los nombres de las imágenes, por ejemplo:
   `assets/mi-foto.jpg`
   `assets/actor-02.jpg`
6. Si querés mostrar un CV PDF, subí:
   `assets/CV-Julian-Balbi.pdf`
7. En `script.js` cambiá:
   - `DUOLINGO_STREAK = 0` por tu número real.
   - `DIAGONALES_STUDIOS_URL = ""` por el link real de Diagonales Studios.
8. Cambiá también el email de `index.html`:
   `tuemail@ejemplo.com`

## Cómo agregar una nueva foto al portfolio

Copiá una imagen a `assets/`, por ejemplo:

`assets/obra-teatro-2026.jpg`

Y dentro de `index.html` agregá:

```html
<article class="portfolio-card reveal">
  <img src="assets/obra-teatro-2026.jpg" alt="Julián Balbi en una obra de teatro">
  <div class="card-overlay">
    <span>05 / TEATRO</span>
    <h3>Nombre de la obra</h3>
    <p>Descripción breve.</p>
  </div>
</article>
```

## Importante sobre el cargador

El botón "Cargar imágenes" sirve para previsualizar imágenes en tu navegador.
Un HTML/CSS/JS estático no puede subir archivos automáticamente a tu cuenta de
Neocities. Para publicarlas, hay que subirlas al panel de Neocities y referenciarlas
desde `assets/`.

## Links incluidos

- Cambridge English: https://www.cambridgeenglish.org/es/
- Duolingo: https://www.duolingo.com/profile/JulianEzequiel24
- TAB_: https://tab.ar/

El link de Diagonales Studios queda preparado para que lo pegues cuando tengas la URL exacta.
