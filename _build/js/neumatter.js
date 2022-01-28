//___ neumatter 1.1

const dataBtnLight = n$('[data-btn=light]');
const dataBtnDark = n$('[data-btn=dark]');
const dataBtnTheme = n$('[data-btn=theme]');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const navTabs = n$('[data-nav=tab]');
const notificationCenter = n$('[data-nav=toggler]');
const notification = n$('[data-notification=successDemo]');
const navLinks = n$('.c-nav-link');
const dataOffsetNavbar = n$('[data-offset=navbar]');

const setNewNotif = ()=> {
  if (notification) {
    notificationCenter.check();
    setTimeout(()=> {
      notificationCenter.uncheck();
    }, 5000*2);
  }
};

const Theme = {
  dark: ()=> {
    n$('docEl').attribute('data-theme', 'dark');
    dataBtnDark.addClass('u-display/none');
    dataBtnLight.removeClass('u-display/none');
    dataBtnTheme.check();
  },
  light: ()=> {
    n$('docEl').attribute('data-theme', 'light');
    dataBtnDark.removeClass('u-display/none');
    dataBtnLight.addClass('u-display/none');
    dataBtnTheme.uncheck();
  },
  storage:
    n$('stor').storage('theme')
};

n$('window').eventOn('load', ()=> {
  if (Theme.storage === 'dark') {
    Theme.dark();
  } else {
    if (Theme.storage === 'light') {
      Theme.light();
    }
  }
  if (Theme.storage === null) {
    if (prefersDarkMode.matches) {
      Theme.dark();
    } else {
      Theme.light();
    }
  }
});

dataBtnLight.eventOn('click', ()=> {
  n$('stor').storage('theme', 'light');
  Theme.light();
});

dataBtnDark.eventOn('click', ()=> {
  n$('stor').storage('theme', 'dark');
  Theme.dark();
});

dataBtnTheme.eventOn('click', ()=> {
  if (Theme.storage === 'dark') {
    Theme.light();
    n$('stor').storage('theme', 'light');
  } else {
    Theme.dark();
    n$('stor').storage('theme', 'dark');
  }
});

navTabs.each(els=> {
  let el = n$(els);
  let e = el.id();
  const checkedNav = n$('stor').storage('checkedBox');
  if (checkedNav === e) {
    el.check();
  }
  el.eventOn('click', ()=> {
    const checkedNavTwo = n$('stor').storage('checkedBox');
    if (e === checkedNavTwo) {
      el.uncheck();
      n$('stor').storage('checkedBox', 'nulled');
    } else {
      el.check();
      n$('stor').storage('checkedBox', e);
    }
  });
});

navigator.permissions.query({name: "clipboard-write"}).then(result => {
  if (result.state == "granted" || result.state == "prompt") {
    navigator.clipboard.readText().then(clipText =>
      document.querySelector("#npmCopy").innerText = clipText
    );
  }
});
