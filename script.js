const products = [
  {
    id: "blusa-cacharrel-dedinho",
    name: "Blusa Feminina Cacharrel Gola Alta com Dedinho nas Mangas Tamanho Único",
    category: "Moda",
    price: 27.2,
    couponPrice: 25.84,
    oldPrice: 39.99,
    image: "assets/blusa foto.jpg",
    alt: "Blusa feminina preta de gola alta com abertura para o dedão nas mangas",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/6q1yyWMWtJ?share_channel_code=1"
  },
  {
    id: "pc-gamer-completo-intel-i7",
    name: "PC Gamer Completo Intel i7 16 GB SSD 240 GB com Monitor 19 e Combo Branco",
    category: "Informática",
    price: 2149.97,
    pixPrice: 1977.98,
    oldPrice: 2599.97,
    image: "assets/pc completo foto.jpg",
    alt: "Computador completo branco com gabinete, monitor, teclado, mouse e headset",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/2qVqCeOHjl?share_channel_code=1"
  },
  {
    id: "capacete-peels-spike-2",
    name: "Capacete de Moto Fechado Peels Spike 2 NKD",
    category: "Mobilidade",
    price: 279.1,
    pixPrice: 265.15,
    oldPrice: 329.9,
    image: "assets/capacete foto.jpg",
    alt: "Capacete de moto fechado preto Peels Spike 2",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/2gCQ05viFH?share_channel_code=1"
  },
  {
    id: "bicicleta-eletrica-wehawk-wx15",
    name: "Bicicleta Elétrica Wehawk WX-15 800W com Bateria de Lítio 48V 20Ah Pré-Montada",
    category: "Mobilidade",
    price: 5099,
    pixPrice: 4691.08,
    oldPrice: 6700,
    image: "assets/moto eletrica foto.jpg",
    alt: "Bicicleta elétrica Wehawk WX-15 preta e branca",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/3VlWzCpyrx?share_channel_code=1"
  },
  {
    id: "kit-upgrade-gamer-ryzen7",
    name: "Kit Upgrade Gamer Ryzen 7 + Placa-Mãe M.2 + 32 GB RAM DDR4",
    category: "Informática",
    price: 1414.87,
    pixPrice: 1301.69,
    oldPrice: 5000,
    image: "assets/kit upgrade pc foto.jpg",
    alt: "Kit de upgrade gamer com processador Ryzen 7, placa-mãe e memória RAM",
    featured: true,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/2qVqBsCwgQ?share_channel_code=1"
  },
  {
    id: "iphone-14-original",
    name: "iPhone 14, 14 Pro ou 14 Pro Max 128 GB/256 GB Original com Garantia",
    category: "Eletrônicos",
    price: 2350,
    pixPrice: 2162,
    oldPrice: 5250,
    image: "assets/iphone 14 foto.jpg",
    alt: "Várias cores de iPhone 14 e iPhone 14 Pro",
    featured: true,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/8fTd81R8pF?share_channel_code=1"
  },
  {
    id: "guitarra-vedo-flame",
    name: "Kit de Guitarra Elétrica VEDO Flame Style 36 Polegadas com Captadores HSH",
    category: "Instrumentos Musicais",
    price: 684.33,
    pixPrice: 629.59,
    oldPrice: 1116.65,
    image: "assets/guitarra foto.jpg",
    alt: "Guitarra elétrica estilo Flame com capa e acessórios para iniciantes",
    featured: true,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/1Beo9rm9Z?share_channel_code=1"
  },
  {
    id: "fone-pop-up",
    name: "Fone de Ouvido Sem Fio Com Cancelamento De Ruído Bluetooth Pop-Up",
    category: "Eletrônicos",
    price: 42.89,
    couponPrice: 41.6,
    oldPrice: 199,
    image: "assets/fone foto.jpg",
     alt: "Fone de ouvido sem fio branco com estojo de carregamento",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/4B13Jx1qVe?share_channel_code=1"
  },
  {
    id: "jogo-panelas-legacy",
    name: "Jogo de Panelas Legacy Antiaderente Revestimento Cerâmico 5 Peças Tampa de Vidro",
    category: "Casa",
    price: 329.9,
    pixPrice: 263.92,
    oldPrice: 519.9,
    image: "assets/foto panelasa.jpg",
    alt: "Jogo de panelas antiaderentes de 5 peças com tampas de vidro",
    featured: true,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/1W0IC4fqYA?share_channel_code=1"
  },
  {
    id: "jogo-ferramentas-worker",
    name: "Jogo de Ferramentas Worker 110 Peças com Maleta e Soquetes",
    category: "Ferramentas",
    price: 449.9,
    pixPrice: 427.41,
    oldPrice: 529.9,
    image: "assets/foto ferramentas.jpg",
    alt: "Maleta aberta com jogo de ferramentas, chaves e soquetes",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/1qd8b4ZLqD?share_channel_code=1"
  },
  {
    id: "corta-vento",
    name: "Jaqueta corta vento masculina estilo motociclista",
    category: "Moda",
    price: 80,
    pixPrice: 76,
    oldPrice: null,
    image: "assets/foto cortavento.jpg",
    alt: "Jaqueta corta-vento preta masculina em estilo motociclista",
    featured: false,
    deal: true,
    affiliateUrl: "https://s.shopee.com.br/3LRwMjmRtO?share_channel_code=1"
  },
  {
    id: "calca-baggy",
    name: "Calça Balão Jeans Masculina Baggy Boca Larga Streetwear",
    category: "Moda",
    price: 54.9,
    maxPrice: 74.9,
    oldPrice: null,
    image: "assets/calça foto.jpg",
    alt: "Calça jeans masculina baggy anunciada na Shopee",
    featured: false,
    deal: false,
    affiliateUrl: "https://s.shopee.com.br/20wivDDngU?share_channel_code=1"
  },
];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const searchInput = document.querySelector("#product-search");
const searchForm = document.querySelector("#search-form");
const catalogGrid = document.querySelector("#catalog-grid");
const catalogStatus = document.querySelector("#catalog-status");
const categoryFilters = document.querySelector("#category-filters");
const categoryTiles = document.querySelector("#category-tiles");
const featuredGrid = document.querySelector("#featured-grid");
const dealsGrid = document.querySelector("#deals-grid");
const homeView = document.querySelector("#home-view");
const legalView = document.querySelector("#legal-view");
const legalContent = document.querySelector("#legal-content");

