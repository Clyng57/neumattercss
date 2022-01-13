
module.exports = { 
  base:`
  accent-color: var(--primary);
  --textbase-r: 13;
	--textbase-g: 13;
	--textbase-b: 15;
	--bgbase-r: 240;
	--bgbase-g: 240;
	--bgbase-b: 242;
	--text-placeholder: rgba(calc(var(--textbase-r) + 140),calc(var(--textbase-g) + 140),calc(var(--textbase-b) + 140),1.0);
	--text-negativeone: rgba(calc(var(--textbase-r) + 80),calc(var(--textbase-g) + 80),calc(var(--textbase-b) + 80),1.0);
	--text: rgba(var(--textbase-r),var(--textbase-g),var(--textbase-b),1.0);
	--bg-negative-one: rgba(calc(var(--bgbase-r) - 5),calc(var(--bgbase-g) - 5),calc(var(--bgbase-b) - 5),1.0);
	--bg-base: rgba(var(--bgbase-r),var(--bgbase-g),var(--bgbase-b),1.0);
	--bg-base-blur: rgba(var(--bgbase-r),var(--bgbase-g),var(--bgbase-b),0.3);
	--bg-one: rgba(calc(var(--bgbase-r) - 10),calc(var(--bgbase-g) - 10),calc(var(--bgbase-b) - 10),1.0);
	--bg-one-blur: rgba(calc(var(--bgbase-r) - 30),calc(var(--bgbase-g) - 30),calc(var(--bgbase-b) - 30),0.3);
	--bg-elements: rgba(calc(var(--bgbase-r) - 20),calc(var(--bgbase-g) - 20),calc(var(--bgbase-b) - 20),1.0);
  --bg-dark: rgba(0,0,0,0.8);
	--bg-reverse: var(--text);
	--bg-reverse-light: rgba(calc(var(--textbase-r) + 30),calc(var(--textbase-g) + 30),calc(var(--textbase-b) + 30),1.0);
  
	--border: rgba(calc(var(--bgbase-r) - 40),calc(var(--bgbase-g) - 40),calc(var(--bgbase-b) - 40),1.0);
  --disabled: rgba(calc(var(--textbase-r) + 200),calc(var(--textbase-g) + 200),calc(var(--textbase-b) + 200),1.0);
  
	--Shadow: rgba(0, 0, 0, 0.13);
	--Shadow-bg-one: rgba(0, 0, 0, 0.20);
	--Shadow-none: rgba(0, 0, 0, 0.0);
  --Shadow-concave: rgba(0, 0, 0, 0.1);
	--Highlight: rgba(255, 255, 255, 1.0);
	--Highlight-bg-one: rgba(245, 245, 245, 1.0);
	--Highlight-none: rgba(255, 255, 255, 0.0);
  --Highlight-concave: rgba(255, 255, 255, 0.3);

	--white: var(--bg-base);
	--blue: rgb(2, 77, 238);
	--yellow: rgb(255, 245, 0);
	--green: rgb(80, 220, 70);
	--purple: rgb(104, 46, 250);
	--orange: rgb(255, 120, 0);
	--red: rgb(245, 0, 35);
	--pink: rgb(236, 19, 146);

	--blue-light: rgb(2, 96, 238);
	--yellow-light: rgb(252, 255, 94);
	--green-light: rgb(83, 236, 72);
	--purple-light: rgb(116, 64, 250);
	--orange-light: rgb(255, 147, 52);
	--red-light: rgb(255, 47, 79);
	--pink-light: rgb(253, 47, 167);
  
	--blue-20: rgba(5, 80, 255, 0.2);
	--yellow-20: rgba(255, 245, 0, 0.2);
	--green-20: rgba(80, 220, 70, 0.2);
	--red-20: rgba(245, 0, 55, 0.2);
	--orange-20: rgba(255, 120, 0, 0.2);
	--purple-20: rgba(130, 80, 255, 0.2);
	--pink-20: rgba(245, 0, 163, 0.2);

	--blue-50: rgba(5, 80, 255, 0.5);
	--yellow-50: rgba(255, 245, 0, 0.5);
	--green-50: rgba(80, 220, 70, 0.5);
	--red-50: rgba(245, 0, 55, 0.5);
	--orange-50: rgba(255, 120, 0, 0.5);
	--purple-50: rgba(130, 80, 255, 0.5);
	--pink-50: rgba(245, 0, 163, 0.5);
  
	--navBlur: rgba(240,240,243,0.50);`,
  baseLight:`
  accent-color: var(--primary);
  --textbase-r: 13;
	--textbase-g: 13;
	--textbase-b: 15;
	--bgbase-r: 240;
	--bgbase-g: 240;
	--bgbase-b: 242;
	--text-placeholder: rgba(calc(var(--textbase-r) + 140),calc(var(--textbase-g) + 140),calc(var(--textbase-b) + 140),1.0);
	--text-negativeone: rgba(calc(var(--textbase-r) + 80),calc(var(--textbase-g) + 80),calc(var(--textbase-b) + 80),1.0);
	--text: rgba(var(--textbase-r),var(--textbase-g),var(--textbase-b),1.0);
	--bg-negative-one: rgba(calc(var(--bgbase-r) - 5),calc(var(--bgbase-g) - 5),calc(var(--bgbase-b) - 5),1.0);
	--bg-base: rgba(var(--bgbase-r),var(--bgbase-g),var(--bgbase-b),1.0);
	--bg-base-blur: rgba(var(--bgbase-r),var(--bgbase-g),var(--bgbase-b),0.3);
	--bg-one: rgba(calc(var(--bgbase-r) - 10),calc(var(--bgbase-g) - 10),calc(var(--bgbase-b) - 10),1.0);
	--bg-one-blur: rgba(calc(var(--bgbase-r) - 30),calc(var(--bgbase-g) - 30),calc(var(--bgbase-b) - 30),0.3);
	--bg-elements: rgba(calc(var(--bgbase-r) - 20),calc(var(--bgbase-g) - 20),calc(var(--bgbase-b) - 20),1.0);
  --bg-dark: rgba(0,0,0,0.8);
	--bg-reverse: var(--text);
	--bg-reverse-light: rgba(calc(var(--textbase-r) + 30),calc(var(--textbase-g) + 30),calc(var(--textbase-b) + 30),1.0);
  
	--border: rgba(calc(var(--bgbase-r) - 40),calc(var(--bgbase-g) - 40),calc(var(--bgbase-b) - 40),1.0);
  --disabled: rgba(calc(var(--textbase-r) + 200),calc(var(--textbase-g) + 200),calc(var(--textbase-b) + 200),1.0);
  
	--Shadow: rgba(0, 0, 0, 0.13);
	--Shadow-bg-one: rgba(0, 0, 0, 0.20);
	--Shadow-none: rgba(0, 0, 0, 0.0);
  --Shadow-concave: rgba(0, 0, 0, 0.1);
	--Highlight: rgba(255, 255, 255, 1.0);
	--Highlight-bg-one: rgba(245, 245, 245, 1.0);
	--Highlight-none: rgba(255, 255, 255, 0.0);
  --Highlight-concave: rgba(255, 255, 255, 0.3);

	--white: var(--bg-base);
	--blue: rgb(40, 86, 214);
	--yellow: rgb(250, 244, 86);
	--green: rgb(112, 212, 105);
	--purple: rgb(110, 82, 235);
	--orange: rgb(248, 138, 42);
	--red: rgb(240, 72, 72);
	--pink: rgb(241, 71, 171);

	--blue-light: rgb(40, 110, 214);
	--yellow-light: rgb(250, 246, 146);
	--green-light: rgb(119, 226, 111);
	--purple-light: rgb(122, 94, 248);
	--orange-light: rgb(250, 156, 74);
	--red-light: rgb(255, 82, 82);
	--pink-light: rgb(255, 86, 184);
  
	--blue-20: rgba(5, 80, 255, 0.2);
	--yellow-20: rgba(255, 245, 0, 0.2);
	--green-20: rgba(80, 220, 70, 0.2);
	--red-20: rgba(245, 0, 55, 0.2);
	--orange-20: rgba(255, 120, 0, 0.2);
	--purple-20: rgba(130, 80, 255, 0.2);
	--pink-20: rgba(245, 0, 163, 0.2);

	--blue-50: rgba(5, 80, 255, 0.5);
	--yellow-50: rgba(255, 245, 0, 0.5);
	--green-50: rgba(80, 220, 70, 0.5);
	--red-50: rgba(245, 0, 55, 0.5);
	--orange-50: rgba(255, 120, 0, 0.5);
	--purple-50: rgba(130, 80, 255, 0.5);
	--pink-50: rgba(245, 0, 163, 0.5);
  
	--navBlur: rgba(240,240,243,0.50);`
}