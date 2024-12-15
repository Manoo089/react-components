import cn from '@/libs/class-names';

type Radius = 'full' | 'large' | 'medium' | 'small' | 'none';
type Colors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type Type = 'button' | 'reset' | 'submit';
type Variants = 'solid' | 'bordered';

export interface Props {
  colors?: Colors;
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  label: string;
  radius?: Radius;
  spinner?: React.ReactNode;
  type?: Type;
  variants?: Variants;
  onClick: () => void;
}

export default function Button({
  colors = 'default',
  disabled = false,
  isLoading = false,
  label,
  fullWidth = false,
  radius = 'none',
  type = 'button',
  spinner,
  variants = 'solid',
  onClick,
}: Props) {
  function Spinner() {
    return (
      <div className="Button__spinner">
        {spinner} <span>Loading</span>
      </div>
    );
  }

  return (
    <button
      className={cn('Button', [
        { fullWidth },
        { isLoading },
        { disabled },
        { [`radius-${radius}`]: radius },
        { [`colors-${colors}`]: colors },
        { [`variants-${variants}`]: variants },
      ])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
}
