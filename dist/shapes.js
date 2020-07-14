/* Shapes */
// 2D Shapes
(function() {
//square
    class Square extends HTMLElement {
      constructor() {
        super();
        this._size = 50;
        this._color = "red";
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._square = document.createElement('div');
        this._square.style.display = 'block';
        this._draw()
        this._shadowRoot.appendChild(this._square);
      }

      _draw() {
        this._square.style.height = `${this._size}px`;
        this._square.style.width = `${this._size}px`;
        this._square.style.backgroundColor = this._color;
      }

      static get observedAttributes() {
        return ['size', 'color'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
          this._size = newValue // set the size
          // Resize your shape
          // ****if unacceptable input use oldValue
        } else if (name === 'color') {
          this._color = newValue // set the color
        }
        this._draw()
      }
    }
    customElements.define('square-2d', Square);

//rectangle
  class Rectangle extends HTMLElement {
    constructor() {
      super();
      this._size = 50;
      this._color = "red";
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._square = document.createElement('div');
      this._square.style.display = 'block';
      this._draw()
      this._shadowRoot.appendChild(this._square);
    }

    _draw() {
      this._square.style.height = `${this._size - 15}px`;
      this._width = this._size + 15
      this._square.style.width = `${this._width}px`;
      this._square.style.backgroundColor = this._color;
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
      this._draw()
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
    this._draw()
    this._diamond.style.transform = "rotate(45deg)";
    this._shadowRoot.appendChild(this._diamond);
  }

  _draw() {
    this._diamond.style.height = this._size;
    this._diamond.style.width = this._size;
    this._diamond.style.backgroundColor = this._color;
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
    this._draw()
  }
}
customElements.define('diamond-2d', Diamond);

//parallelogram
class Parallelogram extends HTMLElement {
  constructor() {
    super();
    this._size = 50;
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._parallelogram = document.createElement('div');
    this._parallelogram.style.display = 'block';
    this._draw()
    this._parallelogram.style.transform = "skew(-32deg)";
    this._shadowRoot.appendChild(this._parallelogram);
  }

  _draw() {
    this._parallelogram.style.height = `${this._size}px`;
    this._parallelogram.style.width = `${this._size}px`;
    this._parallelogram.style.backgroundColor = this._color;
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
    this._draw()
  }
}
customElements.define('parallelogram-2d', Parallelogram);

//triangle
class Triangle extends HTMLElement {
  constructor() {
    super();
    this._size = 50;
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._triangle = document.createElement('div');
    this._triangle.style.display = 'block';
    this._triangle.style.height = "0";
    this._triangle.style.width = "0";
    this._draw()
    this._shadowRoot.appendChild(this._triangle);
  }

  _draw() {
    this._triangle.style.borderLeft = `${this._size/2}px solid transparent`;
    this._triangle.style.borderRight = `${this._size/2}px solid transparent`;
    this._triangle.style.borderBottom = `${this._size}px solid ${this._color}`;
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
    this._draw()
  }
}
customElements.define('triangle-2d', Triangle);

//scalene-triangle
class Scalene extends HTMLElement {
  constructor() {
    super();
    this._size = 50;
    this._color = "none";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._scalene = document.createElement('div');
    this._scalene.style.display = 'block';
    this._scalene.style.height = "0";
    this._scalene.style.width = "0";
    this._draw()
    this._scalene.style.transform = "skew(-15deg)";
    this._shadowRoot.appendChild(this._scalene);
  }

  _draw() {
    this._scalene.style.borderLeft = `${this._size/2}px solid transparent`;
    this._scalene.style.borderRight = `${this._size/3}px solid transparent`;
    this._scalene.style.borderBottom = `${this._size}px solid ${this._color}`;
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
    this._draw()
  }
}
customElements.define('scalene-2d', Scalene);

//right-triangle
class Right extends HTMLElement {
  constructor() {
    super();
    this._size = 50;
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._right = document.createElement('div');
    this._right.style.display = 'block';
    this._right.style.height = "0";
    this._right.style.width = "0";
    this._draw()
    this._shadowRoot.appendChild(this._right);
  }

  _draw() {
    this._right.style.borderRight = `${this._size}px solid transparent`;
    this._right.style.borderBottom = `${this._size}px solid ${this._color}`;
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
    this._draw()
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
    this._size = 50;
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._circle = document.createElement('div');
    this._circle.style.display = 'block';
    this._draw()
    this._circle.style.borderRadius = "50%";
    this._shadowRoot.appendChild(this._circle);
  }

  _draw() {
    this._circle.style.height = `${this._size}px`;
    this._width = this._size + 15
    this._circle.style.width = `${this._width}px`;
    this._circle.style.backgroundColor = this._color;
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
    this._draw()
  }
}
customElements.define('circle-2d', Circle);

//oval
class Oval extends HTMLElement {
  constructor() {
    super();
    this._size = 50;
    this._color = "red";
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._oval = document.createElement('div');
    this._oval.style.display = 'block';
    this._draw()
    this._oval.style.borderRadius = "50%";
    this._shadowRoot.appendChild(this._oval);
  }

  _draw() {
    this._oval.style.height = `${this._size - 15}px`;
    this._oval.style.width = `${this._size}px`;
    this._oval.style.backgroundColor = this._color;
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
    this._draw()
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