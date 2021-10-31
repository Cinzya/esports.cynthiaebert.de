  function copy(text, id) {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', text);
    /* Get the text field */
    var copyText = input;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById(id);
    tooltip.innerHTML = "Copied";
  }
  
  function out(id) {
    var tooltip = document.getElementById(id);
    tooltip.innerHTML = "Copy to clipboard";
  }