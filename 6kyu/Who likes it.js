function likes(names) {
  let f3t = names[0];
  let s4d = names[1];
  const like = " like this";
  
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${f3t} likes this`;
    case 2:
      return `${f3t} and ${s4d}${like}`;
    default:
      return `${f3t}, ${s4d} and ${names.length === 3 ? names[2] : `${names.length - 2} others`}${like}`;
  }
}