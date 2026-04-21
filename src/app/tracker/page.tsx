"use client";

import { motion } from "framer-motion";
import { Flame, Info, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CalorieTracker() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calorie Tracker</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Monitor your daily intake and macronutrients.</p>
        </div>
        <Button className="rounded-xl bg-orange-600 hover:bg-orange-700 text-white">
          <Plus className="w-4 h-4 mr-2" /> Log Food
        </Button>
      </div>

      {/* Main Calorie Summary */}
      <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-bl-full -z-10" />
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            
            {/* Circular Progress Placeholder / Stats */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-orange-500">
                <Flame className="w-5 h-5" />
                <span className="font-semibold tracking-wider uppercase text-sm">Daily Summary</span>
              </div>
              <div className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                1,450
              </div>
              <p className="text-zinc-500 mt-1 font-medium">kcal consumed today</p>
              
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Remaining: 550 kcal</span>
                  <span className="text-zinc-500">Goal: 2,000 kcal</span>
                </div>
                <Progress value={72.5} className="h-3" indicatorColor="bg-orange-500" />
              </div>
            </div>

            {/* Macros Breakdown */}
            <div className="flex-1 w-full space-y-6 bg-zinc-50 dark:bg-zinc-950/50 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="font-bold text-lg">Macros Breakdown</h3>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-blue-600 dark:text-blue-400">Protein</span>
                  <span className="font-bold">85g <span className="text-zinc-500 font-normal">/ 120g</span></span>
                </div>
                <Progress value={70} className="h-2 bg-blue-100 dark:bg-blue-900/30" indicatorColor="bg-blue-500" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Carbs</span>
                  <span className="font-bold">140g <span className="text-zinc-500 font-normal">/ 200g</span></span>
                </div>
                <Progress value={70} className="h-2 bg-emerald-100 dark:bg-emerald-900/30" indicatorColor="bg-emerald-500" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-purple-600 dark:text-purple-400">Fats</span>
                  <span className="font-bold">45g <span className="text-zinc-500 font-normal">/ 60g</span></span>
                </div>
                <Progress value={75} className="h-2 bg-purple-100 dark:bg-purple-900/30" indicatorColor="bg-purple-500" />
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Quick Add Form */}
      <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900">
        <CardHeader>
          <CardTitle>Quick Add Calories</CardTitle>
          <CardDescription>Manually enter calories and macros if you already know them.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-end">
            <div className="col-span-2 md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Food Name</label>
              <Input placeholder="e.g. Banana" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Calories</label>
              <Input type="number" placeholder="105" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Protein (g)</label>
              <Input type="number" placeholder="1.3" />
            </div>
            <Button className="w-full h-10 rounded-xl" variant="outline">Add</Button>
          </div>
        </CardContent>
      </Card>

    </motion.div>
  );
}
