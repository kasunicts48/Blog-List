import Link from "next/link";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
  
    const paths = data.map((val) => {
        return {
            params: {id : val.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
  };

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`+ id);
    const data = await res.json();

    return {
        props : {ninja: data}
    }
  };

const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>Email : {ninja.email}</p>
            <p>Website : {ninja.website}</p>
            <p>City : {ninja.address.city}</p>
            <br/>
            <Link href="/ninjas" >
            <a>
              <p>Back to All</p>
            </a>
          </Link>
        </div>
     );
}
 
export default Details;