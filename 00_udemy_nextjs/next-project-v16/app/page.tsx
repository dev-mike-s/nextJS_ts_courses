//root/app/page.tsx

/**
 *
 */

import Slider from '../components/Slider';

export default function HomePage() {
    return (
        <section className="py-8">
            <Slider />

            <div className="mt-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                    Hungrig? <span className="text-red-700">Liefermax</span> regelt.
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Dein moderner Lieferservice – frisch, schnell und in v16.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            </div>
        </section>
    )
}