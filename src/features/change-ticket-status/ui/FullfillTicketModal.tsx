import { useState, type FC } from 'react';
import { Form, ModalBody, Spinner, type ModalProps } from '@heroui/react';
import { Button, Modal, NumberInput, Textarea } from '@/shared/ui';
import { CameraIcon, PlusIcon } from '@/shared/ui/icons';
import { api } from '@/shared/api/base';
import type { UploadedFile } from '@/pages/create-ticket/model/types';
import { useFullfillTicket } from '../model/query';

interface FullfillTicketModalProps extends Omit<ModalProps, 'children'> {
  ticketId: string;
}

export const FullfillTicketModal: FC<FullfillTicketModalProps> = ({
  ticketId,
  onClose,
  ...props
}) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const fullfillTicket = useFullfillTicket();

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files[0]) return;

    const newFile: UploadedFile = {
      file: event.target.files[0],
    };

    setFiles((prev) => [...prev, newFile]);
    uploadSingleFile(newFile);
  };

  const uploadSingleFile = async (fileItem: UploadedFile) => {
    const url = await uploadFile(fileItem.file);
    setFiles((prev) => prev.map((f) => (f === fileItem ? { ...f, url } : f)));
  };

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await api.post(
      `https://functions.yandexcloud.net/${import.meta.env.VITE_YC_CLOUD_FUNCTION_ID}?filename=${encodeURIComponent(file.name)}`,
      file,
      {
        headers: { 'Content-Type': file.type },
        withCredentials: false,
      }
    );

    return res.data.url;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fullfillTicket.mutate({
      ticketId,
      message: formData.get('comment')?.toString() ?? '',
      total: Number(formData.get('total')),
      photosUrl: files.map((f) => f.url ?? ''),
    });
  };

  return (
    <Modal
      title="Завершить заявку"
      action={
        <Button
          form="fullfill-ticket"
          type="submit"
          isDisabled={fullfillTicket.isPending}
        >
          Завершить заявку
        </Button>
      }
      className="max-w-[680px]"
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="fullfill-ticket" onSubmit={handleSubmit} className="gap-7">
          <Textarea
            name="comment"
            label="Комментарий"
            labelPlacement="outside"
            placeholder="Опишите выполненную работу..."
            isRequired
          />
          <NumberInput
            name="total"
            label="Сумма расходов (₽)"
            placeholder="0"
          />
          <div className="flex flex-col gap-3">
            <label
              htmlFor="photo"
              className="flex flex-col text-xl font-medium"
            >
              <span className="mb-2">Добавить фото</span>
              <div className="relative p-1.5 border border-[#c3c0c0] rounded-lg w-fit bg-[#f8f8f8] cursor-pointer">
                <CameraIcon />
                <PlusIcon className="absolute top-1 right-1.5" />
              </div>

              <input
                id="photo"
                name="photo"
                type="file"
                className="hidden"
                onChange={handleFilesSelected}
              />
            </label>

            {files.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {files.map((file, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center border border-[#c3c0c0] rounded-lg w-40 h-40 bg-[#f8f8f8] overflow-hidden"
                  >
                    {file.url ? (
                      <img
                        className="w-full h-full object-cover"
                        src={file.url}
                        alt=""
                      />
                    ) : (
                      <Spinner />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};
