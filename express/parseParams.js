var params = (callbackpath, purl) => {
  if (callbackpath == "/" && purl != "/") {
    return {};
  }
  //callbackpath = '/foo/:bar'
  //purl = '/foo/johndoe'
  let paramsObj = {};
  pathArray = callbackpath.split("/");
  urlArray = purl.split("/");

  for (let i = 1; i < pathArray.length; i++) {
    if (pathArray[i].charAt(0) == ":") {
      let key = pathArray[i].substring(1);
      paramsObj[key] = urlArray[i];
    }
  }
  return paramsObj;
};

module.exports = params;
