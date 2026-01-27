
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Item } from '@/lib/definitions';
import Image from "next/image";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <CardHeader className="p-0">
        <div className="relative aspect-4/3">
          <img
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover"
            data-ai-hint={item.imageHint}
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flexGrow">
        <div className="flex justify-between items-start">
            <Badge variant={item.category === 'lost' ? 'destructive' : 'secondary'} className="capitalize mb-2">
                {item.category}
            </Badge>
        </div>
        <p className="font-semibold text-lg leading-tight mb-2">{item.name}</p>
        <p className="text-sm text-muted-foreground">
          {format(new Date(item.date), 'PP')} in {item.location}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/dashboard/item/${item.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
