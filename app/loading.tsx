import { ProductCardSkeleton } from '@/components/LoadingSpinner'

const SKELETON_IDS = Array.from({ length: 8 }, (_, i) => `skeleton-${i}`)

export default function Loading() {
  return (
    <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(160px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] md:[grid-template-columns:repeat(auto-fill,minmax(220px,1fr))] py-10">
      {SKELETON_IDS.map((id) => (
        <ProductCardSkeleton key={id} />
      ))}
    </div>
  )
}
