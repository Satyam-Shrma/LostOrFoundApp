"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FeedbackForm } from "./FeedbackForm";

export function FeedbackDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-106.25 bg-blue-100">
        <DialogHeader>
          <DialogTitle>Share Your Feedback</DialogTitle>
          <DialogDescription>
            Let us know how we can make CampusFind better for you.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm onSubmitted={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
