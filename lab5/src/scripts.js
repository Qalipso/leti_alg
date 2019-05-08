import kmp from './kmp'
search_pattern_button.onclick = function search_pattern() {
console.log("sdsd");
  let result = kmp(main_str.value, pattern.value);

  let content = document.createTextNode(result[0]);
  let parent  = document.getElementById("result_pattern");
  parent.innerHTML = '';
  parent.appendChild(content);
}

search_loop_button.onclick = function search_loop() {
  let ans;
  if (main_string.value.length != loop_string.value.length) {
     ans = -1;
  }
  else
  let result = kmp(main_string.value,loop_string.value);

  let content = document.createTextNode(result[1]);
  let parent  = document.getElementById("result_loop");
  parent.innerHTML = '';
  parent.appendChild(content);
}
