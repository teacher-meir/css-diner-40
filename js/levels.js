var levels = [
  {
    helpTitle: "Select elements by their type",
    selectorName: "Type Selector",
    doThis: "Select the plates",
    selector: "plate",
    syntax: "A",
    help: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis: "Select the bento boxes",
    selector: "bento",
    syntax: "A",
    helpTitle: "Select elements by their type",
    selectorName: "Type Selector",
    help: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis: "Select the fancy plate",
    selector: "#fancy",
    selectorName: "ID Selector",
    helpTitle: "Select elements with an ID",
    syntax: "#id",
    help: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>'
    ],
    boardMarkup: `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis: "Select the small fruits",
    selector: ".small",
    selectorName: "Class Selector",
    helpTitle: "Select elements by their class",
    syntax: ".classname",
    help: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
    boardMarkup: `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
    </plate>
    `
  },
  {
    helpTitle: "Select an element inside another element",
    selectorName: "Descendant Selector",
    doThis: "Select the apple on the plate",
    selector: "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help: "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    examples: [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    boardMarkup: `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis: "Select the pickle on the fancy plate",
    selector: "#fancy pickle",
    helpTitle: "Combine the Descendant & ID Selectors",
    syntax: "#id&nbsp;&nbsp;A",
    help: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    boardMarkup: `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis: "Select the small oranges",
    selector: "orange.small",
    helpTitle: "Combine the Class Selector",
    syntax: "A.className",
    help: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    boardMarkup: `
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis: "Select all the plates and bentos",
    selector: "plate,bento",
    selectorName: "Comma Combinator",
    helpTitle: "Combine, selectors, with... commas!",
    syntax: "A, B",
    help: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
    ],
    boardMarkup: `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis: "Select the small oranges and the big apples in the bentos",
    selector: "bento orange.small, bento apple.big",
    syntax: "Put your back into it!",
    helpTitle: "You can do it...",
    help: 'Combine what you learned in the last few levels to solve this one!',
    boardMarkup: `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <apple class="big"/>
    </bento>
    `
  },
  {
    doThis: "Select all the things!",
    selector: "*",
    selectorName: "The Universal Selector",
    helpTitle: "You can select everything!",
    syntax: "*",
    help: 'You can select all elements with the universal selector! ',
    examples: [
      '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    color: 'yellow',
    doThis: "Select everything on a plate",
    selector: "plate *",
    syntax: "A&nbsp;&nbsp;*",
    helpTitle: "Combine the Universal Selector",
    help: 'This selects all elements inside of <strong>A</strong>.',
    examples: [
      '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
      '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
    {
    color: 'yellow',
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis: "Select the apple directly on a plate",
    selector: "plate > apple",
    helpTitle: "Select direct children of an element",
    help: "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    examples: [
      '<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    doThis: "Select every apple that's next to a plate",
    selector: "plate + apple",
    helpTitle: "Select an element that directly follows another element",
    selectorName: "Adjacent Sibling Selector",
    syntax: "A + B",
    help: "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, elements that have the same indentation are siblings.",
    examples: [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>'
    ],
    color: '#a10263',
    boardMarkup: `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
},
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Select elements that follows another element",
    syntax: "A ~ B",
    doThis: "Select the pickles beside the bento",
    selector: "bento ~ pickle",
    help: "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    examples: [
      '<strong>A ~ B</strong> selects all <strong>B</strong> that follow a <strong>A</strong>'
    ],
    color: '#a10263',
    boardMarkup: `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  // {
  //   selectorName: "Only Child Pseudo-selector",
  //   helpTitle: "Select an element that are the only element inside of another one.",
  //   doThis: "Select the apple and the pickle on the plates",
  //   selector: "plate :only-child",
  //   syntax: ":only-child",
  //   help: "You can select any element that is the only element inside of another one.",
  //   examples: [
  //     '<strong>span:only-child</strong> selects the <tag>span</tag> elements that are the only child of some other element.',
  //     '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
  //   ],
  //   color: 'yellow',
  //   boardMarkup: `
  //   <plate>
  //     <apple/>
  //   </plate>
  //   <plate>
  //     <pickle />
  //   </plate>
  //   <bento>
  //     <pickle />
  //   </bento>
  //   <plate>
  //     <orange class="small"/>
  //     <orange/>
  //   </plate>
  //   <pickle class="small"/>
  //   `
  // },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis: "Select the top orange",
    selector: "plate :first-child",
    syntax: ":first-child",
    help: "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples: [
      '<strong>:first-child</strong> selects all first child elements.',
      '<strong>p:first-child</strong> selects all first child <tag>p</tag> elements.',
      '<strong>div p:first-child</strong> selects all first child <tag>p</tag> elements that are in a <tag>div</tag>.'
    ],
    color: 'pink',
    boardMarkup: `
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis: "Select only the apples that are the last child",
    selector: "apple:last-child",
    syntax: ":last-child",
    help: "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the :first-child and :last-child!",
    examples: [
      '<strong>:last-child</strong> selects all last-child elements.',
      '<strong>span:last-child</strong> selects all last-child <tag>span</tag> elements.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> elements inside of any <tag>ul</tag>.'
    ],
    color: 'pink',
    boardMarkup: `
    <plate>
        <orange />
        <apple />
    </plate>
    <plate>
        <pickle />
        <orange class="small" />
    </plate>
    <plate>
        <apple class="small" />
        <orange />
    </plate>
    <plate>
        <pickle />
        <apple class="small" />
    </plate>
    <apple />`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis: "Select the 3rd plate",
    selector: ":nth-child(3)",
    syntax: ":nth-child(A)",
    help: "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples: [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    color: 'green',
    boardMarkup: `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    "selectorName": "Nth-Child Odd & Even Selector",
    "helpTitle": "Select elements based on odd or even positions.",
    "doThis": "Select all plates that are in odd positions",
    "selector": "plate:nth-child(odd)",
    "syntax": ":nth-child(odd), :nth-child(even)",
    "help": `Use <strong>:nth-child(odd)</strong> or <strong>:nth-child(even)</strong> to select elements that are in odd or even positions within their parent. <br><br>
     Using <strong>:nth-child(odd)</strong>, only the 1st, 3rd, and 5th plates will be selected. Using <strong>:nth-child(even)</strong> would select the 2nd and 4th plates.`,
    "examples": [
      "<strong>:nth-child(odd)</strong> selects every element that is in an odd position.",
      "<strong>div plate:nth-child(even)</strong> selects every plate in an even position inside each div."
    ],
    "color": "green",
    "boardMarkup": `
    <plate>
        <apple />
    </plate>
    <plate>
        <orange />
    </plate>
    <plate>
        <pickle />
    </plate>
    <plate>
        <apple />
    </plate>
    <plate>
        <orange />
    </plate>
    `
  },
  {
    selectorName: "Nth-child Selector with Formula",
    doThis: "Select every 2nd plate, starting from the 3rd",
    selector: "plate:nth-child(2n+3)",
    syntax: ":nth-child(An+B)",
    help: "The nth-child formula selects every nth element, starting the count at a specific instance of that element. <br /> קראי בחוברת פירוט",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    color: 'green',
    boardMarkup: `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis: "Select all the items with names",
    selector: "[for]",
    syntax: "[attribute]",
    help: 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples: [
      '<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href</strong> attribute.',
      '<strong>[type]</strong> selects all elements that have a <strong>type</strong>. attribute'
    ],
    color: 'red',
    boardMarkup: `
    <bento><apple class="small"/></bento>
    <apple for="Sarah"/>
    <plate for="Ayala"><pickle/></plate>
    <bento for="Noa"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all elements that have a specific attribute",
    doThis: "Select only plates with names",
    selector: "plate[for]",
    syntax: "A[attribute]",
    help: "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples: [
      '<strong>a[title]</strong> selects all <tag>a</tag> elements that have a <strong>title</strong> attribute.',
      '<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute'
    ],
    color: 'red',
    boardMarkup: `
    <plate for="Sarah"><pickle/></plate>
    <plate for="Yael"><apple/></plate>
    <plate/>
    <bento for="Rivka"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all elements that have a specific attribute value",
    doThis: "Select Ayala's meal",
    selector: "[for=Ayala]",
    syntax: '[attribute="value"]',
    help: "Attribute selectors are case sensitive, each character must match exactly.",
    examples: [
      '<strong>input[type="checkbox"]</strong> selects all checkbox input elements.'
    ],
    color: 'orange',
    boardMarkup: `
    <apple for="Chana" />
    <bento for="Yael"><apple /></bento>
    <bento for="Ayala"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all elements with an attribute value that starts with specific characters",
    doThis: "Select the items for names that start with 'Shi'",
    selector: '[for^="Shi"]',
    syntax: '[attribute^="value"]',
    examples: [
      '<strong>.toy[category^="Swim"]</strong> selects elements with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
    ],
    color: 'orange',
    boardMarkup: `
    <plate for="Shira"><pickle/></plate>
    <bento for="Shifi"><apple class="small"/></bento>
    <bento for="Miri"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all elements with an attribute value that ends with specific characters",
    doThis: "Select the items for names that end with 'si'",
    selector: '[for$="si"]',
    syntax: '[attribute$="value"]',
    help: '',
    examples: [
      '<strong>img[src$=".jpg"]</strong> selects all images display a <strong>.jpg</strong> image.',
    ],
    color: 'orange',
    boardMarkup: `
    <apple class="small"/>
    <bento for="Pesi"><pickle/></bento>
    <apple for="Shoshi"></apple>
    <plate for="Dasi"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Select all elements with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis: "Select the meals for names that contain 'na'",
    selector: '[for*="na"]',
    help: 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples: [
      '<strong>img[src*="thumbnails"]</strong> selects all image elements that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> selects all elements with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    color: 'orange',
    boardMarkup: `
    <bento for="Osnat"><apple /></bento>
    <bento for="Shuly"><pickle /></bento>
    <bento for="Dina"><orange /></bento>
    `
  },
  {
    selectorName: "Has Selector",
    helpTitle: "Select elements that contain specific child elements",
    selector: "plate:has(orange)",
    syntax: ":has(A)",
    doThis: "Select plates that contain an orange",
    help: "Selects any element that has a specific element as a child.",
    examples: [
      '<strong>div:has(p)</strong> selects any <tag>div</tag> that has at least one <tag>p</tag> as a child.'
    ],
    color: '#acff00',
    boardMarkup: `
    <plate>
      <orange />
    </plate>
    <plate>
      <pickle />
    </plate>
    <plate>
      <orange />
    </plate>
    `
  },
  {
    selectorName: "Has Selector",
    helpTitle: "Select elements that contain specific child elements",
    selector: "plate:has(apple.small)",
    syntax: ":has(A.className)",
    doThis: "Select plates that contain a small apple",
    help: "Selects any element that has a specific element as a child.",
    examples: [
      '<strong>div:has(p.large)</strong> selects any <tag>div</tag> that has at least one <tag>p</tag> with the class name "large" as a child.'
    ],
    color: '#acff00',
    boardMarkup: `
    <plate>
      <apple class="small" />
      <orange />
    </plate>
    <plate>
      <pickle class="small" />
    </plate>
    <plate />
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <orange class="small" />
    </plate>
    `
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis: "Select all plates except the fancy one.",
    selector: "plate:not(#fancy)",
    syntax: ":not(X)",
    help: 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples: [
      '<strong>:not(#largest)</strong> selects all elements that do not have <strong>id="largest"</strong>.',
      '<strong>#fancy:not(div)</strong> selects every element with <strong>id="fancy"</strong> that is not a <tag>div</tag>.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    color: 'blue',
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all elements that don't match the negation selector",
    doThis: "Select the big apples",
    selector: "apple:not(.small)",
    syntax: ":not(X.className)",
    help: 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
    examples: [
      '<strong>:not(#fancy)</strong> selects all elements that do not have <strong>id="fancy"</strong>.',
      '<strong>#fancy:not(div)</strong> selects every element with <strong>id="fancy"</strong> that is not a <tag>div</tag>.',
      '<strong>:not(.big, .medium)</strong> selects all elements that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    color: 'blue',
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle />
    `
  },
  {
    selectorName: "Multiple Selectors with Comma",
    helpTitle: "Select multiple elements using a single selector",
    selector: "plate apple, plate pickle",
    syntax: "Challenge 1",
    doThis: "Select all apples and pickles on plates",
    help: "Use comma to separate between 2 different elements.",
    boardMarkup: `
        <plate>
          <apple />
          <pickle />
        </plate>
        <plate>
          <orange />
        </plate>
        <plate>
          <pickle />
        </plate>
        <bento>
          <apple />
        </bento>
        `
  },
  {
    selectorName: "First Child & a class name",
    // helpTitle: "Use :first-child and a class name",
    selector: "plate:first-child .small",
    syntax: "Challenge 1",
    doThis: "Select the small element on the first plate",
    help: "Use <strong>:first-child</strong> to select the 1st element",
    boardMarkup: `
        <plate>
          <orange class="small" />
          <pickle />
        </plate>
        <plate>
          <pickle class="small" />
        </plate>
        <bento>
          <orange />
        </bento>
        `
  },
  {
    selectorName: "Nth-Child & First-child",
    helpTitle: "Select specific items in sequence",
    selector: "plate:nth-child(even) apple:first-child",
    syntax: "Challenge 2",
    doThis: "Select the first apple on each even plate",
    help: `Use <strong>:nth-child</strong> and <strong>:first-child</strong> selectors. <br /><br />
    Remember that you can put the word <strong>even</strong> inside the brackets of <strong>:nth-child</strong>`,
    boardMarkup: `
        <plate>
          <apple />
          <apple />
        </plate>
        <plate>
          <apple />
          <apple />
        </plate>
        <plate>
          <apple />
          <apple />
        </plate>
        <plate>
          <apple />
          <apple />
        </plate>
        `
  },
  {
    selectorName: "Has Selector with Sibling",
    helpTitle: "Select plates containing an apple followed immediately by another apple",
    selector: "plate:has(apple + apple)",
    syntax: "Challenge 3",
    doThis: "Select plates that contain an apple immediately followed by another apple",
    help: "Use <strong>:has</strong> and <strong>+</strong> (sibling) selectors.",
    boardMarkup: `
    <plate>
        <apple />
        <orange />
    </plate>
    <plate>
        <apple />
        <apple />
    </plate>
    <plate>
        <apple />
        <pickle />
    </plate>
    <plate>
        <orange />
        <apple />
        <apple />
    </plate>
    `
  },
  {
    selectorName: "Not & Last-child",
    // helpTitle: "Exclude specific types from the last of their type",
    selector: "plate:not(#fancy) orange:last-child",
    syntax: "Challenge 4",
    doThis: "Select the last orange on all plates except #fancy",
    help: "Use <strong>:not</strong> and <strong>:last-child</strong> selectors.",
    boardMarkup: `
        <plate>
          <orange />
          <apple />
          <orange />
        </plate>
        <plate id="fancy">
          <orange />
          <orange />
          <apple />
        </plate>
        <plate>
          <orange />
          <apple />
          <orange />
        </plate>
        `
  },
  {
    selectorName: "Siblings, Attribute Equals & All selector",
    helpTitle: "Select sibling after elements with a specific attribute",
    selector: `plate[for="Sara"] + *`,
    syntax: "Challenge 5",
    doThis: "Select every element that follows Sara's plate",
    help: "Use direct siblings, [attribute], and * selectors",
    boardMarkup: `
        <plate for="Sara" />
        <plate for="Miri" />
        <plate />
        <plate for="Sara" />
        <bento />
        `
  },
  {
    selectorName: "Attributes & has selectors",
    // helpTitle: "Select plates that contain a single item",
    selector: `plate[for ^= "Sh"]:has(orange)`,
    syntax: "Challenge 6",
    doThis: "Select the plates marked with a name starting with Sh and contain orange",
    help: "Use <strong>:has</strong> and <strong>[attr]</strong> selectors.",
    boardMarkup: `
        <plate for="Shani">
          <orange />
        </plate>
        <plate for="Riki">
          <orange />
        </plate>
        <plate for="Shira">
          <orange />
        </plate>
        <plate for="Shosi">
          <apple />
        </plate>
        `
  },
  {
    selectorName: "Sibling Selector with Class",
    helpTitle: "Select siblings based on a specific class",
    selector: ".small ~ orange",
    syntax: "Challenge 7",
    doThis: "Select all oranges that follow a small item",
    help: "Use <strong>.class</strong> and <strong>~</strong> (sibling) selectors.",
    boardMarkup: `
        <plate>
          <pickle class="small" />
          <orange />
        </plate>
        <plate>
          <apple />
          <orange class="small" />
        </plate>
        <plate>
          <orange class="small" />
          <orange />
        </plate>
        `
  },
  {
    selectorName: "Not & Nth-Child",
    helpTitle: "Select elements based on position and exclusion",
    selector: "plate:not(:nth-child(3)) apple",
    syntax: "Challenge 8",
    doThis: "Select apples on every plate except the third one",
    help: "Use `not` and `nth-child` selectors.",
    boardMarkup: `
        <plate>
          <apple />
        </plate>
        <plate>
          <apple />
        </plate>
        <plate>
          <apple />
        </plate>
        <plate>
          <apple />
        </plate>
        `
  },
  {
    selectorName: "Has & Sibling Selector",
    helpTitle: "Select elements that have a specific item as a sibling",
    selector: "plate:has(apple) + plate",
    syntax: "Challenge 9",
    doThis: "Select the plate that immediately follows any plate containing an apple.",
    help: "Use <strong>:has</strong> and <strong>+</strong> (sibling) selectors.",
    boardMarkup: `
        <plate>
          <pickle />
        </plate>
        <plate>
          <apple />
        </plate>
        <plate>
          <pickle />
        </plate>
        <plate>
          <apple />
        </plate>
        <plate>
          <orange />
        </plate>
        `
  },
  {
    selectorName: "Multiple Selectors with Not",
    helpTitle: "Combine selectors and exclusions to target specific elements",
    selector: "apple, plate:not(#fancy) pickle",
    syntax: "Challenge 10",
    doThis: "Select all apples, AND all pickles on plates except the #fancy plate",
    help: "Use multiple selectors with <strong>:not</strong>.",
    boardMarkup: `
        <plate>
          <apple />
          <pickle />
        </plate>
        <plate id="fancy">
          <apple />
          <pickle />
        </plate>
        <apple class="small" />
        <plate>
          <pickle />
        </plate>
        `
  }
];
