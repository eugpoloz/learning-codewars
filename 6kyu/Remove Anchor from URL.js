function removeUrlAnchor(url){
  return url.indexOf('#') !== -1 ? url.substring(0, url.indexOf('#')) : url;
}