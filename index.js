const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    let body;

    try {
        body = JSON.parse(event.body || event);
    } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Entrada inválida. Esperado JSON com email, subject e message.' })
        };
    }

    const { email, subject, message } = body;

    const params = {
        Destination: { ToAddresses: [email] },
        Message: {
            Body: { Text: { Data: message } },
            Subject: { Data: subject }
        },
        Source: "patrickcianorte@gmail.com"
    };

    try {
        await ses.sendEmail(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email enviado com sucesso!' })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Erro ao enviar email', error })
        };
    }
};
