import dns from 'node:dns'
dns.setServers(['8.8.8.8','8.8.4.4'])
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";
import { jwt } from 'better-auth/plugins';

console.log("My URI IS:", process.env.MONGODB_URI);
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: { 
        enabled: true 
    },
    session: {
        cookieCache:{
            enabled:true,
            strategy:"jwt",
            maxAge: 5*24*60*60, //in second
        }
    },
     plugins: [
        jwt(),
    ]
});