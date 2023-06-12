import { ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
  limit: number;
  skip: number;
  onChange?: (limit: number, skip: number) => void;
};

export default function Pagination(props: PaginationProps) {
  const handlePrevious = () => {
    props.onChange &&
      props.onChange(props.limit, Math.max(props.skip - props.limit, 0));
  };

  const handleNext = () => {
    props.onChange &&
      props.onChange(props.limit, props.skip + props.limit);
  }

  const pageNum = Math.ceil(props.skip / props.limit) + 1;

  return (
    <div className="flex items-center w-full justify-between">
      <button className="btn-ghost flex" onClick={handlePrevious}>
        <ChevronLeft /> Previous
      </button>
      <span>Page {pageNum}</span>
      <button className="btn-ghost flex" onClick={handleNext}>
        Next <ChevronRight />
      </button>
    </div>
  );
}
