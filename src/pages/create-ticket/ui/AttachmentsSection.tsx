import type { FC } from 'react';
import { Spinner } from '@heroui/react';
import axios from 'axios';
import type { UploadedFile } from '../model/types';
import { CameraIcon, PlusIcon } from '@/shared/ui/icons';

interface AttachmentsSectionProps {
  files: UploadedFile[];
  setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
  isRelocation: boolean;
}

export const AttachmentsSection: FC<AttachmentsSectionProps> = ({
  files,
  setFiles,
  isRelocation,
}) => {
  if (isRelocation) return null;

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
    <div className="flex flex-col gap-3">
      <label htmlFor="photo" className="flex flex-col text-xl font-medium">
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
  );
};
