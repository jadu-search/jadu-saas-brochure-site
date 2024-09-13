# Jadu Digital - E-commerce Search Engine

This is a static site for Jadu Digital's SaaS product, an innovative search engine designed for e-commerce retailers. The site is built using Gatsby and showcases the product's features and benefits.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-github-username/jadu-saas-brochure-site.git
   cd jadu-saas-brochure-site
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run develop
   ```

4. Open your browser and visit `http://localhost:8000` to view the site.

## Building for Production

To build the site for production, run:

```
npm run build
```

This will generate a `public` folder with the production-ready files.

## Deploying to GitHub Pages

To deploy the site to GitHub Pages:

1. Make sure you have updated the `homepage` field in `package.json` with your GitHub username.

2. Run the deploy script:
   ```
   npm run deploy
   ```

This will build the site and push it to the `gh-pages` branch of your repository.

## Customizing Content

- To update the hero image, replace the file at `src/images/hero-image.svg`.
- To update feature images, replace the files at `src/images/feature-1.svg`, `src/images/feature-2.svg`, and `src/images/feature-3.svg`.
- To modify the site content, edit the components in the `src/components` directory.

## Technologies Used

- Gatsby
- React
- Tailwind CSS
- PostCSS

## License

This project is licensed under the MIT License.
