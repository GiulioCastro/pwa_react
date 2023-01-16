import { useState, useRef, useEffect } from 'react';
import { IOnVisibleAnimationProps } from "./OnVisibleAnimation.model";

import OnVisibleAnimationView from "./OnVisibleAnimation.view";

import useOnScreen from "hooks/useOnScreen";

export default function OnVisibleAnimation(props: IOnVisibleAnimationProps) {
  const componentRef = useRef<any>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isVisible = useOnScreen(componentRef, props.rootMargin);
  
  useEffect(() => {
    if(isVisible) setScrolled(isVisible);
  }, [isVisible]);

  function setRef(ref: React.Ref<unknown> | HTMLDivElement | null) {
    componentRef.current = ref;
  }

  return <OnVisibleAnimationView setRef={setRef} isVisible={scrolled} {...props} />;
}
