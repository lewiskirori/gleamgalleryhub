import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";


const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image
                    src="/logo.svg"
                    alt="GleamGalleryHub-Head-Logo"
                    width={118}
                    height={18}
                    className="object-contain"
                />
            </Link>

            <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="bg-transparent border border-gray-700 text-gray-700 rounded-full min-w-[130px] transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent"
            />
        </nav>
    </header>
  )
}

export default Navbar