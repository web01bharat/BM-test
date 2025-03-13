# Shopify GitHub Integration Guide

## Overview

The Shopify GitHub app enables a seamless two-way synchronization between your Shopify theme and a GitHub repository. This integration provides:

- **Automatic updates**: Changes pushed to GitHub are reflected in Shopify.
- **Version control**: Changes made in the Shopify admin are committed to GitHub.
- **Conflict resolution**: The system helps manage changes to avoid overwrites.

## File Structure Requirements

**Critical: Theme files must be at the repository root**

Shopify's GitHub integration requires theme files to be located at the root of your repository, not in a subdirectory. If your theme files are placed in a subdirectory (like `theme/`), the integration will fail with a "Branch isn't a valid theme" error.

### Required Root-Level Structure

```
/
├── assets/        # Must be at root
├── config/        # Must be at root
├── layout/        # Must be at root
├── locales/       # Must be at root
├── sections/      # Must be at root
├── snippets/      # Must be at root
├── templates/     # Must be at root
```

### SCSS Workflow with GitHub Integration

Shopify doesn't allow theme assets to be stored in subdirectories (e.g., `assets/scss/`). Our template addresses this by:

1. **Source files**: All SCSS source files are kept in a `scss/` directory at the repository root
   - This directory is not uploaded to Shopify (excluded via .shopifyignore)
   - Source files can use proper organization with subdirectories
   
2. **Compiled output**: SCSS is compiled to a single CSS file
   - Output goes to `assets/theme.css` (no subdirectories)
   - This file is uploaded to Shopify and used by the theme
   
3. **Development workflow**:
   - Edit SCSS files in the `scss/` directory
   - Run `npm run watch` to automatically compile changes
   - GitHub only syncs the compiled CSS file with Shopify

### Common Errors

1. **"Branch isn't a valid theme" Error**
   - Cause: Theme files are in a subdirectory, not at the repository root.
   - Solution: Move all theme files to the repository root.

2. **"Theme files may not be stored in subfolders" Error**
   - Cause: Assets are placed in subdirectories (e.g., `assets/scss/theme.scss`).
   - Solution: Use our SCSS workflow with source files in `scss/` and compiled output to `assets/theme.css`.

## Integration Setup Process

### Method 1: Connect Existing Repository

1. Navigate to **Online Store > Themes** in your Shopify admin.
2. Click **Add Theme** and select **Connect from GitHub**.
3. Authenticate with GitHub and select your repository.
4. Choose the branch you want to connect.
5. Click **Connect** to finalize the integration.

### Method 2: Export Theme to GitHub

1. Navigate to **Online Store > Themes** in your Shopify admin.
2. Click on the three dots (⋮) next to your theme and select **Export to GitHub**.
3. Select a target repository and branch name.
4. Click **Export** to create the integration.

## Branch Management Best Practices

### Development Workflow

1. **Create a development branch** from your main branch.
2. **Connect this branch** to a development theme in Shopify.
3. **Make and test changes** in this development environment.
4. **Create a pull request** to merge changes to your main branch.
5. **Review and approve** the pull request.

### Theme Preview

To preview changes from a specific branch:
1. Navigate to **Online Store > Themes** in your Shopify admin.
2. Find the connected theme for your branch.
3. Click **Preview** to view the theme.

## Troubleshooting

### Synchronization Issues

If changes aren't synchronizing properly:

1. **Check Connection Status**: Verify the branch is still connected in Shopify admin.
2. **Manual Refresh**: Try disconnecting and reconnecting the branch.
3. **Review GitHub Permissions**: Ensure Shopify still has access to your repository.

### Invalid Theme Structure

If your repository structure is invalid:

1. Run `shopify theme check` to validate your theme structure.
2. Compare your repository structure with a known working Shopify theme.
3. Ensure all theme files are at the repository root, not in a subdirectory.

## Tips for Successful Integration

1. **Use meaningful commit messages** to track changes across both platforms.
2. **Maintain a clean branch structure** with main/master as your production theme.
3. **Create feature branches** for specific changes/features.
4. **Don't modify theme files directly** in the Shopify admin for connected themes.
5. **Regularly pull changes** if multiple developers are working on the theme.

## Resources

- [Shopify GitHub Integration Documentation](https://shopify.dev/docs/themes/github)
- [Shopify Theme Requirements](https://shopify.dev/docs/themes/architecture)
- [GitHub Flow Documentation](https://docs.github.com/en/get-started/quickstart/github-flow)
