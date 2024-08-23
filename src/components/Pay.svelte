<script lang="ts">
  import type {IRateManager} from "../interfaces/IRateManager";
  import minusSvg from '../images/minus-icon.svg?url';
  import plusSvg from '../images/plus-icon.svg?url';
  import stoorm_logo from '../images/remunerator_background.svg'
  import CurrencyFormat from "./CurrencyFormat.svelte";
  import NumberFormat from "./NumberFormat.svelte";

  export let rateManager: IRateManager;
  export let tjm = 600;
  let minTjm = rateManager.getMinTJMValue();
  let maxTjm = 2000
  export let amount = 450;
</script>

<div class="pay"
     style="background: url({stoorm_logo}) no-repeat bottom, linear-gradient(180deg, rgb(241, 186, 216) 0%, #F42092 31%)">
  <div class="block">
    <span class="title">Votre TJM</span>
    <div class="flex">
      <button on:click={() => tjm = Math.max(minTjm, tjm - 10)}>
        <img src={minusSvg} alt="Minus Svg icon" class="img-btn">
      </button>
      <span><NumberFormat value="{tjm}"></NumberFormat></span>
      <button on:click={() =>  tjm = Math.min(maxTjm, tjm + 10)}>
        <img src={plusSvg} alt="Plus Svg icon" class="img-btn">
      </button>
    </div>
  </div>
  <span class="line"></span>
  <span class="title">Votre salaire annuel brut</span>
  <span class="amount">
    <CurrencyFormat value="{amount}"></CurrencyFormat>
  </span>
  <span class="advantage">et + de <CurrencyFormat value="{9000}"></CurrencyFormat> d’<a href="{rateManager.getAvantagesLink()}">avantages sociaux</a></span>
  <a class="joinLink" href="{rateManager.getJoinUsLink()}">Envie de nous rejoindre ?</a>
</div>

<style>

  .pay {
    font-weight: 900;
    height: 100%;
    width: 100%;
    background-size: contain !important;
    border-radius: 32px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .pay span.title {
    margin-top: 50px;
    color: white;
    margin-bottom: 50px;
  }

  .pay span.line {
    margin-top: 20px;
    color: white;
    border: 2px white solid;
    width: 90%;
    border-radius: 32px;
  }

  .pay span.amount {
    color: white;
    font-weight: 900;
    font-size: 60px;
    margin-bottom: 50px;
  }

  .pay a {
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  .pay .joinLink {
    display: inline-flex;
    padding: 16px 24px;
    margin-top: 20px;
    background-color: white;
    border-radius: 11px;
    border: 0;
    color: #000;
    font-family: Montserrat, serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .pay .block {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
  }

  .pay .block span.title {
    margin-bottom: 10px;
    text-align: center;
    display: block;
    flex: 1;
  }

  .pay .flex {
    justify-content: center;
    display: flex;
    flex: 1;
    margin: 20px 0 20px 0;
  }

  .pay .flex button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .pay .flex span {
    font-size: 2em;
    font-weight: 900;
    margin: 2px 2px;
  }

  .pay .title {
    margin-bottom: 5px;
    text-align: left;
  }

  @media screen and (max-width: 380px) {
    .pay span.title {
      font-size: 0.75em;
    }
  }

  .img-btn {
    width: 3em;
  }

  @media screen and (max-width: 500px) {
    .img-btn {
      width: 1.5em;
    }

    .pay .flex span {
      font-size: 1.5em;
    }

    .pay .block {
      width: 100%;
    }

    .advantage {
      font-size: 14px;
    }

  }
</style>
  