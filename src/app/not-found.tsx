import NotFoundBox from "@/src/app/components/NotFoundBox";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/src/app/components/Footer";

import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: true },
};  

export default function NotFound({showNavbar = true}: {showNavbar?: boolean}) {
    if(showNavbar){
        return (
            <div>
                <Navbar />
                <div className="flex flex-col min-h-screen pt-18">
                    <main className="grow">
                        <NotFoundBox showNavbar={true}/>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
    return (
        <NotFoundBox showNavbar={false}/>
    )
}