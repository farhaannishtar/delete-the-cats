export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatListProps {
  bgColor: string;
}

export interface CatCardProps {
  cat: {
    id: string;
    url: string;
  }
  handleDelete: (e: React.MouseEvent<HTMLDivElement>) => void;
  bgColor: string;
}