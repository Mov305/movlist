export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(mov => {
        return {
            params: { id: mov.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return {
        props: {
            mov: data
        }
    }

}

const Details = ({ mov }) => {

    return (
        <div className=" bg-white shadow-xl rounded-2xl w-fit p-20  ">
            <h1 className="mb-8 text-2xl">{mov.name}</h1>
            <p className="my-4 text-lg">{mov.email}</p>
            <p className="my-4 text-lg">{mov.website}</p>
            <p className="my-4 text-lg">{mov.address.city}</p>
        </div>
    )
}

export default Details
