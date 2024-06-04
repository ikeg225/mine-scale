import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SendEmailCommand } from "@aws-sdk/client-ses";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const createSendEmailCommand = (
  toAddress: string,
  fromAddress: string,
  subject: string,
  message: string
) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
    },
    Source: fromAddress,
  });
};

export async function sendEmail(
  toAddress: string,
  fromAddress: string,
  subject: string,
  message: string
) {
  const sendEmailCommand = createSendEmailCommand(
    toAddress,
    fromAddress,
    subject,
    message
  );

  await sesClient.send(sendEmailCommand);
}
