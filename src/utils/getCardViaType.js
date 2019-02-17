import EthTransferCard from '../components/Card/Cards/actionTransferCard'
import ComingSoon from '../components/Card/Cards/comingSoonCard'
import EthPriceDrop from '../components/Card/Cards/triggerEthPriceDropCard'
import BlockMined from '../components/Card/Cards/triggerEthBlockMinedCard'
export default (type) => {
  switch (type) {
    case 'ethPriceDrop':
      return EthPriceDrop 
    case 'ethTransfer':
      return EthTransferCard 
    case 'ethBlockMined':
      return BlockMined 
    case 'comingSoon':
      return ComingSoon
    default:
      return () => {} 
  }
}