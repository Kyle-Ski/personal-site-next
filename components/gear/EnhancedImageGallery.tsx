"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from '@/styles/GearReviewDetail.module.css'

interface ImageData {
    url: string
    alt: string
    caption: string
}

interface EnhancedImageGalleryProps {
    allImages: ImageData[]
    selectedImageIndex: number
    handleImageSelect: (index: number) => void
    loadingImageIndex: number | null
    loadedImages: Set<number>
    optimizeImageUrl: (url: string, width?: number) => string
    gearName: string
}

export default function EnhancedImageGallery({
    allImages,
    selectedImageIndex,
    handleImageSelect,
    loadingImageIndex,
    loadedImages,
    optimizeImageUrl,
    gearName
}: EnhancedImageGalleryProps) {
    const thumbnailsRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    // Check scroll position and update gradient visibility
    const checkScrollPosition = () => {
        if (thumbnailsRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = thumbnailsRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    useEffect(() => {
        checkScrollPosition()
        const handleResize = () => checkScrollPosition()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [allImages])

    const scrollThumbnails = (direction: 'left' | 'right') => {
        if (thumbnailsRef.current) {
            const scrollAmount = 200
            const newScrollLeft = direction === 'left'
                ? thumbnailsRef.current.scrollLeft - scrollAmount
                : thumbnailsRef.current.scrollLeft + scrollAmount

            thumbnailsRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            })
        }
    }

    if (allImages.length <= 1) return null

    const containerClasses = [
        styles.thumbnailsContainer,
        !canScrollLeft ? styles.noLeftScroll : '',
        !canScrollRight ? styles.noRightScroll : ''
    ].filter(Boolean).join(' ')

    const isLoading = loadingImageIndex !== null

    return (
        <>
            {/* Image Counter with Dots */}
            <div className={styles.imageCounter}>
                <span>{selectedImageIndex + 1} of {allImages.length} images</span>
                <div className={styles.dots}>
                    {allImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageSelect(index)}
                            className={`${styles.dot} ${index === selectedImageIndex ? styles.active : ''}`}
                            aria-label={`View image ${index + 1}`}
                            disabled={isLoading}
                        />
                    ))}
                </div>
            </div>

            {/* Enhanced Thumbnails */}
            <div className={containerClasses}>
                {/* Scroll Buttons */}
                <button
                    onClick={() => scrollThumbnails('left')}
                    disabled={!canScrollLeft || isLoading}
                    className={`${styles.scrollButton} ${styles.left}`}
                    aria-label="Scroll thumbnails left"
                >
                    <ChevronLeft size={16} />
                </button>

                <button
                    onClick={() => scrollThumbnails('right')}
                    disabled={!canScrollRight || isLoading}
                    className={`${styles.scrollButton} ${styles.right}`}
                    aria-label="Scroll thumbnails right"
                >
                    <ChevronRight size={16} />
                </button>

                <div
                    ref={thumbnailsRef}
                    className={styles.thumbnails}
                    onScroll={checkScrollPosition}
                >
                    {allImages.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageSelect(index)}
                            className={`${styles.thumbnail} ${index === selectedImageIndex ? styles.active : ''} ${loadedImages.has(index) ? styles.loaded : styles.unloaded}`}
                            disabled={isLoading}
                        >
                            <Image
                                src={optimizeImageUrl(image.url, 80)}
                                alt={image.alt}
                                width={80}
                                height={60}
                                className={styles.thumbnailImage}
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}