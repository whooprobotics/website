import { Client, extractDatabaseId } from "@notionhq/client";

let client: Client | null = null;

export function isNotionConfigured(): boolean {
  return Boolean(
    process.env.NOTION_TOKEN &&
      process.env.NOTION_PEOPLE_DATABASE_ID &&
      process.env.NOTION_ROLES_DATABASE_ID
  );
}

export function getNotionClient(): Client {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    throw new Error("NOTION_TOKEN is not set");
  }
  if (!client) {
    client = new Client({ auth: token });
  }
  return client;
}

export function requireDatabaseId(envName: "NOTION_PEOPLE_DATABASE_ID" | "NOTION_ROLES_DATABASE_ID"): string {
  const raw = process.env[envName];
  if (!raw) {
    throw new Error(`${envName} is not set`);
  }
  return extractDatabaseId(raw) ?? raw;
}

const dataSourceCache = new Map<string, string>();

export async function getDataSourceId(databaseId: string): Promise<string> {
  const cached = dataSourceCache.get(databaseId);
  if (cached) return cached;

  const notion = getNotionClient();
  const database = await notion.databases.retrieve({ database_id: databaseId });
  if (!("data_sources" in database) || database.data_sources.length === 0) {
    throw new Error(`Notion database ${databaseId} has no data source`);
  }

  const dataSourceId = database.data_sources[0].id;
  dataSourceCache.set(databaseId, dataSourceId);
  return dataSourceId;
}
