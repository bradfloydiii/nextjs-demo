import type { NextPage, GetStaticProps } from "next";
import styles from "../styles/Home.module.css";

interface Props {
  response: Response;
}
interface Response {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: [];
  support: object;
}
interface Employee {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Blog: NextPage<Props> = ({ response }) => {
  return (
    <div>
      {response.data.map((employee: Employee) => (
        <div className={styles.employee}>
          <span>
            {employee.first_name} {employee.last_name}
          </span>
          <img src={employee.avatar} alt={employee.first_name} />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Call an external API endpoints to get posts
  const res = await fetch(`https://reqres.in/api/users?page=1`);
  const response: Response = await res.json();

  // By returning { props: { response } }, the Blog component
  // will receive `response` as a prop at BUILD TIME
  return {
    props: {
      response,
    },
  };
};

export default Blog;
