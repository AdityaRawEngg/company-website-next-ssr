# Company Website using next-ssr

This project is server side rendering Company website using NextJs

Surfborad/home page has the navigation links to Raw Engineering Page and Contentstack page

## Data

All the pages receives a data prop which contains JSON data of that page which is send as a props to Navigation, Header and Section Component.

Data is fetch from a nodeJs server hosted on [Heroku](https://heroku.com).

## Downloading and running project

1. Clone the repository run

```
git clone https://github.com/AdityaRawEngg/company-website-next-ssr.git
```

2. After downloading finishes run `cd company-website-next-ssr`

3. Once inside directory run

```
npm run build
```

4. Once build file is created run

```
npm run start
```

To run project in development mode run

```
npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Live Demo

[live link](https://company-website-next.vercel.app/)
