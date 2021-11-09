import React from "react";
import styles from "../../../public/styles/content.module.css";
import Date from "./Date";

import TagButton from "./TagButton";
import { getTag } from "../../lib/tags";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children?: React.ReactNode;
};

export default function BlogItem({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
}: Props) {
  return (
    <>
      <div className="container">
        <style jsx>{`
          .container {
            margin-top: 200px !important;
            margin-bottom: 50px !important;
            padding-right: 30px;
          }
        `}</style>
        <article>
          <header>
            <h1>{title}</h1>
            <div className={"metadata"}>
              <div>
                <Date date={date} />
              </div>
            </div>
          </header>
          <div className={styles.content}>{children}</div>
          <ul className={"tag-list"}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </>
  );
}
