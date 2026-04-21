"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/useCartStore";

const PRODUCTS = [
  {
    id: "p1",
    name: "Optimum Whey Protein Isolate",
    category: "Protein",
    price: 49.99,
    rating: 4.8,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: "p2",
    name: "Daily Multivitamin Complex",
    category: "Vitamins",
    price: 24.99,
    rating: 4.5,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: "p3",
    name: "Wild Caught Omega-3 Fish Oil",
    category: "Omega-3",
    price: 19.99,
    rating: 4.9,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1550572017-edb3df829b3a?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: "p4",
    name: "Explosive Pre-Workout Energy",
    category: "Pre-Workout",
    price: 34.99,
    rating: 4.6,
    reviews: 560,
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=400&h=400",
  }
];

export default function SupplementStore() {
  const { items, addItem, totalPrice } = useCartStore();

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.div 
      className="max-w-6xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">NutriStore</h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Premium supplements curated for your health goals.</p>
        </div>
        
        {/* Simple Cart Summary */}
        <Button className="rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-12 px-6">
          <ShoppingCart className="w-5 h-5 mr-3" />
          <span className="font-bold">{totalItems} items</span>
          <span className="mx-2 opacity-50">|</span>
          <span>${totalPrice().toFixed(2)}</span>
        </Button>
      </div>

      {/* Categories Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["All", "Protein", "Vitamins", "Omega-3", "Pre-Workout"].map((cat) => (
          <Badge key={cat} variant={cat === "All" ? "default" : "secondary"} className="rounded-full px-4 py-1.5 cursor-pointer text-sm">
            {cat}
          </Badge>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <Card key={product.id} className="rounded-2xl border-none shadow-sm bg-white dark:bg-zinc-900 overflow-hidden group">
            <div className="relative h-48 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {product.rating}
              </div>
            </div>
            <CardContent className="p-4 space-y-3">
              <div>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 leading-tight line-clamp-2">{product.name}</h3>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xl font-black">${product.price}</span>
                <Button 
                  size="sm" 
                  className="rounded-xl bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-800/50"
                  onClick={() => handleAddToCart(product)}
                >
                  <Plus className="w-4 h-4 mr-1" /> Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </motion.div>
  );
}
