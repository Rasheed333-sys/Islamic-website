import {
  Sunrise,
  Sunset,
  Hand,
  Plane,
  Users,
  HeartPulse,
  Shield,
  RefreshCcw,
  Moon,
  UtensilsCrossed,
  Building2,
  type LucideIcon,
} from "lucide-react";
import type { DuaIconName } from "@/lib/types/dua";

const ICON_MAP: Record<DuaIconName, LucideIcon> = {
  sunrise: Sunrise,
  sunset: Sunset,
  hand: Hand,
  plane: Plane,
  users: Users,
  "heart-pulse": HeartPulse,
  shield: Shield,
  "refresh-ccw": RefreshCcw,
  moon: Moon,
  utensils: UtensilsCrossed,
  building: Building2,
};

interface CategoryIconProps {
  icon: DuaIconName;
  className?: string;
}

export function CategoryIcon({ icon, className }: CategoryIconProps) {
  const Icon = ICON_MAP[icon];
  return <Icon className={className} aria-hidden="true" />;
}