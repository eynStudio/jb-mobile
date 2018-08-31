// userAgent
const ua = navigator.userAgent;
export const isAndroid = () => ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
export const isIOS = () => !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
export const isWeixin = () => /micromessenger/i.test(ua);
export const isMobile = () => !!ua.match(/AppleWebKit.*Mobile.*/);

export default {
  isAndroid,
  isIOS,
  isMobile,
  isWeixin
};
