import { CodegenConfig } from "@graphql-codegen/cli";
import { API_URL } from "./src/configs/apollo";

const codegenConfig: CodegenConfig = {
  schema: API_URL,
  ignoreNoDocuments: true,
  generates: {
    "src/types/generated/graphqlScheme.ts": {
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
      ],
      config: {
        withHooks: true,
        withResultType: true,
      },
    },
  },
};

export default codegenConfig;
