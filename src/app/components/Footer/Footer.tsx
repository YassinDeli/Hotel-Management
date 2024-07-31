import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs" // Importing specific icons from react-icons library
import Link from "next/link" // Importing Link component from next/link for client-side navigation
import { BiMessageAltDetail } from "react-icons/bi" // Importing specific icon from react-icons library

const Footer = () => {
  return (
    <footer className="mt-16"> {/* Footer element with top margin */}
        <div className="container mx-auto px-4"> {/* Container for centering content and padding */}
            <Link href="/" className="font-black text-tertiary-dark"> 
            Hotel
            </Link>

            <h4 className="'font-semibold text-[40px] py-6">Contact</h4> {/* Header for the contact section */}

            <div className="flex flex-wrap gap-16 items-center justify-between"> {/* Flexbox container for layout */}
                <div className="flex-1"> {/* First column with flexible width */}
                    <p>123 Road</p> {/* Address */}
                        <div className="flex items-center py-4"> {/* Flex container for email */}
                            <BsFillSendFill/> {/* Email icon */}
                            <p className="ml-2"> Yassin Deli</p> {/* Email text with left margin */}
                        </div>
                         
                        <div className="flex items-center "> {/* Flex container for phone */}
                            <BsTelephoneOutbound/> {/* Phone icon */}
                            <p className="ml-2"> 53020292</p> {/* Phone number with left margin */}
                        </div>
                          
                        <div className="flex items-center pt-4"> {/* Flex container for message */}
                            <BiMessageAltDetail/> {/* Message icon */}
                            <p className="ml-2"> codewithlari</p> {/* Message text with left margin */}
                        </div>
                </div>
                <div className="flex-1md:text-right"> {/* Second column with flexible width and text alignment on medium screens */}
                    <p className="pb-4">Our Story</p> {/* Link to Our Story page with bottom padding */}
                    <p className="pb-4">Git in Touch</p> {/* Link to Contact page with bottom padding */}
                    <p className="pb-4">Our Privacy Commitment</p> {/* Link to Privacy page with bottom padding */}
                    <p className="pb-4">Terms of Service</p> {/* Link to Terms of Service page with bottom padding */}
                    <p>Customer Assitance</p> {/* Link to Customer Assistance page */}
                </div>
                <div className="flex-1 md:text-right"> {/* Third column with flexible width and text alignment on medium screens */}
                    <p className="pb-4">Dining Experience</p> {/* Link to Dining Experience page with bottom padding */}
                    <p className="pb-4">Wellnes</p> {/* Link to Wellness page with bottom padding */}
                    <p className="pb-4">Fitness</p> {/* Link to Fitness page with bottom padding */}
                    <p className="pb-4">Sports</p> {/* Link to Sports page with bottom padding */}
                    <p>Events</p> {/* Link to Events page */}
                </div>
            </div>
        </div>   
         <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div> {/* Decorative element at the bottom */}
    </footer>
  )
}

export default Footer // Exporting the Footer component as the default export
