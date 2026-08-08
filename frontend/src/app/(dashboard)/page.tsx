import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, DollarSign, Activity, TrendingUp, BarChart3 } from "lucide-react";
import { InteractiveLineChart } from "@/components/charts/InteractiveLineChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Here&apos;s an overview of your market data today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Market Value */}
        <Card className="bg-background/60 backdrop-blur-md border-white/10 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Market Value</CardTitle>
            <DollarSign className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpIcon className="w-3 h-3 mr-1" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        {/* Portfolio Value */}
        <Card className="bg-background/60 backdrop-blur-md border-white/10 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio Value</CardTitle>
            <Activity className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.50</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpIcon className="w-3 h-3 mr-1" />
              +15.2% from last month
            </p>
          </CardContent>
        </Card>

        {/* Daily Profit */}
        <Card className="bg-background/60 backdrop-blur-md border-white/10 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Profit</CardTitle>
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+$573.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              +4.5% today
            </p>
          </CardContent>
        </Card>

        {/* Fear & Greed Index */}
        <Card className="bg-background/60 backdrop-blur-md border-white/10 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Fear & Greed Index</CardTitle>
            <BarChart3 className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 / 100</div>
            <p className="text-xs text-orange-500 mt-1">
              Greed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section Placeholder */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-background/60 backdrop-blur-md border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2 h-[300px] flex items-center justify-center">
            <InteractiveLineChart />
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-background/60 backdrop-blur-md border-white/10 shadow-lg">
          <CardHeader>
            <CardTitle>Top Gainers & Losers</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
            [List Component Here]
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
