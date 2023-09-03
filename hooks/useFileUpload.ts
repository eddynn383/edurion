import { FileWithPreview } from '@/components/FileUpload';
import { useState } from 'react';

const useFileUpload = () => {
    const [files, setFiles] = useState<FileWithPreview[]>([])

    return { files, setFiles }
};

export default useFileUpload;