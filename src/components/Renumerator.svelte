<script lang="ts">
</script>
<div class="renumerator">
  <div class="container">
    <div class="block">
      <span class="title">Découvrez votre futur salaire ! </span>
      <div class="flex">
        <p>Parce que le respect entre collaborateurs passe avant tout par une rémunération équitable et juste, nous avons mis en place un système qui permet à nos employés de s’épanouir dans et en dehors de leur vie professionnelle.</p>
        <p>Pour vous donner un aperçu de ce à quoi pourrait ressembler votre futur salaire, nous vous laissons vous amuser avec notre simulateur.</p>
      </div>
    </div>
  </div>
</div>

<style>

  @import "https://ekit3.github.io/stoorm-web-renumerator-component/dist/smui.css";

  .renumerator {
    display: flex;
    height: 447px;
    padding: 77px 40px;
    width: calc(100% - 80px);
    flex-shrink: 0;
    border-radius: 32px;
    background: linear-gradient(0deg, #241B30, #241B30), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0 24px 44px 0 rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(22px);
    flex-direction: column;
  }

  .renumerator .block {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    justify-content: center;
  }

  .renumerator .block span.title {
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: 40px;
    text-align: center;
    display: block;
    flex: 1;
  }
  .renumerator .flex{
    text-align: justify;
    margin: 5px 50px 0;
    font-size: 1.25em;
  }

  .renumerator .flex p {
    margin: 0 0 30px;
  }

  .renumerator .title {
    margin-bottom: 16px;
    text-align: left;
  }

  .renumerator .container {
    display: flex;
    align-self: center;
    width: 100%;
    margin-top: 120px;
  }

  @media screen and (max-width: 380px) {
    .renumerator .block span.title {
      font-size: 0.75em;
    }
  }

  @media screen and (max-width: 500px) {

    .renumerator .block {
      display: flex;
      flex-direction: column;
      width: 100%;
      box-sizing: border-box;
      justify-content: center;
    }

    .renumerator .container {
      display: flex;
      align-self: center;
      width: 100%;
      margin-top: 70px;
    }

    .renumerator .flex{
      text-align: justify;
      margin: 5px 20px 0;
      font-size: 1em;
    }

    .renumerator .flex p {
      margin: 0 0 20px;
    }

    .renumerator .block span.title {
      font-size: 1.25em;
    }

  }




</style>
  
