
'use strict';

const n$ = (selector)=> {
  class neuQuery {// neuQuery

    constructor(selector) {// constructor
      this.selector = selector;
      if (selector === 'document') {
        this.els = [document];
      } else if (selector === 'window' || selector === undefined) {
        this.els = [window];
      } else if (selector === 'docEl') {
        this.els = [document.documentElement];
      } else if (selector === 'stor') {
        this.els = [localStorage];
      } else {
        this.els = (typeof selector === 'object') ? new Array(this.selector) : document.querySelectorAll(this.selector);
      }
    };// end constructor

    info() {
      let neumatter = { title: 'neumatter', version: '0.3' };
      return neumatter;
    }

    each(callback) {
      if (!callback || typeof callback !== 'function') { return; }
      for (let i = 0; i < this.els.length; i++) {
        callback.call(this.els, this.els[i], i);
      }
      return this;
    };

    eventOn(event, callback) {
      this.each(els => els.addEventListener(event, callback));
      return this;
    }; 

    addClass(css) {
      this.each(els => els.classList.add(css));
      return this;
    };

    removeClass(css) {
      this.each(els => els.classList.remove(css));
      return this;
    };

    swapClass(cssR, cssA) {
      this.each(els => els.classList.remove(cssR).classList.add(cssA));
      return this;
    };

    attribute(p, v) {
      if (!v) { let el = {str: ''};
        this.each(els => el.str = els.getAttribute(p));
        return el.str;
      } else {
      this.each(els => els.setAttribute(p, v));
      }
      return this;
    };

    storage(p, v) {
      if (!v) { let el = {str: ''};
        this.each(els => el.str = els.getItem(p));
        return el.str;
      } else {
      this.each(els => els.setItem(p, v));
      }
      return this;
    };

    id(v) {
      if (!v) { let el = {str: ''};
        this.each(els => el.str = els.id);
        return el.str;
      } else {
        this.each(els => els.id = v);
      }
      return this;
    };

    innerWidth() { let el = {str: ''};
      this.each(els => {
        el.str = els.innerWidth;
      });
      return el.str;
    };

    searchVal() { let el = {str: ''};
      this.each(els => {
        el.str = els.target.value.toLowerCase();
      });
      return el.str;
    };

    text() { let el = {str: ''};
      this.each(els => el.str = els.textContent);
      return el.str;
    };

    height() { let el = {str: ''};
      this.each(els => el.str = els.clientHeight);
      return el.str;
    };

    typeSize(v) { let s = {tV: ''};
      this.each(els => {
        if (!v) 
          s.tV = els.style.fontSize;
        else
          els.style.fontSize = v;
          s.tV = this;
      });
      return s.tV;
    };

    //___ true false and set
    hasClass(css) { let rtn = '';
      this.each(els => {
        if (els.classList.contains(css))
          rtn = true;
        else
          rtn = false;
      });
      return rtn;
    };

    contains(p) { let rtn = '';
      this.each(els => {
        if (els.includes(p))
          rtn = true;
        else
          rtn = false;
      });
      return rtn;
    };

    check() {
      this.each(els => els.checked = true);
      return this;
    };

    uncheck() {
      this.each(els => els.checked = false);
      return this;
    };
  
    activeLinks() {
      this.each(els => {
        let e = n$(els).attribute('href');
        let l = n$('window').location();
        if (l === e) n$(els).addClass('active');
      });
      return this;
    };

    activePaths() {
      this.each(els => { 
        let e = n$(els).attribute('href');
        let l = n$('window').location();
        if (l.includes(e) && e !== '/') {
          n$(els).addClass('active');
        }
      });
      return this;
    };

    browser() {
      let ua = navigator.userAgent;
      let webkitVersion = /version\/(\d+(\.\d+)?)/i;
      let result        = {name: '', version: '', screen: ''};
      this.each((els)=> {
        result.screen = els.innerWidth + 'px';
      });
      if (/msie/i.test(ua)) {
        result.name = 'IE';
        result.version = ua.match(/msie (\d+(\.\d+)+)+/i)[1];
      } else if (/firefox/i.test(ua)) {
        result.name = 'Firefox';
        result.version = ua.match(/firefox\/(\d+(\.\d+)+)/i)[1];
      } else if (/safari/i.test(ua) && !/chrome/i.test(ua)) {
        result.name = 'Safari';
        result.version = ua.match(webkitVersion)[1];
      } else if (/edg/i.test(ua)) {
        result.name = 'Edge';
        result.version = ua.match(/edg\/(\d+(\.\d+)+)/i)[1];
      } else if (/opera/i.test(ua)) {
        result.name = 'Opera';
        result.version = ua.match(webkitVersion)[1];
      } else if (/chrome/i.test(ua)) {
        result.name = 'Chrome';
        result.version = ua.match(/chrome\/(\d+(\.\d+)+)/i)[1];
      } else {
        result.name = 'Others';
        result.version = 'NaN';
      }
      return result;
    };

    location() { let el = {any: ''};
      this.each(els => {
        let loc = els.location.href;
        let l = loc.substring(loc.indexOf('/', 9) + 1);
        el.any = '/' + l;
      });
      return el.any;
    };

  };// end neuQuery
  return new neuQuery(selector);
};
