import { ItemForm } from '@/components/item-form';

export default function ReportFoundItemPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Report a Found Item</h1>
        <p className="text-muted-foreground">Thank you for helping! Please provide details about the item you found.</p>
      </div>
      <ItemForm type="found" />
    </div>
  );
}
