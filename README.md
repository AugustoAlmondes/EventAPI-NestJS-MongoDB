# Event API com NestJS

Esta é uma API RESTful completa para gerenciamento de eventos e usuários, construída com NestJS, TypeScript e MongoDB. O projeto foi desenvolvido com foco em boas práticas, separação de responsabilidades e escalabilidade, servindo como um exemplo prático de uma aplicação backend robusta.

## 📜 Visão Geral do Projeto

A API oferece endpoints para realizar operações de CRUD (Criar, Ler, Atualizar, Deletar) para duas entidades principais: **Usuários** e **Eventos**. A arquitetura segue os padrões do NestJS, utilizando Módulos, Controllers, Services e Repositories para organizar o código de forma limpa e manutenível.

## ✨ Features

- **Gestão de Usuários**: CRUD completo para usuários, com senhas criptografadas.
- **Gestão de Eventos**: CRUD completo para eventos.
- **Validação de Dados**: Uso de DTOs (Data Transfer Objects) e `class-validator` para validar os dados de entrada.
- **Abstração de Lógica**: A lógica de negócios é encapsulada nos serviços, mantendo os controllers enxutos.
- **Acesso ao Banco de Dados**: Padrão de repositório para interagir com o MongoDB através do Mongoose.
- **Configuração de Ambiente**: Suporte a variáveis de ambiente com `.env`.

## 🛠️ Tecnologias Utilizadas

- **Backend**:
  - [NestJS](https://nestjs.com/): Um framework Node.js progressivo para construir aplicações backend eficientes e escaláveis.
  - [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática.
  - [MongoDB](https://www.mongodb.com/): Banco de dados NoSQL orientado a documentos.
  - [Mongoose](https://mongoosejs.com/): ODM (Object Data Modeling) para modelar os dados da aplicação para o MongoDB.
  - [Bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca para criptografia de senhas.
  - [class-validator](https://github.com/typestack/class-validator): Para validação de dados baseada em DTOs.

## 📂 Estrutura do Projeto

O projeto é organizado de forma modular para garantir a separação de responsabilidades.

```
src/
├── app.module.ts       # Módulo raiz da aplicação
├── main.ts             # Arquivo de entrada da aplicação
├── user/               # Módulo de Usuários
│   ├── Schema/
│   │   └── user.schema.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── repositories/
│   │   └── user.repository.ts
│   ├── services/
│   │   ├── create-user.service.ts
│   │   └── ... (outros serviços)
│   ├── user.controller.ts
│   └── user.module.ts
└── event/              # Módulo de Eventos
    ├── Schema/
    │   └── events.schema.ts
    ├── dto/
    │   ├── create-event.dto.ts
    │   └── update-event.dto.ts
    ├── interfaces/
    │   └── IEventEntity.ts
    ├── repositories/
    │   └── event.repository.ts
    ├── services/
    │   ├── create-event.service.ts
    │   └── ... (outros serviços)
    ├── event.controller.ts
    └── event.module.ts
```

- **`main.ts`**: Inicializa o servidor NestJS.
- **`app.module.ts`**: Orquestra os diferentes módulos da aplicação.
- **Módulos (`user`, `event`)**: Agrupam controllers, services e toda a lógica relacionada a uma entidade.
- **Controllers**: Recebem as requisições HTTP, validam os dados e retornam as respostas.
- **Services**: Contêm a lógica de negócio principal.
- **Repositories**: Camada de abstração para acesso direto ao banco de dados.
- **Schemas**: Definição da estrutura dos documentos no MongoDB (usando Mongoose).
- **DTOs**: Definem a estrutura dos dados que são transferidos pela rede.

## 🚀 Instalação e Execução

Siga os passos abaixo para executar o projeto em seu ambiente local.

**Pré-requisitos:**
- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [pnpm](https://pnpm.io/installation) (ou `npm`/`yarn`)
- [MongoDB](https://www.mongodb.com/try/download/community) (rodando localmente ou em um serviço de nuvem como o MongoDB Atlas)

**1. Clone o repositório**
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd event-api
```

**2. Instale as dependências**
```bash
pnpm install
```

**3. Configure as variáveis de ambiente**
Crie um arquivo `.env` na raiz da pasta `event-api` e adicione a string de conexão do seu banco de dados MongoDB.
```env
# .env
DATABASE_URL="mongodb://seu_usuario:sua_senha@localhost:27017/seu_banco"
```

**4. Rode a aplicação em modo de desenvolvimento**
O servidor irá reiniciar automaticamente a cada alteração no código.
```bash
pnpm run start:dev
```
A aplicação estará disponível em `http://localhost:3000`.

### Executando os Testes

Para rodar os testes unitários e de integração:
```bash
pnpm run test
```

Para rodar os testes End-to-End (E2E), que simulam requisições reais à API:
```bash
pnpm run test:e2e
```

## 📋 Documentação da API

Aqui estão os endpoints disponíveis na API.

---

### Módulo de Usuários (`/user`)

#### `POST /user/create`
Cria um novo usuário. A senha é armazenada de forma criptografada.
- **Request Body**:
  ```json
  {
    "name": "Nome do Usuário",
    "email": "usuario@email.com",
    "password": "senha_forte_123"
  }
  ```

#### `GET /user/all`
Retorna uma lista de todos os usuários cadastrados.

#### `GET /user/:id`
Busca um usuário específico pelo seu `id`.
- **Parâmetro**: `id` (string) - ID do usuário.

#### `PUT /user/:id`
Atualiza os dados de um usuário.
- **Parâmetro**: `id` (string) - ID do usuário.
- **Request Body** (parcial, apenas os campos a serem atualizados):
  ```json
  {
    "name": "Novo Nome do Usuário"
  }
  ```

#### `DELETE /user/:id`
Deleta um usuário do sistema.
- **Parâmetro**: `id` (string) - ID do usuário.

---

### Módulo de Eventos (`/event`)

#### `POST /event/create`
Cria um novo evento.
- **Request Body**:
  ```json
  {
    "name": "Nome do Evento",
    "description": "Descrição detalhada do evento.",
    "date": "2024-12-31T20:00:00.000Z",
    "location": "Local do Evento"
  }
  ```

#### `GET /event/all`
Retorna uma lista de todos os eventos.

#### `GET /event/:id`
Busca um evento específico pelo seu `id`.
- **Parâmetro**: `id` (string) - ID do evento.

#### `PUT /event/:id`
Atualiza os dados de um evento.
- **Parâmetro**: `id` (string) - ID do evento.
- **Request Body** (parcial):
  ```json
  {
    "description": "Nova descrição do evento."
  }
  ```

#### `DELETE /event/:id`
Deleta um evento do sistema.
- **Parâmetro**: `id` (string) - ID do evento.
---