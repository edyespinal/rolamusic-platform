import { cn } from "@rola/tailwind-config/utils";
import { LayoutProps } from "@typings/globals";
import { Header } from "@components/Header";
import { Container, Title, Underline } from "@rola/ui/components";
import { Sidebar } from "@components/Sidebar";

function AdminLayout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return (
    <Container size="lg" className={cn("grid h-[100dvh] grid-rows-[auto_1fr]")}>
      <Header />

      <main className="flex flex-col gap-12 py-12">
        <div>
          <Title order={4} align="left">
            Admin Dashboard
          </Title>
          <Underline align="left" size="xs" />
        </div>

        <div className="flex gap-12">
          <div className="basis-40">
            <Sidebar />
          </div>
          <section className="grow">{children}</section>
        </div>
      </main>
    </Container>
  );
}

export default AdminLayout;
