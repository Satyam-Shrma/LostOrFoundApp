"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useTransition } from "react";
import { format } from "date-fns";

import { getAnnouncements } from "@/lib/placeholder-data";
import type { Announcement } from "@/lib/definitions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/UseToast";

const announcementSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  content: z.string().min(10, "Content must be at least 10 characters."),
});

export default function AdminAnnouncementsPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [announcements, setAnnouncements] = useState<Announcement[]>(getAnnouncements());

  const form = useForm<z.infer<typeof announcementSchema>>({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof announcementSchema>) {
    startTransition(() => {
      // Simulate API call
      const newAnnouncement: Announcement = {
        id: (announcements.length + 1).toString(),
        createdAt: new Date().toISOString(),
        ...values,
      };
      setAnnouncements(prev => [newAnnouncement, ...prev]);
      
      toast({
        title: "Announcement Posted",
        description: "Your announcement has been successfully posted.",
      });
      form.reset();
    });
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-8">
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Announcements</h1>
            <p className="text-muted-foreground">Create and manage platform-wide announcements.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle>Create Announcement</CardTitle>
                <CardDescription>
                  This will be displayed to all users on the platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., End of Semester Item Claim" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write the announcement details here..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Posting..." : "Post Announcement"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Posted Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {announcements.length > 0 ? (
              announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 border rounded-lg">
                  <p className="font-semibold">{announcement.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {format(new Date(announcement.createdAt), "PPP")}
                  </p>
                  <p className="text-sm">{announcement.content}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground text-center py-8">
                No announcements posted yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
