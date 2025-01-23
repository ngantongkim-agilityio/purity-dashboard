import { fetchAuthors } from '@/actions/author';
import { Breadcrumbs } from '@/components';
import { CreateProductForm } from '@/sections';

const CreateProductPage = async () => {
  const authors = await fetchAuthors();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/dashboard/products' },
          {
            label: 'Create Product',
            href: '/dashboard/Products/create',
            active: true
          }
        ]}
      />
      <CreateProductForm authors={authors} />
    </main>
  );
};

export default CreateProductPage;
