import { fetchAuthors } from '@/actions/author';
import { Breadcrumbs } from '@/components';
import { ROUTES } from '@/constants';
import { CreateProductForm } from '@/sections';

const CreateProductPage = async () => {
  const authors = await fetchAuthors();

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
