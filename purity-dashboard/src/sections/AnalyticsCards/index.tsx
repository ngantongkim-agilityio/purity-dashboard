import { Card } from '@/components';
import { fetchAnalytics } from '@/services';
import { WalletIcon, GlobeIcon, DocumentIcon, CartIcon } from '@/icons';

export const AnalyticsCards = async () => {
  const { analytics } = await fetchAnalytics();
  const {
    numberOfAuthors = 0,
    numberOfProducts = 0,
    totalPendingProducts = '',
    totalPaidProducts = ''
  } = analytics || {};

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
