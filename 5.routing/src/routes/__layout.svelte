<script>
  import { goto } from '$app/navigation';
</script>

<div class='header'>
  <span on:click={() => goto('/')}>Home</span>

  <span on:click={() => goto('/done')}>Completed Items</span>
</div>

<div class='body'><slot /></div>


<style>
  .header {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #b16326;
  }

  span {
    color: white;
    font-size: 18px;
    padding: 10px;
    margin-top: auto;
    margin-bottom: auto;
  }
  span:hover {
    color: lightblue;
    cursor: pointer;
  }

  .body {
    margin-top: 55px;
  }
</style>