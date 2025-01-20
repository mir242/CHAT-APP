import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { userSchema } from "./user";
import { conversationSchema} from "./conversation";

export const userconversationSchema = pgTable("userconveration", {
    id: uuid("id").defaultRandom().primaryKey(),
    constant: varchar("constant", { length: 256 }).notNull(),
    userrId: uuid("userid").notNull().references(() => userSchema.id),
    conversationId: uuid("conversationId").notNull().references(() => conversationSchema.id),
});

export type userconversationSchema = InferSelectModel<typeof userconversationSchema>;
export type NewuserconversationSchema = InferInsertModel<typeof userconversationSchema>;
