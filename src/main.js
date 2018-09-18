import Picker from './core/picker-class'

const option1 = {
  inputEl: '#demo-picker-device',
  containerEl: '#demo-picker-date-container',
  rotateEffect: true,
  renderToolbar: function () {
    return '<div class="toolbar">' +
      '<div class="toolbar-inner">' +
        '<div class="left">' +
          '<a href="#" class="link toolbar-randomize-link">Randomize</a>' +
        '</div>' +
        '<div class="right">' +
          '<a href="#" class="link sheet-close popover-close">That\'s me</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  },
  cols: [
    {
      values: ['Mr', 'Ms'],
    },
    {
      textAlign: 'left',
      values: ('Super Amazing Bat Iron Rocket Lex Beautiful Wonderful Raining Happy Funny Cool Hot').split(' ')
    },
    {
      values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
    },
  ],
}

new Picker(option1)