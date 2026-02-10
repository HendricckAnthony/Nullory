# Estrutura do Projeto — Clean Architecture + Feature-Based

## Visão geral

O código está organizado em camadas (Clean Architecture) e por **features** (Feature-Based), para escalar bem e manter dependências claras.

## Estrutura de pastas

```
src/
├── app/                    # Camada de aplicação (entrada, providers)
│   └── main.jsx            # Entry point: React root, ThemeProvider, rotas
│
├── core/                   # Núcleo da aplicação (regras compartilhadas)
│   ├── theme/              # Tema MUI, tokens de design
│   │   ├── theme.js
│   │   └── index.js
│   └── index.js
│
├── features/               # Funcionalidades (Feature-Based)
│   └── landing/            # Feature: Landing Page
│       ├── NulloryLanding.jsx
│       └── index.js         # Ponto de entrada da feature
│
└── shared/                 # Recursos compartilhados entre features
    ├── assets/             # Imagens, ícones (ex.: logo)
    └── index.js
```

## Camadas (Clean Architecture)

| Camada    | Pasta      | Responsabilidade |
|----------|------------|-------------------|
| **App**  | `app/`     | Montagem da aplicação (main.jsx), providers globais. |
| **Core** | `core/`    | Tema, constantes, configurações usadas em toda a app. |
| **Features** | `features/` | Uma pasta por feature (ex.: landing). Cada feature pode ter componentes, hooks e lógica próprios. |
| **Shared** | `shared/`  | Assets, componentes e hooks reutilizados por várias features. |

## Feature-Based

- Cada **feature** vive em `src/features/<nome-da-feature>/`.
- A feature expõe um único ponto de entrada em `index.js` (ex.: `export { NulloryLanding }`).
- Componentes e lógica específicos da feature ficam dentro da pasta da feature.
- O que for usado em mais de uma feature vai para `shared/` ou `core/`.

## Imports

Use o alias `@` para importar a partir de `src/`:

- `@/core/theme` — tema e config de design
- `@/features/landing` — página/componentes da landing
- `@/shared/assets/...` — imagens e outros assets compartilhados

## Adicionando uma nova feature

1. Criar pasta: `src/features/<minha-feature>/`.
2. Colocar componentes e lógica da feature nessa pasta.
3. Exportar pela feature em `index.js` (ex.: `export { MinhaFeature } from "./MinhaFeature"`).
4. Usar em `app/main.jsx` (ou no roteador) com: `import { MinhaFeature } from "@/features/minha-feature"`.

## Exemplo de dependências

- **app** → core, features  
- **features** → core, shared  
- **core** → não importa de features nem de shared  
- **shared** → no máximo core; evita depender de features  

Isso mantém o fluxo de dependências previsível e facilita testes e manutenção.
