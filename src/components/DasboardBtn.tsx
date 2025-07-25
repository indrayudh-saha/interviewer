"use client";

import { useUserRole } from "@/hooks/useUserRole";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function DasboardBtn() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;

  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <LayoutDashboard className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}
export default DasboardBtn;