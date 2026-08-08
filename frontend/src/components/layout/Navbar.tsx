"use client";

import { Bell, Search, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background/50 backdrop-blur-xl px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 lg:h-[60px]">
      <div className="relative ml-auto flex-1 md:grow-0 w-full max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search stocks, companies, crypto..."
          className="w-full rounded-full border bg-background/50 pl-8 pr-4 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        {mounted && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </Button>
        )}
        <Button variant="outline" size="icon" className="rounded-full overflow-hidden">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
