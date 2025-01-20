import type { Config } from "drizzle-kit"
import "dotenv/config";
export default {

    schema: "./src/db/schema/*",
    out: "./src/db/drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: String(process.env.DB_URL)
    }

}satisfies Config