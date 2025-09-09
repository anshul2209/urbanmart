interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export default function LoadingSpinner({
  size = 'md',
  text = 'Loading...',
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-orange-400 rounded-full animate-spin`}
        aria-hidden="true"
      />
      {text && <p className="text-sm text-gray-600 animate-pulse">{text}</p>}
    </div>
  )
}

// Skeleton components for better loading states
export function ProductCardSkeleton() {
  return (
    <div className="card p-4 animate-pulse">
      <div className="relative w-full aspect-square bg-gray-200 rounded-xl mb-3" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  )
}

export function CartItemSkeleton() {
  return (
    <li className="grid gap-3 items-center border border-gray-200 p-2 rounded-md grid-cols-[72px_1fr] sm:[grid-template-columns:72px_1fr_auto] animate-pulse">
      <div className="w-[72px] h-[72px] bg-gray-200 rounded" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="flex gap-2 mt-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
          <div className="w-8 h-4 bg-gray-200 rounded" />
          <div className="w-6 h-6 bg-gray-200 rounded-full" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-16" />
        <div className="h-3 bg-gray-200 rounded w-12" />
      </div>
    </li>
  )
}
