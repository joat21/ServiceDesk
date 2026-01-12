import type { FC } from 'react';
import {
  Modal as HeroModal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  type ModalProps as HeroModalProps,
} from '@heroui/react';
import { Button } from './Button';

export interface ModalProps extends HeroModalProps {
  title?: string;
  action?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({
  title,
  action,
  isOpen,
  onClose,
  onOpenChange,
  children,
  ...props
}) => {
  return (
    <HeroModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        base: 'rounded-xl',
      }}
      {...props}
    >
      <ModalContent>
        {title && (
          <ModalHeader className="text-2xl font-medium">{title}</ModalHeader>
        )}
        {children}
        <ModalFooter>
          <Button variant="ghost" onPress={onClose}>
            Отмена
          </Button>
          {action}
        </ModalFooter>
      </ModalContent>
    </HeroModal>
  );
};
