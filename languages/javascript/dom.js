/**
 * Document Object Model (DOM)
 * Source: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
 *
 * Programming interface for HTML and XML documents.
 * It represents the page.
 *
 * Programs can interact with the DOM to change the document structure, style and content.
 * A web page is a document.
 *
 * DOM is typically accessed via JavaScript.
 */

/**
 * DOM Built-in Methods
 * Source: https://www.w3schools.com/js/js_htmldom_document.asp
 */


const testDom = () => {
  let domTestVal;

  /**
   * Finding elements.
   */

  // get FIRST element based on selector
  // returns the element node (unline querySelectorAll, which returns a nodelist)
  document.querySelector('.test-element__image');
  querySelector

  // get ALL elements based on selector
  // returns a node list (of element notes)
  // You can loop through this, or access by index
  document.querySelectorAll('.test-element__description');
  querySelectorAll

  // get element by ID
  document.getElementById('test-element-1');
  getElementById

  // get elements by class name
  document.getElementsByClassName('test-element__content');
  getElementsByClassName

  // get elements by tag name
  document.getElementsByTagName('picture');
  getElementsByTagName

  /**
   * Changing elemnts
   */

  let firstDesc = document.querySelector('.test-element__description');

  // change the inner HTML of an element
  document.querySelector('.test-element__description').innerHTML = 'Hello Puppy!';
  .innerHTML

  // change the attribute value of an element
  // alt
  // disabled
  // href
  // id
  // src
  // style
  // title
  document.querySelector('.test-element__image').src = 'leilenah.jpg';
  .style.color

  // change the style of an element
  document.querySelector('.test-element__description').style.color = 'red';

  // set element attribute
  firstDesc.setAttribute('style', 'color: blue');

  /**
   * Adding and deleting elements
   */

  // get section elements
  const sectionElements = document.querySelectorAll('.test-element__section');

  // create new element
  const section = document.createElement('section');
  createElement

  // store element string
  const ghostElement =
    `<div class="dom-element">
      <p class="dom-element__text">
        Ghost ride the whip!
      </p>
    </div>`;

  sectionElements.forEach((sectionElement)=> {
    sectionElement.innerHTML = ghostElement;
  });

  // remove child
  const mainElement = document.querySelector('.test-element__content');
  const firstSection = document.querySelector('.test-element__section')
  mainElement.removeChild(firstSection);
  // removeChild

  // append child
  const newSection = document.createElement('section');
  newSection.innerHTML = 'This is a BRAND new section sis';
  mainElement.appendChild(newSection);
  // appendChild

  // replace child
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <p>
      This is a replacement paragraph.
    </p>`;

  mainElement.replaceChild(newDiv, newSection);
  // replaceChold

  // write some text directly to the HTML element
  // mostly used for testing
  // commented out because it replaces everything in the document
  // document.write('This was written to the HTML document');

  /**
   * HTMO Objects
   */


  // return anchors
  document.anchors

  // return the absolute URI
  document.baseURI

  // return body
  document.body

  // return cookie
  // use express for this
  document.cookie

  // return doctype
  document.doctype

  // return document element
  document.documentElement

  // return mode used by the browser
  document.documentMode

  // return document URI
  document.documentURI

  // return domain
  document.domain

  // return all forms
  document.forms

  // return head
  document.head

  // return images
  document.images

  // return implementation
  document.implementation

  // return encoding
  document.inputEncoding

  // return modification date
  document.lastModified

  // return all <area> and <a> elements that have an href attr
  document.links

  // return the loading status of the document
  document.readyState

  // return the URI of the linking element
  document.referrer

  // return all script elements
  document.scripts

  // return if error checking is enforced
  document.strictErrorChecking

  // return document title
  document.title

  // return the complete URL of the document
  document.URL
}

document.addEventListener('DOMContentLoaded', testDom);
.addEventListener
