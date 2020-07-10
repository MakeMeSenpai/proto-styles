// Example of a webcompenet
// this goes over the creation of a custom checkbox tag.
// note that custom tags must contain a - in it's name.
(function() {
    // must extend HTML Elements 
    class CheckyBox extends HTMLElement {
      // our constructor
      constructor() {
        super(); // MUST call super!
        //Prefixed with an _ to ensure that we don't overwrite defualt html
        // this opens the shadowRoot of an element
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        // name this as you would a class, this si defined as a new dim
        this._container = document.createElement('div')
        // then style it using html.style
        this._container.style.display = 'flex'
        this._container.style.alignItems = 'center'
        this._container.style.cursor = 'pointer'
        // once this is done, append it to the shadow root
        this._shadowRoot.appendChild(this._container)
  
        this._box = document.createElement('div')
        this._box.style.width = '20px'
        this._box.style.height = '20px'
        this._box.style.display = 'inline-block'
        this._box.style.backgroundColor = 'red'
        this._container.appendChild(this._box)
  
        this._check = document.createElement('div')
        this._check.style.width = '10px'
        this._check.style.height = '6px'
        this._check.style.display = 'inline-block'
        this._check.style.borderColor = 'white'
        this._check.style.borderLeftStyle = 'solid'
        this._check.style.borderBottomStyle = 'solid'
        this._check.style.transform = 'translate(4px, 2px) rotate(-45deg)'
        this._box.appendChild(this._check)
        // innerHTML controls things between the tags, such as text
        this._text = this.innerHTML
        this._label = document.createElement('span')
        this._label.innerHTML = this._text
        this._label.style.marginLeft = '0.5em'
        this._label.style.cursor = 'pointer'
        this._container.appendChild(this._label)

        // Creates Boolean for event listener
        this._isChecked = true
  
        this._container.addEventListener('click', (e) => {
          this._isChecked = !this._isChecked
          this._check.style.display = this._isChecked ? 'block' : 'none'
        })
      }
    }
    // this defines our custom tag
    customElements.define('checky-box', CheckyBox);

    // this is used to create custom parameters
    var list = document.querySelector("checky-box");
    // sets the name of the param <checky-box filter="Hello World"></checky-box>
    list.getAttribute("filter"); // -> "Hello World"
    // this resets the value. So in function senerio can be useful
    list.setAttribute("filter", "A new value");
    list.getAttribute("filter"); // -> "A new value"
    // Here we repeat the process changing the value to "Suprise"
    list.setAttribute("whatever", "Suprise");
    list.getAttribute("whatever"); // -> "Suprise"
  })()