"use client";

import { usePathname } from "next/navigation";
import UrgentCallButton from "@/components/UrgentCallButton";

export default function UrgentCallDock() {
  const pathname = usePathname();
  const homepage = pathname === "/";

  return (
    <div className={`fixed bottom-4 right-4 z-40 ${homepage ? "lg:hidden" : ""}`}>
      <UrgentCallButton variant="sticky" source={homepage ? "mobile_sticky_home" : "global_sticky"} />
    </div>
  );
}
