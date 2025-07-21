import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Search } from "lucide-react"
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>
      <Button>Click me</Button>
    </main>
  )
}
