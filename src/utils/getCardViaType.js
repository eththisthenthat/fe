import EthTransferCard from '../components/Card/Cards/actionTransferCard'
import ComingSoon from '../components/Card/Cards/comingSoonCard'
import EthPriceDrop from '../components/Card/Cards/triggerEthPriceDropCard'
export default (type) => {
  switch (type) {
    case 'ethPriceDrop':
      return EthPriceDrop 
    case 'ethTransfer':
      return EthTransferCard 
    case 'comingSoon':
      return ComingSoon
    default:
      return () => {} 
  }
}