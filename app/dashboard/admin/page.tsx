import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUsers, getLostItems, getFoundItems } from "@/lib/placeholder-data";
import { Users, List, CheckSquare, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const totalUsers = getUsers().length;
  const totalLostItems = getLostItems().length;
  const totalFoundItems = getFoundItems().length;

  const stats = [
    { title: "Total Users", value: totalUsers, icon: Users, color: "text-blue-500" },
    { title: "Lost Items", value: totalLostItems, icon: List, color: "text-red-500" },
    { title: "Found Items", value: totalFoundItems, icon: CheckSquare, color: "text-green-500" },
  ];

  const quickLinks = [
    { title: "Manage Users", href: "/dashboard/admin/users", icon: Users },
    { title: "Manage Announcements", href: "/dashboard/admin/announcements", icon: Megaphone },
  ];

  return (
    <div className="space-y-8">
       <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Overview</h1>
        <p className="text-muted-foreground">A summary of platform activity and management links.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 text-muted-foreground ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline mb-4">Quick Links</h2>
        <div className="grid gap-4 md:grid-cols-2">
            {quickLinks.map(link => (
                <Link href={link.href} key={link.title}>
                    <Card className="hover:bg-muted/50 transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-muted p-3 rounded-md">
                                    <link.icon className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">{link.title}</CardTitle>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
