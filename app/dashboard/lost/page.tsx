import { getLostItems } from "@/lib/placeholder-data";
import { ItemCard } from "@/components/Item-card";

export default function LostItemsPage() {
  const lostItems = getLostItems();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Lost Items</h1>
        <p className="text-muted-foreground">Browse all items reported as lost on campus.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lostItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
