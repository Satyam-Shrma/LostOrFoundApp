import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { getItemById } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const item = getItemById(params.id);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-0">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="aspect-video relative rounded-lg overflow-hidden border">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-cover"
              data-ai-hint={item.imageHint}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant={item.category === 'lost' ? 'destructive' : 'secondary'} className="capitalize mb-2">
              {item.category}
            </Badge>
            <h1 className="text-3xl font-bold font-headline tracking-tight">{item.name}</h1>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Item Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <div className="grid grid-cols-[100px_1fr] items-start">
                <span className="font-semibold text-muted-foreground">Date:</span>
                <span>{format(new Date(item.date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-start">
                <span className="font-semibold text-muted-foreground">Location:</span>
                <span>{item.location}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-start">
                <span className="font-semibold text-muted-foreground">Description:</span>
                <p>{item.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={item.userAvatarUrl} alt={item.userName} />
                <AvatarFallback>{item.userName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{item.userName}</p>
                <p className="text-sm text-muted-foreground">
                  {item.category === 'lost' ? 'Owner' : 'Finder'}
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Call</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {item.category === 'lost' && (
            <Button size="lg" variant="secondary" className="w-full">I Found This Item</Button>
          )}
          {item.category === 'found' && (
            <Button size="lg" className="w-full">Claim This Item</Button>
          )}
        </div>
      </div>
    </div>
  );
}
