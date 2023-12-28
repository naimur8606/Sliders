# React Slider Components

This repository contains two React slider components (`Slider` and `TabSliders`) that are designed to display product information using the [Swiper](https://swiperjs.com/) library. The sliders fetch product data from a JSON file and present it in an interactive and visually appealing way.
## [Go to DEMO](https://sliders.freelancernaimur.com/)

## Slider-1 Component

### Features
- Utilizes the Swiper library for a smooth sliding experience.
- Fetches product data from a `Products.json` file using the `fetch` API.
- Responsive design with different layouts for large and small screens.
- Displays product information using the `Slide` component.

### Usage
1. Install dependencies:

   ```bash
   npm install swiper react react-dom
   ```

2. Import the `Slider` component:

   ```jsx
   import Slider from './Slider';
   ```

3. Include the `Slider` component in your React application:

   ```jsx
   <Slider />
   ```

## Slider-2 Component

### Features
- Utilizes the Swiper library with tabs for a categorized product display.
- Fetches product data from a `Products.json` file using the `fetch` API.
- Responsive design with different layouts for large and small screens.
- Displays product information using the `Slide` component.

### Usage
1. Install dependencies:

   ```bash
   npm install swiper react react-dom
   ```

2. Import the `TabSliders` component:

   ```jsx
   import TabSliders from './TabSliders';
   ```

3. Include the `TabSliders` component in your React application:

   ```jsx
   <TabSliders />
   ```

## Slide Component

### Features
- Displays individual product information within the sliders.
- Includes product image, discount percentage, title, price, rating, and short description.
- Provides interactive buttons for actions like adding to favorites, reloading, and searching.

### Usage
1. Import the `Slide` component:

   ```jsx
   import Slide from './Slide';
   ```

2. Include the `Slide` component in your React application and pass the product data as a prop:

   ```jsx
   <Slide product={productData} />
   ```

Feel free to customize and integrate these components into your React project to create engaging product sliders.