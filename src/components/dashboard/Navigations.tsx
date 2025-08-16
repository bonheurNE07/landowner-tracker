import Link from "next/link";
import { Button } from "../ui/button";
import { Links } from "@/constants";

export const Navigations = () => {
  return (
    <div className="w-full h-14 bg-gray-100/70 dark:bg-black/25 flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {Links.map((nav_item, id:number) => (
          <Button asChild
          className="md:w-40 text-xs md:text-md"
          key={id}> 
            <Link href={nav_item.nav}>
              { nav_item.label }
            </Link>
          </Button>
      ))}
      </div>
    </div>
  );
};
