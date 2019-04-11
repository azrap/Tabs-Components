class Dropdown {
  constructor(DOMelement) {
    
    this.element=DOMelement;
    
   
    this.button = this.element.querySelector(".dropdown-button");
    
    this.content = JSelement.querySelector('.dropdown-content');

    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => { this.toggleContent()
    })
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));