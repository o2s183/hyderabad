"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Trophy, 
  CalendarCheck, 
  FileText, 
  Image as ImageIcon, 
  Utensils, 
  Frown, 
  Camera, 
  ShoppingCart, 
  BrainCircuit, 
  UserCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Meal Logger", href: "/logger", icon: Utensils },
  { name: "Calorie Tracker", href: "/tracker", icon: FileText },
  { name: "Healthy Recipes", href: "/recipes", icon: ImageIcon },
  { name: "Fitness Diets", href: "/diets", icon: CalendarCheck },
  { name: "Junk Food Info", href: "/junk-food", icon: Frown },
  { name: "Supplement Store", href: "/store", icon: ShoppingCart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-r border-zinc-200 dark:border-zinc-800 flex flex-col hidden md:flex sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          NutriMind AI
        </h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "relative flex items-center px-4 py-3 rounded-xl transition-colors",
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center px-4 py-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mr-3">
            U
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">User Profile</p>
            <p className="text-xs text-zinc-500 truncate">Settings</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
