# PetShop Amigo Fiel

Landing page institucional de um pet shop, com apresentação dos serviços (banho e tosa, veterinário, hotelzinho), seção "sobre" e chamada para contato/agendamento.

Projeto de estudo do curso de Claude Code (Udemy).

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- ESLint (`eslint-config-next`)

## Estrutura

```
app/
├── layout.tsx        # Layout raiz e metadados
├── page.tsx          # Página inicial (Server Component)
└── globals.css       # Estilos globais e design tokens
components/
├── header.tsx        # Cabeçalho e navegação
├── hero.tsx          # Seção principal
├── services.tsx      # Serviços oferecidos
├── about.tsx         # Sobre o pet shop
├── contact-cta.tsx   # Chamada para contato/agendamento
└── footer.tsx        # Rodapé
public/               # Arquivos estáticos
```

## Como rodar

Pré-requisito: Node.js 20 ou superior.

```bash
git clone https://github.com/vanderleian/Projeto1.git
cd Projeto1
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando              | Descrição                         |
| -------------------- | --------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento       |
| `npm run build`      | Build de produção                 |
| `npm run start`      | Executa o build de produção       |
| `npm run lint`       | Verifica o código com ESLint      |
| `npm run type-check` | Verifica os tipos com TypeScript  |

## Convenções

As diretrizes do projeto (Server Components por padrão, Tailwind, nomes de arquivo em kebab-case, commits em inglês no imperativo etc.) estão em [`CLAUDE.md`](./CLAUDE.md) e em `.claude/rules/`.
