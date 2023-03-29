import React, { useEffect, useState } from "react";
import styles from "./SVG.module.css";

const SVG = ({ url }) => {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setSvg(text));
  }, [url]);

  if (!svg) return null;

  return (
    <div
      className={styles.svgWrapper}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default SVG;
