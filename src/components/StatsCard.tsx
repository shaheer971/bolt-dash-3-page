import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color?: string;
}

export function StatsCard({ icon, value, label, color = 'bg-primary' }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6"
    >
      <div className={`rounded-lg ${color} p-3 text-white`}>{icon}</div>
      <div>
        <div className="mb-1 text-2xl font-semibold">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
      <button className="ml-auto">
        <ArrowRight className="h-5 w-5 text-gray-400" />
      </button>
    </motion.div>
  );
}