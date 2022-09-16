import {ethers} from 'ethers';

export async function abiGetBalance() {
  try {
    const pd = new ethers.providers.Web3Provider(window.ethereum);
    const bigBalance = await pd.getBalance('0x513209152789beA7A85AcE510a50375dff876648');
    return ethers.utils.formatEther(bigBalance);
  } catch (error) {
    console.log(error)
  }
}
