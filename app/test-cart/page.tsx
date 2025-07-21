"use client"

import { useCartStore } from "@/lib/store/cart"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const testProduct = {
  id: "1",
  name: "Test Product",
  price: 9.99,
}

export default function TestCart() {
  const { items, totalItems, totalPrice, addItem, removeItem, updateQuantity, clearCart } =
    useCartStore()

  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Test Cart</h1>
        <div className="flex items-center justify-between">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          onClick={() => addItem(testProduct)}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add Test Product
        </Button>

        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <Button
            variant="destructive"
            onClick={clearCart}
            className="w-full"
          >
            Clear Cart
          </Button>
        )}
      </div>
    </div>
  )
} 