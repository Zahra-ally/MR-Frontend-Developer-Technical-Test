# Clothing Site with Cart Functionality
![Screen Shot 2023-07-28 at 8 57 41 PM](https://github.com/Zahra-ally/MR-Frontend-Developer-Technical-Test/assets/91510851/f4168dd5-675e-4e07-9417-ffdbbae4da57)

## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [API](#api)



## Description
A simple product details section for a clothing site with cart functionality to store a customer's product selections. The app is built using React, JavaScript, HTML, and CSS. Users can view product information, select product sizes, and add items to the cart.

## Demo
App deployed on https://main--statuesque-choux-d2cba0.netlify.app/

## Features
- Display product details, including title, description, price, and available sizes.
- Allow users to select a size and add products to the cart.
- Display a mini-cart with the selected products and quantities.
- Hover effect on the "Add to Cart" button with color transition.
- Responsive design for different screen sizes.

## Technologies Used
- React
- JavaScript
- HTML
- CSS
- Axios (for API requests)

## Installation
1. Clone the repository: `git clone https://github.com/Zahra-ally/MR_tech_test.git`
2. Navigate to the project directory: `cd MR_tech_test`
3. Install dependencies: `npm install`

## Usage
1. Run the app locally: `npm start`
2. Open your browser and visit: `http://localhost:3000`
## Testing
The Clothing Site with Cart Functionality includes automated tests to ensure the application functions as expected. These tests are written using [Cypress](https://www.cypress.io/), a powerful end-to-end testing framework for web applications.

### Running Tests

To run the Cypress tests locally, follow these steps:

1. Ensure that your React app is running at `http://localhost:3000`. If not, start the development server by running `npm start`.

2. Open a new terminal and navigate to your project's root directory.

3. Run the Cypress Test Runner with the following command:
   ```bash
   npm run cypress:open
   
![Screen Shot 2023-07-28 at 8 57 01 PM](https://github.com/Zahra-ally/MR-Frontend-Developer-Technical-Test/assets/91510851/fe5cadaf-e9fa-4f5b-88c9-92dac229e859)

## Deployment
Deployed using Netlify. Avalible on https://main--curious-churros-11b5c8.netlify.app/

## API
The product information is consumed from the Product API using an HTTP GET request:
API Endpoint: `https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product`

The API response should be in the following format:
```json
{
  "id": 1,
  "title": "Classic Tee",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...",
  "price": 75.0,
  "imageURL": "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
  "sizeOptions": [
    {"id": 1, "label": "S"},
    {"id": 2, "label": "M"},
    {"id": 3, "label": "L"}
  ]
}



