import React, { useState } from 'react';
import * as styles from './inputText.style';

export default function InputText({ ...props }) {
  const [focus, setFocus] = useState(false);
  return (
    <styles.FormControl focus={focus}>
      <input {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </styles.FormControl>
  );
}
