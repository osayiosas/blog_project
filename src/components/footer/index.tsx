"use client";

import { menuItems } from "@/utils";
import { MenuItem } from "@/utils/types";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#a6abb1] dark:bg-[#102540] py-10">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 px-4 mb-6">
            <h4 className="text-white text-xl font-bold mb-4">About Us</h4>
            <p className="text-white text-base">
              Chatter is your go-to platform for sharing stories and connecting
              with like-minded individuals. Join us and start sharing today!
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <h4 className="text-white text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              {menuItems.map((item: MenuItem) => (
                <li key={item.id} className="mb-2">
                  <Link
                    href={item.path}
                    className="text-white text-base hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-6">
            <h4 className="text-white text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-white text-xl hover:opacity-75">
                <i className="fab fa-facebook-f">Facbook</i>
              </Link>
              <Link href="#" className="text-white text-xl hover:opacity-75">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-white text-xl hover:opacity-75">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-white text-base">
            &copy; {new Date().getFullYear()} Chatter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
