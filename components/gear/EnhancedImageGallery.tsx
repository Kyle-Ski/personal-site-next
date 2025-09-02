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
    isModalOpen: boolean
    setIsModalOpen: (open: boolean) => void
    optimizeImageUrl: (url: string, width?: number) => string
    gearName: string
}

export default function EnhancedImageGallery({
    allImages,
    selectedImageIndex,
    handleImageSelect,
    isModalOpen,
    setIsModalOpen,
    optimizeImageUrl,
    gearName
}: EnhancedImageGalleryProps) {
    const thumbnailsRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    // Keyboard navigation for modal
    useEffect(() => {
        if (!isModalOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    setIsModalOpen(false)
                    break
                case 'ArrowLeft':
                    e.preventDefault()
                    if (selectedImageIndex > 0) {
                        handleImageSelect(selectedImageIndex - 1)
                    }
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    if (selectedImageIndex < allImages.length - 1) {
                        handleImageSelect(selectedImageIndex + 1)
                    }
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen, selectedImageIndex, allImages.length, handleImageSelect, setIsModalOpen])

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

    const getFullResolutionUrl = (url: string) => {
        // Remove any existing query parameters to get full resolution
        return url.split('?')[0]
    }

    const navigateModal = (direction: 'prev' | 'next') => {
        if (direction === 'prev' && selectedImageIndex > 0) {
            handleImageSelect(selectedImageIndex - 1)
        } else if (direction === 'next' && selectedImageIndex < allImages.length - 1) {
            handleImageSelect(selectedImageIndex + 1)
        }
    }

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
                        />
                    ))}
                </div>
            </div>

            {/* Enhanced Thumbnails */}
            <div className={containerClasses}>
                {/* Scroll Buttons */}
                <button
                    onClick={() => scrollThumbnails('left')}
                    disabled={!canScrollLeft}
                    className={`${styles.scrollButton} ${styles.left}`}
                    aria-label="Scroll thumbnails left"
                >
                    <ChevronLeft size={16} />
                </button>

                <button
                    onClick={() => scrollThumbnails('right')}
                    disabled={!canScrollRight}
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
                            className={`${styles.thumbnail} ${index === selectedImageIndex ? styles.active : ''}`}
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

            {/* Simplified Image Modal */}
            {isModalOpen && (
                <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className={styles.modalHeader}>
                            <div className={styles.modalCounter}>
                                {selectedImageIndex + 1} of {allImages.length}
                            </div>
                            <button
                                className={styles.closeButton}
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close modal"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Image Container */}
                        <div className={styles.modalImageContainer}>
                            {/* Navigation Arrows */}
                            {selectedImageIndex > 0 && (
                                <button
                                    className={`${styles.modalNavButton} ${styles.modalPrev}`}
                                    onClick={() => navigateModal('prev')}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                            )}

                            <div className={styles.modalImageWrapper}>
                                <Image
                                    src={getFullResolutionUrl(allImages[selectedImageIndex].url)}
                                    alt={allImages[selectedImageIndex].alt}
                                    width={1200}
                                    height={800}
                                    className={styles.modalImage}
                                    priority
                                />
                            </div>

                            {selectedImageIndex < allImages.length - 1 && (
                                <button
                                    className={`${styles.modalNavButton} ${styles.modalNext}`}
                                    onClick={() => navigateModal('next')}
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            )}
                        </div>

                        {/* Modal Caption */}
                        {allImages[selectedImageIndex].caption && (
                            <div className={styles.modalCaption}>
                                {allImages[selectedImageIndex].caption}
                            </div>
                        )}

                        {/* Modal Thumbnails */}
                        <div className={styles.modalThumbnails}>
                            {allImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageSelect(index)}
                                    className={`${styles.modalThumbnail} ${index === selectedImageIndex ? styles.active : ''}`}
                                >
                                    <Image
                                        src={optimizeImageUrl(image.url, 60)}
                                        alt={image.alt}
                                        width={60}
                                        height={45}
                                        className={styles.modalThumbnailImage}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}