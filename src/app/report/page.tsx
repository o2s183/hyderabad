"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function DailyReport() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Daily Report</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Your AI-generated summary for today.</p>
      </div>

      <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Based on your logs today.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-300">
            You're doing great! Your macros are balanced, but you might want to increase your water intake.
            Keep up the good work and log your next meal!
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
