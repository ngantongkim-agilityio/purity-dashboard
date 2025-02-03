import { BASE_API, ROUTE_ENDPOINT } from '@/constants';
import { Revenue } from '@/types';

export const fetchRevenue = async (): Promise<{
  revenue: Revenue[];
  error: string | null;
}> => {
  try {
    const url = `${BASE_API}/${ROUTE_ENDPOINT.REVENUE}`;
    const response = await fetch(url, {
      next: {
        tags: ['revenue'],
        revalidate: 3600
      }
    });
    const revenue = await response.json();

    return {
      revenue,
      error: null
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to fetch revenue data.';
    return { revenue: [], error: errorMessage };
  }
};
