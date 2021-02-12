import React, { useEffect, useRef, useState } from "react";
import "./BlogPost.scss";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Share } from "../../images/svg/share.svg";
import { ReactComponent as Facebook } from "../../images/svg/facebook.svg";
import { ReactComponent as Twitter } from "../../images/svg/twitter.svg";

import ReactMarkdown from "react-markdown";
import Code from "./Code";
import Head from "./Head";

const setScrollHidden = () => {
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
};

const focusModal = (ref) => {
  ref.current.focus();
};

const BlogPost = ({ article, state }, ...props) => {
  let history = useHistory();
  let closeModalRef = useRef(null);
  const location = useLocation();

  const handleESC = (e) => {
    if (e.keyCode === 27) {
      goTo("/blog");
    }
  };

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      goTo("/blog");
    }
  };

  const goTo = (path) => {
    if (history.length > 1 && location.state?.fromBlog) {
      return history.goBack();
    }
    return history.push(path);
  };

  useEffect(() => {
    setScrollHidden();
    focusModal(closeModalRef);
    return () => {
      return setScrollHidden();
    };
  }, []);

  return (
    <div
      className="post"
      onClick={handleClick}
      onKeyDown={handleESC}
      tabIndex="0"
      ref={closeModalRef}
    >
      <Head
        title={article.title}
        desc={`Personal notes on ${article.title}.`}
      />

      <div className="post-container">
        <div className="post-header">
          <div className="post-header-title">{article.title}</div>
          <div className="post-header-info">
            <div className="post-header-info-date">{article.date}</div>
            <div className="post-header-info-buttons">
              <Share />
              <Twitter />
              <Facebook />
            </div>
          </div>
          <div className="post-header-img">
            <img src={article.img} alt="" />
          </div>

          <button className="post-header-goback" onClick={handleClick}></button>
        </div>

        <div className="post-body">
          <div className="post-body-content">
            <ReactMarkdown
              source={article.content}
              escapeHtml={false}
              renderers={{ code: Code.code }}
              wrapLongLines
            />
          </div>
        </div>

        <div className="post-bottom">
          <span className="post-bottom-split"></span>

          <div className="post-bottom-info">
            <div className="post-bottom-info-buttons">
              <Share />
              <Twitter />
              <Facebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
