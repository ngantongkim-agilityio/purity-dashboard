import { Card } from '@/components';
import { fetchCardData } from '@/actions/revenue';

export const AnalyticsCards = async () => {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData();
  return (
    <>
      <Card title='Collected' value={totalPaidInvoices} type='collected' />
      <Card title='Pending' value={totalPendingInvoices} type='pending' />
      <Card title='Total Invoices' value={numberOfInvoices} type='invoices' />
      <Card
        title='Total Customers'
        value={numberOfCustomers}
        type='customers'
      />
    </>
  );
};
