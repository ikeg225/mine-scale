import { SESClient, SESClientConfig } from "@aws-sdk/client-ses";

const REGION: string = "us-west-1";

const sesClientConfig: SESClientConfig = {
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
};

const sesClient: SESClient = new SESClient(sesClientConfig);

export { sesClient };
