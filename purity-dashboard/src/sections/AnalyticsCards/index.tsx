import { Card } from '@/components';
import { fetchCardData } from '@/actions/revenue';
import { WalletIcon, GlobeIcon, DocumentIcon, CartIcon } from '@/icons';

export const AnalyticsCards = async () => {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData();
  return (
    <>
      <Card title='Total Money' value={totalPaidInvoices} icon={WalletIcon} />
      <Card title='Total Users' value={numberOfCustomers} icon={GlobeIcon} />
      <Card
        title='Total Projects'
        value={numberOfInvoices}
        icon={DocumentIcon}
      />
      <Card title='Total Sales' value={totalPendingInvoices} icon={CartIcon} />
    </>
  );
};
