export interface TemplateNameProps {}

import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: "rgb(60,60,60)",
  },
});

export function TemplateName({}: TemplateNameProps) {
  return <div {...stylex.props(styles.base)}>TemplateName Component</div>;
}
