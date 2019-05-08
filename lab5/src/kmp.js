function kmp11(main_str_js,pattern_js) {
  let mas_prefix =new Array(pattern_js.length).fill(0);
  let result = [];
  let count = 0;
  let flag = 0;
  mas_prefix[0] = 0;
  for (let i = 1; i < pattern_js.length; ++i) {
    while ((count > 0) && (pattern_js[i] != pattern_js[count])){
      count = mas_prefix[count-1];
    }
    if (pattern_js[i] == pattern_js[count]){
      count++;
    }
    mas_prefix[i] = count;
  }
  count = 0;
  for (let i = 0; i < main_str_js.length; ++i)
  {
  while ((count > 0) && (pattern_js[count] != main_str_js[i])){
      count = mas_prefix[count-1];
  }
  if (pattern_js[count] == main_str_js[i]){
    count++;
  }
  //console.log(count);
  if (count == pattern_js.length){
    flag = 1;
    result.push(i - pattern_js.length+1);
  }
}
if (flag == 0)
  result = -1;

  let ans = (main_str_js.length - count) ;
  //console.log(ans);
  //ans = result[1];
      if (count == main_str_js.length){
        ans = 0;
        count = 0;
      }
  else{
  for (let i = 0; i < main_str_js.length - count; i++) {
    if (pattern_js[i+count] != main_str_js[i])
      ans = -1;
  }
  }


let ret = [result,ans];
return ret;
};

module.exports = kmp11;
