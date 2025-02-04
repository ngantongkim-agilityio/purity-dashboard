// Libs
import { notFound } from 'next/navigation';

// Components
import { Breadcrumbs } from '@/components';

// Sections
import { EditProductForm } from '@/sections';

// Actions
import { fetchAuthors, fetchProductById } from '@/actions';

const EditProductPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;

  const [{ product }, { authors }] = await Promise.all([
    fetchProductById(id),
    fetchAuthors()
  ]);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/dashboard/products' },
          {
            label: 'Edit Product',
            href: `/dashboard/products/${id}/edit`,
            active: true
          }
        ]}
      />
      <EditProductForm product={product} authors={authors} />
    </main>
  );
};

export default EditProductPage;
