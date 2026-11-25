import { z } from "zod/v4";
export declare const contentSectionSchema: z.ZodObject<{
    key: z.ZodString;
    heading: z.ZodString;
    body: z.ZodString;
    imageUrl: z.ZodNullable<z.ZodString>;
    enabled: z.ZodBoolean;
    sortOrder: z.ZodNumber;
}, z.core.$strip>;
export type ContentSection = z.infer<typeof contentSectionSchema>;
export declare const pagesTable: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "site_pages";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "site_pages";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        slug: import("drizzle-orm/pg-core").PgColumn<{
            name: "slug";
            tableName: "site_pages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        title: import("drizzle-orm/pg-core").PgColumn<{
            name: "title";
            tableName: "site_pages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        metaTitle: import("drizzle-orm/pg-core").PgColumn<{
            name: "meta_title";
            tableName: "site_pages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        metaDescription: import("drizzle-orm/pg-core").PgColumn<{
            name: "meta_description";
            tableName: "site_pages";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        published: import("drizzle-orm/pg-core").PgColumn<{
            name: "published";
            tableName: "site_pages";
            dataType: "boolean";
            columnType: "PgBoolean";
            data: boolean;
            driverParam: boolean;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        sections: import("drizzle-orm/pg-core").PgColumn<{
            name: "sections";
            tableName: "site_pages";
            dataType: "json";
            columnType: "PgJsonb";
            data: {
                key: string;
                heading: string;
                body: string;
                imageUrl: string | null;
                enabled: boolean;
                sortOrder: number;
            }[];
            driverParam: unknown;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {
            $type: {
                key: string;
                heading: string;
                body: string;
                imageUrl: string | null;
                enabled: boolean;
                sortOrder: number;
            }[];
        }>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "site_pages";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const insertPageSchema: z.ZodObject<{
    slug: z.ZodString;
    title: z.ZodString;
    metaTitle: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
    sections: z.ZodOptional<z.ZodType<{
        key: string;
        heading: string;
        body: string;
        imageUrl: string | null;
        enabled: boolean;
        sortOrder: number;
    }[], {
        key: string;
        heading: string;
        body: string;
        imageUrl: string | null;
        enabled: boolean;
        sortOrder: number;
    }[], z.core.$ZodTypeInternals<{
        key: string;
        heading: string;
        body: string;
        imageUrl: string | null;
        enabled: boolean;
        sortOrder: number;
    }[], {
        key: string;
        heading: string;
        body: string;
        imageUrl: string | null;
        enabled: boolean;
        sortOrder: number;
    }[]>>>;
}, {
    out: {};
    in: {};
}>;
export type Page = typeof pagesTable.$inferSelect;
export type InsertPage = z.infer<typeof insertPageSchema>;
//# sourceMappingURL=content.d.ts.map