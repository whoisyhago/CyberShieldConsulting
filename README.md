# CyberShield Web Consulting

Sitio web corporativo de **CyberShield Web Consulting** — servicios de desarrollo web y consultoría IT para pymes y startups.

🌐 Stack: HTML + CSS + JavaScript vainilla · Sin frameworks, sin build, sin dependencias.

---

## Estructura

```
cybershield/
├── index.html              # Inicio (home con hero)
├── servicios.html          # Catálogo de 6 servicios + proceso
├── empresa.html            # Sobre nosotros, timeline, partners
├── contacto.html           # Email + Calendly + WhatsApp + auditoría gratis
├── css/
│   └── styles.css          # Estilos compartidos entre todas las páginas
├── js/
│   └── main.js             # Menú móvil, scroll, active nav link
└── README.md               # Este archivo
```

---

## Páginas

### 🏠 Inicio (`index.html`)
- Hero con escudo SVG animado · "Seguridad y desarrollo web sin compromisos"
- Trust bar con tecnologías (AWS, Microsoft, Google, etc.)
- Preview de 3 servicios destacados
- Sección "¿Estás en riesgo?" con 4 estadísticas
- CTA banner final

### 🛠️ Servicios (`servicios.html`)
- Grid completo de **6 servicios** en cards:
  1. Desarrollo web a medida
  2. Ciberseguridad gestionada
  3. Consultoría cloud & DevOps
  4. Soporte IT para empresas
  5. Cumplimiento normativo (RGPD)
  6. Formación a equipos
- Proceso en 4 pasos: Diagnóstico → Propuesta → Implementación → Seguimiento

### 🏢 Empresa (`empresa.html`)
- Bio + terminal animado con estado del sistema
- Timeline con la historia (2024 origen → 2026 presente)
- Grid de 8 partners certificados

### 📩 Contacto (`contacto.html`)
- **3 canales en cards destacadas:**
  - **Email** (naranja) → `mailto:` con subject pre-rellenado
  - **Calendly** (cyan) → enlace para reservar slot de 30min
  - **WhatsApp** (verde) → `wa.me` con mensaje pre-rellenado
- Info adicional: oficina, horario, emergencias 24/7
- Sección de auditoría gratuita reutilizada

---

## Despliegue

### Opción A — GitHub Pages (gratis)

1. Sube los archivos al repo `CyberShieldConsulting`
2. Settings → Pages → Source: `main` branch, root folder
3. URL pública: `whoisyhago.github.io/CyberShieldConsulting`

### Opción B — Vercel / Netlify (más profesional)

1. Conecta tu repo de GitHub a [Vercel](https://vercel.com) o [Netlify](https://netlify.com)
2. Deploy automático en cada push
3. URL pública en segundos + dominio personalizado gratis

---

## Personalización rápida

Antes de publicar, reemplaza estos **placeholders**:

| Placeholder | Dónde está | Reemplazar por |
|---|---|---|
| `hola@cybershield-consulting.com` | `contacto.html`, footer, mailto links | Tu email real |
| `+34 900 000 000` | `contacto.html` (sección emergencias) | Tu teléfono real |
| `https://calendly.com/cybershield-consulting` | `contacto.html` botón Calendly | Tu URL de Calendly |
| `https://wa.me/34600000000` | `contacto.html` botón WhatsApp | Tu número WhatsApp (sin +) |

**Truco para WhatsApp:** el formato `wa.me/[código país sin +][número]` siempre funciona. Ejemplo:
- Número español 600 123 456 → `https://wa.me/34600123456`

### Colores y estilos

Todos los colores están en variables CSS al inicio de `css/styles.css` (líneas 9-25):

```css
--bg: #0a0e1a;        /* fondo principal */
--accent: #22d3ee;    /* cyan principal */
--warning: #f97316;   /* naranja CTAs */
--whatsapp: #25d366;  /* verde WhatsApp */
```

Cambia esos valores y se actualiza todo el sitio.

---

## Características técnicas

- ✅ **Multi-página** con navegación consistente
- ✅ **Active link** automático según la página actual
- ✅ **Responsive** mobile-first (breakpoints 1024px y 768px)
- ✅ **Menú hamburguesa** funcional en mobile
- ✅ **Header sticky** con efecto sombra al hacer scroll
- ✅ **Smooth scroll** entre secciones
- ✅ **Animaciones CSS** (escudo flotante, terminal blink, hover en cards)
- ✅ **Sin dependencias JavaScript externas**
- ✅ **Sin frameworks** — código que entenderás dentro de 5 años
- ✅ **SEO básico** (meta tags, semántica HTML5)

---

## Próximos pasos sugeridos

Cuando quieras crecer la web:

- **Comprar dominio** propio (cybershield-consulting.com o similar)
- **Configurar email profesional** (`hola@tudominio.com` con Google Workspace o Zoho)
- **Crear Calendly real** y reemplazar el placeholder
- **Página de casos de éxito** con clientes reales
- **Blog técnico** para SEO (CMS opcional como Decap CMS sobre GitHub)
- **Analytics** con Plausible (privacy-friendly) o Google Analytics
- **Conectar formulario real** con Formspree o Netlify Forms si lo añades

---

## Reemplazar al proyecto Lovable

Para sustituir el código de Lovable que tenías en el repo:

1. **Borra** todos los archivos del repo excepto el `.git/` y `.gitignore` (opcionalmente)
2. **Sube** estos 4 archivos HTML + carpetas `css/` y `js/` + el README
3. Commit y push
4. Si tenías GitHub Pages activado en otra rama, ahora apunta a `main`

¡Y listo!

---

© 2026 CyberShield Web Consulting · Madrid, España
