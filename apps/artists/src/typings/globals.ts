export type LayoutProps = {
  children: React.ReactNode;
};

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
