"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Moon, Activity, Smile } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MealLogger() {
  const [sleep, setSleep] = useState([7]);

  return (
    <motion.div 
      className="max-w-3xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Daily Check-In</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">Log your meals and health stats for AI analysis.</p>
      </div>

      <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />
        <CardHeader>
          <CardTitle>Meals</CardTitle>
          <CardDescription>What did you eat today?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Breakfast</Label>
            <div className="relative">
              <Utensils className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input className="pl-9" placeholder="e.g. Oatmeal with berries and a coffee" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Lunch</Label>
            <div className="relative">
              <Utensils className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input className="pl-9" placeholder="e.g. Grilled chicken salad" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Dinner</Label>
            <div className="relative">
              <Utensils className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input className="pl-9" placeholder="e.g. Salmon with roasted vegetables" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900">
        <CardHeader>
          <CardTitle>Health Metrics</CardTitle>
          <CardDescription>Track your sleep, mood, and activity.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="flex items-center gap-2"><Moon className="w-4 h-4" /> Sleep Hours</Label>
              <span className="font-semibold text-emerald-600">{sleep[0]} hours</span>
            </div>
            <Slider 
              value={sleep} 
              onValueChange={(val) => setSleep(val as number[])} 
              max={12} 
              step={0.5} 
              className="py-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="flex items-center gap-2"><Smile className="w-4 h-4" /> Mood</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How are you feeling?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">Happy & Energized</SelectItem>
                  <SelectItem value="normal">Normal / Neutral</SelectItem>
                  <SelectItem value="stressed">Stressed</SelectItem>
                  <SelectItem value="tired">Tired & Sluggish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2"><Activity className="w-4 h-4" /> Exercise</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Did you work out?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes, I worked out</SelectItem>
                  <SelectItem value="no">No, rest day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl px-8 h-12 shadow-lg shadow-emerald-500/25">
          Save & Analyze
        </Button>
      </div>
    </motion.div>
  );
}
