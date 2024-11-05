import React from "react";

import { SearchBox } from "./SearchBox";
import { SearchNav } from "./SearchNav";
import { CenterLayout } from "@/components/layout/CenterLayout";
import { RightLayout } from "@/components/layout/RightLayout";

export const Search = () => {
  return (
    <>
      <CenterLayout>
        <SearchBox />
        <SearchNav />
      </CenterLayout>
      <RightLayout>
        <></>
      </RightLayout>
    </>
  );
};
