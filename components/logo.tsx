import Link from 'next/link';
import { LocateFixed } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)} aria-label="CampusFind Home">
      <LocateFixed className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold font-headline text-foreground hidden sm:inline-block">
        CampusFind
      </span>
    </Link>
  );
}
