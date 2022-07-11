<script>
  export let inputValue = '';
  const handleOnChange = (event) => {
    inputValue = event.target.value;
  };
</script>

<div class="field">
  <input class="input" value={inputValue} on:input={handleOnChange} disabled />
</div>