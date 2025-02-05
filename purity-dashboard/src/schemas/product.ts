import { z } from 'zod';

export const ProductFormSchema = z.object({
  id: z.string(),
  authorId: z.string({
    invalid_type_error: 'Please select a author.'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an product status.'
  }),
  date: z.string()
});
