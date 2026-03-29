# 💜 BORAHE SHOP - Guia do Proprietário

Parabéns! Sua loja está pronta para o mundo. Este guia explica como colocá-la no ar e configurar pagamentos reais.

## 🚀 Como Hospedar (Grátis)

A forma mais fácil de colocar sua loja online é usando a **Vercel** ou **Netlify**:

1.  Crie uma conta em [Vercel.com](https://vercel.com).
2.  Instale a Vercel CLI ou conecte seu repositório do GitHub.
3.  Arraste a pasta do projeto para o dashboard da Vercel.
4.  **Pronto!** Você terá um link como `borahe-shop.vercel.app`.

## 💳 Configurando Pagamentos Reais (Mercado Pago)

Atualmente, o checkout está em modo de **Simulação**. Para aceitar dinheiro real via **Pix** ou Cartão:

1.  Crie uma conta de vendedor no [Mercado Pago Developers](https://www.mercadopago.com.br/developers).
2.  Obtenha sua **Public Key** e **Access Token**.
3.  No arquivo `js/checkout.js`, substitua o valor de `MERCADO_PAGO_PUBLIC_KEY` pela sua chave real.
4.  Para segurança total, as "Preferências" de pagamento devem ser geradas em um servidor (Backend). Recomendamos usar as **Vercel Functions** para isso.

## 📦 Estrutura do Projeto

-   `index.html`: A vitrine da loja.
-   `css/style.css`: O design system "Borahe".
-   `js/products.js`: Onde você adiciona novos produtos.
-   `js/cart.js`: Inteligência do carrinho, frete e cupons.
-   `js/checkout.js`: Integração com o Mercado Pago.

## 🎁 Cupons Ativos
-   `ARMY10` (10% de desconto)
-   `BORAHE20` (20% de desconto)

---
*Desenvolvido com 💜 por Antigravity para o ARMY.*
