const DEFAULTS = {
  // Picker settings
  updateValuesOnMomentum: false,
  updateValuesOnTouchmove: true,
  rotateEffect: false,
  momentumRatio: 7,
  freeMode: false,
  cols: [],
  // Common opener settings
  containerEl: null,
  openIn: 'auto', // or 'popover' or 'sheet'
  formatValue: null,
  inputEl: null,
  inputReadOnly: true,
  closeByOutsideClick: true,
  scrollToInput: true,
  toolbar: true,
  toolbarCloseText: 'Done',
  cssClass: null,
  routableModals: true,
  view: null,
  url: 'select/',
  // Render functions
  renderToolbar: null,
  render: null,
}

export default DEFAULTS