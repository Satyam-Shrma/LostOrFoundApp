// import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { File, Search } from "lucide-react";
import { getItems } from "@/lib/placeholder-data";
import { ItemCard } from "@/components/Item-card";

export default function DashboardPage() {
  const myItems = getItems().slice(0, 2); // Mock: items reported by the user
  const potentialMatches = getItems().slice(2, 4); // Mock: potential matches

  return (
    <div className="grid flex-1 items-start gap-4 md:gap-8 ">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="bg-red-200 hover:bg-red-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 ">
            <CardTitle className="text-sm font-medium text-red-700">My Reported Items</CardTitle>
            <File className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-red-400 text-5xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              3 Lost, 2 Found
            </p>
          </CardContent>
        </Card>
        <Card className="bg-green-200 hover:bg-green-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-900">Potential Matches</CardTitle>
            <Search className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-green-400 text-5xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              New matches found for your items
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Card className="flex flex-col bg-red-300">
          <CardHeader>
            <CardTitle className="text-2xl text-red-700">My Recently Reported Items</CardTitle>
            <CardDescription>
              A quick look at items you have reported.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {myItems.map(item => <ItemCard key={item.id} item={item} />)}
          </CardContent>
        </Card>
         <Card className="flex flex-col bg-green-300">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Potential Matches</CardTitle>
            <CardDescription>
              These items might be what you are looking for.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {potentialMatches.map(item => <ItemCard key={item.id} item={item} />)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
