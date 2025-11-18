// import LinkButton from "@/app/components/LinkButton";

import Link from "next/link";
import classNames from "classnames";

export default function NotFoundBox({showNavbar}: {showNavbar: boolean}) {
    return (
        <div className={classNames(
                'flex items-center justify-center',
                {
                    'mt-30 sm:mt-20 lg:mt-30': showNavbar, // Add margin if navbar is shown
                    'h-screen': !showNavbar, // Full height if navbar is not shown (to center vertically)
                }
            )}>    
            <div className={classNames(
                    'flex flex-col mx-5',
                    {
                        'gap-5 lg:gap-5': showNavbar,
                        'gap-10 sm:gap-12 lg:gap-7': !showNavbar,
                    }
                )}>
                <div className={classNames(
                        'flex flex-col lg:flex-row items-center justify-center',
                        {
                            "gap-2 sm:gap-5 lg:gap-15": showNavbar,
                            "gap-5 sm:gap-10 lg:gap-20": !showNavbar,
                        }
                    )}>
                    {/* Left Text */}
                    <h1 className='text-9xl sm:text-[10rem] leading-none font-primary'>404</h1>
                    {/* Right Text */}
                    <div className="items-center justify-center text-center">
                        <h2 className='text-3xl sm:text-5xl font-secondary'>This page could not be found</h2>
                        <p className='text-base sm:text-xl font-secondary mt-2'>The page you are looking for does not exist or has been moved.</p>
                    </div>
                </div>
                <Link
                href="/"
                target="_self"
                // newTab={false}
                className="w-full text-center text-3xl lg:text-4xl"
                // text="Home"
                >
                    <u>Home</u>
                </Link>
            </div>
        </div>
    );
}