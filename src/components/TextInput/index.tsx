import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { FiAlertTriangle } from 'react-icons/fi';
import { Container, Label, Title, InputBox, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  boxWidth?: number;
}

const TextInput: React.FC<InputProps> = ({
  title,
  boxWidth,
  icon: Icon,
  name,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container style={{ width: boxWidth }}>
      <Label>
        <Title>{title}</Title>

        {error && (
          <Error title={error}>
            <FiAlertTriangle color="var(--red)" />
          </Error>
        )}
      </Label>
      <InputBox isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </InputBox>
    </Container>
  );
};

export default TextInput;
