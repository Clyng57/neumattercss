
module.exports = { 
  base:`
[data-theme="dark"] {
    --textbase-r: 235;
    --textbase-g: 235;
    --textbase-b: 235;
    --bgbase-r: 30;
    --bgbase-g: 30;
    --bgbase-b: 30;
    --text-placeholder: rgba(calc(var(--textbase-r) - 100),calc(var(--textbase-g) - 100),calc(var(--textbase-b) - 100),1.0);
    --text-negativeone: rgba(calc(var(--textbase-r) - 35),calc(var(--textbase-g) - 35),calc(var(--textbase-b) - 35),1.0);
    --text: rgba(var(--textbase-r),var(--textbase-g),var(--textbase-b),1.0);
    --bg-negative-one: rgba(calc(var(--bgbase-r) - 10),calc(var(--bgbase-g) - 10),calc(var(--bgbase-b) - 10),1.0);
    --bg-one: rgba(calc(var(--bgbase-r) + 15),calc(var(--bgbase-g) + 15),calc(var(--bgbase-b) + 15),1.0);
    --bg-one-blur: rgba(calc(var(--bgbase-r) + 40),calc(var(--bgbase-g) + 40),calc(var(--bgbase-b) + 40),0.3);
    --border: rgba(calc(var(--bgbase-r) + 30),calc(var(--bgbase-g) + 30),calc(var(--bgbase-b) + 30),1.0);
    --disabled: rgba(calc(var(--textbase-r) - 160),calc(var(--textbase-g) - 160),calc(var(--textbase-b) - 160),1.0);
    --bg-dark: var(--bg-one-blur);
    --bg-reverse: rgba(calc(var(--textbase-r) - 30),calc(var(--textbase-g) - 30),calc(var(--textbase-b) - 30),1.0);
    --bg-reverse-light: var(--text);
  
    --Shadow: rgba(0, 0, 0, 0.4);
    --Shadow-bg-one: rgba(0, 0, 0, 0.3);
    --Shadow-none: rgba(0, 0, 0, 0.0);
    --Shadow-concave: rgba(0, 0, 0, 0.5);
    --Highlight: rgba(255, 255, 255, 0.04);
    --Highlight-bg-one: rgba(255, 255, 255, 0.06);
    --Highlight-none: rgba(255, 255, 255, 0.0);
    --Highlight-concave: rgba(255, 255, 255, 0.03);
  
    --blue-20: rgba(5, 80, 255, 0.3);
    --yellow-20: rgba(255, 245, 0, 0.3);
    --green-20: rgba(80, 220, 70, 0.3);
    --red-20: rgba(245, 0, 55, 0.3);
    --orange-20: rgba(255, 120, 0, 0.3);
    --purple-20: rgba(130, 80, 255, 0.3);
    
    --white: var(--text);
    --blue: rgb(20, 142, 255);
    --yellow: rgb(255, 245, 0);
    --green: rgb(80, 220, 70);
    --purple: rgb(104, 46, 250);
    --orange: rgb(255, 120, 0);
    --red: rgb(255, 79, 68);
    --pink: rgb(255, 65, 146);

    --blue-light: rgb(0, 132, 255);
    --yellow-light: rgb(255, 227, 67);
    --green-light: rgb(138, 220, 70);
    --purple-light: rgb(115, 61, 252);
    --orange-light: rgb(252, 146, 53);
    --red-light: rgb(243, 57, 85);
    --pink-light: rgb(236, 62, 164);
    
    --font-smoothing-webkit: antialiased;
    --font-smoothing-moz: grayscale;
}
`,
baseLight:`
[data-theme="dark"] {
  --textbase-r: 235;
  --textbase-g: 235;
  --textbase-b: 235;
  --bgbase-r: 30;
  --bgbase-g: 30;
  --bgbase-b: 30;
  --text-placeholder: rgba(calc(var(--textbase-r) - 100),calc(var(--textbase-g) - 100),calc(var(--textbase-b) - 100),1.0);
  --text-negativeone: rgba(calc(var(--textbase-r) - 35),calc(var(--textbase-g) - 35),calc(var(--textbase-b) - 35),1.0);
  --text: rgba(var(--textbase-r),var(--textbase-g),var(--textbase-b),1.0);
  --bg-negative-one: rgba(calc(var(--bgbase-r) - 10),calc(var(--bgbase-g) - 10),calc(var(--bgbase-b) - 10),1.0);
  --bg-one: rgba(calc(var(--bgbase-r) + 15),calc(var(--bgbase-g) + 15),calc(var(--bgbase-b) + 15),1.0);
  --bg-one-blur: rgba(calc(var(--bgbase-r) + 40),calc(var(--bgbase-g) + 40),calc(var(--bgbase-b) + 40),0.3);
  --border: rgba(calc(var(--bgbase-r) + 30),calc(var(--bgbase-g) + 30),calc(var(--bgbase-b) + 30),1.0);
  --disabled: rgba(calc(var(--textbase-r) - 160),calc(var(--textbase-g) - 160),calc(var(--textbase-b) - 160),1.0);
  --bg-dark: var(--bg-one-blur);
  --bg-reverse: rgba(calc(var(--textbase-r) - 30),calc(var(--textbase-g) - 30),calc(var(--textbase-b) - 30),1.0);
  --bg-reverse-light: var(--text);

  --Shadow: rgba(0, 0, 0, 0.4);
  --Shadow-bg-one: rgba(0, 0, 0, 0.3);
  --Shadow-none: rgba(0, 0, 0, 0.0);
  --Shadow-concave: rgba(0, 0, 0, 0.5);
  --Highlight: rgba(255, 255, 255, 0.04);
  --Highlight-bg-one: rgba(255, 255, 255, 0.06);
  --Highlight-none: rgba(255, 255, 255, 0.0);
  --Highlight-concave: rgba(255, 255, 255, 0.03);

  --blue-20: rgba(5, 80, 255, 0.3);
  --yellow-20: rgba(255, 245, 0, 0.3);
  --green-20: rgba(80, 220, 70, 0.3);
  --red-20: rgba(245, 0, 55, 0.3);
  --orange-20: rgba(255, 120, 0, 0.3);
  --purple-20: rgba(130, 80, 255, 0.3);
  
  --white: var(--text);
  --blue: rgb(0, 102, 255);
  --yellow: rgb(255, 245, 0);
  --green: rgb(80, 220, 70);
  --purple: rgb(104, 46, 250);
  --orange: rgb(255, 120, 0);
  --red: rgb(245, 0, 35);
  --pink: rgb(236, 19, 146);

  --blue-light: rgb(0, 132, 255);
  --yellow-light: rgb(255, 227, 67);
  --green-light: rgb(138, 220, 70);
  --purple-light: rgb(115, 61, 252);
  --orange-light: rgb(252, 146, 53);
  --red-light: rgb(243, 57, 85);
  --pink-light: rgb(236, 62, 164);
  
  --font-smoothing-webkit: antialiased;
  --font-smoothing-moz: grayscale;
}
`
}