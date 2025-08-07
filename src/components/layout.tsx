import { AdminSidebar } from "./sidebar";
import { AdminHeader } from "./NavBar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="h-screen flex flex-col">
      <AdminHeader />
      <div className="flex flex-1 overflow-hidden min-h-[calc(100vh-56px)]">
        <AdminSidebar />
        <div className="flex-1 overflow-y-auto">
          <main className="flex-1 p-4 lg:p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
