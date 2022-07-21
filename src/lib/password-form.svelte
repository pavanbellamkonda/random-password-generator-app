<script lang="ts">
  import { generateRandomPassword } from './generate-random-password';

  let password = '';
  let passLength = 6;
  
  $: {
    password = generateRandomPassword(passLength, []);
  }

  const copyToClipboard = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(password);
  }

</script>

<form>
  <div>
    <label for="generatedPass">Generated Password:</label>
    <input type="text" id="generatedPass" style="width: 50vw;" bind:value="{password}">
    <button on:click="{copyToClipboard}">Copy</button>
  </div>
  <div>
    <label for="passLength">Password Length:</label>
    <input type="number" id="passLength" style="width: 2rem;" bind:value="{passLength}">
  </div>
  <div>
    <input type="range" min="6" step="1" max="50" style="width: 50vw;" bind:value="{passLength}">
  </div>
</form>

<style>

</style>
