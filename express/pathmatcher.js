var matchURLToPath = (url, path) => {
  //url = /foo/johndoe
  //path = /foo/:bar

  if (path == "/") {
    return true;
  }

  paramspatharray = path.split("/"); // ["", "foo", ":bar"]
  paramsurlarray = url.split("/"); // ["", "foo", "johndoe"]

  if (paramspatharray.length != paramsurlarray.length) {
    return false;
  }

  paramspatharray = paramspatharray.map((item, idx) => {
    if (paramspatharray[idx].charAt(0) == ":") {
      return paramsurlarray[idx];
    }
    return item;
  }); // turns ["", "foo", ":bar"] to ["", "foo", "johndoe"]

  var tf = true;
  paramspatharray.map((item, idx) => {
    if (item != paramsurlarray[idx]) {
      tf = false;
      return false;
    }
  });

  if (tf == false) {
    return false;
  }

  return true;
};

module.exports = matchURLToPath;
