export interface IBookItemProps {
    truncateStr: (text: string) => string;
    highlightSearchMatch: (str:string, searchValue: string) => string | (string | JSX.Element)[];
}