let activeCategory = "Todos";
let searchTerm = "";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function specialPriceFor(product) {
  return [
    { value: product.couponPrice, label: "Com cupom" },
    { value: product.pixPrice, label: "No Pix" }
  ]
    .filter((specialPrice) => Number.isFinite(specialPrice.value) && specialPrice.value < product.price)
    .sort((first, second) => first.value - second.value)[0] || null;
}

function discountFor(product) {
  const currentPrice = specialPriceFor(product)?.value ?? product.price;
  if (!product.oldPrice || product.oldPrice <= currentPrice) return 0;
  return Math.round((1 - currentPrice / product.oldPrice) * 100);
}

function productCard(product) {
  const specialPrice = specialPriceFor(product);
  const discount = discountFor(product);
  const priceValue = specialPrice?.value ?? product.price;
  const hasPriceRange = !specialPrice && Number.isFinite(product.price) && Number.isFinite(product.maxPrice);
  const currentPrice = Number.isFinite(priceValue)
    ? hasPriceRange
      ? `${currency.format(priceValue)} a ${currency.format(product.maxPrice)}`
      : currency.format(priceValue)
    : "Consultar preço";
  const oldPrice = product.oldPrice
    ? `<span class="old-price">${currency.format(product.oldPrice)}</span>`
    : "";
  const priceContext = specialPrice
    ? `<span class="price-context">Preço normal: ${currency.format(product.price)}</span>`
    : "";
  const priceMethod = specialPrice
    ? `<span class="price-method">${specialPrice.label}</span>`
    : "";
  const discountLabel = discount
    ? `<span class="discount-tag">-${discount}%</span>`
    : "";
  const affiliateUrl = product.affiliateUrl || "https://shopee.com.br/";

  return `
    <article class="product-card">
      <div class="product-visual${product.image ? "" : " image-failed"}">
        ${discountLabel}
        <span class="visual-fallback" aria-hidden="true">${escapeHTML(product.image ? product.category : "FOTO PENDENTE")}</span>
        ${product.image ? `<img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.alt)}" loading="lazy">` : ""}
      </div>
      <div class="product-info">
        <span class="product-category">${escapeHTML(product.category)}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <div class="price-row">
          <div class="price-primary">
            <span class="current-price${hasPriceRange ? " is-range" : ""}">${currentPrice}</span>
            ${priceMethod}
          </div>
          ${oldPrice}
          ${priceContext}
        </div>
        <a class="buy-button" href="${escapeHTML(affiliateUrl)}" target="_blank" rel="sponsored noopener noreferrer">
          <span>COMPRAR NA SHOPEE</span>
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M10 5l5 5-5 5" /></svg>
        </a>
      </div>
    </article>
  `;
}

function setImageFallbacks(root) {
  root.querySelectorAll(".product-visual img").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.closest(".product-visual").classList.add("image-failed");
    }, { once: true });
  });
}

function renderFeatured() {
  featuredGrid.innerHTML = products.filter((product) => product.featured).map(productCard).join("");
  dealsGrid.innerHTML = products.filter((product) => product.deal).slice(0, 4).map(productCard).join("");
  setImageFallbacks(featuredGrid);
  setImageFallbacks(dealsGrid);
}

function renderCatalog() {
  const normalizedTerm = searchTerm.trim().toLocaleLowerCase("pt-BR");
  const matchingProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchableText = `${product.name} ${product.category}`.toLocaleLowerCase("pt-BR");
    return matchesCategory && searchableText.includes(normalizedTerm);
  });

  catalogGrid.innerHTML = matchingProducts.length
    ? matchingProducts.map(productCard).join("")
    : `<div class="empty-state"><span class="empty-mark">0</span><h3>Nenhum achado por aqui</h3><p>Tente outro termo ou escolha uma categoria diferente.</p></div>`;
  catalogStatus.textContent = `${matchingProducts.length} ${matchingProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}`;
  setImageFallbacks(catalogGrid);
}

function selectCategory(category) {
  activeCategory = category;
  document.querySelectorAll("[data-category]").forEach((button) => {
    const selected = button.dataset.category === activeCategory;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderCatalog();
}

function renderCategories() {
  const categories = ["Todos", ...new Set(products.map((product) => product.category))];
  const counts = products.reduce((totals, product) => {
    totals[product.category] = (totals[product.category] || 0) + 1;
    return totals;
  }, {});

  categoryFilters.innerHTML = categories.map((category) => `
    <button class="filter-chip${category === "Todos" ? " is-active" : ""}" type="button" data-category="${escapeHTML(category)}" aria-pressed="${category === "Todos"}">
      ${escapeHTML(category)}
    </button>
  `).join("");

  categoryTiles.innerHTML = categories.filter((category) => category !== "Todos").map((category, index) => `
    <button class="category-tile" type="button" data-category="${escapeHTML(category)}" aria-pressed="false">
      <span class="category-number">0${index + 1}</span>
      <span class="category-name">${escapeHTML(category)}</span>
      <span class="category-count">${counts[category]} ${counts[category] === 1 ? "item" : "itens"}</span>
      <span class="category-arrow" aria-hidden="true">↗</span>
    </button>
  `).join("");
}

const legalPages = {
  sobre: {
    eyebrow: "QUEM SOMOS",
    title: "Garimpo bom é garimpo compartilhado.",
    paragraphs: [
      "O SUPER LINKS SHOPEE reúne produtos interessantes e ofertas encontradas na Shopee em uma vitrine simples de explorar. Nosso objetivo é ajudar você a descobrir opções e comparar preços com mais praticidade.",
      "Somos um projeto independente e não somos a Shopee. As informações de preço, disponibilidade, frete e condições podem mudar; confirme os detalhes na página do vendedor antes de concluir sua compra."
    ]
  },
  privacidade: {
    eyebrow: "SEUS DADOS",
    title: "Política de Privacidade",
    paragraphs: [
      "Esta página funciona sem cadastro e não solicita dados pessoais. A busca e os filtros são processados localmente no seu navegador. Este site não vende nem compartilha dados pessoais coletados por formulários.",
      "Ao selecionar um produto, você acessa uma página externa da Shopee. A partir desse momento, a política de privacidade e as tecnologias utilizadas são as da plataforma e do vendedor, não as deste site.",
      "Links externos podem usar parâmetros de afiliado para atribuir uma eventual comissão. Consulte as configurações do seu navegador para controlar cookies e dados de navegação. Esta política deve ser revisada se novas ferramentas, formulários ou métricas forem adicionados.",
      "Responsável pelo Top Achados: Wallace Dourado Rosa.",
      "Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail wallacedourado33@gmail.com."
    ]
  },
  termos: {
    eyebrow: "CONDIÇÕES DE USO",
    title: "Termos de Uso",
    paragraphs: [
      "O conteúdo do SUPER LINKS SHOPEE é informativo. Não vendemos, armazenamos ou enviamos os produtos listados. A compra, o pagamento, a entrega, as trocas e o suporte são responsabilidade da Shopee e do vendedor responsável pelo anúncio.",
      "Preços e disponibilidade são definidos por terceiros e podem mudar sem aviso. Antes de comprar, confira as informações atualizadas, avaliações, especificações e condições diretamente no anúncio.",
      "Ao navegar neste site, você concorda em usá-lo de forma lícita. Estes termos podem ser atualizados para refletir mudanças no funcionamento do projeto."
    ]
  },
  transparencia: {
    eyebrow: "PUBLICIDADE E AFILIADOS",
    title: "Transparência nos links",
    paragraphs: [
      "Alguns links desta vitrine podem ser links de afiliado. Se você comprar por meio deles, o SUPER LINKS SHOPEE poderá receber uma comissão, sem custo adicional para você.",
      "A comissão não determina o preço do produto e não garante que uma oferta seja a melhor disponível. Preços, descontos e estoque podem mudar; verifique sempre o valor final na Shopee.",
      "Os links demonstrativos deste projeto precisam ser substituídos pelos links de afiliado oficiais antes da publicação. Produtos e imagens também são exemplos e devem ser conferidos e atualizados pelo responsável pelo site."
    ]
  }
};

function renderPageFromHash() {
  const pageKey = window.location.hash.slice(1).split("?")[0];
  const page = legalPages[pageKey];
  homeView.hidden = Boolean(page);
  legalView.hidden = !page;

  if (page) {
    legalContent.innerHTML = `
      <span class="eyebrow">${page.eyebrow}</span>
      <h1>${page.title}</h1>
      ${page.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <a class="text-link" href="#inicio">Voltar para a vitrine <span aria-hidden="true">↗</span></a>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value;
  renderCatalog();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  renderCatalog();
  document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
});

[categoryFilters, categoryTiles].forEach((container) => {
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectCategory(button.dataset.category);
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("hashchange", renderPageFromHash);
document.querySelector("#current-year").textContent = new Date().getFullYear();
renderCategories();
renderFeatured();
renderCatalog();
renderPageFromHash();
