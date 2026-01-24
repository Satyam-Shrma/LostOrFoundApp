import { getFoundItems } from "@/lib/placeholder-data";
import { ItemCard } from "@/components/Item-card";

export default function FoundItemsPage() {
  const foundItems = getFoundItems();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Found Items</h1>
        <p className="text-muted-foreground">Browse all items that have been found on campus.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foundItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
