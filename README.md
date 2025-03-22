# Svelte


## Get started

Install sv client:

```bash
npx sv
```

create sv project.

```bash
npx sv create my_app
```
Run project
```bash
npm run dev -- --open

```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
Netlify

```bash
npm install -g netlify-cli
netlify deploy
```
