<script lang="ts">
  import type {IRateManager} from '../interfaces/IRateManager';
  import minusSvg from '../images/minus-icon.svg?url';
  import plusSvg from '../images/plus-icon.svg?url';

  export let rateManager: IRateManager;
  export let tjm = 600;
  let minTjm = rateManager.getMinTJMValue();
</script>
<div class="renumerator">
  <div class="container">
    <div class="block">
      <span class="title">TJM</span>
      <div class="flex">
        <button on:click={() => tjm = Math.max(minTjm, tjm - 10)}>
          <img src={minusSvg} alt="Minus Svg icon" class="img-btn">
        </button>
        <span>{tjm}</span>
        <button on:click={() => tjm += 10}>
          <img src={plusSvg} alt="Plus Svg icon" class="img-btn">
        </button>
      </div>
    </div>
  </div>
</div>

<style>

  @import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";

  .renumerator {
    display: flex;
    padding: 77px 40px;
    width: calc(100% - 80px);
    flex-shrink: 0;
    border-radius: 32px;
    background: linear-gradient(180deg, #201a21 0%, #250e2e 100%);
    box-shadow: 0 24px 44px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(22px);
    flex-direction: column;
  }

  .renumerator .block {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  .renumerator .block span.title {
    margin-bottom: 40px;
    text-align: center;
    display: block;
    flex: 1;
  }

  .renumerator .flex {
    justify-content: space-around;
    display: flex;
    flex: 1;
  }

  .renumerator .flex button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .renumerator .flex span {
    font-size: 2em;
    font-weight: 900;
    margin: 5px 2px;
  }

  .renumerator .title {
    margin-bottom: 16px;
    text-align: left;
  }

  .renumerator .container {
    display: flex;
    align-self: center;
    width: 100%;
    margin-top: 40px;
  }

  /* overide selectBox */

  * :global(.mdc-select__dropdown-icon-graphic) {
    fill: white !important;
  }

  * :global(.mdc-select__selected-text) {
    color: white !important;
  }

  * :global(.mdc-select__selected-text) {
    font-size: 16px;
    font-weight: 500;
    font-family: Montserrat, serif;
  }

  * :global(.mdc-deprecated-list-item--selected) {
    background-color: #0E130B;
    color: white !important;
  }

  :global(.mdc-select__menu) {
    background: #413946;
    color: white;
  }

  :global(.mdc-select__menu li) {
    color: white;
  }

  :root {
    --mdc-theme-primary: rgba(255, 255, 255, 0.6);
  }

  :global(.smui-select__line-ripple) {
    border-color: yellow;
  }

  :global(.smui-select__dropdown-icon) {
    color: grey;
  }


  :global(.smui-select--focused .smui-select__line-ripple) {
    border-color: blue;
  }

  * :global(.mdc-select) {
    background: rgba(255, 255, 255, 0.10);
  }

  * :global(.mdc-select__anchor) {
    height: 100px;
  }

  * :global(.shaped-outlined),
  * :global(.shaped-outlined .mdc-select__anchor) {
    border-radius: 24px;
  }

  * :global(.shaped-outlined .mdc-text-field__input) {
    padding-left: 32px;
    padding-right: 0;
  }

  * :global(.shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__leading) {
    border-radius: 24px 0 0 24px;
    border-color: rgba(255, 255, 255, 0.6);
    width: 28px;
  }

  * :global(.shaped-outlined
    .mdc-notched-outline
    .mdc-notched-outline__trailing) {
    border-color: rgba(255, 255, 255, 0.6);
    border-radius: 0 24px 24px 0;
  }

  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    border-color: rgba(255, 255, 255, 0.6);
  }

  .img-btn {
    width: 3em;
  }

  @media screen and (max-width: 500px) {
    .img-btn {
      width: 1.5em;
    }

    .renumerator .flex span {
      font-size: 1.5em;
    }

    .renumerator .container {
      flex-direction: column;
    }

    .renumerator .block {
      width: 100%;
    }

  }


</style>
  
