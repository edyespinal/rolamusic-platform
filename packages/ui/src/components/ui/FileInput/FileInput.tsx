import React from "react";
import Dropzone, { DropzoneProps, FileRejection } from "react-dropzone";
import { cn } from "@rola/tailwind-config/utils";
import { Icon } from "../Icon/Icon";
import { ScrollArea } from "../ScrollArea/ScrollArea";
import { FileCard } from "./FileCard";
import { useControllableState } from "../../../hooks/useControllableState";
import { fileHasPreview, formatFileSize } from "./helpers";
import { useToast } from "../Toast/use-toast";
import { Button } from "../Button/Button";

type FileInputProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: File[];
  onValueChange?: React.Dispatch<React.SetStateAction<File[]>>;
  onUpload?: any;
  progresses?: Record<string, number>;
  accept?: DropzoneProps["accept"];
  maxSize?: DropzoneProps["maxSize"];
  maxFiles?: DropzoneProps["maxFiles"];
  multiple?: boolean;
  disabled?: boolean;
};

function FileInput(props: FileInputProps) {
  const {
    value: valueProp,
    onValueChange,
    onUpload,
    progresses,
    accept = { "image/*": [] },
    maxSize = 1024 * 1024 * 2,
    maxFiles = 1,
    multiple = false,
    disabled = false,
    className,
    ...dropzoneProps
  } = props;

  const { toast } = useToast();
  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  });

  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (!multiple && maxFiles === 1 && acceptedFiles.length > 1) {
        toast({
          title: "Error",
          description: "No se puede más de un archivo",
        });

        return;
      }

      if ((files?.length ?? 0) + acceptedFiles.length > maxFiles) {
        toast({
          title: "Error",
          description: `Cannot upload more than ${maxFiles} files`,
        });

        return;
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      const updatedFiles = files ? [...files, ...newFiles] : newFiles;

      setFiles(updatedFiles);

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast({
            title: "Error",
            description: `File ${file.name} was rejected`,
          });
        });
      }
    },
    [files, maxFiles, multiple, setFiles]
  );

  function onRemove(index: number) {
    if (!files) return;
    const newFiles = files.filter((_, i) => i !== index);

    setFiles(newFiles);
    onValueChange?.(newFiles);
  }

  function uploadFiles(files: File[]) {
    if (!onUpload) return;

    onUpload(files);
    setFiles([]);
  }

  React.useEffect(() => {
    return () => {
      if (!files) return;

      files.forEach((file) => {
        if (fileHasPreview(file)) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, []);

  const isDisabled = disabled || (files?.length ?? 0) >= maxFiles;

  return (
    <div className="relative flex flex-col gap-4 overflow-hidden">
      <Dropzone
        onDrop={onDrop}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFiles}
        multiple={multiple}
        disabled={isDisabled}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            className={cn(
              "group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-gray-dark px-5 py-2.5 text-center transition hover:bg-background/50",
              "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              className
            )}
            {...getRootProps()}
            {...dropzoneProps}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
              <div className="rounded-full border border-dashed p-3">
                <Icon
                  name="upload"
                  className="size-7 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-px">
                <p className="font-medium text-muted-foreground">
                  Arrastra y suelta los archivos aquí, o haz clic para cargar
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Puedes subir
                  {maxFiles > 1
                    ? ` ${maxFiles === Infinity ? "multiple" : maxFiles}
                      archivos (de hasta ${formatFileSize(maxSize)} cada uno)`
                    : ` un archivo de hasta ${formatFileSize(maxSize)}`}
                </p>
              </div>
            </div>
          </div>
        )}
      </Dropzone>

      {files?.length ? (
        <div className="space-y-4">
          <ScrollArea className="h-fit w-full px-3">
            <div className="max-h-48 space-y-4">
              {files.map((file, index) => (
                <FileCard
                  key={index}
                  file={file}
                  onRemove={() => onRemove(index)}
                  progress={progresses?.[file.name]}
                />
              ))}
            </div>
          </ScrollArea>

          {onUpload ? (
            <Button size="sm" onClick={() => uploadFiles(files)}>
              Subir
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export { FileInput };
