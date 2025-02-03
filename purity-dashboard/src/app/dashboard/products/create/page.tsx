// components
import { Breadcrumbs } from '@/components';

// sections
import { CreateProductForm } from '@/sections';

// constants
import { ROUTES } from '@/constants';

// actions
import { fetchAuthors } from '@/actions';

const CreateProductPage = async () => {
  const { authors } = await fetchAuthors();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: ROUTES.PRODUCTS },
          {
            label: 'Create Product',
            href: ROUTES.CREATE_PRODUCT,
            active: true
          }
        ]}
      />
      <CreateProductForm authors={authors} />
    </main>
  );
};

export default CreateProductPage;
