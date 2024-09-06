import Image from "next/image";
import { Progress } from "../Progress/Progress";
import { fileHasPreview, formatFileSize } from "./helpers";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

type FileCardProps = {
  file: File;
  onRemove: () => void;
  progress?: number;
};

function FileCard({ file, onRemove, progress }: FileCardProps) {
  return (
    <div className="relative flex items-center gap-x-4">
      <div className="flex flex-1 gap-x-4">
        {fileHasPreview(file) ? (
          <Image
            src={file.preview}
            alt={file.name}
            width={48}
            height={48}
            loading="lazy"
            className="aspect-square shrink-0 object-cover"
          />
        ) : null}
        <div className="flex w-full flex-col gap-2">
          <div className="space-y-px">
            <p className="line-clamp-1 text-sm font-medium text-foreground/80">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatFileSize(file.size)}
            </p>
          </div>
          {progress && <Progress value={progress} />}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="destructive"
          size="icon"
          className="size-7"
          onClick={onRemove}
        >
          <Icon name="x" className="size-4" aria-hidden="true" />
          <span className="sr-only">Remover archivo</span>
        </Button>
      </div>
    </div>
  );
}

export { FileCard };
