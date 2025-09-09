"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

type Props = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function AddToCartButton({ id, title, price, thumbnail }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const [adding, setAdding] = useState(false);

  return (
    <button
      onClick={() => {
        setAdding(true);
        addItem({ id, title, price, thumbnail, quantity: 1 });
        setTimeout(() => setAdding(false), 400);
      }}
      disabled={adding}
      className="btn-accent disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {adding ? "Added" : "Add to Cart"}
    </button>
  );
}


