import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  ShoppingCart, 
  Heart, 
  Search, 
  Menu, 
  User, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw,
  ArrowRight,
  ChevronRight
} from "lucide-react"
import Image from "next/image"

// Mock data for demonstration
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder-product-1.jpg",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.3,
    reviews: 89,
    image: "/placeholder-product-2.jpg",
    badge: "New"
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder-product-3.jpg",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.2,
    reviews: 67,
    image: "/placeholder-product-4.jpg",
    badge: "Limited"
  }
]

const categories = [
  { name: "Electronics", icon: "📱", count: "1,234" },
  { name: "Fashion", icon: "👕", count: "2,567" },
  { name: "Home & Garden", icon: "🏠", count: "890" },
  { name: "Sports", icon: "⚽", count: "456" },
  { name: "Books", icon: "📚", count: "3,210" },
  { name: "Toys", icon: "🎮", count: "789" }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ShopHub</h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search for products, brands, and categories..."
                  className="pl-10 pr-4 py-2"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Amazing Products
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Shop the latest trends with unbeatable prices and fast delivery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  View Categories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h3>
              <p className="text-gray-600">Find what you&apos;re looking for in our curated categories</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-500">{category.count} items</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h3>
                <p className="text-gray-600">Handpicked products for you</p>
              </div>
              <Button variant="outline" className="group">
                View All
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Product Image</span>
                      </div>
                      {product.badge && (
                        <Badge className="absolute top-2 left-2">
                          {product.badge}
                        </Badge>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h4>
                <p className="text-gray-600">Free shipping on orders over $50</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure Payment</h4>
                <p className="text-gray-600">100% secure payment processing</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Easy Returns</h4>
                <p className="text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopHub</h3>
              <p className="text-gray-400 mb-4">
                Your one-stop destination for all your shopping needs. Quality products, great prices, and excellent service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on new products and special offers.</p>
              <div className="flex">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="ml-2">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
