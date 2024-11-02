import Image from "next/image";
import Link from "next/link";
import React from "react";

import { SearchBox } from "./SearchBox";
import { SearchNav } from "./SearchNav";


export const Search = () => {
    return (
        <div>
            <SearchBox/>
            <SearchNav/>
        </div>
    );
};
