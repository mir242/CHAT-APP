import { InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const userSchema = pgTable("users", {
    id: uuid ("id").defaultRandom().primaryKey(),
        fristName: varchar("fristName", { length: 256 }).notNull(),
            lastName: varchar("lastName", { length: 256 }).notNull(),
                email: varchar("email", { length: 256 }).notNull(),
                    password: varchar("password", { length: 256 }).notNull(),
                        avatar: varchar("avatar", { length: 256 })


})

export type User=InferSelectModel <typeof userSchema>
export type NewUser=InferSelectModel <typeof userSchema>


