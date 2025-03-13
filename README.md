# Shopify Theme Development Template

A standardized development environment and workflow for Shopify themes, compatible with GitHub integration.

## Features

* Local development with hot reloading
* SCSS preprocessing
* Theme Check linting
* GitHub Actions for CI/CD
* Streamlined authentication and deployment
* Fully compatible with Shopify GitHub integration

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
        npm run setup -- --store=your-store.myshopify.com
        ```

    * For an existing theme:

        ```bash
        npm run setup -- --store=your-store.myshopify.com --theme=your-theme-id
        ```

4.  **Start development:**

    ```bash
    # In one terminal: start SCSS watcher
    npm run watch
    
    # In another terminal: start dev server
    npm run dev
    ```

## Project Structure

```
/                  # Root (contains theme files)
├── assets/        # Theme assets (CSS, JS, images)
│   └── theme.css  # Compiled CSS (do not edit directly)
├── config/        # Theme settings
├── layout/        # Theme layout templates
├── locales/       # Translation files
├── scss/          # SCSS source files (not uploaded to Shopify)
│   ├── components/  # Component styles
│   ├── layout/      # Layout styles
│   └── utils/       # Variables, mixins, etc.
├── sections/      # Theme sections
├── snippets/      # Reusable code snippets
├── templates/     # Theme templates
├── scripts/       # Development scripts
└── docs/          # Documentation
```

## Important: GitHub Integration Structure

Shopify's GitHub integration **requires** theme files to be at the repository root, not in a subdirectory. This template follows that requirement by placing all theme files at the root level. If you place theme files in a subdirectory, GitHub integration will fail with a "Branch isn't a valid theme" error.

Additionally, Shopify doesn't allow theme files in subdirectories within assets. To maintain a proper SCSS workflow:
- SCSS source files are kept in the `scss/` directory (not uploaded to Shopify)
- Compiled CSS is output to `assets/theme.css` (uploaded to Shopify)

See [GitHub Integration Documentation](docs/github-integration.md) for detailed information.

## Development Workflow

1.  **Authentication process:**

    ```bash
    shopify auth login
    ```

2.  **Development process:**

    ```bash
    # In one terminal: compile SCSS
    npm run watch
    
    # In another terminal: start Shopify dev server
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

* SCSS files are located in the `scss/` directory (not uploaded to Shopify)
* Compiled CSS is output to `assets/theme.css` (uploaded to Shopify)

1.  **Set up SCSS structure:**

    ```bash
    npm run setup-scss
    ```

2.  **Watch for changes:**

    ```bash
    npm run watch
    ```

3.  **Build for production:**

    ```bash
    npm run build
    ```

## JavaScript Development

The template includes built-in support for custom JavaScript development:

* A `custom-global.js` file is automatically included in the theme layout
* Place all JavaScript files directly in the `assets` directory (no subdirectories allowed)
* The main script is included with the `defer` attribute for optimal loading performance

### Working with JavaScript

1. **Edit the main JavaScript file:**

    ```bash
    # Edit the custom-global.js file in your assets directory
    assets/custom-global.js
    ```

2. **Access Shopify data:**

    ```javascript
    // Example: Access Shopify cart data
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => console.log('Cart contents:', cart));
    ```

3. **Organize your code:**

    JavaScript files are included in the GitHub sync workflow, allowing proper version control and team collaboration. For larger themes, consider using a module pattern to organize your code.

### Best Practices

* Keep JavaScript files minimal and focused
* Use event delegation for dynamically added elements
* Leverage existing Shopify JavaScript objects when available
* Test across different browsers and devices

For more detailed information, see the [JavaScript Development Guide](docs/#%20Shopify%20Development%20Environment%20Setup.md#javascript-development).

## Scaffolding Components

* Create new sections using the scaffold-section script.

    ```bash
    npm run scaffold-section my-new-section
    ```

## Deployment Process

* Two-environment workflow:
    * **Development environment:** Push to the `development` branch.
    * **Production environment:** Create a pull request from `development` to `main`.
* GitHub Actions automatically deploy changes based on the branch.
* Alternatively, use Shopify GitHub integration for seamless two-way sync.

## GitHub Integration

* Required repository secrets for GitHub Actions:
    * `SHOPIFY_STORE_URL`
    * `SHOPIFY_PASSWORD`
    * `SHOPIFY_DEV_THEME_ID`
    * `SHOPIFY_PROD_THEME_ID`

## Additional Resources

* [Shopify Theme Development Documentation](https://shopify.dev/docs/themes)
* [Liquid Template Language](https://shopify.dev/docs/themes/liquid)
* [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
* [Shopify GitHub Integration](https://shopify.dev/docs/themes/github)
