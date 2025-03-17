import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function AdminPage() {
  return (
    <div>
      <h1>Admin</h1>
      <Button asChild>
        <Link href={"/"}>Home</Link>
      </Button>
    </div>
  );
}

export default AdminPage;
