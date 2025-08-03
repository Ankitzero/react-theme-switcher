import type { NoItemsFoundProps } from "../../types";

const NoItemsFound = ({
    title = "No Products Found",
    message = "We couldn't find any products to display. Please try refreshing or check back later.",
    className = ""
}: NoItemsFoundProps) => {
    return (
        <div className={`bg-[var(--bg, #ffffff)] text-[var(--color-dark, #1f2937)] flex flex-col items-center justify-center min-h-[400px] px-4 text-center ${className}`}>
            {/* Empty State Icon */}
            <div
                className="mb-6 p-6 rounded-full"
                style={{ backgroundColor: 'var(--color-primary, #f3f4f6)' }}
            >
                <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--color-secondry, #9ca3af)' }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21V9l10-4"
                    />
                </svg>
            </div>

            {/* Title */}
            <h2
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: 'var(--color-dark, #111827)' }}
            >
                {title}
            </h2>

            {/* Message */}
            <p
                className="text-sm sm:text-base max-w-md mb-8 leading-relaxed"
            >
                {message}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 rounded-lg transition-all duration-200 text-sm font-medium hover:opacity-80 hover:scale-105 bg-[var(--color-primary, #e5e7eb)] text-[var(--color-light, #374151)] border border-[var(--color-secondry, #d1d5db)]"
                >
                    Try Again
                </button>
            </div>

        </div>
    );
};

export default NoItemsFound;