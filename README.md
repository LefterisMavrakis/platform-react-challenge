# GlobalWebIndex Engineering Challenge

## Exercise: CatLover

Create a React application for cat lovers which is going to build upon thecatapi.com and will have 3 views.
The **first** view displays a list of 10 random cat images and a button to load more. Clicking on any of those images opens a modal view with the image and the information about the cat’s breed if available. This would be a link to the second view below - the breed detail. The modal should also contain a form to mark the image as your favourite (a part of the third view as well). Make sure you can copy-paste the URL of the modal and send it to your friends - they should see the same image as you can see.

The **second** view displays a list of cat breeds. Each breed opens a modal again with a list of cat images of that breed. Each of those images must be a link to the image detail from the previous point.

The **third** view allows you do the following things:

- Display your favourite cats
- Remove an image from your favourites (use any UX option you like)

You can find the API documentation here: https://developers.thecatapi.com/
We give you a lot of freedom in technologies and ways of doing things. We only insist on you using React.js. Get creative as much as you want, we WILL appreciate it. You will not be evaluated based on how well you follow these instructions, but based on how sensible your solution will be. In case you are not able to implement something you would normally implement for time reasons, make it clear with a comment.

## Submission

Once you have built your app, share your code in the mean suits you best
Good luck, potential colleague!

## Initialize project

system requirements:

- node >=18
- npm >= 10

1. Install dependencies:

```bash
npm install
```

2. Create an `.env` at the root of the project. Create an env var inside `.env` VITE_CAT_API_KEY=<your_api_key>

3. Start the development server

```bash
npm run dev
```

4. Run unit tests

```bash
npx vitest run
```

4. Run e2e tests

```bash
npx cypress run --spec "cypress/e2e/app.cy.ts" --headed
```

## Application Implementation Summary

The Cats Application is designed with three main views and two modal views, offering a user-friendly interface to explore, manage, and interact with cat-related data. Below is a detailed breakdown of its structure and functionality.

1.  Home Page (Cat List View)

    The Home Page serves as the primary view, displaying a list of cat cards.

    - Cat Cards: Each card represents a cat and includes functionality to:
    - Favorite/Unfavorite: Allows users to mark a cat as a favorite or remove it from favorites. This feature is designed to be consistent across the application, enabling users to favorite cats from any view where they appear.
    - Details Button: Provides an option to view additional details about a specific cat. Clicking this button opens a modal with detailed information.

    - Favorite Context Provider:
      Manages the global state for favorites across the application.
      Ensures seamless synchronization of the favorite mechanism in all views.
      Handles API requests to keep the favorites state up-to-date.

2.  Breeds List View

    Displays a comprehensive list of all cat breeds with breed rating metrics.

    - Breed data is fetched using a custom Axios instance, as the TheCatAPI npm module did not directly support retrieving breed lists.

3.  Favorites View

    Allows users to view and remove all the cats they have marked as favorites.
    Leverages the Favorite Context Provider to display the favorite cats seamlessly.

4.  Modal Views

    - Cat Details Modal

      Displays detailed information about a specific cat. Uses React Router's modal routes, allowing the modal to be bookmarkable and shareable.
      Provides a smooth user experience for sharing cat details with friends.

    - Bree cats modal

      Displays a list of cats of the selected breed

## Improvements

- Cat list virtualization to prevent page unresponsiveness when the page becomes busy due to many results
- Also use load more logic on favourites page by leveraging directly the cat api instead of the npm module
- A scroll to top button would be helpfull
- Success messages on successfull api actions
- Error messages on failed api actions
- React query for caching, handle loading/error states and efficient data management
- Break down some of the app component to smaller parts to improve readability, reusability and maintainability
- Full unit and e2e test coverage
