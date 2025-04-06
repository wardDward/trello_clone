export const handleInputChanges = (e, formData, setFormData) => {
    setFormData((prev) => ({
        ...formData,
        [e.target.name]: e.target.value
    }))
}