
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.tabsLink;
    this.element=element;
 
    // matching the tabsItem i.e the content inside the tabs to the tabs link below. Recall in CSS we say data-tab which is the same as saying dataset.tab in JS so dat-tab~=dataset.tab:
//itemElement= tabs item
//element =

  this.data=this.element.dataset.tab;

    this.itemElement= document.querySelector(`.tabs-items[data-tab='${this.data}']`) 

    //with the above ^^ line of code, we should have matched our tabs content with our tabs link.

    //BELOW: we create tabsItem objects our 

    this.tabItem= new TabItem(this.itemElement);
    

    //

    
    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener( 'click', () => {this.select()
    })


  };

  //methods:

  select() {
    // Get all of the elements with the tabs-link class
     const links=document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach( link => {link.classList.remove("tabs-links-selected")
  
  });


    // Add a class named "tabs-link-selected" to this link
    // this.element;

    this.tabsLink.classList.add("tabs-link-selected")
    
    // Call the select method on the item associated with this link

    this.tabItem.select();
   
  }
}

// creating the TabsItem class i.e. the class for the content inside the tabs below:

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element=element;

  }

  select() {

    // Select all ".tabs-item" elements from the DOM
    const items=document.querySelectorAll(".tabs-item");

    // Remove the class "tabs-item-selected" from each element

    items.forEach( item => {item.classList.remove("tabs-item-selected")
  
  })    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add("tabs-item-selected");
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