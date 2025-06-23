import { ThemeConfig } from "antd";

const themes: ThemeConfig = {
  token: {
    fontFamily: '"SF Pro", sans-serif',
    lineHeight: 1.4,
    lineHeightLG: 1.4,
  },
  components: {
    DatePicker: {
      inputFontSizeLG: 14,
    },
    Input: {
      paddingBlockLG: 9.21,
      inputFontSizeLG: 14,
    },
    Layout: {
      siderBg: "var(--bg-primary)",
      bodyBg: "var(--bg-primary)",
    },
    Menu: {
      itemHeight: 36,
      itemPaddingInline: 8,
      itemActiveBg: "#e0eefb",
      itemSelectedColor: "var(--btn-primary)",
      iconMarginInlineEnd: 12,
    },
    Select: {
      fontSizeLG: 14,
    },
    Tabs: {
      inkBarColor: "var(--btn-primary)",
      itemActiveColor: "var(--btn-primary)",
      itemColor: "#73787e",
      itemHoverColor: "var(--btn-primary-hover)",
      itemSelectedColor: "var(--btn-primary)",
    },
  },
};

export default themes;
