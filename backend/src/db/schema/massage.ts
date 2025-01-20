import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { userSchema } from "./user";
import { conversationSchema} from "./conversation";

export const MassageSchema = pgTable("masages", {
    id: uuid("id").defaultRandom().primaryKey(),
    constant: varchar("constant", { length: 256 }).notNull(),
    senderId: uuid("senderid").notNull().references(() => userSchema.id),
    reciverId: uuid("reciverid").notNull().references(() => userSchema.id),
    conversationId: uuid("conversationId").notNull().references(() => conversationSchema.id),
});

export type Massage = InferSelectModel<typeof MassageSchema>;
export type NewMassage = InferInsertModel<typeof MassageSchema>;
