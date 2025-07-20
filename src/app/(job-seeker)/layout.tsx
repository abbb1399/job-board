import { ReactNode } from "react";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import { SidbarNavMenuGroup } from "@/components/sidebar/SidbarNavMenuGroup";
import {
  BrainCircuitIcon,
  ClipboardListIcon,
  LayoutDashboardIcon,
  LogInIcon,
} from "lucide-react";

export default function JobSeekerLayout({ children }: { children: ReactNode }) {
  return (
    <AppSidebar
      content={
        <SidbarNavMenuGroup
          className="mt-auto"
          items={[
            { href: "/", icon: <ClipboardListIcon />, label: "Job Board" },
            {
              href: "/ai-search",
              icon: <BrainCircuitIcon />,
              label: "AI Search",
            },
            {
              href: "/employer",
              icon: <LayoutDashboardIcon />,
              label: "Employer Dashboard",
              authStatus: "signedIn",
            },
            {
              href: "/sign-in",
              icon: <LogInIcon />,
              label: "Sign In",
              authStatus: "signedOut",
            },
          ]}
        />
      }
      footerButton={<SidebarUserButton />}
    >
      {children}
    </AppSidebar>
  );
}
