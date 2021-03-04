import React, { useState, useEffect } from "react";
import "./Blog.scss";
import "../CSS/layout.scss";
import BlogPost from "./BlogPost";
import axios from "axios";
import { ReactComponent as LoaderSVG } from "../../images/svg/loader.svg";
import { Link, Route } from "react-router-dom";
import Head from "./Head";

const Loader = () => {
  return (
    <div className="loader">
      <LoaderSVG />
    </div>
  );
};

const Blog = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BLOG_URL).then((data) => {
      setDatas(data.data);
      setLoading(false);
    });
  }, []);

  const BlogRender = ({ datas }) => {
    const data = datas.map((article) => {
      return (
        <Link
          to={{
            state: { fromBlog: true },
            pathname: `/blog/posts/${article.id}`,
          }}
          key={article.id}
        >
          <div className="blog-card">
            <div className="blog-card-container">
              <div className="blog-card-container-img">
                <img
                  src={article.img}
                  alt="demonstration of front-end and back-end development"
                ></img>
              </div>

              <div className="blog-card-container-title">
                <div className="blog-card-container-date">
                  <span>{article.date}</span>
                </div>
                <h4>{article.title}</h4>
              </div>
            </div>
          </div>
        </Link>
      );
    });
    return <div>{data}</div>;
  };

  return (
    <>
      <Head
        title="Notes"
        desc="All of my front-end notes for future references."
      />
      <div className="card-right">
        <div className="col-1-of-1">
          <div className="col-title">
            <h2>Notes</h2>
          </div>
          {loading ? <Loader /> : <BlogRender datas={datas} />}
        </div>
      </div>

      <Route
        path="/blog/posts/:postId"
        render={(props) => {
          const index = props.match.params.postId;
          const data = datas.find((da) => {
            let id = da.id;
            return id.toString() === index;
          });
          if (data) {
            return <BlogPost {...props} article={data} />;
          }
        }}
      />
    </>
  );
};

export default Blog;
