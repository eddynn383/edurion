import { Suspense } from "react";
import Loading from "./loading";

interface IPropsCoursesLayout {
    children: React.ReactNode;
    catalog: any;
}

export default async function CoursesLayout({ children }: IPropsCoursesLayout) {

    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}