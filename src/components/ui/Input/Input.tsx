import cn from '@/libs/class-names';

type Radius = 'none' | 'large' | 'medium' | 'small';
type Type = 'text' | 'email' | 'password' | 'number';
type Variants = 'solid' | 'bordered';

export interface Props {
  disabled?: boolean;
  error?: string;
  fullWidth?: boolean;
  isError?: boolean;
  name: string;
  placeholder?: string;
  radius?: Radius;
  readOnly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  required?: boolean;
  type: Type;
  variants?: Variants;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

export default function Input({
  disabled = false,
  error = '',
  fullWidth = false,
  isError = false,
  name = '',
  placeholder = '',
  radius = 'none',
  readOnly = false,
  ref = null,
  required = false,
  type = 'text',
  variants = 'solid',
  onChange,
  onFocus,
}: Props) {
  return (
    <div
      className={cn('Input', [
        { disabled },
        { fullWidth },
        { isError },
        { readOnly },
        { required },
        { [`radius-${radius}`]: radius },
        { [`variants-${variants}`]: variants },
      ])}
    >
      <input
        className="Input__field"
        type={type}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        required={required}
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
