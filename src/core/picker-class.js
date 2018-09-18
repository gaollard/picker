// import $ from 'jquery';
import { window } from 'ssr-window';
import pickerColumn from './picker-column';
import EventEmitter from '../utils/EventEmitter';

console.log(window)

class Picker extends EventEmitter {
  constructor (params) {
    super(params)
    console.log(this)
  }
}

export default Picker