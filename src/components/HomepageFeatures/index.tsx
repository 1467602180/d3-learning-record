import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "全中文",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>这是份全中文的学习记录，拒绝语言障碍，当然，代码不可能用中文的</>
    ),
  },
  {
    title: "官方示例",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>根据官方的文档由浅入深，相信人人都能学会D3，包括我</>,
  },
  {
    title: "持续更新",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>当然不是学完官方文档就算会了，学会基础后，灵活运用才是真</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
