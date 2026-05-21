// Base de dados local de produtos
const products = [
    {
        id: 1,
        name: "PC Gamer AlanAg Apex Elite",
        category: "pc",
        price: 8499.00,
        oldPrice: 9599.00,
        image: "assets/pc_gamer.png",
        rating: 4.9,
        reviews: 47,
        badge: "DESTAQUE"
    },
    {
        id: 2,
        name: "Placa de Vídeo RTX 4070 Ti Pro",
        category: "hardware",
        price: 5299.00,
        oldPrice: 5899.00,
        image: "assets/gpu_rtx.png",
        rating: 4.8,
        reviews: 63,
        badge: "OFERTA"
    },
    {
        id: 3,
        name: "Teclado Mecânico RGB Pro",
        category: "perifericos",
        price: 459.00,
        oldPrice: 599.00,
        image: "assets/teclado_rgb.png",
        rating: 4.7,
        reviews: 82,
        badge: "POPULAR"
    },
    {
        id: 4,
        name: "Gabinete Gamer Hydra Void ARGB",
        category: "hardware",
        price: 389.00,
        oldPrice: 459.00,
        image: "assets/gabinete_gamer.png",
        rating: 4.6,
        reviews: 31,
        badge: "LANÇAMENTO"
    },
    {
        id: 5,
        name: "Mouse Gamer Wraith Wireless 16K",
        category: "perifericos",
        price: 299.00,
        oldPrice: 399.00,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
        rating: 4.8,
        reviews: 104,
        badge: "15% OFF"
    },
    {
        id: 6,
        name: "Cyberpunk Odyssey Deluxe Edition",
        category: "jogos",
        price: 199.00,
        oldPrice: 249.00,
        image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?q=80&w=600&auto=format&fit=crop",
        rating: 4.5,
        reviews: 156,
        badge: "PRE-VENDA"
    },
    {
        id: 7,
        name: "Headset Gamer Ares RGB 7.1",
        category: "perifericos",
        price: 349.00,
        oldPrice: 429.00,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
        rating: 4.7,
        reviews: 58,
        badge: "OFERTA"
    },
    {
        id: 8,
        name: "Placa de Vídeo RTX 4090 Beast OC",
        category: "hardware",
        price: 13999.00,
        oldPrice: 15499.00,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop",
        rating: 5.0,
        reviews: 19,
        badge: "EXTREMO"
    },
    {
        id: 9,
        name: "Mousepad Gamer RGB Orion Extended (90x40cm)",
        category: "perifericos",
        price: 189.00,
        oldPrice: 249.00,
        image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=600&auto=format&fit=crop",
        rating: 4.8,
        reviews: 42,
        badge: "MAIS VENDIDO"
    },
    {
        id: 10,
        name: "Mousepad Gamer Speed Nebula Pro",
        category: "perifericos",
        price: 99.00,
        oldPrice: 139.00,
        image: "https://images.unsplash.com/photo-1632292224971-0d45778b3002?q=80&w=600&auto=format&fit=crop",
        rating: 4.6,
        reviews: 89,
        badge: "SPEED"
    },
    {
        id: 11,
        name: "Placa de Vídeo RX 7900 XTX Nitro",
        category: "hardware",
        price: 7499.00,
        oldPrice: 8299.00,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop",
        rating: 4.8,
        reviews: 24,
        badge: "AMD RADEON"
    },
    {
        id: 12,
        name: "Microfone Condensador Streamer RGB",
        category: "perifericos",
        price: 529.00,
        oldPrice: 649.00,
        image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=600&auto=format&fit=crop",
        rating: 4.9,
        reviews: 55,
        badge: "STREAMER"
    },
    {
        id: 13,
        name: "Memória RAM RGB DDR5 32GB (2x16GB) 6000MHz",
        category: "hardware",
        price: 949.00,
        oldPrice: 1149.00,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=600&auto=format&fit=crop",
        rating: 4.9,
        reviews: 73,
        badge: "DDR5"
    },
    {
        id: 14,
        name: "Monitor Gamer Curvo 34' UltraWide 165Hz",
        category: "perifericos",
        price: 2899.00,
        oldPrice: 3499.00,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
        rating: 4.7,
        reviews: 61,
        badge: "DESTAQUE"
    },
    {
        id: 15,
        name: "Elden Ring - Shadow of the Erdtree Edition",
        category: "jogos",
        price: 299.00,
        oldPrice: 349.00,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
        rating: 5.0,
        reviews: 312,
        badge: "GOTY"
    }
];

// Estado da aplicação
let cart = [];
let activeCategory = 'all';
let searchQuery = '';

