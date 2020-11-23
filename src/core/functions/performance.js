export function throttle(fn, ms) {
  let last = 0;

  return function() {
    let now = new Date().getTime();
    if (now - last < ms) {
      return;
    }

    let args = arguments;

    last = now;
    fn.apply(this, args);
  };
}

export function debounce(fn, ms) {
  let timer;

  return function() {
    if (timer) clearTimeout(timer);

    let args = arguments;

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}
