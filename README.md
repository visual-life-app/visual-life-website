# Visual.Life website

Production marketing, privacy, legal and support website for the Visual.Life Android app.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## GitHub and Vercel deployment

1. Create an empty GitHub repository and place the contents of this `website` folder at the repository root.
2. Import that repository into Vercel. Vercel should detect **Next.js** automatically.
3. Keep the install command as `npm install` and the build command as `npm run build`.
4. Add the production environment variable:

   ```text
   NEXT_PUBLIC_SITE_URL=https://visual.life
   ```

5. Add the custom domain in Vercel. In NameSilo, remove the existing parking records and enter the exact DNS records Vercel displays for the domain. Vercel will provision HTTPS after DNS validation.
6. Confirm that all of these URLs return successfully before adding the privacy URL to Google Play:

   - `/`
   - `/privacy`
   - `/terms`
   - `/legal`
   - `/support`
   - `/accessibility`
   - `/robots.txt`
   - `/sitemap.xml`

## Before launch

- Confirm `support@visual.life` receives email.
- Confirm the company address, registration number and data-box ID on `/legal` are current.
- Do not enable Vercel Web Analytics, Google Analytics, advertising pixels, chat widgets or a contact-form provider without first reviewing and updating the privacy policy.
- Once the Google Play listing is public, verify every “Get the app” button opens `life.visual.app` correctly.
- If the intended production domain is not `visual.life`, change `NEXT_PUBLIC_SITE_URL` in Vercel and update the in-app privacy URL before releasing the Android app.

## Important legal note

The included policies are a practical product-specific compliance draft based on the current app behavior and public company information. They should be reviewed by qualified Czech/EU counsel before launch, especially if data flows, analytics, pricing, target markets or company details change.
