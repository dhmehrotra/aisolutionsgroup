import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-6 bg-white border-b sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/favicon.png" alt="AI Solutions Group Logo" width={36} height={36} className="h-9 w-auto" />
            <span className="text-xl font-bold text-[#1A1A1A]">AI Solutions Group</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-[#3B6F9C] transition-colors">
              Services
            </Link>
            <Link
              href="#engagements"
              className="text-sm font-medium text-gray-600 hover:text-[#3B6F9C] transition-colors"
            >
              Engagements
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#3B6F9C] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex border-gray-300 hover:bg-gray-50 text-gray-900">
              <a href="https://zcal.co/mehrotra" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
            <Button asChild className="bg-[#3B6F9C] hover:bg-[#2E5A80] text-white">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
