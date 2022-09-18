<template>
  <div class="">
    {{obj}}
    <div @click="send">send</div>
    <div @click="getBlanace">获取余额</div>
    <div>余额{{bal}}</div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

import {initaillize} from '/@/utils'
const {ethereum } = window;

let obj = reactive({ac:'',id:'',net:''})
let bal = ref(0)
onMounted(()=>{
   
    initaillize(obj)
})
// 监听账户切换
ethereum.on('accountsChanged',(accounts)=>{console.log('accountsChanged')
    console.log(accounts)
})
// 监听网络切换
ethereum.on('chainChanged', () => {
            console.log('account changed')
            window.location.reload()
})
async function send(){

    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    console.log(accounts,'accounts')
            // window.ethereum
        try {
        // 调用小狐狸转账
        const transactionHash = await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                        from: accounts[0],
                        to: '0xD62338e874b35464c3d3aeDA6097E8B117f975F9',
                        value: '0x29a2241af62c000',
                        // gas: '0x2710',
                        // gasPrice: '0x09184e72a000'
                    }],
                });
        // Handle the result
        console.log(transactionHash);
        } catch (error) {
        console.error(error);
        }
  
}
// 获取账户余额
async function getBlanace(){
      ethereum.request({
                method: 'eth_getBalance',
                params: [
                    '0x513209152789beA7A85AcE510a50375dff876648',
                    'latest'
                ]
            }).then((result) => {
                bal.value = `${result} => ${parseInt(result, 16)} wei`;
            }).catch((error) => {
                console.error(error);
            })
}
</script>

<style scoped lang="scss">
</style>