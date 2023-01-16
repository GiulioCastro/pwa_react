
import { motion, AnimatePresence } from "framer-motion";

import { IOnVisibleAnimationViewProps } from "./OnVisibleAnimation.model";

export default function OnVisibleAnimationView(props: IOnVisibleAnimationViewProps) {
  const { isVisible, setRef, children, ...restProps } = props;
  return (
    <div ref={(ref) => setRef(ref)}>
      <AnimatePresence>
        {isVisible && (
          <motion.div {...restProps}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
