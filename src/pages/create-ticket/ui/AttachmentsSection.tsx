import type { FC } from 'react';
import axios from 'axios';
import { CreateTicketInput } from './CreateTicketInput';
import type { UploadedFile } from '../model/types';

interface AttachmentsSectionProps {
  setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
  isRelocation: boolean;
}

export const AttachmentsSection: FC<AttachmentsSectionProps> = ({
  setFiles,
  isRelocation,
}) => {
  if (isRelocation) return null;

  const handleFilesSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

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

    const res = await axios.post(
      `https://functions.yandexcloud.net/${import.meta.env.VITE_YC_CLOUD_FUNCTION_ID}?filename=${encodeURIComponent(file.name)}`,
      file,
      {
        headers: { 'Content-Type': file.type },
      }
    );

    return res.data.url;
  };

  return (
    <CreateTicketInput
      name="photo"
      label="Добавить фото"
      type="file"
      isRequired={false}
      onChange={handleFilesSelected}
    />
  );
};
