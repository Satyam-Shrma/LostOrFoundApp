import { ItemForm } from '@/components/item-form';

export default function ReportLostItemPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Report a Lost Item</h1>
        <p className="text-muted-foreground">Fill out the details below to report an item you have lost.</p>
      </div>
      <ItemForm type="lost" />
    </div>
  );
}
