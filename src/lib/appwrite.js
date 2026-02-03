import { Client, Account, Databases, Storage } from "appwrite";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const project = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client();
if (!endpoint || !project) {
  console.warn('Missing Appwrite env variables. Set VITE_APPWRITE_ENDPOINT and VITE_APPWRITE_PROJECT_ID in .env');
}
if (endpoint) client.setEndpoint(endpoint);
if (project) client.setProject(project);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage };
