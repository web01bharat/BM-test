# Shopify Development Environment Setup

## Prerequisites
- Node.js (v16+)
- npm or yarn
- Git

## Installing Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
```

## Authentication
Log in to your Shopify store:
```bash
shopify auth login
```

## Basic Commands
- Initialize a new theme: `shopify theme init [name]`
- Pull an existing theme: `shopify theme pull --store=your-store.myshopify.com --theme=your-theme-id`
- Start development server: `shopify theme dev --store=your-store.myshopify.com`
- Push theme changes: `shopify theme push --store=your-store.myshopify.com`
- List themes: `shopify theme list --store=your-store.myshopify.com`
