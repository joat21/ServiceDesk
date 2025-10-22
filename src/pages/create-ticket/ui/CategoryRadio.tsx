import type { FC } from 'react';
import { useRadio, VisuallyHidden, type RadioProps } from '@heroui/react';

interface CategoryRadioProps extends RadioProps {
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const CategoryRadio: FC<CategoryRadioProps> = ({
  label,
  icon: Icon,
  ...props
}) => {
  const {
    Component,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      // className={cn(
      //   'group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent',
      //   'max-w-[300px] cursor-pointer border-1 gap-4 px-5 py-2 rounded-full',
      //   'data-[selected=true]:border-primary'
      // )}
      className="flex items-center px-5 border-1 rounded-full border-[#bfbfbf] h-10 cursor-pointer"
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getLabelWrapperProps()}
        className="flex gap-5 items-center font-medium"
      >
        {Icon && <Icon />}
        {label && <span {...getLabelProps()}>{label}</span>}
      </div>
    </Component>
  );
};
