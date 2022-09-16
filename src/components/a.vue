<template>
  <div class="">
    {{bal.value}}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {abiGetBalance} from '/@/utils'

let bal = ref(0)
const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
bal.value = await signer.getAddress();
console.log(bal.value)
</script>

<style scoped lang="scss">
</style>