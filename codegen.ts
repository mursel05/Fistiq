import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();
const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  documents: ["src/graphql/**/*.ts"],
  generates: {
    "src/graphql/type.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
