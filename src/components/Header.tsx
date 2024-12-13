import { Search, Command, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <div className="flex flex-1 items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Course or Community"
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 text-xs text-gray-500">
              ⌘ F
            </kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">Vanichia Liao</p>
            <p className="text-xs text-gray-500">Free Plan Members</p>
          </div>
        </div>
      </div>
    </header>
  );
}