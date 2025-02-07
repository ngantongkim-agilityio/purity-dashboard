import { TableSkeleton } from '../TableSkeleton';

export const AuthorsSkeleton = () => {
  return (
    <>
      <div
        className={`before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative h-8 w-36 overflow-hidden rounded-md bg-primary-200`}
      />
      <div
        className={`before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent relative mt-4 h-10 w-full md:mt-8 overflow-hidden rounded-md bg-primary-200`}
      />
      <TableSkeleton />
    </>
  );
};
