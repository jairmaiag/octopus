# Octopus

API para integração de ERP com os [marketplaces](https://pt.wikipedia.org/wiki/Marketplace) como Mercado Livre e B2W (Americanas, Submarino e Shoptime).

## Índice

- [Octopus](#octopus)
  - [Índice](#índice)
  - [Iniciando](#iniciando)
    - [Pré-rquisito](#pré-rquisito)
    - [Variáveis de ambiente](#variáveis-de-ambiente)
    - [Executando](#executando)
    - [Migrations](#migrations)
  - [Dúvidas](#dúvidas)

## Iniciando

Segue as instruções de utilização da API.

[Voltar ao Índice](#índice)

### Pré-rquisito

Ter os programas abaixo já instalados e rodando:

1. Ter o **NodeJs**.
2. Ter o **SGBD (Sistema de Gestão de Banco de Dados) Postgres**.
3. Saber o usuário e senha padrão do Postgres.
4. [typeorm](https://typeorm.io/#/).

[Voltar ao Índice](#índice)

### Variáveis de ambiente

Para que o funcione em modo de desenvolvimento crie um arquivo **src/main/config/env.ts** na raiz da aplicação com algumas variáveis configuradas.

Veja o conteúdo do arquivo [.env.example](https://github.com/jairmaiag/carp/blob/master/.env.ts.example) que contem as variáveis utilizadas no sistema.

[Voltar ao Índice](#índice)

### Executando

Após baixar os fontes acesse a pasta da aplicação e execute o comando:
`yarn install`

Utilize o nodejs para executar o mesmo com o comando abaixo:

1. yarn run debug
2. Ver mais comandos nos scripts do package.json

Ao executar será exibido, no conole, as mensagens:

```
Servidor online na port: 80
Acesse http://localhost
```

[Voltar ao Índice](#índice)

### Migrations

Crie o banco de dados.

Já com o banco criado vamos criar as tabelas do sistema.
Pare a aplicação, acesse a pasta da mesma e execute o comando

```
typeorm migrate:run
```

Para desfazer a Migrations (remover as tabelas).
Isso não remove o banco de dados.

```
typeorm migrate:revert
```

[Voltar ao Índice](#índice)
