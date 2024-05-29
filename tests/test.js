/**
 * @jest-environment jsdom
 */

const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let document;
let sidebar, sidebarBtn, select, selectItems, selectValue, filterBtn, filterItems, lastClickedBtn, form, formInputs, formBtn, navigationLinks, pages;

beforeEach(() => {
  const dom = new JSDOM(html, { runScripts: "dangerously" });
  document = dom.window.document;
  
  // Import the script file
  const scriptPath = path.resolve(__dirname, '../script.js');
  if (!fs.existsSync(scriptPath)) {
    throw new Error(`Script file not found: ${scriptPath}`);
  }
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  dom.window.eval(scriptContent);

  // Initialize the variables
  sidebar = document.querySelector("[data-sidebar]");
  sidebarBtn = document.querySelector("[data-sidebar-btn]");
  select = document.querySelector("[data-select]");
  selectItems = document.querySelectorAll("[data-select-item]");
  selectValue = document.querySelector("[data-selecct-value]");
  filterBtn = document.querySelectorAll("[data-filter-btn]");
  filterItems = document.querySelectorAll("[data-filter-item]");
  lastClickedBtn = filterBtn[0];
  form = document.querySelector("[data-form]");
  formInputs = document.querySelectorAll("[data-form-input]");
  formBtn = document.querySelector("[data-form-btn]");
  navigationLinks = document.querySelectorAll("[data-nav-link]");
  pages = document.querySelectorAll("[data-page]");
});

describe('Sidebar Toggle', () => {
  test('should toggle sidebar active class on button click', () => {
    sidebarBtn.click();
    expect(sidebar.classList.contains('active')).toBe(true);
    sidebarBtn.click();
    expect(sidebar.classList.contains('active')).toBe(false);
  });
});

describe('Custom Select', () => {
  test('should toggle select active class on click', () => {
    select.click();
    expect(select.classList.contains('active')).toBe(true);
    select.click();
    expect(select.classList.contains('active')).toBe(false);
  });

  test('should update select value and filter items on item click', () => {
    selectItems[0].click();
    expect(selectValue.innerText).toBe(selectItems[0].innerText);
  });
});

describe('Form Validation', () => {
  test('should disable form button if form is invalid', () => {
    formInputs.forEach(input => {
      input.value = '';
      input.dispatchEvent(new document.defaultView.Event('input'));
    });
    expect(formBtn.hasAttribute('disabled')).toBe(true);
  });
});

describe('Page Navigation', () => {
  test('should navigate to correct page and set active class', () => {
    navigationLinks[0].click();
    expect(pages[0].classList.contains('active')).toBe(true);
    expect(navigationLinks[0].classList.contains('active')).toBe(true);
    for (let i = 1; i < pages.length; i++) {
      expect(pages[i].classList.contains('active')).toBe(false);
      expect(navigationLinks[i].classList.contains('active')).toBe(false);
    }
  });
});
