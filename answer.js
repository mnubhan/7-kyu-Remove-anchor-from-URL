function removeUrlAnchor(url){
  return url.includes('#')? url.slice(0, url.indexOf('#')) : url;
}

function removeUrlAnchor(url){
  return url.split('#')[0];
}

function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}
