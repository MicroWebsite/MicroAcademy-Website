import Image from 'next/image';
import { whoAreWeData } from '@/app/data/whoAreWeData';

export default function WhoareweSection() {
    const { heading, paragraphs, images } = whoAreWeData;

    return (
        <section className="w-full bg-[#F5F4EE] py-16 lg:py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Left Content */}
                    <div className="flex-1 lg:max-w-[45%]">
                        <div className="mb-8">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                {heading}
                            </h2>
                            <div className="w-16 h-1 bg-[#6A5F00]"></div>
                        </div>

                        <div className="space-y-6 text-[#4B4732]">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-base lg:text-lg leading-relaxed font-normal"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Images - Parallel / Side by Side Layout */}
                    <div className="flex-1 lg:max-w-[50%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {/* First Image (Office Interior) */}
                            <div className="relative aspect-4/5  rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Second Image (Graduation) */}
                            <div className="relative aspect-4/5 mt-10 rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src={images[1].src}
                                    alt={images[1].alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}