import { Home, BookOpen, GraduationCap, HelpCircle, Settings, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigation = [
  { name: 'Home', icon: Home, href: 'home' },
  { name: 'Explore Courses', icon: BookOpen, href: 'explore' },
  { name: 'My Courses', icon: GraduationCap, href: 'my-courses' },
];

const bottomNavigation = [
  { name: 'Help Center', icon: HelpCircle, href: 'help' },
  { name: 'Settings', icon: Settings, href: 'settings' },
  { name: 'Logout Account', icon: LogOut, href: 'logout' },
];

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <div className="flex h-screen w-64 flex-col bg-[#1C1D2C] text-white">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded bg-white">
            <GraduationCap className="h-5 w-5 text-[#1C1D2C]" />
          </div>
          <span className="text-xl font-semibold">Onliversity</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate(item.href)}
            className={cn(
              'group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium',
              currentPage === item.href ? 'bg-white/10' : 'hover:bg-white/5'
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </button>
        ))}
      </nav>

      <div className="px-4 pb-6">
        {bottomNavigation.map((item) => (
          <button
            key={item.name}
            onClick={() => onNavigate(item.href)}
            className="group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-white/5"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}