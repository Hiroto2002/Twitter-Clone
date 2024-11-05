import { Home } from "@/components/features/Home/Home";
import { SearchBox } from "@/components/features/Search/SearchBox";
import { CenterLayout } from "@/components/layout/CenterLayout";
import { RightLayout } from "@/components/layout/RightLayout";

export default function Page() {
  return (
    <>
      <CenterLayout>
        <Home />
      </CenterLayout>
      <RightLayout>
        <SearchBox />
      </RightLayout>
    </>
  );
}
