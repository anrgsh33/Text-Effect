const text = document.getElementById("text");
const arr = ["I am a Student!", "I am a Programmer!", "I am a Web developer!"];

  let i=0;
  let idx = 1;
  writeText();
  function writeText() {
    text.innerText = arr[i].slice(0, idx);
    idx++;
    if(idx>arr[i].length)
    {
        i++;
        idx=1;
    }
    if(i==3){
        i=0;
    }
    if (idx <= arr[i].length) {
      setTimeout(writeText, 200);
    }
}
