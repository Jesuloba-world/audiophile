# Audiophile e-commerce website

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![audiophile 1](https://user-images.githubusercontent.com/54047461/228686886-be247628-f12a-4816-a9ad-d6bbf3638a4a.png)
![audiophile 2](https://user-images.githubusercontent.com/54047461/228686950-9b1fcb3f-63b5-485f-b156-e709fc723253.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/fullstack-audiophile-ecommerce-website-nextjs-django-and-graphql-O1nl4QvFtt)
- Live Site URL: [Live site](https://audiophilefm.netlify.app/)
- Backend: [django graphql backend](https://github.com/Jesuloba-world/audiophile-server)

## My process

### Built with

- [React](https://react.dev/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- a little bit of [tailwind](https://tailwindcss.com/)
- [Redux toolkit](https://redux-toolkit.js.org/)
- [Django](https://www.djangoproject.com/) - for graphql backend
- [Apollo](https://www.apollographql.com/docs/react/) - for Graphql
- [Next Auth](https://next-auth.js.org/) - for secure Oauth authentication

### What I learned

- I understood more on how the whole next.js SSG and SSR works.
- Played around with nginx and some cloud services to figure out the best way to deploy frontends and backends
- Figured out one of the best Oauth methods available for next js. Next Auth

### Continued development

- I'm going to keep using and evangelizing next auth as the best way to keep your web app secure.
- I'm also going to start picking up other backend languages like Node.js

### Useful resources

- [Using Credentials provider with a custom backend in NextAuth.js!](https://dev.to/twisha/using-credentials-provider-with-a-custom-backend-in-nextauth-js-43k4) - This helped me when I was struggling with setting up next auth with my backend.

- [Graphql django](https://www.youtube.com/playlist?list=PLOLrQ9Pn6caxz00JcLeOR-Rtq0Yi01oBH) - This is an amazing playlist from very academy that details how to setup graphql with django.

## Author

- Website - [Jesuloba John](https://jesuloba.netlify.app/)
- Frontend Mentor - [@Jesuloba-world](https://www.frontendmentor.io/profile/Jesuloba-world)

## Acknowledgments

Alright, I'm just gonna give acknowledgement to chatGPT, came at the right time, helped a lot.
