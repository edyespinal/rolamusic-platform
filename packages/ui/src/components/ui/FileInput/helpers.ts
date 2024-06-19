export function fileHasPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string";
}

export function formatFileSize(bytes: number) {
  const units = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) return "0 Bytes";

  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${units[i]}`;
}
