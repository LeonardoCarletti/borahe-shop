// State
let cart = JSON.parse(localStorage.getItem('bts_cart_v2')) || [];
let activeCoupon = null;

// Config
const SHIPPING_BASE = 25.00;
const COUPONS = {
    'ARMY10': 0.10,
    'BORAHE20': 0.20
};

// Notification System
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-surface-highest text-white px-6 py-3 rounded-full border border-primary/20 shadow-2xl z-[100] animate-fade-in flex items-center gap-3';
    toast.innerHTML = `<span class="material-symbols-outlined text-primary">notifications</span> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Logic
export function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showToast(`${product.name} adicionado ao carrinho!`);
}

export function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

export function updateQuantity(id, amount) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = Math.max(1, item.quantity + amount);
    }
    saveCart();
}

function saveCart() {
    localStorage.setItem('bts_cart_v2', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
}

export function calculateShipping(zipCode) {
    if (zipCode.length < 8) return null;
    // Mock simulation
    return {
        price: SHIPPING_BASE,
        days: 5 + Math.floor(Math.random() * 5)
    };
}

export function applyCoupon(code) {
    if (COUPONS[code.toUpperCase()]) {
        activeCoupon = { code: code.toUpperCase(), discount: COUPONS[code.toUpperCase()] };
        saveCart();
        return true;
    }
    return false;
}

export function getCartTotals() {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = activeCoupon ? subtotal * activeCoupon.discount : 0;
    return {
        subtotal,
        discount,
        total: subtotal - discount
    };
}

export function getCart() { return cart; }
export function getActiveCoupon() { return activeCoupon; }
