"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/UseToast";
import { cn } from "@/lib/utils";

type FeedbackFormProps = {
  onSubmitted?: () => void;
};

export function FeedbackForm({ onSubmitted }: FeedbackFormProps) {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0 && feedback.trim() === "") {
      toast({
        variant: "destructive",
        title: "Incomplete Feedback",
        description: "Please provide a rating or some feedback.",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    toast({
      title: "Feedback Submitted",
      description: "Thank you for helping us improve!",
    });
    setRating(0);
    setFeedback("");
    onSubmitted?.();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <p className="font-medium">How would you rate your experience?</p>
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1"
            >
              <Star
                className={cn(
                  "w-8 h-8 transition-colors",
                  (hoverRating || rating) >= star
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-muted-foreground/50"
                )}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Tell us more about your experience..."
          className="min-h-[120px]"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>
      <Button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </Button>
    </div>
  );
}
