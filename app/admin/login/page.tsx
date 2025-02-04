"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs";

const Page = () => {
  const { toast } = useToast();
  const [specialCode, setSpecialCode] = React.useState("");
  const router = useRouter();
  const checkCode = "I love milfs";

  const handleLogin = () => {
    if (specialCode === checkCode) {
      toast({
        title: "Success",
        description: "Correct Code has been Given",
      });

      // Store auth token in cookies
      Cookies.set("auth_token", "secureToken123", { expires: 1 }); // Expires in 1 day

      router.push("/admin");
    } else {
      toast({
        title: "Error",
        description:
          "Who are you ?!! Admin would never get the Special Code wrong !! ",
        variant: "destructive",
      });

      setTimeout(() => {
        router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }, 2000);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1>Admin Login</h1>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Write special Code..."
          value={specialCode}
          onChange={(e) => setSpecialCode(e.target.value)}
        />
        <Button type="submit" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Page;
