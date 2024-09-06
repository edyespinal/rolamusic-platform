import { cn } from "@rola/tailwind-config/utils";
import { Text, Underline } from "@rola/ui/components";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  pathname: string;
  children: React.ReactNode;
};

function SidebarLink(props: SidebarLinkProps) {
  const { href, pathname, children } = props;
  const active = pathname === href;

  return (
    <Link href={href}>
      <Text className={cn(active && "font-bold")}>{children}</Text>
      {active && <Underline size="xs" align="left" />}
    </Link>
  );
}

export { SidebarLink };
