# Proto-styles
This is a scss made framework for easier and faster styling use. Code and decorate faster with this easy to use style
sheet. As more progress is made, so will more documentation!

## Index:
1. [Checklist](#checklist)
    1. [MVP Todo:](#mvp-todo:)
    2. [Potential Features:](#potential-features:)
    3. [Previous Updates:](#previous-updates:)
2. [Components](#components)
    1. [Body](#body)
3. [Fonts](#fonts)
    1. [Headings](#headings)
    2. [Paragraphs](#paragraphs)
    3. [Lists and Links](#lists-and-links)
    4. [Code](#code)
4. [Forms](#forms)
5. [Shapes](#shapes)
6. [MISC.](#misc.)
7. [Conclusion](#conclusion)

___
## Checklist

### MVP TODO:
- Setup name made a repo
    - [x] Named your framework
    - [x] Made a repo
    - [x] Stretch: organize files in folders
- Font styles styled basic text elements
    - [x] Defined a font stack on the body
    - [x] Styled headings: h1-6
    - [x] Styled inline elements: strong, em, code
    - [x] Style `<a>` tag. Include `:hover` styles
    - [ ] **Stretch:** style `<mark>`
    - [ ] **Stretch:** add a style for text selection, [read
    this](https://www.w3schools.com/cssref/sel_selection.asp)
    - [ ] **Stretch:** Add color classes. Follow the example set by [Bootstrap
    colors](https://getbootstrap.com/docs/4.5/utilities/colors/#color)
- [Button styles](https://github.com/Make-School-Courses/FEW-2.2-Web-Design-and-Advanced-CSS/blob/master/lessons/lesson-05.md#design-a-button)
for warning, info, action, etc.
    - [x] Basic button styles
    - [x] Alternate button styles: warning, secondary, success, Danger, info, light, and dark.
    - [ ] document your buttons
- [Form Elements](https://github.com/Make-School-Courses/FEW-2.2-Web-Design-and-Advanced-CSS/blob/master/lessons/lesson-06.md#challenge)
    - [x] Styled inputs and textarea
    - [x] Styled form element
    - [ ] Documented forms and inputs
    - Use [CSS Custom
    properties](https://github.com/Make-School-Courses/FEW-2.2-Web-Design-and-Advanced-CSS/blob/master/lessons/lesson-05.md#css-custom-properties)
    for colors and other repeated values
    - [ ] uses Custom properties
    - [ ] Document your custom properties
- [Navbar style](https://github.com/Make-School-Courses/FEW-2.2-Web-Design-and-Advanced-CSS/blob/master/lessons/lesson-07.md#nav-bars)
    - [ ] Defined navbar styles
    - [ ] Document your navbar
    - [ ] Stretch: Add a sticky navbar style ([css position
    sticky](https://www.w3schools.com/howto/howto_js_sticky_header.asp))
    - [ ] Stretch: Footer styles
- Card style
    - [ ] Defined a card style'
    - [ ] Stretch: Your card style inlcudes some extra features like image and footer, dark or light style.
- Uses SASS
    - [ ] Stretch: use @import to bring all files together into a single css file.
    - [x] Stretch: Use @for to automate one or more processes
    - [x] Stretch: use mixins to reduce code duplication
- Web components
    - [ ] You have at least one web component
    - [ ] Document your web component
    - [ ] Stretch: You have a second web component

### Potential Features:
- Heading styles
    - [] add an inverted size class, for subtitles that demand respect
- Usable Colors
    - [x] Create easier way to use colors and themes
    - [] When a user puts in a formated color, the page should adjust accordingly
    - [x] otherwise use random compiled theme.
- 2D Shapes
    - [] Define Basic 2D Shapes classes
    - [] Define Complex 2D Shapes classes
    - [] Document your 2D Shapes
- Special Shapes
    - [] Define Special Shapes classes
    - [] Add icon/logo Special Shapes classes
    - [] Document your Special Shapes
- 3D Shapes
    - [] Define Special Shapes classes
    - [] Add icon/logo Special Shapes classes
    - [] Document your Special Shapes

### Previous Updates:
- 0.2.1
    - Basic form buttons have been completed. For more check out [Buttons](#Buttons)
    - Forms has been highly prioritized. Form elements, inputs, types, and text-areas have all been updated and is still a working progress. For more checkout [Forms](#Forms)
    - Basic documentation has finally been added, which is why you are reading this right now! Please appriciate the amount of time these things take, and I thank you for your patients. 
- 0.1.3
    - light-mode, lighter-mode, darker-mode, and dark-mode added to body component. For more checkout [Body, color-mode](#color-mode).
    - Random color compiling: chooses a random color, then adjusts the entire pages theme accordingly.
- 0.0.2 
    - Foundations completed: Repo created, ideas made, and project named.
    - Fonts for headings, paragraphs, code, em, abbr, links, lists, and strong tags have been completed.
___
## Components
### Body
#### color-mode
To use any of these themes, simply type the name into the body's class. ```<body class="light-mode"> ... </body>``` A list of all the options has been provided below.
- light-mode: Creates a white background with black text
- lighter-mode: Adds a bighter tint to the pages color
- darker-mode: Adds a darker tint ti the pages color
- dark-mode: Creates a black background with white text

## Fonts
### Headings
h1-h6 tags have a default styling with extra letter spacing and well done kerning. There is a decorative text style added to demand users attention. All you have to do is place the tag. ```<h1>My Header</h1>```
- Note that adding a title class will give your headings an extra flair, using A unique font-family then the rest of your page.      ```<h4 class="title">My Awesome Title</h4>```

### Paragraphs
p tags contain the same wonderful kerning and extra letter spacing, with a minimum size of 14px for readablility. Below are emphasis tags.
- em tag can be to define italic text. 
- strong tag can be used for bold text.
```<p>hello <em>[your name]</em>! I hope you are having an <strong>incredible</strong> day.```

### Lists and Links
All of these tags can be used alone without a paragraph tag, and therefore have been placed in a seperate section.
- Lists:
    - ol tags are in capital roman numerals
    - ul tags have open circle bullet points
    - li tags contain a slightly larger icon, and 14px font
    ``` <ol> <li> <ul> <li>a</li> <li>b</li> <li>c</li> </ul> </li> </ol> ```
- Links:
    - abbr tags contain a simplistic hover. And in future installments will contain a custom pop-up
    - links can be made with the a tag containing a simplistic hover style inverse to the abbriviation tag.
    ```<p><abbr title="Project Lead the Way">PLTW</abbr> is a great way for students to learn about <a href="https://www.ed.gov/stem"> <abbr title="Science, technology, engineering, and mathematics">STEM</abbr></a> in school.```

### Code
Our code tag automatically comes with it's own in-line block, which contains the darkest tint of your page and a different font-family, in order to clearly differenciate code from text.

## Forms
With a solid border, our form tag works as a container with basic item alignment, and a brighter theme compaired to the rest of your page to pop-out.

### Buttons
Our buttons follow our pages theme. By default it is a deep blue with a coral chisele, but when a theme is applied, these colors will change accordingy. below are a list of classes that can be added using ``` <button class="success"></button>```
- danger: should be used for dangerous buttons such as a delete button
- warning: should be used for when the user should be aware of something
- success: Should be used to express completion.
- Note that more is on the way! But keepp in mind that the themed colors is still a working progress, and some colors will produce unreadable results.

### Types and Input
By default, any input tag will contain a rounded edge textbox, with a black border and a white background. This can change based on the theme. When you focus on that item, the border color will change accordingly. As well titles will be held above the textbox. Simply put the type you want ```<input type="url"></input>```and we do the rest. You can see more types below.
- search: contain a search icon and expands whenever a user wants to search something up.
- color: using a little bit of webkit, we have created a clean look, displaying your color in a circle.
- The textarea tag contains the same elements as an input textbox, while giving extra room to create a larger response.
- other types that do not contain textboxes have been adjusted so that they do not contain unnecissary borders, still trying to keep this clean look we are looking for.
- Note that types are still a working progress. 

### Switch and Click
It is required that you use the label tag in order for these switch and click buttons to work! These have been customized in order to match the theme of the page while also giving a much nicer look then the default. Hovering over will cause the border to change colors alike to the input textboxes described in the last section. Each switch and click contains  3 different versions, with more on the way! Below you can see use examples.
- Switches create a different look for checkbox types. To give users a different feel as to what they are doing as opposed to just taking a survey. These should represent two states, on/off, left/right, etc. ```<lable class="switch-v1"><input type="checkbox"></input></lable>```
    - note that Version 3 is an inverse switch.
- Checkbox uses a larger custom icon, with  themed colors. Just like the switch it contains 3 version, the third being an inverse check. ```<lable class="checkbox-v2"><input type="checkbox"></input></lable>```
- Radio buttons also have a custom design, inverse to it's default. Using an open circle and themed colors. You can use different versions together as well. However, this option does not contain an inverse option.```<lable class="radio-v3"><input type="radio"></input></lable>```

## Shapes
- This is a idea, and is not yet in development.

## MISC.
- This section is empty! (But not for long.)

___
## Conclusion
If you'd like to learn some scss for yourself, check out example.scss for my notes, as well you can check out
this article on sass-lang. https://sass-lang.com/documentation/at-rules
Thanks for checking this out. Feel free to leave feedback, and share!