/* Shapes */
// 2D Shapes
(function() {
//square
    class Square extends HTMLElement {
      constructor() {
        super();
        this._size = "50px";
        this._color = "red";
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._square = document.createElement('div');
        this._square.style.display = 'block';
        this._square.style.height = this._size;
        this._square.style.width = this._size;
        this._square.style.backgroundColor = this._color;
        this._shadowRoot.appendChild(this._square);
      }

      static get observedAttributes() {
        return ['size']//, 'color'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
          this._size = newValue // set the size
          // Resize your shape
        } else if (name === 'color') {
          this._color = newValue // set the color
        }
      }
    }
    customElements.define('square-2d', Square);

//rectangle
  class Rectangle extends HTMLElement {
    constructor() {
      super();
      this._size = "35px";
      this._color = "red";
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._square = document.createElement('div');
      this._square.style.display = 'block';
      this._square.style.height = "45px";
      this._square.style.width = "65px";
      this._square.style.backgroundColor = this._color;
      this._shadowRoot.appendChild(this._square);
    }

    static get observedAttributes() {
      return ['size', 'color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'size') {
        this._size = newValue // set the size

      } else if (name === 'color') {
        this._color = newValue // set the color
      }
    }
  }
  customElements.define('rectangle-2d', Rectangle);

//diamond
class Diamond extends HTMLElement {
  constructor() {
    super();
    this._size = "50px";
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._diamond = document.createElement('div');
    this._diamond.style.display = 'block';
    this._diamond.style.height = this._size;
    this._diamond.style.width = this._size;
    this._diamond.style.transform = "rotate(45deg)";
    this._diamond.style.backgroundColor = this._color;
    this._shadowRoot.appendChild(this._diamond);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('diamond-2d', Diamond);

//parallelogram
class Parallelogram extends HTMLElement {
  constructor() {
    super();
    this._size = "50px";
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._parallelogram = document.createElement('div');
    this._parallelogram.style.display = 'block';
    this._parallelogram.style.height = '45px';
    this._parallelogram.style.width = this._size;
    this._parallelogram.style.transform = "skew(-32deg)";
    this._parallelogram.style.backgroundColor = this._color;
    this._shadowRoot.appendChild(this._parallelogram);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('parallelogram-2d', Parallelogram);

//triangle
class Triangle extends HTMLElement {
  constructor() {
    super();
    this._size = "0";
    this._color = "none";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._triangle = document.createElement('div');
    this._triangle.style.display = 'block';
    this._triangle.style.height = this._size;
    this._triangle.style.width = this._size;
    this._triangle.style.borderLeft = "25px solid transparent";
    this._triangle.style.borderRight = "25px solid transparent";
    this._triangle.style.borderBottom = "50px solid red";
    this._shadowRoot.appendChild(this._triangle);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('triangle-2d', Triangle);

//scalene-triangle
class Scalene extends HTMLElement {
  constructor() {
    super();
    this._size = "0";
    this._color = "none";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._scalene = document.createElement('div');
    this._scalene.style.display = 'block';
    this._scalene.style.height = this._size;
    this._scalene.style.width = this._size;
    this._scalene.style.borderLeft = "25px solid transparent";
    this._scalene.style.borderRight = "25px solid transparent";
    this._scalene.style.borderBottom = "50px solid red";
    this._scalene.style.transform = "skew(-32deg)";
    this._shadowRoot.appendChild(this._scalene);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('scalene-2d', Scalene);

//right-triangle
class Right extends HTMLElement {
  constructor() {
    super();
    this._size = "0";
    this._color = "none";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._right = document.createElement('div');
    this._right.style.display = 'block';
    this._right.style.height = this._size;
    this._right.style.width = this._size;
    this._right.style.borderRight = "50px solid transparent";
    this._right.style.borderBottom = "50px solid red";
    this._shadowRoot.appendChild(this._right);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('right-2d', Right);

//pentagon

//hexagon

//heptagon

//octagon

//nonagon

//circle
class Circle extends HTMLElement {
  constructor() {
    super();
    this._size = "50px";
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._circle = document.createElement('div');
    this._circle.style.display = 'block';
    this._circle.style.height = this._size;
    this._circle.style.width = this._size;
    this._circle.style.borderRadius = "50%";
    this._circle.style.backgroundColor = this._color;
    this._shadowRoot.appendChild(this._circle);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('circle-2d', Circle);

//oval
class Oval extends HTMLElement {
  constructor() {
    super();
    this._size = "50px";
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._oval = document.createElement('div');
    this._oval.style.display = 'block';
    this._oval.style.height = "45px";
    this._oval.style.width = "65px";
    this._oval.style.borderRadius = "50%";
    this._oval.style.backgroundColor = this._color;
    this._shadowRoot.appendChild(this._oval);
  }

  static get observedAttributes() {
    return ['size', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      this._size = newValue // set the size

    } else if (name === 'color') {
      this._color = newValue // set the color
    }
  }
}
customElements.define('oval-2d', Oval);

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
})()