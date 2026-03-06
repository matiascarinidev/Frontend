
Link de producción
https://restaurant-lilac-five.vercel.app/


antenor-restaurant/
├── app/
│   ├── layout.tsx          // Layout principal
│   └── page.tsx            // Página principal (Home)
├── public/
│   ├── images/             // Assets estáticos
│   │   ├── hero/
│   │   ├── menu/
│   │   └── icons/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── components/
│   └── landing/            // Componentes específicos de la landing
│       ├── HeroSection.tsx
│       ├── MenuSection.tsx
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── styles/
│   ├── globals.css         // Estilos globales
│   └── components/         // CSS Modules
│       ├── Hero.module.css
│       ├── Menu.module.css
│       └── ...
├── utils/                  // Funciones auxiliares
│   └── constants.ts        // Datos reutilizables (ej: menú)
├── types/                  // Tipos TypeScript
│   └── index.ts
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md