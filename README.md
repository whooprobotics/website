This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Oswald](https://fonts.google.com/specimen/Oswald) and [Roboto](https://fonts.google.com/specimen/Roboto).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare

This app deploys to Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare).

Copy `.env.example` to `.env.local` for `npm run dev`, and `.dev.vars.example` to `.dev.vars` for Wrangler preview.

```bash
npm run preview   # local Workers runtime
npm run deploy    # build and deploy
```

Set these secrets on the Worker (Cloudflare dashboard or `npx wrangler secret put <NAME>`):

- `NOTION_TOKEN`
- `NOTION_PEOPLE_DATABASE_ID`
- `NOTION_ROLES_DATABASE_ID`
- `LEADERSHIP_YEAR`

