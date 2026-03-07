"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "../types/menuItems";

export default function Nav() {
  return (
    <header className="relative flex flex-row header-bg">
      <div className="flex">
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo do site"
          width={120}
          height={120}
          className="w-16 p-2"
        />

        <span className="flex items-center font-bold text-amber-50 text-lg pl-2">
          FutStats
        </span>
      </div>
    </header>
  );
}
