import { FileWithPreview } from '@/components/FileUpload';
import { useState } from 'react';

const useCourseFields = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [level, setLevel] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    return {
        title,
        setTitle,
        description,
        setDescription,
        image,
        setImage,
        category,
        setCategory,
        price,
        setPrice,
        level,
        setLevel,
        startDate,
        setStartDate,
        endDate,
        setEndDate
    }
};

export default useCourseFields;


