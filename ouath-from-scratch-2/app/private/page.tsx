import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function PrivatePage() {
  const currentUser = { role: "user" };
  return (
    <div>
      <h1> Private: {currentUser.role}</h1>
      <div>
        ToggleRole Button Placeholder
        <Button asChild>
          <Link href={"/"}>Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default PrivatePage;
