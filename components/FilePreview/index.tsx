import sx from "@/styles/component.module.scss"

const FilePreview = ({ fileData }: any) => {

    console.log(fileData)

    return (
        <div className={sx["file-preview"]}>
            <div className={sx["fileContainer"]}>
                {
                    fileData.fileList.map((item: any) => {
                        return (
                            <ol key={item["lastModified"]}>
                                <li className={sx["fileList"]}>
                                    {/* display the filename and type */}
                                    <div key={item.name} className={sx["fileName"]}>
                                        {item.name}
                                    </div>
                                </li>
                            </ol>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilePreview