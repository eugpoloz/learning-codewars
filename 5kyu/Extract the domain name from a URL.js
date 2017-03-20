// not the best regex, though

function domainName(url){
  return url = url.replace(/^(?:https?:\/\/)?(?:www.)?(.*?)(?:\..*)/g, '$1');
}
