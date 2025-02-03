// services
import {
  fetchAuthors as fetchAuthorsService,
  fetchFilteredAuthors as fetchFilteredAuthorsService
} from '@/services';

// types
import { AuthorData, AuthorField } from '@/types';

export const fetchAuthors = async (): Promise<{
  authors: AuthorField[];
  error: string | null;
}> => {
  const data = await fetchAuthorsService();
  return data;
};

export const fetchFilteredAuthors = async (
  query: string
): Promise<{
  authors: AuthorData[];
  error: string | null;
}> => {
  const data = await fetchFilteredAuthorsService(query);
  return data;
};
