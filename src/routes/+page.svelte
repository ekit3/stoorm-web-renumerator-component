<svelte:options customElement="renumerator-component" />

<script lang="ts">
  import { RateManagerFactory } from '../classes/rateManagerFactory'
  import type { IRateManager } from '../interfaces/IRateManager';
  import type { Company } from '../enums/company'
  import Renumerator from '../components/Renumerator.svelte';
  import Pay from '../components/Pay.svelte';
  export let company: string;
  let rateManager: IRateManager = RateManagerFactory.create(company as Company);
  let tjm: number;
  let amount: number;
  $: amount = rateManager.getSalary(tjm) || 0;
</script>
  <div class="component">
    <div class="block">
      <Renumerator />
    </div>
    <div class="block">
      <Pay bind:tjm bind:amount rateManager={rateManager}/>
    </div>
  </div>

<style>

  .component {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #FFF;
    font-family: Montserrat,serif;
    font-size: 16px;
    font-weight: 500;
    align-items: stretch;
  }

  .block {
    min-width: 280px;
    width: 50%;
    position: relative;
    z-index: 1;
    margin: 0 22px 0;
    display: flex;
    flex-direction: column;
    flex: 1; /* Make blocks flexible to grow within the parent container */
    justify-content: stretch; /* Ensure inner content stretches */
  }

  .block:nth-child(1){
    margin-right: 24px;
  }

  @media screen and (max-width: 1280px),
        screen and (max-height: 720px){
    /* Styles pour les écrans de largeur 1280px et plus */
    .block {
      width: 100%;
      margin-bottom: 1.5em;
    }
    .component{
      flex-direction: column;
    }

  }

</style>