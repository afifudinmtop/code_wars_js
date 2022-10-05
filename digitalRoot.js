function digitalRoot(n) {
  let a = n.toString();
  let b = a.split("");
  let c = 0;
  for (let index = 0; index < b.length; index++) {
    c += parseInt(b[index]);
  }

  if (c < 10) {
    return c;
  } else {
    let d = parseInt(c);
    return digitalRoot(d);
  }
}
