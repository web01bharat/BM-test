/**
 * Custom Global JavaScript for Shopify Theme
 * 
 * This file contains JavaScript functionality for the entire theme
 * and is automatically included in theme.liquid
 */

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initializeHeader();
  initializeMenus();
  initializeProductForms();
  
  // Set up Shopify section event listeners (for Theme Editor)
  setupShopifySectionListeners();
});

/**
 * Header functionality
 */
function initializeHeader() {
  // Sticky header behavior
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.classList.add('header--scrolled');
      
      // Hide header when scrolling down, show when scrolling up
      if (scrollTop > lastScrollTop) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
    } else {
      header.classList.remove('header--scrolled');
    }
    
    lastScrollTop = scrollTop;
  });
}

/**
 * Mobile and dropdown menu functionality
 */
function initializeMenus() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('mobile-menu-open');
    });
  }
  
  // Dropdown menus
  const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth < 990) {  // Mobile/tablet view
        e.preventDefault();
        this.parentNode.classList.toggle('submenu-active');
      }
    });
  });
}

/**
 * Product form handling (AJAX add to cart)
 */
function initializeProductForms() {
  const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');
  
  addToCartForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitButton = form.querySelector('[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      // Change button text to loading state
      submitButton.textContent = 'Adding...';
      
      // Collect form data
      const formData = new FormData(form);
      
      // Submit form via fetch
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(item => {
        // Update cart count
        updateCartCount();
        
        // Show confirmation message
        showCartNotification(item);
        
        // Reset button text
        submitButton.textContent = originalButtonText;
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        submitButton.textContent = originalButtonText;
        
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('product-form__error');
        errorMessage.textContent = 'There was an error adding this item to your cart.';
        form.appendChild(errorMessage);
        
        setTimeout(() => {
          errorMessage.remove();
        }, 3000);
      });
    });
  });
}

/**
 * Update cart count in header
 */
function updateCartCount() {
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      const cartCountElements = document.querySelectorAll('.cart-count');
      
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
        
        if (cart.item_count > 0) {
          element.classList.add('cart-count--active');
        } else {
          element.classList.remove('cart-count--active');
        }
      });
    });
}

/**
 * Show notification when item is added to cart
 */
function showCartNotification(item) {
  // Create notification element if it doesn't exist
  let notification = document.querySelector('.cart-notification');
  
  if (!notification) {
    notification = document.createElement('div');
    notification.classList.add('cart-notification');
    document.body.appendChild(notification);
  }
  
  // Set notification content
  notification.innerHTML = `
    <div class="cart-notification__content">
      <span class="cart-notification__success">✓ Added to cart</span>
      <h3 class="cart-notification__product">${item.product_title}</h3>
      <a href="/cart" class="cart-notification__button">View Cart</a>
    </div>
  `;
  
  // Show notification
  notification.classList.add('cart-notification--active');
  
  // Hide notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove('cart-notification--active');
  }, 5000);
}

/**
 * Set up Shopify section listeners for Theme Editor
 */
function setupShopifySectionListeners() {
  // When a section is loaded in the Theme Editor
  document.addEventListener('shopify:section:load', function(event) {
    const sectionId = event.detail.sectionId;
    const section = document.getElementById(`shopify-section-${sectionId}`);
    
    // Re-initialize components based on section type
    if (section.classList.contains('header-section')) {
      initializeHeader();
      initializeMenus();
    } else if (section.classList.contains('product-section')) {
      initializeProductForms();
    }
  });
  
  // When a section is unloaded in the Theme Editor
  document.addEventListener('shopify:section:unload', function(event) {
    // Clean up any event listeners if needed
  });
  
  // When a section is selected in the Theme Editor
  document.addEventListener('shopify:section:select', function(event) {
    // Add any special behavior when a section is selected
  });
}
