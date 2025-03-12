# Shopify GitHub Integration Workflow

## Overview

The Shopify GitHub app enables a seamless two-way synchronization between your Shopify theme and a GitHub repository. This integration provides:

- **Automatic updates**: Changes pushed to GitHub are reflected in Shopify.
- **Version control**: Changes made in the Shopify admin are committed to GitHub.
- **Conflict resolution**: The system helps manage changes to avoid overwrites.

## Workflow Options

### Option 1: GitHub → Shopify (Recommended)
1. **Set up a GitHub repository**: Create a new private repository for your Shopify theme.
2. **Push theme files**: Clone the repository locally, add your theme files, commit, and push.
3. **Connect Shopify**: Use the Shopify GitHub integration to link your repository, ensuring two-way sync.

### Option 2: Shopify → GitHub → Shopify
1. **Pull the existing Shopify theme**: Use Shopify CLI to download the current theme.
2. **Commit and push**: Add the theme to a GitHub repository.
3. **Connect in Shopify**: Link the repository to Shopify for synchronization.

## Step-by-Step Process

### Initial Setup

```bash
# Clone the Shopify development template
$ git clone https://github.com/your-repo/shopify-theme.git
$ cd shopify-theme

# Set up Git remote
$ git remote add origin https://github.com/your-repo/shopify-theme.git

# Install dependencies
$ npm install
```

### Pull Existing Theme

```bash
# Use Shopify CLI to pull an existing theme
$ shopify theme pull --store your-store.myshopify.com --theme-id <theme_id>
```

### Push to GitHub

```bash
# Add and commit changes
$ git add .
$ git commit -m "Initial theme setup"
$ git push origin main
```

### Connect in Shopify Admin

1. Navigate to **Online Store > Themes**.
2. Click **Add Theme** and select **Connect from GitHub**.
3. Choose the correct **repository and branch**.
4. Complete the connection to enable two-way sync.

## Development Workflow

It is recommended to use a development branch before merging to production.

```bash
# Create and switch to a development branch
$ git checkout -b dev-branch

# Make changes, then commit and push
$ git add .
$ git commit -m "Updated homepage layout"
$ git push origin dev-branch
```

To preview, connect this branch to a **development theme** in Shopify.

## Important Notes

1. **Theme structure**: Ensure the theme follows Shopify’s required directory structure.
2. **Automated commits**: Shopify may commit changes when updates are made via the admin.
3. **Conflict handling**: Manually resolve any merge conflicts that arise.
4. **Reconnecting branches**: If a branch disconnects, re-link it via the Shopify admin.

## Resources

- [Shopify GitHub Integration Documentation](https://shopify.dev/docs/themes/github)
- [Version Control Best Practices](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
