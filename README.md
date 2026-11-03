# SUPER LINKS SHOPEE

Vitrine estática de produtos e ofertas da Shopee, feita com HTML, CSS e JavaScript puro. Não há dependências nem etapa de build: abra `index.html` no navegador para visualizar.

## Atualizar produtos

Edite a lista `products` no início de `script.js`. Cada item aceita `id`, `name`, `category`, `price`, `maxPrice`, `couponPrice`, `pixPrice`, `oldPrice`, `image`, `alt`, `featured`, `deal` e `affiliateUrl`. Use `maxPrice` para produtos com variações de preço, `couponPrice` para ofertas com cupom, `pixPrice` para preço especial no Pix, `oldPrice: null` quando não houver preço anterior e `image: ""` quando ainda não tiver uma foto. O menor valor entre preço normal, cupom e Pix é destacado automaticamente; o preço normal aparece como referência, e o desconto é calculado sobre o menor valor.

O catálogo contém os 12 produtos configurados para esta vitrine. Antes de publicar, teste os links de afiliado e confirme preços, estoque e descontos diretamente nos anúncios. Use imagens autorizadas e correspondentes aos produtos; prefira manter os arquivos em `assets` para não depender de URLs externas que podem expirar.

## Conteúdo institucional

As páginas Sobre nós, Política de Privacidade, Termos de Uso e Transparência são exibidas por rotas no hash e têm seus textos em `legalPages`, no `script.js`. Revise os textos para refletir a operação real do site, principalmente se adicionar formulários, métricas ou outros serviços.

As imagens do catálogo e do destaque principal estão em `assets`. Ao trocar uma foto, atualize também o campo `image` do produto correspondente em `script.js`.
