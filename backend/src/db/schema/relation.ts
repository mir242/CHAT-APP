import { relations } from "drizzle-orm";
import { MassageSchema } from "./massage";
import { conversationSchema } from "./conversation";
import { userSchema } from "./user";
import { userConversationSchema } from "./userConversation";

export const massageRelation = relations(MassageSchema, ({ one }) => ({
    conversation: one(conversationSchema, {
        fields: [MassageSchema.conversationId],
        references: [conversationSchema.id]
    }),
    sender: one(userSchema, {
        fields: [MassageSchema.senderId],
        references: [userSchema.id]
    }),
    receiver: one(userSchema, {
        fields: [MassageSchema.reciverId],
        references: [userSchema.id]
    }),
}));

export const userRelation = relations(userSchema, ({ many }) => ({
    sentMassages: many(MassageSchema),
    receivedMassages: many(MassageSchema),
    conversations: many(userConversationSchema),
}));

export const conversationRelation = relations(conversationSchema, ({ many }) => ({
    massages: many(MassageSchema),
    users: many(userConversationSchema),
}));

export const userConversationRelation = relations(userConversationSchema, ({ one }) => ({
    massages: many(MassageSchema),
    user: one(userSchema, {
        fields: [userConversationSchema.userId],
        references: [userSchema.id]
    }),
    conversation: one(conversationSchema, {
        fields: [userConversationSchema.conversationId],
        references: [conversationSchema.id]
    }),
}));
