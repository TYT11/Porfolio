import React from "react";
import { Helmet } from "react-helmet";

export default function Head({ title, desc, noRobo = false }) {
  return (
    <Helmet>
      <title>{`${title} | YI-TING`}</title>
      <meta name="description" content={desc} />
      {noRobo ? <meta name="robots" content="noindex,nofollow" /> : ""}
    </Helmet>
  );
}
