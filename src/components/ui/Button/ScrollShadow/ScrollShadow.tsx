import cn from '@/libs/class-names';

export interface Props {
  children: React.ReactNode;
  noScrollBar?: boolean;
}

export default function ScrollShadow({ children, noScrollBar }: Props) {
  return (
    <div className={cn('ScrollShadow', [{ noScrollBar }])}>
      <div className="ScrollShadow__content">
        <div className="ScrollShadow__shadow top"></div>
        {children}
        <div className="ScrollShadow__shadow bottom"></div>
      </div>
    </div>
  );
}
