/**
 * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);
 * @author Tim  Shedor
 */

code[class*="language-"],
pre[class*="language-"] {
  color: black;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  position: relative;
  margin: .5em 0;
  overflow: visible;
  padding: 0;
}

pre[class*="language-"]>code {
  position: relative;
  border-left: 10px solid #358ccb;
  box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;
  background-color: #fdfdfd;
  background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);
  background-size: 3em 3em;
  background-origin: content-box;
  background-attachment: local;
}

code[class*="language"] {
  max-height: inherit;
  height: inherit;
  padding: 0 1em;
  display: block;
  overflow: auto;
}

/* Margin bottom to accomodate shadow */
:not(pre)>code[class*="language-"],
pre[class*="language-"] {
  background-color: #fdfdfd;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-bottom: 1em;
}

/* Inline code */
:not(pre)>code[class*="language-"] {
  position: relative;
  padding: .2em;
  border-radius: 0.3em;
  color: #c92c2c;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline;
  white-space: normal;
}

pre[class*="language-"]:before,
pre[class*="language-"]:after {
  content: '';
  z-index: -2;
  display: block;
  position: absolute;
  bottom: 0.75em;
  left: 0.18em;
  width: 40%;
  height: 20%;
  max-height: 13em;
  box-shadow: 0px 13px 8px #979797;
  -webkit-transform: rotate(-2deg);
  -moz-transform: rotate(-2deg);
  -ms-transform: rotate(-2deg);
  -o-transform: rotate(-2deg);
  transform: rotate(-2deg);
}

:not(pre)>code[class*="language-"]:after,
pre[class*="language-"]:after {
  right: 0.75em;
  left: auto;
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  transform: rotate(2deg);
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #7D8B99;
}

