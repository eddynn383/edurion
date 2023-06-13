import FileUpload, { FileWithPreview } from "@/components/FileUpload"
import Content from "@/modules/Content"


const Upload = () => {
    return (
        <Content>
            <Content.Body>
                <FileUpload id="images-01" acceptedFiles="image" acceptedSpecificFiles={[".png"]} onUpload={function (files: FileWithPreview[]): Promise<void> {
                    throw new Error("Function not implemented.")
                }} />
            </Content.Body>
        </Content>
    )
}

export default Upload