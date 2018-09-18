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
      values: ['广东省', '广西省'],
    },
    {
      textAlign: 'left',
      values: ['深圳', '珠海', '惠州', '广州']
    },
    {
      values: ['罗湖', '西里', '南山', '广州']
    },
  ],
}

new Picker(option1)