import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-2" });

export const handler = async (event) => {
  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;

    const params = {
      Destination: {
        ToAddresses: [body.email],
      },
      Message: {
        Body: {
          Text: {
            Data: body.message,
          },
        },
        Subject: {
          Data: body.subject,
        },
      },
      Source: "patrickcianorte@gmail.com",
    };

    const command = new SendEmailCommand(params);
    const result = await ses.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "E-mail enviado com sucesso!", result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