.token.punctuation {
  color: #5F6364;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.function-name,
.token.constant,
.token.symbol,
.token.deleted {
  color: #c92c2c;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.function,
.token.builtin,
.token.inserted {
  color: #2f9c0a;
}

.token.operator,
.token.entity,
.token.url,
.token.variable {
  color: #a67f59;
  background: rgba(255, 255, 255, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword,
.token.class-name {
  color: #1990b8;
}

.token.regex,
.token.important {
  color: #e90;
}

.language-css .token.string,
.style .token.string {
  color: #a67f59;
  background: rgba(255, 255, 255, 0.5);
}

.token.important {
  font-weight: normal;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.namespace {
  opacity: .7;
}

@media screen and (max-width: 767px) {

  pre[class*="language-"]:before,
  pre[class*="language-"]:after {
    bottom: 14px;
    box-shadow: none;
  }

}

/* Plugin styles */
.token.tab:not(:empty):before,
.token.cr:before,
.token.lf:before {
  color: #e0d7d1;
}

/* Plugin styles: Line Numbers */
pre[class*="language-"].line-numbers.line-numbers {
  padding-left: 0;
}

pre[class*="language-"].line-numbers.line-numbers code {
  padding-left: 3.8em;
}

pre[class*="language-"].line-numbers.line-numbers .line-numbers-rows {
  left: 0;
}

/* Plugin styles: Line Highlight */
pre[class*="language-"][data-line] {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
}

pre[data-line] code {
  position: relative;
  padding-left: 4em;
}

pre .line-highlight {
  margin-top: 0;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M489.2 287.9h-27.4c-2.6 0-4.6 2-4.6 4.6v32h-36.6V146.2c0-2.6-2-4.6-4.6-4.6h-27.4c-2.6 0-4.6 2-4.6 4.6v32h-36.6v-32c0-2.6-2-4.6-4.6-4.6h-27.4c-2.6 0-4.6 2-4.6 4.6v32h-36.6v-32c0-6-8-4.6-11.7-4.6v-38c8.3-2 17.1-3.4 25.7-3.4 10.9 0 20.9 4.3 31.4 4.3 4.6 0 27.7-1.1 27.7-8v-60c0-2.6-2-4.6-4.6-4.6-5.1 0-15.1 4.3-24 4.3-9.7 0-20.9-4.3-32.6-4.3-8 0-16 1.1-23.7 2.9v-4.9c5.4-2.6 9.1-8.3 9.1-14.3 0-20.7-31.4-20.8-31.4 0 0 6 3.7 11.7 9.1 14.3v111.7c-3.7 0-11.7-1.4-11.7 4.6v32h-36.6v-32c0-2.6-2-4.6-4.6-4.6h-27.4c-2.6 0-4.6 2-4.6 4.6v32H128v-32c0-2.6-2-4.6-4.6-4.6H96c-2.6 0-4.6 2-4.6 4.6v178.3H54.8v-32c0-2.6-2-4.6-4.6-4.6H22.8c-2.6 0-4.6 2-4.6 4.6V512h182.9v-96c0-72.6 109.7-72.6 109.7 0v96h182.9V292.5c.1-2.6-1.9-4.6-4.5-4.6zm-288.1-4.5c0 2.6-2 4.6-4.6 4.6h-27.4c-2.6 0-4.6-2-4.6-4.6v-64c0-2.6 2-4.6 4.6-4.6h27.4c2.6 0 4.6 2 4.6 4.6v64zm146.4 0c0 2.6-2 4.6-4.6 4.6h-27.4c-2.6 0-4.6-2-4.6-4.6v-64c0-2.6 2-4.6 4.6-4.6h27.4c2.6 0 4.6 2 4.6 4.6v64z"/></svg>
<!--
Font Awesome Free 5.3.1 by @fontawesome - https://fontawesome.com
License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             .popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $zindex-popover;
  display: block;
  max-width: $popover-max-width;
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text();
  font-size: $popover-font-size;
  // Allow breaking very long words so they don't overflow the popover's bounds
  word-wrap: break-word;
  background-color: $popover-bg;
  background-clip: padding-box;
  border: $popover-border-width solid $popover-border-color;
  @include border-radius($popover-border-radius);
  @include box-shadow($popover-box-shadow);

  .arrow {
    position: absolute;
    display: block;
    width: $popover-arrow-width;
    height: $popover-arrow-height;
    margin: 0 $border-radius-lg;

    &::before,
    &::after {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid;
    }
  }
}

.bs-popover-top {
  margin-bottom: $popover-arrow-height;

  .arrow {
    bottom: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
  }

  .arrow::before,
  .arrow::after {
    border-width: $popover-arrow-height ($popover-arrow-width / 2) 0;
  }

  .arrow::before {
    bottom: 0;
    border-top-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    bottom: $popover-border-width;
    border-top-color: $popover-arrow-color;
  }
}

.bs-popover-right {
  margin-left: $popover-arrow-height;

  .arrow {
    left: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
    width: $popover-arrow-height;
    height: $popover-arrow-width;
    margin: $border-radius-lg 0; // make sure the arrow does not touch the popover's rounded corners
  }

  .arrow::before,
  .arrow::after {
    border-width: ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2) 0;
  }

  .arrow::before {
    left: 0;
    border-right-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    left: $popover-border-width;
    border-right-color: $popover-arrow-color;
  }
}

.bs-popover-bottom {
  margin-top: $popover-arrow-height;

  .arrow {
    top: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
  }

  .arrow::before,
  .arrow::after {
    border-width: 0 ($popover-arrow-width / 2) $popover-arrow-height ($popover-arrow-width / 2);
  }

  .arrow::before {
    top: 0;
    border-bottom-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    top: $popover-border-width;
    border-bottom-color: $popover-arrow-color;
  }

  // This will remove the popover-header's border just below the arrow
  .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: $popover-arrow-width;
    margin-left: ($popover-arrow-width / -2);
    content: "";
    border-bottom: $popover-border-width solid $popover-header-bg;
  }
}

.bs-popover-left {
  margin-right: $popover-arrow-height;

  .arrow {
    right: calc((#{$popover-arrow-height} + #{$popover-border-width}) * -1);
    width: $popover-arrow-height;
    height: $popover-arrow-width;
    margin: $border-radius-lg 0; // make sure the arrow does not touch the popover's rounded corners
  }

  .arrow::before,
  .arrow::after {
    border-width: ($popover-arrow-width / 2) 0 ($popover-arrow-width / 2) $popover-arrow-height;
  }

  .arrow::before {
    right: 0;
    border-left-color: $popover-arrow-outer-color;
  }

  .arrow::after {
    right: $popover-border-width;
    border-left-color: $popover-arrow-color;
  }
}

.bs-popover-auto {
  &[x-placement^="top"] {
    @extend .bs-popover-top;
  }
  &[x-placement^="right"] {
    @extend .bs-popover-right;
  }
  &[x-placement^="bottom"] {
    @extend .bs-popover-bottom;
  }
  &[x-placement^="left"] {
    @extend .bs-popover-left;
  }
}


// Offset the popover to account for the popover arrow
.popover-header {
  padding: $popover-header-padding-y $popover-header-padding-x;
  margin-bottom: 0; // Reset the default from Reboot
  font-size: $font-size-base;
  color: $popover-header-color;
  background-color: $popover-header-bg;
  border-bottom: $popover-border-width solid darken($popover-header-bg, 5%);
  $offset-border-width: calc(#{$border-radius-lg} - #{$popover-border-width});
  @include border-top-radius($offset-border-width);

  &:empty {
    display: none;
  }
}

.popover-body {
  padding: $popover-body-padding-y $popover-body-padding-x;
  color: $popover-body-color;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 @mixin caret-down {
  border-top: $caret-width solid;
  border-right: $caret-width solid transparent;
  border-bottom: 0;
  border-left: $caret-width solid transparent;
}

@mixin caret-up {
  border-top: 0;
  border-right: $caret-width solid transparent;
  border-bottom: $caret-width solid;
  border-left: $caret-width solid transparent;
}

@mixin caret-right {
  border-top: $caret-width solid transparent;
  border-right: 0;
  border-bottom: $caret-width solid transparent;
  border-left: $caret-width solid;
}

@mixin caret-left {
  border-top: $caret-width solid transparent;
  border-right: $caret-width solid;
  border-bottom: $caret-width solid transparent;
}

@mixin caret($direction: down) {
  @if $enable-caret {
    &::after {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: $caret-width * .85;
      vertical-align: $caret-width * .85;
      content: "";
      @if $direction == down {
        @include caret-down;
      } @else if $direction == up {
        @include caret-up;
      } @else if $direction == right {
        @include caret-right;
      }
    }

    @if $direction == left {
      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        width: 0;
        height: 0;
        margin-right: $caret-width * .85;
        vertical-align: $caret-width * .85;
        content: "";
        @include caret-left;
      }
    }

    &:empty::after {
      margin-left: 0;
    }
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 