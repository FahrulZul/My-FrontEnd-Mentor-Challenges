# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/snap.png)

### Links

- Solution URL: [Link](https://www.frontendmentor.io/solutions/huddle-single-intro-section-mobilefirst-flexbox-_bmQ8u-P8)
- Live Site URL: [Link](https://fahrulzul.github.io/fm-huddle-single-intro/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow

### What I learned

**1. Understanding flex-grow, flex-shrink and, flex-basis.**
```css
.parent{
  display: flex;
}

/* default flex value */
.child{
  flex-grow: 0; 
    /*if 0, element grow based on content indside*/

  flex-shrink: 1;
    /*if 0, stay the same size, dont shrink*/

  flex-basis: auto;
    /*if 200px, it will try to take the size*/
    /*need to set flex-shrink: 0, otherwise it will shrink if other child element take more space*/
}

/* Shorthand */
.child{
  flex: 0 1 auto;
}
```

**2. (Try something new, just for fun) Styled custom scrollbar**
- By using a collection of `::webkit prefixed` CSS properties.
- Not compatible on Android Firefox and some browser version, can look [here](https://caniuse.com/css-scrollbar) for more detail.
- For this solution, only visible on screen height 800px below.

This solution scrollbar styles:
```css
  body{
    background-color: $violet;
    scrollbar-width: thin;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: $veryLightGray;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: $softMagenta;
        border-radius: 10px;
    }
}
```

### Useful resources

- [Understanding flex-grow, flex-shrink, and flex-basis.](https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/)
- [The Current State of Styling Scrollbars](https://css-tricks.com/the-current-state-of-styling-scrollbars/).

## Author

- Frontend Mentor - [@Fahrulzul](https://www.frontendmentor.io/profile/FahrulZul)
