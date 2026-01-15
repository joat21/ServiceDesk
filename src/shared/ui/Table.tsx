import {
  Table as HeroTable,
  mergeClasses,
  type TableProps as HeroTableProps,
} from '@heroui/react';

export const Table = ({ classNames, children, ...props }: HeroTableProps) => {
  const mergedClasses = mergeClasses(
    {
      wrapper: 'p-0 border border-[#c3c0c0] rounded-xl',
      th: 'py-3 text-lg font-medium bg-transparent',
      tr: 'border-t border-[#c3c0c0]',
      td: 'px-4 py-2 text-base',
    },
    classNames
  );

  return (
    <HeroTable classNames={mergedClasses} {...props}>
      {children}
    </HeroTable>
  );
};
