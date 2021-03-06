# APLIPACK-DASHBOARD

## Instalando

1) Instale o NodeJS versão: `16.13.1`;

2) Descompacte o arquivo `versa-dashboard-deployed`;

3) Entre na pasta `versa-dashboard-deployed` e altere as seguintes variáveis do arquivo `.env` com as informações do seu
   banco de dados:

```text
DB_HOST=localhost
DB_PORT=3306
DB_NAME=aplipack_snellog
DB_USER=root
DB_PASSWORD=idadm123
```

## Iniciando o Servidor

4) Ainda na pasta `versa-dashboard-deployed`, rode o comando a abaixo:

```bash
$ npm start
```

5) Pronto! A seguinte mensagem no `console do NodeJS` informa que o servidor está rodando com sucesso!

```bash
👍 APLIPACK Rest API Server Running at   http://localhost:8000 🚀
👍 MySQL Database Connected Successful!   -> localhost:3306/aplipack_snellog -u:root -p:********
```

Apartir de agora, basta abrir o `Browser` e acessar o endereço: `http://localhost:8000`

## Possíveis Falhas

1) Servidor não está acessivel pelo endereço `http:localhost:8000`. No `console do Browser` um erro semelhante ao
   seguinte aparecerá:

```bash
   ...
   ERRO AO ACESSAR SERVIDOR: http://localhost:8000
   Error: Network Error at createError...
   GET http:localhost:8000/...
   net::ERR_CONNECTION_REFUSED
   ...
```

2) Alguma `View` não foi encontrada no banco de dados MySQL. Surgirá no `Console do NodeJS` um erro semelhante o
   seguinte:

```bash
   ...
   code: 'ER_NO_SUCH_TABLE',
   errno: 1146,
   sqlState: '42S02',
   sqlMessage: "Table 'aplipack_snellog.conferdencia_tempo_real' doesn't exist",
   sql: 'select * from conferdencia_tempo_real'
   ...
```
