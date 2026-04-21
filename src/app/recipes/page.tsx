"use client";

import { motion } from "framer-motion";
import { Search, Filter, Clock, Flame, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RECIPES = [
  {
    id: "r1",
    title: "High-Protein Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=400",
    time: "20 min",
    calories: 450,
    type: "Veg",
    goal: "Muscle Gain"
  },
  {
    id: "r2",
    title: "Lemon Herb Grilled Salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600&h=400",
    time: "25 min",
    calories: 320,
    type: "Non-Veg",
    goal: "Weight Loss"
  },
  {
    id: "r3",
    title: "Avocado Chicken Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600&h=400",
    time: "15 min",
    calories: 380,
    type: "Non-Veg",
    goal: "Maintenance"
  }
];

export default function RecipesGallery() {
  return (
    <motion.div 
      className="max-w-6xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Healthy Recipes</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Discover meals tailored to your goals.</p>
        </div>
        <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/25">
          Generate AI Recipe
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <Input 
            placeholder="Search by ingredients, name..." 
            className="pl-10 h-12 rounded-xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
          />
        </div>
        <Button variant="outline" className="h-12 rounded-xl px-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
          <Filter className="w-5 h-5 mr-2" /> Filters
        </Button>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {RECIPES.map((recipe) => (
          <Card key={recipe.id} className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge variant="secondary" className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 border-none font-bold shadow-sm">
                  {recipe.type}
                </Badge>
                <Badge variant="secondary" className="bg-emerald-500/90 text-white backdrop-blur-sm border-none font-bold shadow-sm">
                  {recipe.goal}
                </Badge>
              </div>
            </div>
            <CardContent className="p-5">
              <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-zinc-100">{recipe.title}</h3>
              <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {recipe.time}
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" /> {recipe.calories} kcal
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
