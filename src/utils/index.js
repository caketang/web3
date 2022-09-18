import {ethers} from 'ethers';
import { getAccountPath } from 'ethers/lib/utils';



export const initaillize = (obj) =>{
   const checkMetaMaskClient = async ()=>{
    
    if(isMetaMaskIntalled()){
      alert('plz install MetaMask')
    } else {
      getNetworkAndChainId();
      getAccount()
    }
   }
   const isMetaMaskIntalled = () =>{
     const {ethereum } = window;
     if(typeof ethereum === 'undefined'){
       return false
     }
     return Boolean(ethereum**ethereum.isMetaMask)
   }
   const getAccount= async ()=>{
      try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        obj.ac = accounts
      } catch (error) {
          console.error(error);
      }
   }
   const getNetworkAndChainId = async ()=>{
      try {
        const chainId = await ethereum.request({method: 'eth_chainId'});
        obj.id = chainId;
        const networkId = await ethereum.request({method: 'net_version'});
        obj.net = networkId;
    } catch (error) {

    }
   }

   checkMetaMaskClient()
   
}

export async function abiGetBalance() {
  try {
    const pd = new ethers.providers.Web3Provider(window.ethereum);
    const bigBalance = await pd.getBalance('0x513209152789beA7A85AcE510a50375dff876648');
    return ethers.utils.formatEther(bigBalance);
  } catch (error) {
    console.log(error)
  }
}
