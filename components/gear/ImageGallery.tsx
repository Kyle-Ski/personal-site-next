"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react"

interface ImageData {
    url: string
    alt: string
    caption: string
}

interface ImageGalleryProps {
    images: ImageData[]
    gearName: string
    optimizeImageUrl: (url: string, width?: number) => string
}

export default function ImageGallery({
    images,
    gearName,
    optimizeImageUrl
}: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loadedImages, setLoadedImages] = useState(new Set([0]))
    const [isLoading, setIsLoading] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    // Preload adjacent images for smoother experience
    const preloadImage = useCallback((index: number) => {
        if (loadedImages.has(index) || index < 0 || index >= images.length) return

        const img = new window.Image()
        img.src = optimizeImageUrl(images[index].url, 800)
        img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(index))
        }
    }, [images, loadedImages, optimizeImageUrl])

    // Preload adjacent images when selection changes
    useEffect(() => {
        preloadImage(selectedIndex - 1)
        preloadImage(selectedIndex + 1)
    }, [selectedIndex, preloadImage])

    // Handle image selection with optimistic updates
    const handleImageSelect = useCallback((index: number) => {
        if (index === selectedIndex) return

        setIsLoading(true)
        setSelectedIndex(index)

        // If image is already loaded, show immediately
        if (loadedImages.has(index)) {
            setIsLoading(false)
        } else {
            // Preload if not already loaded
            const img = new window.Image()
            img.src = optimizeImageUrl(images[index].url, 800)
            img.onload = () => {
                setLoadedImages(prev => new Set(prev).add(index))
                setIsLoading(false)
            }
            img.onerror = () => setIsLoading(false)
        }
    }, [selectedIndex, loadedImages, images, optimizeImageUrl])

    // Modal navigation
    const navigateModal = useCallback((direction: 'prev' | 'next') => {
        const newIndex = direction === 'prev'
            ? Math.max(0, selectedIndex - 1)
            : Math.min(images.length - 1, selectedIndex + 1)
        handleImageSelect(newIndex)
    }, [selectedIndex, images.length, handleImageSelect])

    // Keyboard navigation
    useEffect(() => {
        if (!isModalOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'Escape':
                    setIsModalOpen(false)
                    break
                case 'ArrowLeft':
                    e.preventDefault()
                    navigateModal('prev')
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    navigateModal('next')
                    break
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen, navigateModal])

    // Focus management for modal
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
            modalRef.current?.focus()
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    if (!images.length) return null

    const currentImage = images[selectedIndex]

    return (
        <>
            {/* Main Gallery - Ultra Conservative */}
            <div className="rounded-xl p-3 box-border" style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-bg-tertiary)'
            }}>

                {/* Main Image Container - Safe approach */}
                <div
                    className="relative rounded-lg overflow-hidden mb-3 group cursor-pointer"
                    style={{
                        width: '100%',
                        height: '250px',
                        maxWidth: '100%',
                        background: 'var(--color-bg-primary)'
                    }}
                    onClick={() => setIsModalOpen(true)}
                >
                    {/* Loading Skeleton */}
                    {isLoading && (
                        <div
                            className="absolute inset-0 animate-pulse rounded-lg"
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'var(--color-bg-tertiary)'
                            }}
                        />
                    )}

                    {/* Main Image - No explicit dimensions */}
                    <Image
                        src={optimizeImageUrl(currentImage.url, 600)}
                        alt={currentImage.alt}
                        fill
                        className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                            }`}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority={selectedIndex === 0}
                    />

                    {/* Expand Button */}
                    <button
                        className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsModalOpen(true)
                        }}
                        aria-label="Expand image"
                    >
                        <Expand size={14} />
                    </button>

                    {/* Image Counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {selectedIndex + 1} of {images.length}
                        </div>
                    )}
                </div>

                {/* Image Caption */}
                {currentImage.caption && (
                    <p
                        className="text-xs text-gray-600 dark:text-gray-400 text-center mb-3 italic px-1"
                        style={{
                            maxWidth: '100%',
                            wordWrap: 'break-word'
                        }}
                    >
                        {currentImage.caption}
                    </p>
                )}

                {/* Thumbnails - Ultra Safe */}
                {images.length > 1 && (
                    <div
                        className="overflow-hidden"
                        style={{
                            width: '100%',
                            maxWidth: '100%'
                        }}
                    >
                        <div
                            className="flex overflow-x-auto pb-1"
                            style={{
                                gap: '4px',
                                scrollbarWidth: 'thin',
                                msOverflowStyle: 'auto'
                            }}
                        >
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageSelect(index)}
                                    className={`flex-shrink-0 relative rounded overflow-hidden border transition-all duration-200 ${index === selectedIndex
                                            ? 'border-blue-500'
                                            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'
                                        }`}
                                    style={{
                                        width: '40px',
                                        height: '30px',
                                        minWidth: '40px',
                                        minHeight: '30px'
                                    }}
                                >
                                    <Image
                                        src={optimizeImageUrl(image.url, 80)}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="40px"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 z-50 bg-black/90 flex flex-col"
                    onClick={() => setIsModalOpen(false)}
                    tabIndex={-1}
                >
                    {/* Modal Header */}
                    <div className="flex justify-between items-center p-3 text-white flex-shrink-0">
                        <div
                            className="font-medium text-sm pr-3"
                            style={{
                                maxWidth: 'calc(100% - 60px)',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {selectedIndex + 1} of {images.length} - {gearName}
                        </div>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Modal Image Container */}
                    <div
                        className="flex-1 relative flex items-center justify-center p-3"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Navigation Arrows */}
                        {selectedIndex > 0 && (
                            <button
                                onClick={() => navigateModal('prev')}
                                className="absolute left-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        )}

                        {selectedIndex < images.length - 1 && (
                            <button
                                onClick={() => navigateModal('next')}
                                className="absolute right-2 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRight size={20} />
                            </button>
                        )}

                        {/* Modal Image */}
                        <div
                            className="relative"
                            style={{
                                width: '100%',
                                height: '100%',
                                maxWidth: '90vw',
                                maxHeight: '70vh'
                            }}
                        >
                            <Image
                                src={optimizeImageUrl(currentImage.url, 1200)}
                                alt={currentImage.alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Modal Footer */}
                    {currentImage.caption && (
                        <div className="p-3 bg-black/50 text-white text-center flex-shrink-0">
                            <p
                                className="text-xs"
                                style={{
                                    maxWidth: '100%',
                                    wordWrap: 'break-word'
                                }}
                            >
                                {currentImage.caption}
                            </p>
                        </div>
                    )}

                    {/* Modal Thumbnails */}
                    {images.length > 1 && (
                        <div className="p-3 bg-black/50 flex-shrink-0">
                            <div
                                className="flex justify-center overflow-x-auto"
                                style={{ gap: '4px' }}
                            >
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleImageSelect(index)
                                        }}
                                        className={`flex-shrink-0 relative rounded overflow-hidden border transition-all ${index === selectedIndex
                                                ? 'border-white'
                                                : 'border-gray-400 hover:border-gray-200'
                                            }`}
                                        style={{
                                            width: '32px',
                                            height: '24px',
                                            minWidth: '32px',
                                            minHeight: '24px'
                                        }}
                                    >
                                        <Image
                                            src={optimizeImageUrl(image.url, 64)}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="32px"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}