import { BASE_API, ROUTE_ENDPOINT } from '@/constants';

export const fetchAnalytics = async (): Promise<{
  analytics: {
    numberOfAuthors: number;
    numberOfProducts: number;
    totalPaidProducts: string;
    totalPendingProducts: string;
  } | null;
  error: string | null;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  try {
    const url = `${BASE_API}/${ROUTE_ENDPOINT.ANALYTICS}`;
    const response = await fetch(url, {
      next: {
        tags: ['analytics'],
        revalidate: 10
      }
    });
    const analytics = await response.json();

    return {
      analytics,
      error: null
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch analytics data.';
    return { analytics: null, error: errorMessage };
  }
};
