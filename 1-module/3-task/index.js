function ucFirst(str) {
  if (str.trim() == ''){
    return str;
  }
  else{
    let result = str[0].toUpperCase()+str.slice(1);
    return result;
  }
}

