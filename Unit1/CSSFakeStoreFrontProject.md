# CSSing the Store Front Project

## Goal
Using new CSS knowledge, stylelize the [previous store front project](./FakeStoreFrontProject.md).

## Requirements
1. A `site.css` file that is imported into every web page.
2. An `index.css` file that is imported only by `index.html`
3. A `product.css` file that is imported by all the `product{1..5}.html` 
4. At least 5 CSS rules in each `.css` file
5. No duplicated rules
    - i.e. if you find that that `<p>` tags in both `index.html` and `product2.html` have a `font-size: 15px` rule, it can only exist in one file, not duplicated in two different files.
6. Must make good use of CSS Selectors
    - This may require changing how the original HTML was structured!

## Resources
- [MDN - CSS Syntax](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Syntax)
- [MDN - CSS Simple Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)
- [MDN - CSS Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- [StackOverflow](https://stackoverflow.com/)
- [Google](https://google.com)

## Sample Directory Setup
- <i class="fa fa-folder-open"></i> storefront
    - <i class="fa fa-folder-open"></i> images
        - <i class="fa fa-file"></i> product1.jpg
        - <i class="fa fa-file"></i> product2.jpg
        - <i class="fa fa-file"></i> product3.jpg
        - <i class="fa fa-file"></i> product4.jpg
        - <i class="fa fa-file"></i> product5.jpg
    - <i class="fa fa-folder-open"></i> products
        - <i class="fa fa-file"></i> product1.html
        - <i class="fa fa-file"></i> product2.html
        - <i class="fa fa-file"></i> product3.html
        - <i class="fa fa-file"></i> product4.html
        - <i class="fa fa-file"></i> product5.html
    - <i class="fa fa-file"></i> index.html
    - <i class="fa fa-file"></i> site.css
    - <i class="fa fa-file"></i> index.css
    - <i class="fa fa-file"></i> product.css
    