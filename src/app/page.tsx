"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Flame, 
  Droplet, 
  Apple, 
  TrendingUp, 
  AlertTriangle,
  Award
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { name: "Mon", score: 65 },
  { name: "Tue", score: 72 },
  { name: "Wed", score: 85 },
  { name: "Thu", score: 78 },
  { name: "Fri", score: 90 },
  { name: "Sat", score: 88 },
  { name: "Sun", score: 95 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Dashboard() {
  return (
    <motion.div 
      className="space-y-6 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Good Morning, User! 👋</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Here is your health overview for today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-xl">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Current Streak</p>
            <p className="text-lg font-bold">14 Days</p>
          </div>
        </div>
      </div>

      {/* AI Alerts */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20 shadow-sm backdrop-blur-sm">
          <CardContent className="p-4 flex items-start gap-4">
            <div className="bg-emerald-500/20 p-2 rounded-full mt-1">
              <AlertTriangle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-emerald-800 dark:text-emerald-300">AI Pattern Detected</h3>
              <p className="text-sm text-emerald-700/80 dark:text-emerald-400/80 mt-1">
                You typically crave sugar around 3:00 PM. Try drinking a glass of water or having an apple in 30 minutes to prevent this!
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Health Score */}
        <motion.div variants={itemVariants}>
          <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Health Score</CardTitle>
              <Activity className="w-4 h-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">85<span className="text-xl text-zinc-400">/100</span></div>
              <Progress value={85} className="h-2 mt-4 bg-zinc-100 dark:bg-zinc-800" indicatorColor="bg-emerald-500" />
              <p className="text-xs text-zinc-500 mt-2">+5 points from yesterday</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Calories */}
        <motion.div variants={itemVariants}>
          <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Calories</CardTitle>
              <Flame className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,240 <span className="text-sm font-normal text-zinc-500">/ 2,000 kcal</span></div>
              <Progress value={62} className="h-2 mt-4 bg-zinc-100 dark:bg-zinc-800" indicatorColor="bg-orange-500" />
              <p className="text-xs text-zinc-500 mt-2">760 kcal remaining</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Water Intake */}
        <motion.div variants={itemVariants}>
          <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
              <Droplet className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.5 <span className="text-sm font-normal text-zinc-500">/ 3.0 L</span></div>
              <Progress value={50} className="h-2 mt-4 bg-zinc-100 dark:bg-zinc-800" indicatorColor="bg-blue-500" />
              <p className="text-xs text-zinc-500 mt-2">4 glasses remaining</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Meals Logged */}
        <motion.div variants={itemVariants}>
          <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Meals Logged</CardTitle>
              <Apple className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 <span className="text-sm font-normal text-zinc-500">/ 4 meals</span></div>
              <div className="flex gap-1 mt-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Breakfast</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Snack</Badge>
              </div>
              <p className="text-xs text-zinc-500 mt-2">Lunch is coming up next</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Chart & Mini Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-zinc-500" />
                Health Score Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Card className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-md flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-500" />
                Daily Mini-Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>10,000 Steps</span>
                  <span className="font-medium">6,400</span>
                </div>
                <Progress value={64} className="h-1.5" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Protein Target</span>
                  <span className="font-medium">80/120g</span>
                </div>
                <Progress value={66} className="h-1.5" indicatorColor="bg-purple-500" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sleep 8 hours</span>
                  <span className="font-medium">7h 15m</span>
                </div>
                <Progress value={90} className="h-1.5" indicatorColor="bg-indigo-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-none shadow-sm bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Digital Twin Update</h3>
              <p className="text-indigo-100 text-sm mb-4">
                Based on your last 7 days, your metabolic rate has improved by 2%. Keep up the good work!
              </p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-zinc-50 transition-colors w-full">
                View Deep Analysis
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
