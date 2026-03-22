import Link from "next/link";
const Users = () => {
    return (

        <div>
            <div className='flex justify-center py-4'>
                <h1 className='text-5xl font-bold'>Users page</h1>
            </div>
            <ul className="flex  flex-row justify-center gap-10">
                <li className="bg-gray-300 px-2 py-0.5  rounded-2xl text-gray-700 text-sm font-medium"><Link href="/Dashboard/Users/1">user 1</Link></li>
                <li className="bg-gray-300 px-2 py-0.5  rounded-2xl text-gray-700 text-sm font-medium"><Link href="/Dashboard/Users/2">user 2</Link></li>
                <li className="bg-gray-300 px-2 py-0.5 rounded-2xl text-gray-700 text-sm font-medium"><Link href="/Dashboard/Users/3">user 3</Link></li>
                <li className="bg-gray-300 px-2 py-0.5 rounded-2xl text-gray-700 text-sm font-medium"><Link href="/Dashboard/Users/4">user 4</Link></li>
            </ul>

        </div>


    )
}

export default Users;