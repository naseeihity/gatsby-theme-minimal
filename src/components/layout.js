import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Image from "./ImageCustom";
import Header from "./header";
import Footer from "./footer";
import "../style/prism-light.css";
import "../style/layout.css";
import "../style/typo.css";
import "../style/custom.css";
import mainStyle from "../style/main.module.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `}
    render={(data) => (
      <MDXProvider components={{ Image }}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          subTitle={data.site.siteMetadata.subTitle}
        />
        <div className={mainStyle.outer}>
          <main className={mainStyle.box}>{children}</main>
        </div>
        <Footer />
      </MDXProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
