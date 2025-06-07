# 📧 AWS Lambda - Envio de E-mails com Amazon SES

Este projeto consiste em uma função AWS Lambda chamada `awsLambdaEmail`, desenvolvida com Node.js. A função realiza o envio de e-mails utilizando o serviço Amazon Simple Email Service (SES). Esta aplicação foi desenvolvida como parte de um trabalho acadêmico da disciplina de Arquitetura em Cloud.

---

## 📌 Objetivo

O objetivo principal deste projeto é criar uma função Lambda funcional, hospedada na AWS, que:

- Seja capaz de **enviar e-mails** usando o Amazon SES.
- Esteja devidamente **documentada** e com seu **código-fonte publicado no GitHub**.
- Receba parâmetros (destinatário, assunto e mensagem) através de uma requisição HTTP POST.

---

## 🚀 Tecnologias Utilizadas

- **AWS Lambda** (Node.js 18.x)
- **Amazon SES** (Simple Email Service)
- **Node.js**
- **JavaScript**

---

## 🛠️ Estrutura do Projeto

awsLambdaEmail/
├── index.js # Código da função Lambda
├── package.json # Metadados do projeto
├── README.md # Documentação principal

## 🔧 Funcionamento

Os e-mails de destino e origem devem ser verificados na mesma região da Lambda no Amazon SES.
A função recebe um JSON no seguinte formato:

```json
{
  "email": "destinatario@exemplo.com",
  "subject": "Assunto",
  "message": "Conteúdo do e-mail"
}
