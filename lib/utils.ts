import { setCourses } from "./setData";

// Scroll to section
export function handleScrollToSection(id: string | undefined) {
    if (!id) {
        throw new Error("Please provide an ID")
    }
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

export function formatFileSize(size: number) {
    const kilobytes = size / 1024;
    const megabytes = kilobytes / 1024;

    if (megabytes >= 1) {
        return `${megabytes.toFixed(2)} MB`;
    } else {
        return `${kilobytes.toFixed(2)} KB`;
    }
}

export async function courseSubmitHandler(data: any) {
    console.log(data)
    // await setCourses(data)
}