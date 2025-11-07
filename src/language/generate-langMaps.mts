/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your English JSON (source of truth)
const inputFile = path.join(__dirname, "lang/en.json");

// Where to output the generated lang.ts
const outputFile = path.join(__dirname, "langMaps.ts");

const json = JSON.parse(fs.readFileSync(inputFile, "utf8"));

function buildKeys(obj: any, prefix = ""): any {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => {
      const keyPath = prefix ? `${prefix}.${k}` : k;
      if (typeof v === "object" && v !== null) {
        return [k, buildKeys(v, keyPath)];
      }
      return [k, keyPath];
    }),
  );
}

const lang = buildKeys(json);

const fileContent = `// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY
export const langMaps = ${JSON.stringify(lang, null, 2)} as const;
export type LangMapType = typeof langMaps;
`;

fs.writeFileSync(outputFile, fileContent);
console.log("✅ lang.ts generated!");
