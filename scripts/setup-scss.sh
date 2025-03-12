
## 2. Add SCSS Configuration

Create a basic SCSS setup:

```bash
#!/bin/bash

# Create SCSS directory structure
mkdir -p theme/assets/scss
mkdir -p theme/assets/scss/components
mkdir -p theme/assets/scss/layout
mkdir -p theme/assets/scss/utils

# Create main SCSS file
cat > theme/assets/scss/theme.scss << EOL
/*
* Shopify Theme SCSS Main File
*/

// Utils
@import "utils/variables";
@import "utils/mixins";

// Layout
@import "layout/header";
@import "layout/footer";
@import "layout/grid";

// Components
@import "components/buttons";
@import "components/forms";
@import "components/navigation";
EOL

# Create basic utility files
cat > theme/assets/scss/utils/_variables.scss << EOL
// Colors
\$color-primary: #000000;
\$color-secondary: #333333;
\$color-accent: #ff0000;
\$color-background: #ffffff;

// Typography
\$font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
\$font-heading: \$font-body;
EOL

cat > theme/assets/scss/utils/_mixins.scss << EOL
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin responsive-image {
  max-width: 100%;
  height: auto;
}

@mixin visually-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
EOL

# Create basic package.json for SCSS compilation
cat > theme/package.json << EOL
{
  "name": "shopify-theme",
  "version": "1.0.0",
  "description": "Shopify theme with SCSS",
  "scripts": {
    "build": "sass --style=compressed assets/scss/theme.scss:assets/theme.css",
    "watch": "sass --watch --style=expanded assets/scss/theme.scss:assets/theme.css",
    "lint": "stylelint \"assets/scss/**/*.scss\""
  },
  "devDependencies": {
    "sass": "^1.58.3",
    "stylelint": "^15.2.0",
    "stylelint-config-standard-scss": "^7.0.1"
  }
}
EOL

echo "SCSS setup complete!"