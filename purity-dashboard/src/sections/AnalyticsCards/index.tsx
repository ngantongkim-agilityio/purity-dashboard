import { Card } from '@/components';
import { fetchCardData } from '@/actions/revenue';
import { WalletIcon, GlobeIcon, DocumentIcon, CartIcon } from '@/icons';

export const AnalyticsCards = async () => {
  const {
    numberOfProducts,
    numberOfAuthors,
    totalPaidProducts,
    totalPendingProducts
  } = await fetchCardData();
  return (
    <>
      <Card title='Total Money' value={totalPaidProducts} icon={WalletIcon} />
      <Card title='Total Users' value={numberOfAuthors} icon={GlobeIcon} />
      <Card
        title='Total Products'
        value={numberOfProducts}
        icon={DocumentIcon}
      />
      <Card title='Total Sales' value={totalPendingProducts} icon={CartIcon} />
    </>
  );
};
