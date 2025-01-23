import { fetchAuthors } from '@/actions/author';
import { fetchProductById } from '@/actions/product';
import { Breadcrumbs } from '@/components';
import { EditProductForm } from '@/sections';
import { notFound } from 'next/navigation';

const EditProductPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;

  const [product, authors] = await Promise.all([
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
