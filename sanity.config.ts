import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from '@sanity/vision';
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./src/sanity/schemaTypes";

const SINGLETON_TYPES = ["header", "footer"];

export default defineConfig({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([
                        S.listItem()
                            .title("Header")
                            .id("header")
                            .child(S.document().schemaType("header").documentId("header")),
                        S.listItem()
                            .title("Footer")
                            .id("footer")
                            .child(S.document().schemaType("footer").documentId("footer")),

                        S.divider(),

                        ...S.documentTypeListItems().filter(
                            (item) => !SINGLETON_TYPES.includes(item.getId() ?? "")
                        ),
                    ]),
        }),
        visionTool(),
        media(),
    ],
    schema: {
        types: schemaTypes,
    },
    document: {
        actions: (prev, { schemaType }) => {
            if (SINGLETON_TYPES.includes(schemaType)) {
                return prev.filter(({ action }) =>
                    action === "publish" ||
                    action === "discardChanges" ||
                    action === "restore"
                );
            }
            return prev;
        },
        // ← removed newDocumentOptions entirely
    },
});