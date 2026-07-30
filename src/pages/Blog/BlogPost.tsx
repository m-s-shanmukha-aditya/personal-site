import { Navigate, useParams } from "react-router-dom";

import { getBlog } from "../../blog";
import BlogRenderer from "../../components/blog/BlogRenderer";

export default function BlogPost() {

  const { slug } = useParams();

  const blog = getBlog(slug ?? "");

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogRenderer blog={blog} />
  );
}