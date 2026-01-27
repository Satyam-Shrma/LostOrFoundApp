
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AuthForm } from "./auth-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AuthDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const onAuthSuccess = () => {
    setIsOpen(false);
  };

  const onTabChange = (value: string) => {
    setActiveTab(value);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="hover:text-blue-100" variant="link">Login / Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0">
          <Tabs value={activeTab} onValueChange={onTabChange} className="pt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <AuthForm type="login" onAuthSuccess={onAuthSuccess} onSwitchForm={() => setActiveTab('register')} />
            </TabsContent>
            <TabsContent value="register">
              <AuthForm type="register" onAuthSuccess={onAuthSuccess} onSwitchForm={() => setActiveTab('login')} />
            </TabsContent>
          </Tabs>
      </DialogContent>
    </Dialog>
  );
}
