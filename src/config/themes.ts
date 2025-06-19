import { ThemeConfig } from "antd";

const themes: ThemeConfig = {
  token: {
    fontFamily: '"SF Pro", sans-serif',
    lineHeight: 1.4,
  },
  components: {
    DatePicker: {
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
      itemSelectedColor: "#28526e",
      iconMarginInlineEnd: 12,
    },
  },
};

export default themes;
