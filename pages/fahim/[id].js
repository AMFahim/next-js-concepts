export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  const paths = data.map(fahims => {
    return {
      params: {id: fahims.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async(context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id)
  const data = await res.json();

  return {
    props: {gang: data}
  }
}


const GangDetails = ({gang}) => {
  // console.log(gang)
  return (
    <div>
      <h1>This is Fahims Gang Details page</h1>
      <p>{gang.name}</p>
      <p>{gang.email}</p>
      <p>{gang.website}</p>
      <p>{gang.address.city}</p>

    </div>
  );
};

export default GangDetails;