
export default function CardPage() {

    return <div>
        <div className="bg-sky-50">
            <p>something is better than nothing</p>
        </div>
        <div className="bg-sky-100">
            <p>something is better than nothing</p>

        </div>
        <div className="bg-sky-200">
            <p>something is better than nothing</p>

        </div>
        <div className="bg-sky-300">
            <p>something is better than nothing</p>

        </div>
        <div className="bg-sky-400">
            <p>something is better than nothing</p>

        </div>

        Core concepts

        Colors
        Using and customizing the color palette in Tailwind CSS projects.

        Tailwind CSS includes a vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of different design styles.


        50
        100
        200
        300
        400
        500
        600
        700
        800
        900
        950
        red


        orange


        amber


        yellow


        lime


        green


        emerald


        teal


        cyan


        sky


        blue


        indigo


        violet


        purple


        fuchsia


        pink


        rose


        slate


        gray


        zinc


        neutral


        stone


        Click to copy the OKLCH value or shift+click to copy the nearest hex value.
        Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest:

        50

        100

        200

        300

        400

        500

        600

        700

        800

        900

        950

        <div>
            <div className="bg-sky-50"></div>
            <div className="bg-sky-100"></div>
            <div className="bg-sky-200"></div>
            <div className="bg-sky-300"></div>
            <div className="bg-sky-400"></div>
            <div className="bg-sky-500"></div>
            <div className="bg-sky-600"></div>
            <div className="bg-sky-700"></div>
            <div className="bg-sky-800"></div>
            <div className="bg-sky-900"></div>
            <div className="bg-sky-950"></div>
        </div>
        <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
            <span className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
                <svg className="size-6 stroke-pink-700 dark:stroke-pink-500"></svg>
            </span>
            <div>
                <p className="text-gray-700 dark:text-gray-400">
                    <span className="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in
                    <span className="font-medium text-gray-950 dark:text-white">Logo redesign</span>
                </p>
                <time className="mt-1 block text-gray-500" dateTime="9:37">9:37am</time>
            </div>
        </div>
    </div>
}