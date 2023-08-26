function getMenu() {
    // Assuming this function fetches the menu items from a JSON source and displays them on the screen.
    return fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
      .then(response => response.json())
      .then(menu => {
        // Display the menu to the user
        console.log('Menu:', menu)
      });
  }
  getMenu();