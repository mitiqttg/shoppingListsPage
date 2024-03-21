# Project 1: Shared shopping list

<img src="./shopping-lists\views\layouts\GifShoppinglist.gif" width="800" height="500">

````!DOCTYPE HTML
This is my first project for Web Software Development course at "fitech101.aalto.fi" 
    -Main page: containting statistics of total number of lists and items created.
    -Shopping lists: all active shopping lists. You can deactivate a list by clicking on "Deactivate list!" button.
    -Single list: return a shopping list and all its items. You can add new item by clicking on "Add item" or collect it by "Mark completed!" button.
- Local deployment:
The application runs locally with Docker Compose.

- To start the application, open up the terminal in the folder that
  contains the `docker-compose.yml` file, in my case, you can right click on shoppingListsPage, 
  choose ```Open in Intergrated Terminal ```,<br> 
  then type ```docker-compose up``` to terminal, click Enter and wait for a bit...<br>
  Finally, go to "http://localhost:7777/" to experience the application.

- To stop the application, press `ctrl+C` (or similar) in the same terminal
  where you wrote the command ```docker-compose up```. Another option is to open up
  a new terminal and navigate to the folder that contains the
  ```docker-compose.yml``` file, and then write ```docker-compose stop```.

## E2E Tests with playwright

To test the application locally, you must first launch the application by docker as the above instructions.
To run E2E tests, go to the same root as when you launch the project above, using the following command:
```docker-compose run --entrypoint=npx e2e-playwright playwright test```<br>
````
