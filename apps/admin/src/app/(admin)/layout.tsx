import { cn } from "@rola/tailwind-config/utils";
import { LayoutProps } from "@typings/globals";
import { Header } from "@components/Header/Header";
import { Container, Title, Underline } from "@rola/ui/components";
import { Sidebar } from "@components/Sidebar/Sidebar";

function AdminLayout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return (
    <Container size="xl" className={cn("grid h-[100dvh] grid-rows-[auto_1fr]")}>
      <Header />

      <main className="flex flex-col gap-12 py-12">
        <div>
          <Title order={4} align="left">
            Admin Dashboard
          </Title>
          <Underline align="left" size="xs" />
        </div>

        <div className="flex gap-12">
          <div className="basis-48">
            <Sidebar />
          </div>
          <section className="grow">{children}</section>
        </div>
      </main>
    </Container>
  );
}

export default AdminLayout;
