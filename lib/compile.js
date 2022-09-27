#! /usr/bin/env node
module.exports = function() {

const fs    = require('fs')
const chromaPalette = require('chroma-palette')
const { rtnConfigPath, rtnVal, rtnOpaqueColor, rtnCss, rtnPath, getFile } = require('./util/neuUtilities')

const configPath = rtnConfigPath();
const _lib = __dirname + '/css/';

const _neu         = require(configPath);
const varsBase     = require('./colors/colors');
const varsBaseDark = require('./colors/colorsDark');

const exportPath = rtnPath(_neu.config.exportPath, __dirname + '/../compiled/');

const commentcss = fs.readFileSync(`${_lib}comment.css`, 'utf-8');
const resetcss = getFile(_neu.config.reset, `${_lib}reset.css`);
const basecss = getFile(_neu.config.base, `${_lib}base.css`);
const t_css = getFile(_neu.config.typography, `${_lib}t.css`);
const l_css = getFile(_neu.config.layout, `${_lib}l.css`);
const c_css = getFile(_neu.config.components, `${_lib}c.css`);
const f_css = getFile(_neu.config.forms, `${_lib}f.css`);
const u_css = getFile(_neu.config.utilities, `${_lib}u.css`);
const ump_css = getFile(_neu.config.u_mpNonsystem, `${_lib}u-nonsystem.css`);
const a_css = getFile(_neu.config.attributes, `${_lib}a.css`);

let configVarsDark = _neu.config.variablesBase === 'base' ? varsBaseDark.base : varsBaseDark.baseLight;
let darkMode = rtnCss(_neu.config.darkMode, configVarsDark);

const rootVars = {
  fontStackSans: [ 
    prop = '--font-stack-sans',
    val = rtnVal(_neu.config.fontStackSans, '"Source Sans Pro", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"')
  ],
  fontStackMonospace: [ 
    prop = '--font-stack-monospace',
    val = rtnVal(_neu.config.fontStackSans, '"Source Code Pro", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')
  ],
  primary: [ 
    prop = '--primary',
    val = rtnVal(_neu.config.colors.primary, 'var(--blue)')
  ],
  secondary: [ 
    prop = '--secondary',
    val = rtnVal(_neu.config.colors.secondary, 'var(--pink)')
  ],
  success: [ 
    prop = '--success',
    val = rtnVal(_neu.config.colors.success, 'var(--green)')
  ],
  danger: [ 
    prop = '--danger',
    val = rtnVal(_neu.config.colors.danger, 'var(--red)')
  ],
  warning: [ 
    prop = '--warning',
    val = rtnVal(_neu.config.colors.warning, 'var(--orange)')
  ],
  info: [ 
    prop = '--info',
    val = rtnVal(_neu.config.colors.info, 'var(--purple)')
  ],
  primaryLight: [ 
    prop = '--primary-light',
    val = rtnVal(_neu.config.colors.primaryLight, 'var(--blue-light)')
  ],
  secondaryLight: [ 
    prop = '--secondary-light',
    val = rtnVal(_neu.config.colors.secondaryLight, 'var(--pink-light)')
  ],
  successLight: [ 
    prop = '--success-light',
    val = rtnVal(_neu.config.colors.successLight, 'var(--green-light)')
  ],
  dangerLight: [ 
    prop = '--danger-light',
    val = rtnVal(_neu.config.colors.dangerLight, 'var(--red-light)')
  ],
  warningLight: [ 
    prop = '--warning-light',
    val = rtnVal(_neu.config.colors.warningLight, 'var(--orange-light)')
  ],
  infoLight: [ 
    prop = '--info-light',
    val = rtnVal(_neu.config.colors.infoLight, 'var(--purple-light)')
  ],
  primary20: [ 
    prop = '--primary-20',
    val = rtnOpaqueColor(_neu.config.colors.primary, _neu.config.colors.primary20, 'var(--blue-20)', '-20)')
  ],
  secondary20: [ 
    prop = '--secondary-20',
    val = rtnOpaqueColor(_neu.config.colors.secondary, _neu.config.colors.secondary20, 'var(--pink-20)', '-20)')
  ],
  success20: [ 
    prop = '--success-20',
    val = rtnOpaqueColor(_neu.config.colors.success, _neu.config.colors.success20, 'var(--green-20)', '-20)')
  ],
  danger20: [ 
    prop = '--danger-20',
    val = rtnOpaqueColor(_neu.config.colors.danger, _neu.config.colors.danger20, 'var(--red-20)', '-20)')
  ],
  warning20: [ 
    prop = '--warning-20',
    val = rtnOpaqueColor(_neu.config.colors.warning, _neu.config.colors.warning20, 'var(--orange-20)', '-20)')
  ],
  info20: [ 
    prop = '--info-20',
    val = rtnOpaqueColor(_neu.config.colors.info, _neu.config.colors.info20, 'var(--purple-20)', '-20)')
  ],
  primary50: [ 
    prop = '--primary-50',
    val = rtnOpaqueColor(_neu.config.colors.primary, _neu.config.colors.primary50, 'var(--blue-50)', '-50)')
  ],
  secondary50: [ 
    prop = '--secondary-50',
    val = rtnOpaqueColor(_neu.config.colors.secondary, _neu.config.colors.secondary50, 'var(--pink-50)', '-50)')
  ],
  success50: [ 
    prop = '--success-50',
    val = rtnOpaqueColor(_neu.config.colors.success, _neu.config.colors.success50, 'var(--green-50)', '-50)')
  ],
  danger50: [ 
    prop = '--danger-50',
    val = rtnOpaqueColor(_neu.config.colors.danger, _neu.config.colors.danger50, 'var(--red-50)', '-50)')
  ],
  warning50: [ 
    prop = '--warning-50',
    val = rtnOpaqueColor(_neu.config.colors.warning, _neu.config.colors.warning50, 'var(--orange-50)', '-50)')
  ],
  info50: [ 
    prop = '--info-50',
    val = rtnOpaqueColor(_neu.config.colors.info, _neu.config.colors.info50, 'var(--purple-50)', '-50)')
  ],
  focus: [ 
    prop = '--focus',
    val = rtnVal(_neu.config.colors.focus, 'var(--info-20)')
  ],
  systemMargin: [ 
    prop = '--system-margin',
    val = rtnVal(_neu.config.systemMargin, '1.25rem')
  ],
  systemHeight: [ 
    prop = '--system-height',
    val = rtnVal(_neu.config.systemHeight, '1.25rem')
  ],
  systemBorder: [ 
    prop = '--system-border',
    val = rtnVal(_neu.config.systemBorder, '1.25rem')
  ],
  systemBorderD2: [ 
    prop = '--system-border-d2',
    val = rtnVal(_neu.config.systemBorderD2, 'calc(var(--system-border) / 2)')
  ],
  sidebarWidth: [ 
    prop = '--sidebar-width',
    val = rtnVal(_neu.config.sidebarWidth, '15rem')
  ],
}

const root = {
  start: `\n:root {`,
  defaults: _neu.config.variablesBase === 'base' ? varsBase.base : varsBase.baseLight,
  fontStackSans: `\n\t${rootVars.fontStackSans.join(': ')}`,
  fontStackMonospace: `\n\t${rootVars.fontStackMonospace.join(': ')}`,
  primary: `\n\n\t${rootVars.primary.join(': ')}`,
  secondary: `\n\t${rootVars.secondary.join(': ')}`,
  success: `\n\t${rootVars.success.join(': ')}`,
  danger: `\n\t${rootVars.danger.join(': ')}`,
  warning: `\n\t${rootVars.warning.join(': ')}`,
  info: `\n\t${rootVars.info.join(': ')}`,
  primaryLight: `\n\n\t${rootVars.primaryLight.join(': ')}`,
  secondaryLight: `\n\t${rootVars.secondaryLight.join(': ')}`,
  successLight: `\n\t${rootVars.successLight.join(': ')}`,
  dangerLight: `\n\t${rootVars.dangerLight.join(': ')}`,
  warningLight: `\n\t${rootVars.warningLight.join(': ')}`,
  infoLight: `\n\t${rootVars.infoLight.join(': ')}`,
  primary20: `\n\n\t${rootVars.primary20.join(': ')}`,
  secondary20: `\n\t${rootVars.secondary20.join(': ')}`,
  success20: `\n\t${rootVars.success20.join(': ')}`,
  danger20: `\n\t${rootVars.danger20.join(': ')}`,
  warning20: `\n\t${rootVars.warning20.join(': ')}`,
  info20: `\n\t${rootVars.info20.join(': ')}`,
  primary50: `\n\n\t${rootVars.primary50.join(': ')}`,
  secondary50: `\n\t${rootVars.secondary50.join(': ')}`,
  success50: `\n\t${rootVars.success50.join(': ')}`,
  danger50: `\n\t${rootVars.danger50.join(': ')}`,
  warning50: `\n\t${rootVars.warning50.join(': ')}`,
  info50: `\n\t${rootVars.info50.join(': ')}`,
  focus: `\n\t${rootVars.focus.join(': ')}`,
  systemMargin: `\n\n\t${rootVars.systemMargin.join(': ')}`,
  systemHeight: `\n\t${rootVars.systemHeight.join(': ')}`,
  systemBorder: `\n\t${rootVars.systemBorder.join(': ')}`,
  systemBorderD2: `\n\t${rootVars.systemBorderD2.join(': ')}`,
  sidebarWidth: `\n\t${rootVars.sidebarWidth.join(': ')}`,
  end: `\n}`,
}

let neumatterConfig = [
  commentcss,
  root.start, 
  root.defaults,
  root.fontStackSans, root.fontStackMonospace,
  root.primary, root.secondary, root.success, root.danger, root.warning, root.info,
  root.primaryLight, root.secondaryLight, root.successLight, root.dangerLight, root.warningLight, root.infoLight,
  root.primary20, root.secondary20, root.success20, root.danger20, root.warning20, root.info20,
  root.primary50, root.secondary50, root.success50, root.danger50, root.warning50, root.info50,
  root.focus,
  root.systemMargin, root.systemHeight, root.systemBorder, root.systemBorderD2, root.sidebarWidth,
  root.end,
  darkMode,
  resetcss, basecss,
  t_css, l_css, c_css, f_css, u_css, ump_css, a_css,
]

let neumatter = neumatterConfig.join('');

let date_ob = new Date();
let date = ('0' + date_ob.getDate()).slice(-2);
let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

fs.writeFile( `${exportPath}neumatter.css`, neumatter, err => {
  if (err) throw err;
  console.log(
    chromaPalette.magenta.bold.paint('neumatter.css______________________________________\n'),
    chromaPalette.green.paint('successful\n'),
    chromaPalette.cyan.paint('folder:'),
    `${exportPath}\n`,
    chromaPalette.cyan.paint('date:'), 
    `${month}/${date}/${year} ${hours}:${minutes}:${seconds}`,
    );
});

}
