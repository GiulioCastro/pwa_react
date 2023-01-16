import { useState, useEffect, useRef } from 'react';

import CircularProgressWithLabelView from './CircularProgressWithLabel.view';
import { ICircularProgressProps } from './CircularProgressWithLabel.model';
import useOnScreen from 'hooks/useOnScreen';

export default function CircularProgressWithLabel(props: ICircularProgressProps) {
  const [progress, setProgress] = useState(0);

  const componentRef = useRef<any>(null);
  const isVisible = useOnScreen(componentRef);

  useEffect(onVisible, [isVisible]);

  function onVisible() {
    if(!isVisible) return;
    const timer = setInterval(() => {
      setProgress(props.progress);
    }, 250);

    return () => {
      clearInterval(timer);
    };
  }

  function setRef(ref: React.Ref<unknown>) {
    componentRef.current = ref;
  }

  return <CircularProgressWithLabelView setRef={setRef} {...props} value={progress} />;
}
