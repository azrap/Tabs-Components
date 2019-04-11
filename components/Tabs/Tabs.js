
class TabLink {
  constructor(tabsLink) {
    // Assign this.element to the passed in DOM element
    // this.tabsLink;
    this.tabsLink=tabsLink;
 
    // matching the tabsItem i.e the content inside the tabs to the tabs link below. Recall in CSS we say data-tab which is the same as saying dataset.tab in JS so dat-tab~=dataset.tab:

    this.tabsItem= document.querySelector(`.tabs-items[data-tab='${this.tabsLink.dataset.tab}']`) 

    //with the above ^^ line of code, we should have matched our tabs content with our tabs link.

    //BELOW: we create tabsItem objects our 

    this.tabsItem= new tabsItem(this.tabsItem);
    

    
    // Add a click event listener on this instance, calling the select method on click


  };

  //methods:

  select() {
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link

    this.content

  }
}

// creating the TabsItem class i.e. the class for the content inside the tabs below:

class TabItem {
  constructor(tabsItem) {

    this.tabsItem=tabsItem;
    
  
  }

//methods:
  select() {

    this.tabsItem.classList.toggle('tabs-item-selected');




    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}






/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll('.tabs-link').forEach(
  link => {
    new TabLink(link);
  }
);