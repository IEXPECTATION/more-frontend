
export function Debounce(cb: (...args: any) => void, delay: number) {
  let timer: number | null = null;
  return (...args: any) => {
    if (timer) {
      console.log("clear");
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      cb(args);
      timer = null;
    }, delay);
  }
}