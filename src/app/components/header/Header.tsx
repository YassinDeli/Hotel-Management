import Link from "next/link";

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:w-2/3">
        {/* Correct usage of Next.js Link component */}
        <Link href="/" className="font-black text-[#F27405]">
          hotel 
        </Link>
      </div>
    </header>
  );
};

export default Header;