// Carregar carrinho do LocalStorage ao iniciar
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('alanag_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

// Salvar carrinho no LocalStorage
function saveCartToStorage() {
    localStorage.setItem('alanag_cart', JSON.stringify(cart));
}

// Inicialização após o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    // Carregar carrinho
    loadCartFromStorage();

    // Renderizar produtos
    renderProducts();

    // Configurar Filtros de Categoria
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeCategory = e.currentTarget.dataset.category;
            renderProducts();
        });
    });

    // Configurar Caixa de Pesquisa
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });

    // Toggle do Carrinho Lateral
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');

    const openCart = () => {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Impede scroll no fundo
    };

    const closeCart = () => {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    cartToggleBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Finalizar Compra
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalOrderNumber = document.getElementById('modalOrderNumber');
    const modalOrderTotal = document.getElementById('modalOrderTotal');

    checkoutBtn.addEventListener('click', () => {
        // Gerar número de pedido aleatório
        const orderNum = `#AG-${Math.floor(10000 + Math.random() * 90000)}`;
        const totalPayable = calculateCartTotal();

        // Preencher modal
        modalOrderNumber.textContent = orderNum;
        modalOrderTotal.textContent = formatCurrency(totalPayable);

        // Limpar carrinho e fechar drawer
        cart = [];
        saveCartToStorage();
        updateCartUI();
        closeCart();

        // Abrir modal de sucesso
        checkoutModal.classList.add('open');
    });

    modalCloseBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('open');
    });

    // Formulário de Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsEmail');
        showToast("Sucesso! E-mail cadastrado na lista VIP da AlanAg Store.");
        emailInput.value = '';
    });

    // Efeito de movimento paralaxe sutil no banner principal
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 80;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 80;
            heroContent.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            heroContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            heroContent.style.transition = 'transform 0.6s ease';
        });

        document.addEventListener('mouseenter', () => {
            heroContent.style.transition = 'none';
        });
    }
});

// Renderizar lista de produtos no grid
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    // Filtrar produtos
    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                              product.category.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="empty-results" style="grid-column: 1/-1; text-align: center; padding: 3rem 0; color: var(--text-sub);">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 1rem; opacity: 0.5;">
                    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <p style="font-size: 1.1rem; font-weight: 600;">Nenhum produto encontrado</p>
                <p style="font-size: 0.9rem; margin-top: 0.3rem;">Tente pesquisar por outro termo ou categoria.</p>
            </div>
        `;
        return;
    }

    // Criar elementos
    filteredProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        // Estrelas de classificação
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(product.rating)) {
                starsHTML += '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
            } else {
                starsHTML += '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
            }
        }

        card.innerHTML = `
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <span class="product-category">${product.category === 'pc' ? 'PC Gamer' : product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                ${starsHTML}
                <span>(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <div class="product-price-wrapper">
                    <span class="old-price">${formatCurrency(product.oldPrice)}</span>
                    <span class="product-price">${formatCurrency(product.price)}</span>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Adicionar ${product.name} ao carrinho">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>
        `;

        // Event listener do botão adicionar
        const addBtn = card.querySelector('.add-to-cart-btn');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });

        grid.appendChild(card);
    });
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartUI();
    showToast(`"${product.name}" adicionado ao carrinho!`);

    // Micro-animação piscante no botão de carrinho do header
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    cartToggleBtn.style.transform = 'scale(1.15)';
    setTimeout(() => {
        cartToggleBtn.style.transform = '';
    }, 200);
}

// Alterar quantidade de item no carrinho
function updateQuantity(productId, amount) {
    const item = cart.find(item => item.product.id === productId);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateCartUI();
    }
}

// Remover item do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

// Calcular preço total do carrinho
function calculateCartTotal() {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

// Atualizar interface do carrinho de compras
function updateCartUI() {
    const cartCountBadge = document.getElementById('cartCountBadge');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Total de itens
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
    cartCountBadge.textContent = totalItems;
    cartCountBadge.style.display = totalItems > 0 ? 'flex' : 'none';

    // Lista de itens no HTML
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart-message">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>Seu carrinho está vazio.</p>
                <p class="sub">Adicione alguns itens gamer!</p>
            </div>
        `;
        cartTotalPrice.textContent = "R$ 0,00";
        checkoutBtn.disabled = true;
    } else {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.product.name}</h4>
                    <span class="cart-item-price">${formatCurrency(item.product.price)}</span>
                    <div class="cart-item-quantity">
                        <button class="qty-btn minus-btn" aria-label="Diminuir quantidade">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn plus-btn" aria-label="Aumentar quantidade">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" aria-label="Remover item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            `;

            // Event listeners de botões internos do item do carrinho
            itemElement.querySelector('.minus-btn').addEventListener('click', () => updateQuantity(item.product.id, -1));
            itemElement.querySelector('.plus-btn').addEventListener('click', () => updateQuantity(item.product.id, 1));
            itemElement.querySelector('.remove-item-btn').addEventListener('click', () => removeFromCart(item.product.id));

            cartItemsList.appendChild(itemElement);
        });

        const totalPayable = calculateCartTotal();
        cartTotalPrice.textContent = formatCurrency(totalPayable);
        checkoutBtn.disabled = false;
    }
}

// Utilitário para formatar moeda em R$
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Exibir Toast de Notificação
let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
