import { map } from 'lodash'
import theme, { colors } from './index'

let shorthandSpacing = [...Array(51)].map((_, i) => {
  return `
  .m${i}{ margin: ${i}px !important;}
  .mt${i}{ margin-top: ${i}px !important;}
  .mb${i}{ margin-bottom: ${i}px !important;}
  .ml${i}{ margin-left: ${i}px !important;}
  .mr${i}{ margin-right: ${i}px !important;}
  .mx${i}{ margin-right: ${i}px !important; margin-left: ${i}px !important;}
  .my${i}{ margin-top: ${i}px !important; margin-bottom: ${i}px !important;}
  .p${i}{ padding: ${i}px !important;}
  .pt${i}{ padding-top: ${i}px !important;}
  .pb${i}{ padding-bottom: ${i}px !important;}
  .pl${i}{ padding-left: ${i}px !important;}
  .pr${i}{ padding-right: ${i}px !important;}
  .px${i}{ padding-right: ${i}px !important; padding-left: ${i}px !important;}
  .py${i}{ padding-top: ${i}px !important; padding-bottom: ${i}px !important;}
  .w${i}{ width: ${i}px !important; }
  .h${i}{ height: ${i}px !important; }
  `
})

const colorsArray = map(colors, (value, key) => `
  .txt-${key}{ color: ${value} !important;}
  .bg-${key}{ background-color: ${value} !important;}
`)

const widthArray = [...Array(9)].map((_, i) => `
  .w${i}00{ width: ${i}00px !important; }
`)

// ${screenArray.join(' ')}
export default () => `
${shorthandSpacing.join(' ')}
${colorsArray.join(' ')}
${widthArray.join(' ')}
.m-y-auto{margin-top:auto;margin-bottom:auto;}
.m-x-auto{margin-left:auto;margin-right:auto;}
.m-auto { margin:auto; }

.noPsuedo{
  &:after{display: none !important;}
  &:before{display: none !important;}
}
.noPointer { cursor: default !important; }
.pointer { cursor: pointer !important; }
.noUnderline { text-decoration: none;}
.underline { text-decoration: underline;}
.circle { border-radius: 50%; }

.flex, .f { display: flex !important;}
.wrap { flex-wrap: wrap; }
.if { display: inline-flex !important;}
.fill { flex: 1; }
.f-row { display: flex !important; flex-direction: row !important;}
.f-col { display: flex !important; flex-direction: column !important;}
.f-jcc  { display: flex !important; justify-content: center !important;}
.f-jcs  { display: flex !important; justify-content: flex-start !important;}
.f-jce  { display: flex !important; justify-content: flex-end !important;}
.f-jcs  { display: flex !important; justify-content: flex-start !important;}
.f-jcsb  { display: flex !important; justify-content: space-between !important;}
.f-jcsa  { display: flex !important; justify-content: space-around !important;}
.f-acc  { display: flex !important; align-content: center !important;}
.f-aic  { display: flex !important; align-items: center !important;}
.f-aib { display: flex !important; align-items: baseline !important;}
.f-ass { display: flex !important; align-self: stretch !important;}
.f-ais { display: flex !important; align-items: stretch !important;}
.f-aifs { display: flex !important; align-items: flex-start !important;}

.box-shadow-tight   { box-shadow: ${theme.boxShadow.tight}}
.box-shadow-loose   { box-shadow: ${theme.boxShadow.loose}}
.box-shadow-inset   { box-shadow: ${theme.boxShadow.inset}}

.relative { position: relative }
.capitalize { text-transform: capitalize !important }

.fullWidth, .w100 {min-width: 100%}
.h100 {height: 100% !important}
.fullHeight{min-height:100%}
.justifyCenter{ justify-content: center; }
.b-l-1 { border-left: 1px solid ${theme.outline} !important;}
.b-t-1 { border-top: 1px solid ${theme.outline} !important;}
.b-b-1 { border-bottom: 1px solid ${theme.outline} !important;}
.border { border:1px solid ${theme.outline} !important;}

.onHover { opacity: 0; } .onHover:hover { opacity: 1; }

.tal { text-align: left !important; }
.tar { text-align: right !important; }
.tac { text-align: center !important; }

.float-right, .fr { float: right !important; }
.float-left, .fl { float: left !important; }

.m-y-auto{margin-top:auto;margin-bottom:auto;}

.text-wrap-per-line{
  white-space: pre-line !important;
}
.overflow-visible{ 
  overflow: visible !important;
  overflow-y: visible !important;
}
`
