![Payload 3 Website Template](https://res.cloudinary.com/mohmdevcloud/image/upload/v1724658562/payload_hero_ssoo3j_pc1rjw.png)

<a href="https://payloadcms.mohmdev.com" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
  <span style="display: inline-flex; align-items: center; margin-bottom: 1em;">
    <img src="https://res.cloudinary.com/mohmdevcloud/image/upload/v1724659948/globe_favicon_o6us0b.svg" alt="https://payloadcms.mohmdev.com" style="width: 1.5em; height: 1.5em; padding-right: 0.5em; filter: invert(50%) sepia(20%) saturate(500%) hue-rotate(180deg); vertical-align: middle;">
    <span style="color: rgb(135, 133, 147); font-weight: 500; font-size: 1.125em;">Live Demo ↗</span>
  </span>
</a>

[Payload 3-beta.91](https://github.com/payloadcms/payload/releases/tag/v3.0.0-beta.91) transforms Next.js into a complete full-stack framework. By integrating a headless CMS natively into the Next.js environment, it creates a cohesive development experience, much like WordPress did for PHP, but with cutting-edge technology.

### This template is ideal if you are working on:

- A personal or enterprise-grade website, blog, or portfolio
- A content publishing platform with a fully-featured publication workflow
- A lead generation website with premium content gated behind authentication

![Payload 3 Dashboard](https://res.cloudinary.com/mohmdevcloud/image/upload/v1724658562/payload_dashboard_shb3r8_xp39pb.png)

This template, configured to be hosted on **Railway** includes a beautifully designed, production-ready front end built with [Next.js App Router](https://nextjs.org), served alongside your Payload app in a single instance. This setup allows you to deploy both your backend and website where you need them. In order to make this stack whole, we are using PostgreSQL as the database and MinIO S3 for media storage.

### Core features:

- [Next.js 15 (App Router)](https://nextjs.org)
- [React 19 &amp; React Compiler](https://19.react.dev)
- [PostgreSQL database](https://www.postgresql.org)
- [MinIO S3 for media storage](https://min.io)
- [TypeScript](https://www.typescriptlang.org)
- [React Hook Form](https://react-hook-form.com)
- [Payload Admin Bar](https://github.com/payloadcms/payload-admin-bar)
- [TailwindCSS styling](https://tailwindcss.com/)
- [shadcn/ui components](https://ui.shadcn.com/)
- Authentication
- Fully-featured blog
- Publication workflow
- User accounts
- Dark mode
- Pre-made layout building blocks
- SEO
- Redirects
- Live preview

## Getting Started

To get started with using your newly deployed Payload 3 stack, you will need to set up your S3 bucket and configure it's associated environment variables. The variables you will need are `S3_BUCKET`, `S3_ACCESS_KEY`, and `S3_SECRET_KEY`.

<img src="https://res.cloudinary.com/mohmdevcloud/image/upload/v1724661893/s3_variables_lr0zxb.png" alt="S3 Environment Variables" style="width: 100%;">

In order to get these values, you will need to log into your S3 console. The username and password for the S3 console are automatically generated during deployment. You can find these values among your console's environment variables.

Once logged in, you will need to create a new bucket and generate a new access and secret key. Once you have these values, head back to your project's environment, open up your Payload instance, and replace your obtained values with the existing ones.

🎉 Congradulations! You are now ready to start using your Payload 3 stack. Open up your project's URL, create your admin account, and click the "Seed" button to populate your database with some example data.

<img src="https://res.cloudinary.com/mohmdevcloud/image/upload/v1724658561/seed_xkaadv_nmlorh.png" alt="Seed Database" style="width: 100%;">

---

You can find the source code [here](https://github.com/MohmDev/payloadcms-website-template).<br>
Leave a ⭐ if you like this project.
