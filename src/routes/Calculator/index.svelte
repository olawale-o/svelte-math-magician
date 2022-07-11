<script>
import Input from '../../Components/Input/index.svelte';
import Button from '../../Components/Button/index.svelte';
let inputValue = '0';
const keys = [
  {
    text: 'AC',
    cssClass: 'btn',
  },
  {
    text: '+/-',
    cssClass: 'btn',
  },
  {
    text: '%',
    cssClass: 'btn',
  },
  {
    text: '÷',
    cssClass: 'btn btn-orange',
  },
  {
    text: '7',
    cssClass: 'btn',
  },
  {
    text: '8',
    cssClass: 'btn',
  },
  {
    text: '9',
    cssClass: 'btn',
  },
  {
    text: '*',
    cssClass: 'btn btn-orange',
  },
  {
    text: '4',
    cssClass: 'btn',
  },
  {
    text: '5',
    cssClass: 'btn',
  },
  {
    text: '6',
    cssClass: 'btn',
  },
  {
    text: '-',
    cssClass: 'btn btn-orange',
    
  },
  {
    text: '1',
    cssClass: 'btn',
  },
  {
    text: '2',
    cssClass: 'btn',
  },
  {
    text: '3',
    cssClass: 'btn',
  },
  {
    text: '+',
    cssClass: 'btn btn-orange',
  },
  {
    text: '0',
    cssClass: 'btn span-2',
  },
  {
    text: '.',
    cssClass: 'btn',
  },
  {
    text: '=',
    cssClass: 'btn btn-orange',
  },
];
</script>

<div class="calculator">
  <h4>
    Let
    &lsquo;
    s
    &nbsp; do some math!
  </h4>
  <div class="calculator-area">
    <Input bind:inputValue={inputValue} />
    <div class="buttons-grid">
      {#each keys as key}
        <Button
          bind:cssClass={key.cssClass}
          bind:text={key.text}
        />
      {/each}
    </div>
  </div>
</div>

<style>
  .calculator {
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  h4 {
    font-size: 3.5rem;
  }
</style>