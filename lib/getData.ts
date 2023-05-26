export async function getCourses() {
    const res = await fetch(`${process.env.APP_URL}/api/courses`)

    if (!res.ok) {
        throw new Error('Failed to fetch courses')
    }

    return res.json()
}