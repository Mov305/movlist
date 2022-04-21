import  Link  from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { movs: data }
    }
}

const Movs = ({ movs }) => {
    return (
        <div className="container">
            <h1 className="text-3xl mb-8 font-semibold">All movs</h1>
            {movs.map(mov => <Link href={`/movs/${mov.id}`} key={mov.id}>
                <div className='bg-white p-6 m-4 text-lg shadow-lg border-l-white border-l-8 hover:border-blue-600 cursor-pointer rounded-lg'>
                    <a>  <h3>{mov.name}</h3> </a>
                </div>
            </Link>)}
        </div>
    )
}
export default Movs