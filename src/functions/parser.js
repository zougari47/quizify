//Transform HTML symbol to real character (&amp; => & ...)
function parse(str) {
  const parser = new DOMParser();
  return parser.parseFromString(`<!doctype html><body>${str}`, 'text/html').body
    .textContent;
}

export default parse;
