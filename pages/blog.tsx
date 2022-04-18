import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Blog: NextPage = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
};

export default Blog;

export async function getStaticProps() {}
