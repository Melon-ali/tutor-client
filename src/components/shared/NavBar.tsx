"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, UserIcon, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import Logo from "./Logo";
import { getProfileInfo } from "@/services/Profile";
import PrimaryButton from "./PrimaryButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getProfileInfo();
        if (userProfile?.success) {
          setProfileImage(userProfile.data?.image || null);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    if (user?.userId) {
      fetchProfile();
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-md">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[#F16001] flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm ">
          <Link
            href="/"
            className="hover:text-[#F16001] text-[#001B61] font-semibold transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#F16001] text-[#001B61] font-semibold transition duration-300"
          >
            About
          </Link>
          <Link
            href="/course"
            className="hover:text-[#F16001] text-[#001B61] font-semibold transition duration-300"
          >
            Courses
          </Link>
         
        
          <Link
            href="/blogs"
            className="hover:text-[#F16001] text-[#001B61] font-semibold transition duration-300"
          >
            Blogs
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#F16001] text-[#001B61] font-semibold transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* User Authentication */}
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  {profileImage ? (
                    <AvatarImage
                      className="object-cover"
                      src={profileImage}
                      alt="User Profile"
                    />
                  ) : (
                    <AvatarFallback>
                      <UserIcon />
                    </AvatarFallback>
                  )}
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/profile">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <Link href="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-500 cursor-pointer"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            
            
            <Link href="login">
              <PrimaryButton>Sign In</PrimaryButton>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col py-4 px-6 gap-4">
          <Link
            href="/"
            className="hover:text-[#F16001] text-[#001B61] font-bold transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#F16001] text-[#001B61] font-bold transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#F16001] text-[#001B61] font-bold transition duration-300"
          >
            contact
          </Link>

          <Link
            href="/course"
            className="hover:text-[#F16001] text-[#001B61] font-bold transition duration-300"
          >
            course
          </Link>
         
        
         
          <Link
            href="/blogs"
            className="hover:text-[#F16001] text-[#001B61] font-bold transition duration-300"
          >
            Blog
          </Link>
          
        </div>
      )}
    </header>
  );
};

export default NavBar;
