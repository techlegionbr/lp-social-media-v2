import "styled-components";
import {
  IBreakpoints,
  IColorKeys,
  IHeadingKeys,
  IParagraphKeys,
} from "./styles/configs/types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<
      IColorKeys,
      {
        main: string;
        light: string;
      }
    >;
    limits: {
      content: string;
    };
    font: {
      family: {
        Roboto: string;
        Poppins: string;
      };
      size: {
        headings: Record<IHeadingKeys, string[]>;
        paragraphs: Record<IParagraphKeys, string[]>;
      };
    };
    breakpoints: IBreakpoints;
  }
}
