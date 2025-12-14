import { links } from "@/data/links";
import { LinkCard } from "@/components/link-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ProfileHeader } from "@/components/profile-header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Top bar */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <ProfileHeader />

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold uppercase">meus links</h1>
        </div>

        <div className="space-y-4">
          {links.map((link) => (
            <LinkCard key={link.url} link={link} />
          ))}
        </div>
      </div>
    </main>
  );
}
