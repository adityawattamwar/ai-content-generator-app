/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:2gUmJw1RIcZN@ep-square-snowflake-a166hxe5.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',

    }
  };
  
