"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  LineChart, 
  Building2, 
  Newspaper, 
  Wallet, 
  Star, 
  Settings,
  Bitcoin,
  DollarSign
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Live Stocks", href: "/stocks", icon: LineChart },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Crypto", href: "/crypto", icon: Bitcoin },
  { name: "Forex", href: "/forex", icon: DollarSign },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Portfolio", href: "/portfolio", icon: Wallet },
  { name: "Watchlist", href: "/watchlist", icon: Star },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-background/50 backdrop-blur-xl md:block w-64 h-screen fixed top-0 left-0">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <LineChart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">MarketVista</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted ${
                    isActive ? "bg-muted text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
