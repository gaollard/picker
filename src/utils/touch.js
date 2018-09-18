import Support from './support';

export default {
	touchEvents: {
	  start: Support.touch ? 'touchstart' : 'mousedown',
	  move: Support.touch ? 'touchmove' : 'mousemove',
	  end: Support.touch ? 'touchend' : 'mouseup'
	}
}
