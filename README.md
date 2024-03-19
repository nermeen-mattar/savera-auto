# Senior React Assignment

In this assignment we would like you to build an amazing Pets web app using the provided mock-up designs. 🧑‍🏭

-   You can use the below mentioned REST API endpoint to request the information for your application
-   You have an option to either use this boilerplate setup or build your own, taking into consideration that the code should be properly linted and have a consistent structure

Carefully read the instructions before you proceed.

## Scope

The idea of the assignment is to develop an app that displays different types of `pets on a filter page`.

-   On this page, each pet profile should contain an `avatar picture, pet name, and a view option` to navigate to its own details page
-   On the top of the filter page there should be a `search option`, which performs a fuzzy search operation to filter pet results on the fly
-   At the bottom of the page you should show different `categories` for the pets
-   Use React hooks and build one custom hook (if possible)
-   State management (like redux, mobx, or recoil etc.) to store and share the data
-   Application should be responsive
-   Make it accessible and use Semantic HTML
-   Make it type safe
-   Use proper CSS naming conventions
-   Make your components reusable (Styled components)
-   Fetch data from given REST API endpoint
-   Ensure it works on modern browsers

_Bonus points:_

-   `Navigating to "pet details page" from "filter page"` to display pet information with its avatar picture
-   Support for `screen readers`

Note: All the information for your application can be obtained from REST API endpoint which are mentioned below.

## Design specifics

Refer to the designs and specifications in the `./designs` directory for detailed information on component specifications, layout designs, color codes and font usage.

### Designs

-   [Component Specifications](./designs/component-specifications.png)
-   [Filter Page - Desktop](./designs/filter-page-desktop.png)
-   [Filter Page - Mobile](./designs/filter-page-mobile.png)
-   [Search - Desktop](./designs/search-desktop.png)
-   [Search - Mobile](./designs/search-mobile.png)
-   [Pet Details Page - Desktop](./designs/pet-details-page-desktop.png)
-   [Pet Details Page - Mobile](./designs/pet-details-page-mobile.png)

### Static assets

All the required `icons and images` are added to the `./public` directory

### Colors used

-   Red: `#BF2C23`
-   Yellow: `#E0B833`
-   Light yellow: `#F8CF47`
-   Dark blue: `#285DAB`
-   Light blue: `#2B6DB1`
-   Dark grey: `#666666`
-   Grey: `#DDDDDD`
-   Light grey: `#F0F0F0`
-   White: `#FFFFFF`
-   Black: `#111111`

### Font used

`Open Sans`

## API specifics

All pet profile data is to be fetched from the following API endpoint:

### Pet results API

```
Method: GET
URL: https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets
```

## Conditions

Take as much time as you feel comfortable with. Based on the amount of time you spent incombination with what you handed in we'll go over your assignment and ask questions along the way. Your reasoning is the most important to us!

Make sure you hand in your assignment 48 hours before the second interview! That way you give us some time to go over it too 🤓

### Submission instructions

Please create a zip file of the project folder (excluding the node_modules directory) and upload it to a cloud service (such as WeTransfer or Google Drive). Share the link via email with the recruiter at least 48 hours before the second interview.

## Usage

### Global dependencies

Make sure you have Node 14 and yarn installed:

-   [Node.js](https://nodejs.org/)
-   [yarn](https://yarnpkg.com/)

### Install dependencies

```
yarn
```

### Run development server

```
yarn dev
```

Will open your default browser to [http://localhost:5173](http://localhost:5173).

Vite will watch for changes in the `./src` directory.

### Build production bundles

```
yarn build
```

Will compile and minify. Will Minify and uglify JavaScript and output the bundled assets to `./dist`.

## Stack

The boilerplate uses create react app and should run out of the box without any modifications.

## Questions

-   **Question**: How much time do I have?

-   **Answer**: We don't give you a time limit. If you only have a few hours to spare, take that, if you wanna spend your weekend on it, go for it! We don't judge on the amount of time you spend, we wanna know the reasons behind your decisions.

-   **Question**: Can I use NPM packages or frameworks like Material-ui?

-   **Answer**: We don't recommend this since it decreases the chance of showing your skills. Try to limit yourself as much as possible.

If you have any other questions while working on the exercise feel free to reach out. We will be happy to help.

Happy coding! 😺
