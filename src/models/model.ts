import { Dispatch, SetStateAction } from "react";

export default interface IArticle {
  id: number;
  author: string;
  title: string;
  content: string;
  date: string;
}
