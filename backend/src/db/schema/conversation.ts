import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const conversationSchema = pgTable("conversation", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: varchar("title", { length: 256 })(),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
});

export type Conversation = InferSelectModel<typeof conversationSchema>;
export type NewConversation = InferInsertModel<typeof conversationSchema>;
