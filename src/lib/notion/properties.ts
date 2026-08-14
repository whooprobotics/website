import { isFullPage, type PageObjectResponse } from "@notionhq/client";

type NotionProperty = PageObjectResponse["properties"][string];

export function asFullPage(page: unknown): PageObjectResponse | null {
  if (isFullPage(page as PageObjectResponse)) {
    return page as PageObjectResponse;
  }
  return null;
}

function property(page: PageObjectResponse, name: string): NotionProperty | undefined {
  return page.properties[name];
}

export function getTitle(page: PageObjectResponse, name: string): string {
  const prop = property(page, name);
  if (prop?.type === "title") {
    return prop.title.map((item) => item.plain_text).join("").trim();
  }
  return "";
}

export function getRichText(page: PageObjectResponse, name: string): string {
  const prop = property(page, name);
  if (prop?.type === "rich_text") {
    return prop.rich_text.map((item) => item.plain_text).join("").trim();
  }
  return "";
}

export function getUrl(page: PageObjectResponse, name: string): string {
  const prop = property(page, name);
  if (prop?.type === "url") {
    return prop.url?.trim() ?? "";
  }
  if (prop?.type === "rich_text") {
    return getRichText(page, name);
  }
  return "";
}

export function getSelect(page: PageObjectResponse, name: string): string {
  const prop = property(page, name);
  if (prop?.type === "select") {
    return prop.select?.name ?? "";
  }
  return "";
}

export function getNumber(page: PageObjectResponse, name: string): number | undefined {
  const prop = property(page, name);
  if (prop?.type === "number" && typeof prop.number === "number") {
    return prop.number;
  }
  return undefined;
}

export function getCheckbox(page: PageObjectResponse, name: string): boolean {
  const prop = property(page, name);
  if (prop?.type === "checkbox") {
    return prop.checkbox;
  }
  return false;
}

export function getRelationIds(page: PageObjectResponse, name: string): string[] {
  const prop = property(page, name);
  if (prop?.type === "relation") {
    return prop.relation.map((item) => item.id);
  }
  return [];
}

export function linkedinSlug(urlOrSlug: string): string {
  if (!urlOrSlug) return "";
  try {
    const url = urlOrSlug.includes("://") ? new URL(urlOrSlug) : new URL(`https://www.linkedin.com/in/${urlOrSlug}`);
    const parts = url.pathname.split("/").filter(Boolean);
    const inIndex = parts.indexOf("in");
    const slug = inIndex >= 0 ? parts[inIndex + 1] : parts[parts.length - 1];
    return slug?.replace(/\/+$/, "") ?? "";
  } catch {
    return urlOrSlug.replace(/^\/+|\/+$/g, "");
  }
}
