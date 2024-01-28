import React from "react";
import * as stylex from "@stylexjs/stylex";

export interface TemplateNameProps {}

// eslint-disable-next-line no-empty-pattern
export function TemplateName({}: TemplateNameProps) {
  return <div {...stylex.props(styles.base)}>TemplateName Component</div>;
}

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: "rgb(60,60,60)",
  },
});
