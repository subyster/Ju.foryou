import React, {
  SelectHTMLAttributes,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertTriangle } from 'react-icons/fi';

import { Container, Label, Error } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  name: string;
  boxWidth?: number;
}

const Select: React.FC<SelectProps> = ({
  title,
  name,
  boxWidth,
  children,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleSelectFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleSelectBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container
      isErrored={!!error}
      isFocused={isFocused}
      style={{ width: boxWidth }}
    >
      <Label>
        <h1>{title}</h1>

        {error && (
          <Error>
            <FiAlertTriangle color="var(--red)" />
          </Error>
        )}
      </Label>

      <select
        onFocus={handleSelectFocus}
        onBlur={handleSelectBlur}
        defaultValue={defaultValue}
        ref={selectRef}
        id={name}
        {...rest}
      >
        {children}
      </select>
    </Container>
  );
};

export default Select;
