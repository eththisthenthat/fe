import EthTransferCard from '../components/Card/Cards/actionTransferCard'
import ComingSoon from '../components/Card/Cards/comingSoonCard'
import PriceBelow from '../components/Card/Cards/triggerEthPriceDropCard'
import BlockMined from '../components/Card/Cards/triggerEthBlockMinedCard'
export default (type) => {
  switch (type) {
    case 'eth-price-below':
      return PriceBelow 
    case 'eth-transfer':
      return EthTransferCard 
    case 'eth-block-mined':
      return BlockMined 
    case 'coming-soon':
      return ComingSoon
    default:
      return () => {} 
  }
}