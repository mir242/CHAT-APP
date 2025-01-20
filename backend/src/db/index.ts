import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres"
import { userSchema } from "./schema/user";
import { MassageSchema } from "./schema/massage";
import { conversationSchema } from "./schema/conversation";
import { userConversationRelation } from "./schema/relation";



const pool = new Pool({
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
})


const combineSchema = {
    ...userSchema,
    ...MassageSchema,
    ...conversationSchema,
    ...userConversationRelation
}



export const db: NodePgDatabase<typeof combineSchema> = drizzle(pool, { schema: combineSchema })


