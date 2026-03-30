import { Badge } from "@/components/ui/badge";

type StatCardProps = {
  title: string;
  value: string | number | React.ReactNode;
  icon: any;
  badgeText: string;
  badgeIcon: any;
  colorScheme: "blue" | "purple" | "orange" | "pink" | "teal";
};

const colorSchemes = {
  blue: {
    bg: "from-blue-50 to-white",
    border: "border-blue-200",
    titleText: "text-blue-800",
    valueText: "text-blue-700",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "from-purple-50 to-white",
    border: "border-purple-200",
    titleText: "text-purple-800",
    valueText: "text-purple-700",
    iconColor: "text-purple-600",
    badgeBg: "bg-purple-100 text-purple-700",
  },
  orange: {
    bg: "from-orange-50 to-white",
    border: "border-orange-200",
    titleText: "text-orange-800",
    valueText: "text-orange-700",
    iconColor: "text-orange-600",
    badgeBg: "bg-orange-100 text-orange-700",
  },
  pink: {
    bg: "from-pink-50 to-white",
    border: "border-pink-200",
    titleText: "text-pink-800",
    valueText: "text-pink-700",
    iconColor: "text-pink-600",
    badgeBg: "bg-pink-100 text-pink-700",
  },
  teal: {
    bg: "from-teal-50 to-white",
    border: "border-teal-200",
    titleText: "text-teal-800",
    valueText: "text-teal-700",
    iconColor: "text-teal-600",
    badgeBg: "bg-teal-100 text-teal-700",
  },
};

function StatCard({ title, value, icon: Icon, badgeText, badgeIcon: BadgeIcon, colorScheme }: StatCardProps) {
  const colors = colorSchemes[colorScheme];

  return (
    <div className={`bg-linear-to-br ${colors.bg} p-4 rounded-xl border ${colors.border} hover:shadow-lg transition-all duration-300`}>
      <div className={`flex items-center gap-2 ${colors.titleText} text-xs font-semibold mb-2`}>
        <Icon className={`w-3 h-3 ${colors.iconColor}`} />
        {title}
      </div>
      <div className={`text-base font-bold ${colors.valueText} mb-2`}>
        {value}
      </div>
      <Badge variant="secondary" className={`${colors.badgeBg} text-xs px-2 py-1 rounded-full`}>
        <BadgeIcon className="w-2 h-2 mr-1" />
        {badgeText}
      </Badge>
    </div>
  );
}

export default StatCard;
