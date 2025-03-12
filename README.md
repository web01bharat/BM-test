# Shopify Theme Development Template

A standardized development environment and workflow for Shopify themes.

## Features

* Local development with hot reloading
* SCSS preprocessing
* Theme Check linting
* GitHub Actions for CI/CD
* Streamlined authentication and deployment

## Quick Start

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up the theme:**

    * For a new theme:

        ```bash
        npm run setup-new
        ```

    * For an existing theme:

        ```bash
        npm run setup-existing
        ```

4.  **Start development:**

    ```bash
    npm run dev
    ```

## Project Structure

theme/
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/
scripts/
docs/
.github/

```markdown
# Shopify Theme Development Template

A standardized development environment and workflow for Shopify themes.

## Features

* Local development with hot reloading
* SCSS preprocessing
* Theme Check linting
* GitHub Actions for CI/CD
* Streamlined authentication and deployment

## Quick Start

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up the theme:**

    * For a new theme:

        ```bash
        npm run setup-new
        ```

    * For an existing theme:

        ```bash
        npm run setup-existing
        ```

4.  **Start development:**

    ```bash
    npm run dev
    ```

## Project Structure

```theme/
├── assets/
├── config/
├── layout/
├── locales/
├── sections/
├── snippets/
└── templates/
scripts/
docs/
.github/
```

## Development Workflow

1.  **Authentication process:**

    ```bash
    shopify auth login
    ```

2.  **Development process:**

    ```bash
    npm run dev
    ```

3.  **Theme checking:**

    ```bash
    npm run check
    ```

4.  **Pushing changes:**

    ```bash
    npm run push
    ```

## SCSS Workflow

* SCSS files are located in the `theme/assets/styles/` directory.

1.  **Set up SCSS structure:**

    ```bash
    npm run setup-scss
    ```

2.  **Watch for changes:**

    ```bash
    npm run watch
    ```

## Scaffolding Components

* Create new sections using the `scaffold-section` script.

    ```bash
    npm run scaffold-section my-new-section
    ```

## Deployment Process

* Two-environment workflow:
    * **Development environment:** Push to the `development` branch.
    * **Production environment:** Create a pull request from `development` to `main`.
* GitHub Actions automatically deploy changes based on the branch.

## GitHub Integration

* Required repository secrets:
    * `SHOPIFY_STORE_URL`
    * `SHOPIFY_PASSWORD`
    * `SHOPIFY_DEV_THEME_ID`
    * `SHOPIFY_PROD_THEME_ID`

## Additional Resources

* [Shopify Theme Development Documentation](https://shopify.dev/docs/themes)
* [Liquid Template Language](https://shopify.dev/docs/themes/liquid)
* [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
```
