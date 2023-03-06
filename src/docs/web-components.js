import Carousel from '../components/Carousel/Carousel.svelte'
// import type { SvelteComponent } from 'svelte'
//import SvelteComponent from 'svelte'

customElements.define(
  // I recommend prefixing your custom elements, but for this example
  // I'm keeping it simple.
  'mus-carousel',
  class extends HTMLElement {
    _element;
    
    constructor() {
      super()
  
      // Create the shadow root.
      const shadowRoot = this.attachShadow({ mode: 'open' });
      let element = document.getElementById('innerDocs');
      shadowRoot.appendChild(element);
      let element1 = document.getElementById('inner1');
      shadowRoot.appendChild(element1);
      let element2 = document.getElementById('inner2');
      shadowRoot.appendChild(element2);
      let element3 = document.getElementById('inner3');
      shadowRoot.appendChild(element3);
  
      // Instantiate the Svelte Component
      this._element = new Carousel({
        // Tell it that it lives in the shadow root
        target: shadowRoot,
        // Pass any props
        //props: {
        //  // This is the place where you do any conversion between
        //  // the native string attributes and the types you expect
        //  // in your svelte components
        //  items: this.getAttribute('items').split(','),
        //},
      })
    }
    disconnectedCallback() {
      // Destroy the Svelte component when this web component gets
      // disconnected. If this web component is expected to be moved
      // in the DOM, then you need to use `connectedCallback()` and
      // set it up again if necessary.
      this._element?.$destroy();
    }
  }
)