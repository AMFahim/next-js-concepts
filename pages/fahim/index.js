import styles from '../../styles/Fahim.module.css'
import Link from 'next/link';

export const getStaticProps = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return {
    props: {fahims: data}
  }
}

const index = ({fahims}) => {
  // console.log(fahims)
  return (
    <div>
     <h1>Fahims Gang</h1>
     {
       fahims.map(fahim => (
         <Link href={'/fahim/' + fahim.id} key={fahim.id}>
           <a className={styles.single}>
             <h3>{fahim.name}</h3>
           </a>
         </Link>
       )
        )
     }
    </div>
  );
};

export default index;