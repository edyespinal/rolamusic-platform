const postTypesLabels = {
  TEXT: "Texto",
  IMAGE: "Imagen",
  VIDEO: "Video",
} as const;

const postTypesOptions = Object.keys(postTypesLabels).map((type) => ({
  value: type as keyof typeof postTypesLabels,
  label: postTypesLabels[type as keyof typeof postTypesLabels],
}));

export { postTypesLabels, postTypesOptions };
