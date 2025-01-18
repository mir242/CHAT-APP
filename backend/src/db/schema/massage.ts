
import { InferSelectModel } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const MassageSchema = pgTable("users", {
    id: uuid ("id").defaultRandom().primaryKey(),
        constant: varchar("constant", { length: 256 }).notNull(),
           

})

export type Massage=InferSelectModel <typeof MassageSchema>
export type NewMassage=InferSelectModel <typeof MassageSchema>


