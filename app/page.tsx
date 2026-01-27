import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { ItemCard } from '@/components/Item-card';
import { getRecentItems } from '@/lib/placeholder-data';
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Header />
        <div className="bg-green-200 w-100%">
          <section className="w-full py-20 md:py-32 lg:py-40 bg-card  ">
        <div className="container px-4 md:px-6">  
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Lost something? Found something?
                </h1>
                <p className="max-w-150 text-muted-foreground md:text-xl">
                  CampusFind is the central hub for lost and found items at your college. Reconnect with your belongings quickly and easily.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>
                  <Link  href="/dashboard/report-lost">
                    I Lost Something
                  </Link>
                </Button>
                <Button >
                   <Link href="/dashboard/report-found">
                    I Found Something
                  </Link>
                </Button>
              </div>
            </div>
          
            <div className="w-100%"> 
              <Image
              src="/Images/lof4.png"
              width={600}
              height={400}
              alt="Hero"
              data-ai-hint="college campus"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div> 
          
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Recently Reported Items</h2>
              <p className="max-w-225 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out the latest items reported as lost or found on campus.
              </p>
            </div>
          </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12">
            {getRecentItems().map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
               <div className="flex justify-center">
            <Button className="hover:text-w-2 hover:text-white"variant ="link"  asChild>
              <Link href="/dashboard/lost" className="text-primary underline">
                View All Items 
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                {/* <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> */}
              </Link>
            </Button>
          </div>
          </section>
     
          </div>
        <Footer />
    </div>
    
  );
}
