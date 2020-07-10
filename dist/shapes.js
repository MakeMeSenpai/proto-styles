/* Shapes */
// 2D Shapes
//square
(function() {
    class Square extends HTMLElement {
      constructor() {
        super();
        this._size = "50px";
        this._color = "red"
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._square = document.createElement('div');
        this._square.style.display = 'block';
        this._square.style.height = _size;
        this._square.style.width = _size;
        this._square.style.backgroundColor = this._color;
        this._shadowRoot.appendChild(this._container);
      }

      static get observedAttributes() {
        return ['size', 'color'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
          this._size = newValue // set the size
          // Resize your polygon now that you've changed the _size property
        } else if (name === 'color') {
          this._color = newValue // set the color
        }
      }
    }
    customElements.define('square-2d', Square);
})()

//rectangle

//diamond

//parallelogram

//triangle

//scalene-triangle

//right-triangle

//pentagon

//hexagon

//heptagon

//octagon

//nonagon

//circle

//oval

//Special Shapes
//heart

//cross

//arrow

//star

//crescent

//add more logos

// 3D Shapes
//cube

//cuboid

//square-pyramid

//triangular-prism

//triangular-pyramid

//cone

//cylinder

//torus

//sphere