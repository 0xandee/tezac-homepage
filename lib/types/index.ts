export interface AnimatedDiamondProps {
    initialPosition: { x: number; y: number }
    hasOutline?: boolean
    gridSize: { x: number; y: number }
  }
  
  export interface TextRevealButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    revealText: string;
    className?: string;
  }
  export interface TypewriterTextProps {
    text: string;
    delay?: number;
  }