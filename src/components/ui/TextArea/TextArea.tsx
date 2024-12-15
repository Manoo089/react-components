import cn from '@/libs/class-names';

type Radius = 'none' | 'large' | 'medium' | 'small';

export interface Props {
  error?: string;
  fullWidth?: boolean;
  isError?: boolean;
  name: string;
  placeholder?: string;
  radius?: Radius;
  ref?: React.Ref<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({
  error = '',
  fullWidth = false,
  isError = false,
  name = '',
  placeholder = '',
  radius = 'none',
  ref,
  onChange,
  onFocus,
}: Props) {
  return (
    <div
      className={cn('TextArea', [
        { fullWidth },
        { isError },
        { [`radius-${radius}`]: radius },
      ])}
    >
      <textarea
        className="TextArea__field"
        name={name}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        onFocus={onFocus}
      />
      {isError && (
        <div className="Input__errorMessage">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
