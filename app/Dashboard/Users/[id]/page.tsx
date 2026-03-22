

const UsersDetails = async ({ params }: { params: Promise<{ id: "string" }> }) => {
    const { id } = await params;
    return (
        <div className="flex justify-center">
            <h1 className="text-4xl font-bold py-4">Showing Details of user {id}</h1>
        </div>
    )
}

export default UsersDetails